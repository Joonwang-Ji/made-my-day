  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
  import {
    getAuth, onAuthStateChanged, signInWithEmailAndPassword,
    createUserWithEmailAndPassword, signOut, sendPasswordResetEmail,
    updatePassword, reauthenticateWithCredential, EmailAuthProvider
  } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";
  import {
    getFirestore, doc, getDoc, setDoc, onSnapshot, runTransaction,
    enableIndexedDbPersistence, collection, query, where, getDocs, updateDoc, deleteDoc
  } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js";

  var firebaseConfig = {
    apiKey: "AIzaSyASNreM4D4uwJEekBz7SqjjTVsemjwF7dU",
    authDomain: "made-my-day-7b6e3.firebaseapp.com",
    projectId: "made-my-day-7b6e3",
    storageBucket: "made-my-day-7b6e3.firebasestorage.app",
    messagingSenderId: "85794910341",
    appId: "1:85794910341:web:6c2f2d4aceceec7443f9ec"
  };

  var fbApp = initializeApp(firebaseConfig);
  var auth = getAuth(fbApp);
  var db = getFirestore(fbApp);
  try { enableIndexedDbPersistence(db); } catch (e) { /* multiple tabs or unsupported: fine, just no offline cache */ }

  window.__fb = {
    onAuthStateChanged: function (cb) { return onAuthStateChanged(auth, cb); },
    signIn: function (email, pw) { return signInWithEmailAndPassword(auth, email, pw); },
    signUp: function (email, pw) { return createUserWithEmailAndPassword(auth, email, pw); },
    signOutUser: function () { return signOut(auth); },
    resetPassword: function (email) { return sendPasswordResetEmail(auth, email); },
    changePassword: function (currentPw, newPw) {
      var user = auth.currentUser;
      if (!user) return Promise.reject({ code: "auth/no-user" });
      var cred = EmailAuthProvider.credential(user.email, currentPw);
      return reauthenticateWithCredential(user, cred).then(function () {
        return updatePassword(user, newPw);
      });
    },
    loadState: function (uid) {
      return getDoc(doc(db, "users", uid)).then(function (snap) {
        return snap.exists() ? snap.data() : null;
      });
    },
    saveState: function (uid, data) {
      return setDoc(doc(db, "users", uid), data);
    },
    // 서버에서 확정된 스냅샷인지(fromCache=false) 알려 준다. 기기 안의 오래된 캐시가 먼저 오는 것과
    // 서버 값이 뒤이어 오는 것을 구분하기 위해 includeMetadataChanges를 켠다.
    subscribeState: function (uid, onData, onError) {
      return onSnapshot(doc(db, "users", uid), { includeMetadataChanges: true }, function (snap) {
        onData(snap.exists() ? snap.data() : null, snap.metadata.hasPendingWrites, snap.metadata.fromCache);
      }, onError);
    },
    // 트랜잭션으로 서버의 현재 문서를 읽고, resolve(server)가 돌려준 내용을 그 위에 쓴다.
    // (서버가 그 사이에 바뀌었으면 resolve가 병합해서 돌려주므로 다른 기기의 기록을 덮어쓰지 않는다.)
    saveMerged: function (uid, resolve) {
      var ref = doc(db, "users", uid);
      return runTransaction(db, function (tx) {
        return tx.get(ref).then(function (snap) {
          var server = snap.exists() ? snap.data() : null;
          var out = resolve(server);
          tx.set(ref, out);
          return { out: out, server: server };
        });
      });
    },
    // 하루 한 번(또는 병합 직전) 서버 상태를 users/{uid}/snapshots/{key} 에 보관한다. 이미 있으면 건드리지 않는다.
    saveSnapshot: function (uid, key, data) {
      var ref = doc(db, "users", uid, "snapshots", key);
      return getDoc(ref).then(function (s) {
        if (s.exists()) return false;
        return setDoc(ref, { savedAt: new Date().toISOString(), data: data }).then(function () { return true; });
      });
    },
    // ---- 오래된 연도 기록 아카이브: users/{uid}/history_by_year/{year} ----
    // 이관(최초 1회/매년 롤오버): 이미 있으면 손대지 않는다(다른 기기와 동시에 이관을 시도해도 안전).
    setArchivedYearIfMissing: function (uid, year, data) {
      var ref = doc(db, "users", uid, "history_by_year", year);
      return getDoc(ref).then(function (s) {
        if (s.exists()) return false;
        return setDoc(ref, data).then(function () { return true; });
      });
    },
    // 아주 드문 "이미 아카이브된 연도"의 백필 수정: 병합 없이 그 연도 문서를 통째로 덮어쓴다.
    setArchivedYear: function (uid, year, data) { return setDoc(doc(db, "users", uid, "history_by_year", year), data); },
    // 이 계정이 아카이브해 둔 연도 문서를 한 번에 전부 읽어온다({ "2016": {history:{...}}, ... }).
    listArchivedYears: function (uid) {
      return getDocs(collection(db, "users", uid, "history_by_year")).then(function (snap) {
        var out = {};
        snap.forEach(function (d) { out[d.id] = d.data(); });
        return out;
      });
    },
    listPendingUsers: function () {
      var q = query(collection(db, "users"), where("approved", "==", false));
      return getDocs(q).then(function (snap) {
        var out = [];
        snap.forEach(function (d) { out.push({ uid: d.id, data: d.data() }); });
        return out;
      });
    },
    approveUser: function (uid) {
      return updateDoc(doc(db, "users", uid), { approved: true });
    },
    // ---- 지인(7차): 공개 프로필 / 초대 코드 / 연결 ----
    pubSet: function (uid, data) { return setDoc(doc(db, "profiles", uid), data); },
    pubDelete: function (uid) { return deleteDoc(doc(db, "profiles", uid)); },
    getProfile: function (uid) {
      return getDoc(doc(db, "profiles", uid)).then(function (s) { return s.exists() ? s.data() : null; });
    },
    codeSet: function (code, uid, nick) { return setDoc(doc(db, "inviteCodes", code), { uid: uid, nick: nick }); },
    codeGet: function (code) {
      return getDoc(doc(db, "inviteCodes", code)).then(function (s) { return s.exists() ? s.data() : null; });
    },
    codeDelete: function (code) { return deleteDoc(doc(db, "inviteCodes", code)); },
    listLinks: function (uid) {
      var q = query(collection(db, "friendLinks"), where("members", "array-contains", uid));
      return getDocs(q).then(function (snap) {
        var out = [];
        snap.forEach(function (d) { out.push({ id: d.id, data: d.data() }); });
        return out;
      });
    },
    linkCreate: function (pair, data) { return setDoc(doc(db, "friendLinks", pair), data); },
    linkAccept: function (pair, uid, nick) {
      var upd = { status: "accepted" };
      upd["names." + uid] = nick;
      return updateDoc(doc(db, "friendLinks", pair), upd);
    },
    linkDelete: function (pair) { return deleteDoc(doc(db, "friendLinks", pair)); },
    // ---- 응원(9차): 지인별 대화 · 안 읽은 것 실시간 감시 ----
    cheerSend: function (id, data) { return setDoc(doc(db, "cheers", id), data); },
    // 내가 받은 것 중 아직 안 읽은 것만 실시간으로 지켜본다(동등 조건 2개라 별도 색인이 필요 없다)
    cheerUnreadWatch: function (uid, cb, errcb) {
      var q = query(collection(db, "cheers"), where("to", "==", uid), where("seen", "==", false));
      return onSnapshot(q, function (snap) {
        var out = [];
        snap.forEach(function (d) { out.push({ id: d.id, data: d.data() }); });
        cb(out);
      }, function (err) { if (errcb) errcb(err); });
    },
    // 한 지인과 주고받은 것 전부(받은 것 + 보낸 것)
    cheerThread: function (me, other) {
      var q1 = query(collection(db, "cheers"), where("to", "==", me), where("from", "==", other));
      var q2 = query(collection(db, "cheers"), where("from", "==", me), where("to", "==", other));
      return Promise.all([getDocs(q1), getDocs(q2)]).then(function (r) {
        var out = [];
        r.forEach(function (snap) { snap.forEach(function (d) { out.push({ id: d.id, data: d.data() }); }); });
        return out;
      });
    },
    cheerSeen: function (id) { return updateDoc(doc(db, "cheers", id), { seen: true }); },
    cheerReact: function (id, r) { return updateDoc(doc(db, "cheers", id), { reaction: r }); },
    cheerDelete: function (id) { return deleteDoc(doc(db, "cheers", id)); }
  };
  window.dispatchEvent(new Event("fb-ready"));
