// Made My Day — 언어 전환(한국어 / English) 엔진
// 원리: 앱 코드는 그대로 한글 문구를 쓰고, 영어를 고르면 화면에 나타나는 한글 문구를
//       i18n-en.js 의 사전(MMD_EN)으로 바꿔 끼운다. 한국어 모드에서는 아무 것도 하지 않는다(기존 동작 그대로).
// 저장: localStorage "mmd_lang" ("ko" 기본 / "en") — 이 기기에만 적용. 바꾸면 페이지를 새로 불러온다.
// 사전에 없는 문구는 한글 그대로 보인다(깨지지 않음) — 새 문구를 추가한 뒤 i18n-en.js 에 영어를 넣으면 된다.
(function () {
  "use strict";
  var KEY = "mmd_lang";
  var lang = "ko";
  try { if (localStorage.getItem(KEY) === "en") lang = "en"; } catch (e) {}

  var HANGUL = /[가-힣]/;
  var DICT = null;      // { "한글 원문": "English" }
  var PATTERNS = null;  // [ [RegExp, function(match...) -> string] ]
  var CTX = null;       // [ { sel: "css selector", map: { "일": "Sun", ... } } ] 부모 요소에 따라 달리 번역할 것

  function hasHangul(s) { return HANGUL.test(s); }

  // 한글 문자열 하나를 영어로. 못 바꾸면 원문 그대로 돌려준다.
  function tr(s, parentEl) {
    if (lang !== "en" || !s || !hasHangul(s)) return s;
    var lead = s.match(/^\s*/)[0], trail = s.match(/\s*$/)[0];
    var core = s.slice(lead.length, s.length - trail.length);
    if (!core) return s;
    var out = lookup(core, parentEl);
    return out === core ? s : lead + out + trail;
  }

  function lookup(core, parentEl) {
    var i, r;
    if (parentEl && CTX) {
      for (i = 0; i < CTX.length; i++) {
        if (CTX[i].map.hasOwnProperty(core) && parentEl.closest && parentEl.closest(CTX[i].sel)) return CTX[i].map[core];
      }
    }
    if (DICT && DICT.hasOwnProperty(core)) return DICT[core];
    if (PATTERNS) {
      for (i = 0; i < PATTERNS.length; i++) {
        var m = core.match(PATTERNS[i][0]);
        if (m) {
          r = PATTERNS[i][1].apply(null, m.slice(1).map(function (g) { return g === undefined ? "" : g; }));
          if (r != null) return r;
        }
      }
    }
    return core;
  }

  // 패턴 안에서 일부(이름·요일 등)만 다시 번역할 때 쓰는 도우미
  function sub(s) { return tr(s); }

  // t("한글") — 코드에서 직접 쓸 때(선택). 한국어 모드면 원문 그대로.
  function t(ko, params) {
    var s = lang === "en" ? tr(ko) : ko;
    if (params) s = s.replace(/\{(\w+)\}/g, function (_, k) { return params[k] != null ? params[k] : ""; });
    return s;
  }

  // ---- DOM 자동 변환 (영어 모드에서만) ----
  var SKIP_TAGS = { SCRIPT: 1, STYLE: 1, TEXTAREA: 1, NOSCRIPT: 1 };
  var ATTRS = ["placeholder", "title", "aria-label"];

  function translateTextNode(n) {
    var v = n.nodeValue;
    if (!v || !hasHangul(v)) return;
    var p = n.parentNode;
    if (p && SKIP_TAGS[p.nodeName]) return;
    var out = tr(v, p && p.nodeType === 1 ? p : null);
    if (out !== v) n.nodeValue = out;
  }
  function translateAttrs(el) {
    for (var i = 0; i < ATTRS.length; i++) {
      var v = el.getAttribute(ATTRS[i]);
      if (v && hasHangul(v)) {
        var out = tr(v, el);
        if (out !== v) el.setAttribute(ATTRS[i], out);
      }
    }
  }
  function translateTree(root) {
    if (!root) return;
    if (root.nodeType === 3) { translateTextNode(root); return; }
    if (root.nodeType !== 1) return;
    translateAttrs(root);   // textarea 의 placeholder 도 바꿔야 하므로 속성은 먼저
    if (SKIP_TAGS[root.nodeName]) return;
    var w = document.createTreeWalker(root, NodeFilter.SHOW_TEXT | NodeFilter.SHOW_ELEMENT, null);
    var n;
    while ((n = w.nextNode())) {
      if (n.nodeType === 3) translateTextNode(n);
      else translateAttrs(n);
    }
  }

  var observer = null;
  function startObserver() {
    if (observer || typeof MutationObserver === "undefined") return;
    observer = new MutationObserver(function (muts) {
      for (var i = 0; i < muts.length; i++) {
        var m = muts[i];
        if (m.type === "childList") {
          for (var j = 0; j < m.addedNodes.length; j++) translateTree(m.addedNodes[j]);
        } else if (m.type === "characterData") {
          translateTextNode(m.target);
        } else if (m.type === "attributes") {
          translateAttrs(m.target);
        }
      }
    });
    observer.observe(document.documentElement, {
      childList: true, subtree: true, characterData: true,
      attributes: true, attributeFilter: ATTRS
    });
  }

  // alert/confirm/prompt 도 같이 번역
  function wrapDialogs() {
    ["alert", "confirm", "prompt"].forEach(function (name) {
      var orig = window[name];
      if (typeof orig !== "function") return;
      window[name] = function (msg) {
        var args = Array.prototype.slice.call(arguments);
        if (typeof msg === "string") args[0] = tr(msg);
        return orig.apply(window, args);
      };
    });
  }

  function setLang(l) {
    l = (l === "en") ? "en" : "ko";
    try { localStorage.setItem(KEY, l); } catch (e) {}
    if (l === lang) { refreshLangUI(); return; }
    location.reload();
  }

  // 언어 선택 UI(설정 > 화면, 설정 첫 화면 줄, 로그인 화면 버튼)의 표시를 맞춘다
  function refreshLangUI() {
    var opts = document.querySelectorAll('.theme-option[data-action="lang-select"]');
    Array.prototype.forEach.call(opts, function (o) {
      o.classList.toggle("active", o.getAttribute("data-id") === lang);
    });
    // 선택지 이름: 한국어 화면에서는 '한국어 / 영어', 영어 화면에서는 'Korean / English'
    var NAMES = lang === "en" ? { ko: "Korean", en: "English" } : { ko: "한국어", en: "영어" };
    var nm = document.querySelectorAll("[data-lang-name]");
    Array.prototype.forEach.call(nm, function (e) { e.textContent = NAMES[e.getAttribute("data-lang-name")]; });
    var sum = document.getElementById("setSumLang");
    if (sum) sum.textContent = NAMES[lang];
    var lb = document.getElementById("langLoginBtn");
    if (lb) lb.textContent = lang === "en" ? "한국어" : "English";
  }

  function onClick(e) {
    var el = e.target && e.target.closest ? e.target.closest('[data-action="lang-select"],[data-action="lang-toggle"]') : null;
    if (!el) return;
    var a = el.getAttribute("data-action");
    if (a === "lang-select") setLang(el.getAttribute("data-id"));
    else setLang(lang === "en" ? "ko" : "en");
  }

  // i18n-en.js 가 사전을 등록한다
  function register(dict, patterns, ctx) {
    DICT = Object.assign(DICT || {}, dict || {});
    if (patterns) PATTERNS = (PATTERNS || []).concat(patterns);
    if (ctx) CTX = (CTX || []).concat(ctx);
  }

  window.MMD_I18N = {
    get lang() { return lang; },
    t: t, tr: tr, sub: sub, setLang: setLang, register: register,
    hasHangul: hasHangul, translateTree: translateTree, refreshLangUI: refreshLangUI
  };

  document.addEventListener("click", onClick);

  var started = false;
  function init() {
    if (started) return;
    started = true;
    document.documentElement.setAttribute("lang", lang);
    refreshLangUI();
    if (lang === "en") {
      wrapDialogs();
      translateTree(document.body);
      startObserver();
    }
  }
  // 이 파일은 본문 script 앞에서 불러오므로, 화면 마크업은 이미 있고 본문 script 는 아직 안 돌았다.
  // 사전(i18n-en.js)은 이 다음 script 로 오기 때문에, 그 뒤에 init 을 호출한다: i18n-en.js 끝에서 MMD_I18N.start() 호출.
  window.MMD_I18N.start = init;
  // i18n-en.js 를 못 불러와도(예: 업로드 누락) 언어 선택 표시는 맞도록 안전장치
  document.addEventListener("DOMContentLoaded", init);
})();
