// Made My Day — 서비스워커 (23차, 오프라인 1단계: "앱 파일만" 기기에 보관)
//
// 원칙: 네트워크 우선(network-first).
//  · 인터넷이 되면 지금과 똑같이 항상 서버의 최신 파일을 받는다(받은 파일로 보관본도 새로 갈아 끼운다).
//    그래서 index.html의 BUILD_VERSION 새 버전 확인 방식과 부딪히지 않는다.
//  · 인터넷이 안 될 때만 보관본을 꺼내 준다(비행기 모드에서 앱을 새로 열어도 빈 화면이 되지 않게).
//  · 기록 데이터는 여기서 다루지 않는다(Firebase가 따로 관리). 여기서 보관하는 건 앱 파일뿐이다.
//  · BUILD_VERSION 확인 요청(cache: "no-store")은 손대지 않고 그대로 통과시킨다.
//  · 다른 사이트 파일은 Firebase SDK(주소에 버전이 박혀 있어 내용이 바뀌지 않음)만 보관하고,
//    Google 글꼴·Firestore 통신 등은 손대지 않는다(오프라인일 땐 기본 글꼴로 보임).
//
// ⚠️ 비상 해제: 만약 이 파일 때문에 옛 화면이 계속 보이는 문제가 생기면, 이 파일 내용을 통째로
//    아래 세 줄로 바꿔 올리면 다음에 앱을 열 때 서비스워커가 스스로 지워진다.
//      self.addEventListener("install", function () { self.skipWaiting(); });
//      self.addEventListener("activate", function () { self.registration.unregister(); caches.keys().then(function (k) { k.forEach(function (n) { caches.delete(n); }); }); });
//    (index.html의 등록 코드는 그대로 둬도 된다.)
//
// 보관 목록을 바꾸거나 이 파일의 동작을 바꿀 때는 SW_VERSION을 올린다(옛 보관함은 자동으로 지워짐).

var SW_VERSION = "2026-10-13-a";
var SHELL = "mmd-shell-" + SW_VERSION;
var SDK = "mmd-sdk-v1";
var SHELL_FILES = [
  "./", "index.html", "style.css", "manifest.webmanifest",
  "firebase-service.js", "i18n.js", "i18n-en.js", "bible-medals-data.js", "avatar-data.js", "review-data.js",
  "i18n-en-help.js", "i18n-en-review.js", "i18n-en-bible.js", "i18n-en-avatar.js", "i18n-en-extra.js",
  "icon-192.png", "icon-512.png", "icon-maskable-512.png", "apple-touch-icon.png"
];
// Firebase SDK: firebase-service.js가 불러오는 주소와 같아야 한다(버전을 올리면 여기도, SDK 이름의 v 숫자도 올릴 것)
var SDK_FILES = [
  "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js",
  "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js",
  "https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js"
];
var SCOPE = self.registration.scope;   // 예: https://아이디.github.io/made-my-day/
var NAV_TIMEOUT_MS = 6000;             // 연결이 아주 느릴 때, 보관본이 있으면 이 시간 뒤 보관본으로 연다

self.addEventListener("install", function (e) {
  e.waitUntil(caches.open(SHELL).then(function (c) {
    // 하나라도 실패하면 설치 전체가 실패하지 않도록 파일마다 따로 담는다
    return Promise.all(SHELL_FILES.map(function (f) {
      var url = new URL(f, SCOPE).href;
      return fetch(url, { cache: "no-cache" }).then(function (r) { if (r.ok) return c.put(keyOf(url), r); }).catch(function () {});
    }));
  }).then(function () {
    return caches.open(SDK).then(function (c) {
      return Promise.all(SDK_FILES.map(function (url) {
        return c.match(url).then(function (hit) {
          if (hit) return;
          return fetch(url, { mode: "cors" }).then(function (r) { if (r.ok) return c.put(url, r); }).catch(function () {});
        });
      }));
    });
  }).then(function () { return self.skipWaiting(); }));
});

self.addEventListener("activate", function (e) {
  e.waitUntil(caches.keys().then(function (names) {
    return Promise.all(names.map(function (n) {
      if (n.indexOf("mmd-") === 0 && n !== SHELL && n !== SDK) return caches.delete(n);
    }));
  }).then(function () { return self.clients.claim(); }));
});

// 보관 열쇠: 같은 파일이 ?v=… 같은 꼬리표나 "폴더 주소(…/)"로 와도 하나로 본다
function keyOf(url) {
  var u = new URL(url);
  var p = u.pathname;
  if (p.charAt(p.length - 1) === "/") p += "index.html";
  return u.origin + p;
}
function isSdk(u) { return u.hostname === "www.gstatic.com" && u.pathname.indexOf("/firebasejs/") === 0; }

self.addEventListener("fetch", function (e) {
  var req = e.request;
  if (req.method !== "GET") return;
  if (req.cache === "no-store") return;          // BUILD_VERSION 확인 요청: 그대로 통과
  var u = new URL(req.url);
  if (isSdk(u)) { e.respondWith(sdkFirst(req)); return; }
  if (u.origin !== self.location.origin) return;  // 글꼴·Firestore 등 다른 사이트: 손대지 않음
  if (req.url.indexOf(SCOPE) !== 0) return;
  e.respondWith(networkFirst(req, req.mode === "navigate"));
});

function networkFirst(req, isNav) {
  var key = keyOf(req.url);
  var net = fetch(req).then(function (r) {
    if (r && r.ok && r.type === "basic") {
      var copy = r.clone();
      caches.open(SHELL).then(function (c) { return c.put(key, copy); }).catch(function () {});
    }
    return r;
  });
  if (!isNav) {
    return net.catch(function () {
      return caches.match(key).then(function (hit) { return hit || Response.error(); });
    });
  }
  // 화면(페이지) 요청: 연결이 끊겼거나 너무 느리면 보관본으로 연다
  return new Promise(function (resolve) {
    var settled = false;
    function done(r) { if (!settled && r) { settled = true; resolve(r); } }
    var timer = setTimeout(function () {
      caches.match(key).then(function (hit) { done(hit); });
    }, NAV_TIMEOUT_MS);
    net.then(function (r) { clearTimeout(timer); done(r); }).catch(function () {
      clearTimeout(timer);
      caches.match(key).then(function (hit) {
        done(hit || new Response(
          "<!doctype html><meta charset=utf-8><meta name=viewport content='width=device-width,initial-scale=1'>" +
          "<body style='font-family:sans-serif;text-align:center;padding:60px 20px;color:#23302A;background:#EFE8D6'>" +
          "<h3>Made My Day</h3><p>인터넷에 연결된 뒤 다시 열어 주세요.</p><p style='color:#5C6A5F'>Please reconnect to the internet and open again.</p>",
          { headers: { "Content-Type": "text/html; charset=utf-8" } }));
      });
    });
  });
}

function sdkFirst(req) {
  return caches.open(SDK).then(function (c) {
    return c.match(req.url).then(function (hit) {
      if (hit) return hit;
      return fetch(req).then(function (r) {
        if (r && (r.ok || r.type === "opaque")) c.put(req.url, r.clone()).catch(function () {});
        return r;
      });
    });
  });
}
