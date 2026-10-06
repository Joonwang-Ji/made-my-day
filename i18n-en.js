// Made My Day — 영어 사전 (i18n.js 가 사용)
// 형식: MMD_I18N.register(사전, 패턴, 문맥규칙)
//   사전   { "한글 원문 전체": "English" }  — 화면의 텍스트 한 덩어리(앞뒤 공백 제외)와 정확히 같을 때 바뀐다
//   패턴   [ [정규식, function(그룹…){ return "English"; }] ] — 숫자·이름이 섞인 문장용(전체 일치)
//   문맥   같은 한글이 자리에 따라 다르게 번역돼야 할 때(예: '일' = 요일 일요일 / 날짜의 일)
// 새 한글 문구를 앱에 넣었다면 여기에 영어를 추가하면 된다. 없으면 한글 그대로 보인다.
// 차수별: 1차(기반·홈·설정·로그인·공휴일) — 2차(통계·기록·지인) — 3차(도움말·리뷰·메달·아바타) — 4차(보완)
(function () {
  "use strict";
  var I = window.MMD_I18N;
  if (!I) return;

  var MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  var WD = { "일": "Sun", "월": "Mon", "화": "Tue", "수": "Wed", "목": "Thu", "금": "Fri", "토": "Sat" };
  function mon(n) { return MONTHS[(parseInt(n, 10) - 1 + 12) % 12] || n; }
  function num(n) { return n; }
  function plural(n, one, many) { return n + " " + (String(n) === "1" ? one : many); }
  // "1시간 20분 30초" 같은 시간 표기 → "1h 20m 30s"
  function dur(s) {
    return s.replace(/(\d+)일/g, "$1d").replace(/(\d+)시간/g, "$1h").replace(/(\d+)분/g, "$1m").replace(/(\d+)초/g, "$1s");
  }

  var D = {
    // ---------- 하단 탭 · 공통 ----------
    "홈": "Home", "통계": "Stats", "기록": "Log", "지인": "Friends", "설정": "Settings",
    "불러오는 중…": "Loading…",
    "취소": "Cancel", "확인": "OK", "저장": "Save", "삭제": "Delete", "닫기": "Close", "추가": "Add",
    "변경": "Change", "가져오기": "Import", "보내기": "Send", "복사": "Copy", "복사하기": "Copy",
    "열기": "Open", "나중에": "Later", "계속하기": "Continue", "괜찮아요": "No thanks",
    "분": "min", "초": "sec", "시": "h",
    "이름 없음": "Untitled",
    "저장했어요": "Saved",
    "삭제했어요": "Deleted",

    // ---------- 로그인 · 가입 ----------
    "이메일로 로그인하면 기록이 안전하게 저장돼요": "Sign in with email to keep your records safe",
    "로그인": "Sign in",
    "처음이에요 (가입)": "I'm new (Sign up)",
    "비밀번호를 잊으셨나요?": "Forgot your password?",
    "가입 후 관리자 승인이 있어야 이용할 수 있어요": "After signing up, the admin needs to approve you before you can use the app",
    "가입 승인 대기 중": "Waiting for approval",
    "로그아웃": "Sign out",
    "이메일": "Email",
    "비밀번호 (6자 이상)": "Password (6+ characters)",
    "현재 비밀번호": "Current password",
    "새 비밀번호 (6자 이상)": "New password (6+ characters)",
    "이메일 형식이 올바르지 않아요": "That email address doesn't look right",
    "비밀번호를 입력해주세요": "Please enter your password",
    "비밀번호는 6자 이상이어야 해요": "Password must be at least 6 characters",
    "이미 가입된 이메일이에요. 로그인해주세요": "This email is already registered. Please sign in",
    "이메일 또는 비밀번호가 맞지 않아요": "Email or password is incorrect",
    "가입된 계정이 없어요. '처음이에요'로 가입해주세요": "No account found. Tap “I'm new” to sign up",
    "비밀번호가 맞지 않아요": "Incorrect password",
    "시도가 너무 많아요. 잠시 후 다시 시도해주세요": "Too many attempts. Please try again in a moment",
    "이메일과 비밀번호를 입력해주세요": "Please enter your email and password",
    "먼저 이메일을 입력해주세요": "Please enter your email first",
    "두 칸 다 입력해주세요": "Please fill in both fields",
    "새 비밀번호는 6자 이상이어야 해요": "New password must be at least 6 characters",
    "비밀번호를 변경했어요": "Password changed",
    "정말 로그아웃할까요?": "Sign out for real?",
    "기록을 불러오지 못했어요. 인터넷을 확인하고 새로고침해 주세요": "Couldn't load your records. Check your connection and refresh",
    "동기화 중이에요. 잠시만 기다려 주세요": "Syncing. Please wait a moment",
    "다른 기기의 기록과 합쳤어요": "Merged with records from another device",
    "저장 중 문제가 생겼어요 · 연결되면 다시 저장해요": "Couldn't save · will retry when you're back online",

    // ---------- 홈 ----------
    "일째": "days",
    "오늘의 성공 보너스가 도착했어요 — 탭해서 열어보세요": "Today's success bonus has arrived — tap to open",
    "카테고리 추가": "Add category",
    "카테고리를 추가해보세요": "Try adding a category",
    "아직 카테고리가 없어요. 아래 버튼으로 추가해보세요.": "No categories yet. Add one with the button below.",
    "오늘": "Today",
    "오늘은 쉬는 날": "Today is a rest day",
    "오늘 예정된 항목 없음": "Nothing scheduled today",
    "스트릭에 영향 없어요": "Doesn't affect your streak",
    "오늘 기준 달성 · 스트릭 유지 🔥": "Goal met today · streak kept 🔥",
    "✎ 오늘 메모": "✎ Today's note",
    "오늘 예정된 항목이 없어요": "Nothing scheduled today",
    "이 카테고리는 오늘 모두 완료했어요": "All done in this category today",
    "어제 놓친 항목": "Missed yesterday",
    "어제는 놓친 항목이 없었어요.": "Nothing missed yesterday.",
    "자주 놓치는 항목 (최근 14일)": "Often missed (last 14 days)",
    "아직 자주 놓치는 항목은 없어요.": "No often-missed items yet.",
    "놓친 항목": "Missed items",
    "회 놓침": "missed",
    "+ 나만의 한마디 추가": "+ Add my own one-liner",
    "나만의 한마디": "My own one-liner",
    "하루 한 줄": "One line a day",
    "오늘을 쉬는 날로 표시": "Mark today as a rest day",
    "오늘 쉬는 날 표시 해제": "Unmark today as a rest day",
    "쉬는 날 ·": "Rest day ·",
    "쉬는 날 · 선택": "Rest day · optional",
    "시작 전": "Not started",
    "불시": "Anytime",
    "아직 시작 전 (목록엔 두고 달성률에선 제외)": "Not started yet (kept in the list, left out of your rate)",
    "이어서 시작해요 · 시간 초과 상태": "Resumes from here · over time",
    "진행 상황을 저장했어요": "Progress saved",
    "진행 상황을 저장할까요?": "Save your progress?",
    "저장하고 나가기": "Save and exit",
    "저장 안 하고 나가기": "Exit without saving",
    "마지막 항목이에요": "Last item",
    "재생": "Resume",
    "정지": "Pause",
    "스킵": "Skip",
    "홈으로": "Back to home",
    "이름이 없는 항목이 있어요. 이름을 입력하거나 삭제해 주세요": "Some items have no name. Enter a name or delete them",

    // ---------- 설정 첫 화면 ----------
    "내 아바타 꾸미기": "Customize my avatar",
    "언어 · Language": "Language",
    "화면": "Display",
    "루틴 규칙 · 쉬는 날 관리": "Routine rules · Rest days",
    "루틴 규칙": "Routine rules",
    "알림·리뷰": "Alerts & reviews",
    "데이터 백업·복원": "Backup & restore",
    "파일·텍스트로 저장하고 복원": "Save and restore as a file or text",
    "계정": "Account",
    "사용법·도움말": "Help & how to use",
    "기능별 설명 모아보기": "All feature explanations",
    "자동": "Auto", "밝게": "Light", "어둡게": "Dark",
    "(이메일 없음)": "(no email)",
    "로그인 정보 없음": "Not signed in",
    "알람 꺼짐": "Alarms off", "알람 켜짐": "Alarms on",
    "리뷰 꺼짐": "Reviews off",

    // ---------- 설정 > 화면 ----------
    "글씨 크기": "Text size",
    "가나다라마바사 Aa 123": "Aa Bb Cc 123",
    "오늘도 좋은 하루 되세요": "Have a great day",
    "보통": "Normal", "크게": "Large", "아주 크게": "Extra large", "가장 크게": "Largest",
    "선명하게 보기 (진한 글씨)": "Sharper text (bolder)",
    "이 기기에만 적용돼요. 밝은 테마에서 옅은 글씨가 더 진하게 보여요.": "Applies to this device only. Makes light text darker in the light theme.",
    "테마": "Theme",
    "기기 설정을 따름": "Follow device setting",
    "항상 밝게": "Always light",
    "항상 어둡게": "Always dark",
    "글씨 크기를 골라주세요": "Choose a text size",
    "눌러 보시면 바로 바뀌어요. 나중에 설정에서 다시 고를 수 있어요.": "Tap to try each one. You can change it later in Settings.",
    "보통 · 가나다 Aa": "Normal · Aa Bb",
    "크게 · 가나다 Aa": "Large · Aa Bb",
    "아주 크게 · 가나다": "Extra large · Aa",
    "가장 크게 · 가나다": "Largest · Aa",
    "이 크기로 할게요": "Use this size",

    // ---------- 설정 > 루틴 규칙 ----------
    "스트릭 인정 기준": "Streak requirement",
    "전부 다 하기 (100%)": "Everything (100%)",
    "대부분 (90% 이상)": "Most of it (90%+)",
    "웬만큼 (80% 이상)": "Quite a lot (80%+)",
    "느슨하게 (70% 이상)": "Relaxed (70%+)",
    "초과 유예 시간": "Overtime grace",
    "5초": "5 sec", "10초 (기본)": "10 sec (default)", "15초": "15 sec", "30초": "30 sec",
    "쉬는 날": "Rest days",
    "쉬는 날 관리": "Manage rest days",

    // ---------- 설정 > 알림·리뷰 ----------
    "소리": "Sound",
    "모든 알람 끄기 (무음 모드)": "Turn off all alarms (silent mode)",
    "지금은 모든 알람이 꺼져 있어요. 소리도 진동도 울리지 않아요.": "All alarms are off right now. No sound or vibration.",
    "무음 스위치가 켜져 있어도 울리기": "Ring even when the silent switch is on",
    "🔔 알람 소리 미리듣기": "🔔 Preview alarm sound",
    "리뷰": "Reviews",
    "주간 리뷰 받기": "Get a weekly review",
    "일요일 저녁 8시 (기본)": "Sunday 8:00 PM (default)",
    "월요일 아침 7시": "Monday 7:00 AM",
    "직접 정하기": "Set my own",
    "월간 리뷰 받기 (매월 마지막 날)": "Get a monthly review (last day of each month)",
    "마지막 날 저녁 8시 (기본)": "Last day 8:00 PM (default)",
    "시각 바꾸기": "Change time",
    "📚 지난 리뷰 보기": "📚 Past reviews",
    "지난 리뷰 보기": "Past reviews",
    "주간 (최근 12주)": "Weekly (last 12 weeks)",
    "월간 (최근 12개월)": "Monthly (last 12 months)",
    "연간 (올해 돌아보기)": "Yearly (this year in review)",
    "리뷰 받는 시각": "Review time",

    // ---------- 설정 > 계정 ----------
    "로그인 계정": "Signed-in account",
    "가입 승인 관리": "Approve sign-ups",
    "비밀번호 변경": "Change password",
    "대기 중인 가입 요청이 없어요.": "No pending sign-up requests.",
    "목록을 불러오지 못했어요.": "Couldn't load the list.",
    "승인": "Approve",
    "승인 중…": "Approving…",
    "승인했어요": "Approved",
    "승인에 실패했어요": "Approval failed",

    // ---------- 데이터 백업 · 복원 ----------
    "데이터": "Data",
    "백업 (파일)": "Backup (file)",
    "기록 전체를 파일 하나로 저장해두세요. 기기를 바꾸거나 데이터가 지워졌을 때 이 파일로 복원할 수 있어요.": "Save all your records as one file. You can restore from it if you switch devices or lose your data.",
    "파일로 저장": "Save as file",
    "파일에서 가져오기": "Import from file",
    "텍스트로 (클로드에 붙여넣기용)": "As text (to paste into Claude)",
    "아래 내용을 복사해서 클로드와의 대화에 붙여넣으면 기록을 분석하고 다음 루틴을 제안받을 수 있어요.": "Copy the text below and paste it into a chat with Claude to get your records analyzed and next-step routine suggestions.",
    "텍스트로 가져오기": "Import from text",
    "예전에 내보낸 JSON을 붙여넣으면 카테고리와 기록을 복원해요. 예전 버전에서 내보낸 파일도 자동으로 맞춰서 불러와요.": "Paste a JSON you exported earlier to restore categories and records. Files from older versions are converted automatically.",
    "여기에 JSON을 붙여넣으세요": "Paste JSON here",

    // ---------- 사용법 ----------
    "사용법": "How to use",
    "화면 제목이나 설정 옆의 작은": "Tap the small",
    "를 누르면 그 자리의 설명이 바로 열려요. 여기서는 전체 목록을 볼 수 있어요.": "next to a screen title or setting to see its explanation right there. Here you can see the full list.",

    // ---------- 항목 편집 ----------
    "항목 편집": "Edit items",
    "동선 순서대로 정리하세요. 요일 칩과 시간 칩을 눌러 설정하세요.": "Arrange items in the order you do them. Tap the day and time chips to set them.",
    "항목 추가": "Add item",
    "시간 설정": "Set time",
    "반복 요일": "Repeat days",
    "매일": "Every day", "평일": "Weekdays", "주말": "Weekends",
    "불시 항목은 정해진 요일 없이 홈·기록에서 직접 체크해요. 스트릭·카운트다운·놓친 항목에는 들어가지 않고, 포인트에만 반영돼요.": "Anytime items have no set days; check them off yourself on Home or in the log. They don't count toward streaks, countdowns or missed items — only points.",
    "쉬는 날 처리": "On rest days",
    "쉬는 날로 표시된 날에도 유지": "Keep on days marked as rest days",
    "타이머 종료음": "Timer end sound",
    "이 항목은 무음 (타이머 종료 시 소리 안 남)": "Mute this item (no sound when its timer ends)",
    "시간 조정 제안": "Time suggestions",
    "이 항목은 시간 조정 제안 받지 않기": "Don't suggest time changes for this item",
    "카테고리": "Category",
    "카테고리 이동": "Move to category",
    "태그": "Tags",
    "카테고리 이름": "Category name",
    "새 태그 입력": "New tag",
    "항목 이름": "Item name",
    "복제": "Duplicate",
    "지난 기록을 남겨둘까요?": "Keep the past records?",
    "이 항목을 완료했던 기록이 있어요. 항목만 지우고 기록은 통계에 남길지, 기록까지 함께 지울지 선택해 주세요. 기록을 지우면 관련 포인트도 함께 줄어들고 되돌릴 수 없어요.": "This item has completion records. Choose whether to delete only the item and keep the records in your stats, or delete the records too. Deleting records also lowers your points and can't be undone.",
    "항목만 삭제, 기록은 남기기": "Delete item, keep records",
    "기록까지 함께 삭제": "Delete item and records",
    "정말 삭제할까요?": "Delete it?",
    "이동할 다른 카테고리가 없어요.": "No other category to move to.",
    "아직 태그가 없어요. 아래에서 추가해보세요.": "No tags yet. Add one below.",
    "지정된 요일이 없어요. 요일을 고르거나 '불시'를 선택해 주세요": "No days selected. Pick days or choose “Anytime”",
    "요일을 바꿨어요 · 오늘부터 적용돼요 (지난 기록은 그대로)": "Days updated · applies from today (past records stay as they were)",

    // ---------- 쉬는 날 관리 · 공휴일 ----------
    "한국 공휴일 자동 추가": "Add Korean public holidays",
    "목록으로 한 번에 추가": "Add a list at once",
    "YYYY-MM-DD 뒤에 이름을 붙여 한 줄에 하나씩 붙여넣으세요 (이름은 생략 가능해요).": "Paste one per line as YYYY-MM-DD followed by a name (the name is optional).",
    "목록 추가": "Add list",
    "매년 반복 공휴일": "Yearly recurring holidays",
    "특정 휴가": "Specific days off",
    "지난 기록 전체 보기": "Show all past records",
    "기간으로 추가": "Add a date range",
    "매년 반복 공휴일로 등록": "Register as a yearly recurring holiday",
    "한국 공휴일을 불러올까요?": "Load Korean public holidays?",
    "한국 공휴일 불러오기": "Load Korean public holidays",
    "불러오기": "Load",
    "매년 반복되는 고정 공휴일과, 설날·추석·대체공휴일처럼 해마다 날짜가 바뀌는 공휴일을 한 번에 불러와요. 실제로 쉬지 않는 날은 체크를 해제하고 추가하세요.": "Loads Korea's fixed yearly holidays, plus ones whose dates change each year — Seollal, Chuseok and substitute holidays — all at once. Uncheck any day you won't actually take off.",
    "전체 선택/해제": "Select / deselect all",
    "선택한 날짜 추가": "Add selected dates",
    "선택된 날짜가 없어요": "No dates selected",
    "이미 다 등록되어 있어요": "Everything is already added",
    "추가할 공휴일이 없어요 (이미 다 등록됐거나, 준비된 항목이 없어요)": "No holidays to add (already added, or none available)",
    "등록된 반복 공휴일이 없어요.": "No recurring holidays registered.",
    "등록된 날짜가 없어요.": "No dates registered.",
    "최근 기록만 보기": "Show recent only",
    "왜 쉬었는지 메모 (선택)": "Why you rested (optional)",
    "쉬는 이유 (선택)": "Reason (optional)",
    "시작일을 선택해주세요": "Please choose a start date",
    "종료일이 시작일보다 빠를 수 없어요": "The end date can't be before the start date",
    "2026-02-16 설날 연휴\n2026-02-17 설날\n2026-02-18 설날 연휴": "2026-12-24 Family trip\n2026-12-25 Christmas Day\n2026-12-26 Family trip",
    "오늘 하루를 한 줄로 남겨보세요": "Leave a line about today",
    "하루를 한 줄로 남겨보세요 (선택)": "Leave a line about your day (optional)",
    "내용 검색": "Search notes",
    "예: 오늘도 묵묵히": "e.g. Steady as ever today",

    // 공휴일 이름 (KR_HOLIDAY_TABLE)
    "신정": "New Year's Day", "삼일절": "Independence Movement Day", "어린이날": "Children's Day",
    "현충일": "Memorial Day", "광복절": "Liberation Day", "개천절": "National Foundation Day",
    "한글날": "Hangul Day", "성탄절": "Christmas Day",
    "설날": "Seollal (Lunar New Year)", "설날 연휴": "Seollal holiday",
    "추석": "Chuseok", "추석 연휴": "Chuseok holiday",
    "부처님오신날": "Buddha's Birthday",
    "전국동시지방선거(임시공휴일)": "Local elections (temporary holiday)",
    "크리스마스 대체공휴일": "Christmas (substitute holiday)",

    // ---------- 기타(홈·보상 모달 일부) ----------
    "새로고침": "Refresh",
    "더보기": "More",
    "정해진 문구": "Quick phrases",
    "응원의 한마디를 적어 보세요": "Cheer them on",
    "업적": "Achievements",
    "내 아바타": "My avatar",
    "탭해서 아바타 꾸미기": "Tap to customize avatar",
    "성경 여정": "Bible journey",
    "📖 성경 여정": "📖 Bible journey",
    "🎀 내 선물함 열기": "🎀 Open my gift box",
    "내 선물함": "My gift box",
    "보상 기록": "Reward log",
    "이 기록 삭제": "Delete this record",
    "이 기록을 삭제할까요?": "Delete this record?",
    "삭제하면 되돌릴 수 없어요.": "This can't be undone.",
    "누적 0P": "0 P total",
    "과거 기록": "Past records",
    "크리스마스": "Christmas",
    "이 기기에만 적용돼요. 바꾸면 화면이 새로 불러와져요.": "Applies to this device only. The screen reloads when you change it.",
    "직접 정하기 (요일·시각)": "Custom (day & time)",
    "월간 리뷰 받는 시각 (매월 마지막 날)": "Monthly review time (last day of each month)",
    "주간 리뷰 받는 시점": "Weekly review day & time",
    "주간 리뷰를 켰어요": "Weekly review turned on",
    "월간 리뷰를 켰어요": "Monthly review turned on",
    "이번 주 리뷰가 도착했어요": "Your weekly review has arrived",
    "원하는 보상 혹은 이미 준 보상을 적어보세요": "Write the reward you want, or one you already gave yourself",
    "날짜 선택": "Pick a date",
    "배지 (최장 연속일 기준)": "Badges (by longest streak)",
    "족보 트랙": "Genealogy track",
    "지인 관리": "Manage friends",
    "지인 끊기…": "Remove friend…",
    "응원 보내기": "Send a cheer",
    "메달을 탭하면 뒷면이 보여요": "Tap a medal to see its back"
  };

  // 같은 한글이 자리에 따라 다를 때
  var CTX = [
    { sel: ".rest-badge", map: { "쉬는 날": "Rest day" } },
    { sel: ".day-toggle", map: { "일": "Sun", "월": "Mon", "화": "Tue", "수": "Wed", "목": "Thu", "금": "Fri", "토": "Sat" } },
    // 요일 선택 창 맨 위 버튼: 칸이 좁아 "Every day"가 두 줄로 꺾이므로 짧게(정적 마크업이라 이 파일에 둬야 시작 시점에 적용된다)
    { sel: ".day-presets button", map: { "매일": "Daily" } }
  ];

  var P = [
    // 날짜: 9월 22일 화요일 / 9월 22일 / 2026년 9월
    [/^(\d+)월 (\d+)일 ([일월화수목금토])요일$/, function (m, d, w) { return WD[w] + ", " + mon(m) + " " + d; }],
    [/^(\d+)월 (\d+)일$/, function (m, d) { return mon(m) + " " + d; }],
    [/^(\d+)년 (\d+)월$/, function (y, m) { return mon(m) + " " + y; }],
    [/^(\d+)월 (\d+)일 - (\d+)월 (\d+)일$/, function (m1, d1, m2, d2) { return mon(m1) + " " + d1 + " – " + mon(m2) + " " + d2; }],
    [/^(\d+)년$/, function (y) { return y; }],
    [/^(\d+)월$/, function (m) { return mon(m); }],

    // 시각: 아침 7시 / 저녁 8시 30분 → 7:00 AM / 8:30 PM
    [/^(새벽|아침|오전|오후|저녁|밤) (\d+)시(?: (\d+)분)?$/, function (part, h, m) {
      var ap = (part === "오후" || part === "저녁" || part === "밤") ? "PM" : "AM";
      return h + ":" + ("0" + (m || "0")).slice(-2) + " " + ap;
    }],
    // 리뷰 일정: 9/21(일) 저녁 8시 → Sun 9/21 8:00 PM
    [/^(\d+\/\d+)\(([일월화수목금토])\) ~ (\d+\/\d+)\(([일월화수목금토])\)$/, function (a, w1, b, w2) { return WD[w1] + " " + a + " – " + WD[w2] + " " + b; }],
    [/^(\d+\/\d+)\(([일월화수목금토])\) (.+)$/, function (md, w, t) { return WD[w] + " " + md + " " + I.sub(t); }],
    [/^직접 정하기 · ([일월화수목금토])요일 (.+)$/, function (w, t) { return "Custom · " + WD[w] + " " + I.sub(t); }],
    [/^마지막 날 (.+)$/, function (t) { return "Last day " + I.sub(t); }],
    [/^다음 (주간|월간) 리뷰는 (.+)에 도착해요$/, function (k, t) { return "Next " + (k === "주간" ? "weekly" : "monthly") + " review arrives " + I.sub(t); }],
    [/^(\d+)년 돌아보기$/, function (y) { return y + " year in review"; }],

    // 공휴일 선택 목록: 2026-02-16 · 설날 연휴
    [/^(\d{4}-\d{2}-\d{2}) · (.+)$/, function (d, n) { return d + " · " + I.sub(n); }],
    [/^(\d{4}-\d{2}-\d{2})$/, function () { return null; }],
    [/^지난 기록 전체 보기 \((\d+)\)$/, function (n) { return "Show all past records (" + n + ")"; }],

    // 리뷰 카드·배지
    [/^📬 리뷰 (\d+)$/, function (n) { return "📬 Reviews " + n; }],
    [/^(\d+)월 리뷰가 도착했어요$/, function (m) { return "Your " + mon(m) + " review has arrived"; }],
    [/^(\d+)년 돌아보기가 도착했어요$/, function (y) { return "Your " + y + " year in review has arrived"; }],
    [/^(\d+\/\d+) ~ (\d+\/\d+) · 탭해서 열어 보기$/, function (a, b) { return a + " – " + b + " · Tap to open"; }],

    // 홈 카테고리 카드
    [/^(\d+)\/(\d+) 완료$/, function (a, b) { return a + "/" + b + " done"; }],

    // 시간: 5분 30초 / +1분 / 1시간 20분
    [/^([+−]?)((?:\d+일 ?)?(?:\d+시간 ?)?(?:\d+분 ?)?(?:\d+초)?)$/, function (sign, d) { return d ? sign + dur(d) : null; }],

    // 로그인 화면 글씨 크기 버튼
    [/^가 글씨 크기 · (.+)$/, function (s) { return "Aa Text size · " + I.sub(s); }],

    // 설정 요약
    [/^글씨 (.+?) · 테마 (.+?)( · 선명)?$/, function (a, b, c) { return "Text " + I.sub(a).toLowerCase() + " · Theme " + I.sub(b).toLowerCase() + (c ? " · Sharp" : ""); }],
    [/^스트릭 (\d+%)( 이상)? · 유예 (\d+)초$/, function (p, more, g) { return "Streak " + p + (more ? "+" : "") + " · Grace " + g + "s"; }],
    [/^(알람 꺼짐|알람 켜짐) · (리뷰 꺼짐|리뷰 (.+))$/, function (a, r, which) {
      var rv = which ? "Reviews: " + which.replace("주간", "weekly").replace("월간", "monthly").replace("·", " · ") : "Reviews off";
      return I.sub(a) + " · " + rv;
    }],
    [/^관리자 · (.+)$/, function (e) { return "Admin · " + e; }],

    // 홈
    [/^다음: (.+)$/, function (n) { return "Next: " + n; }],
    [/^(\d+)\/(\d+) 오늘 완료$/, function (a, b) { return a + "/" + b + " done today"; }],
    [/^오늘은 기준 (\d+)% 달성이 어려워요$/, function (t) { return "Reaching " + t + "% today is out of reach"; }],
    [/^(\d+)개만 더 하면 기준 (\d+)% 달성이에요$/, function (n, t) { return n + " more to reach " + t + "% today"; }],
    [/^⏱ 시간 조정 제안 (\d+)$/, function (n) { return "⏱ Time suggestions " + n; }],
    [/^💌 새 응원 (\d+)$/, function (n) { return "💌 New cheers " + n; }],
    [/^(\d+)개 · 총 (.+)$/, function (n, d) { return plural(n, "item", "items") + " · " + I.sub(d).replace(/^0초$/, "0s") + " total"; }],
    [/^(\d+)개 추가했어요$/, function (n) { return n + " added"; }],
    [/^이어하기 · 남은 (\d+:\d+)$/, function (t) { return "Resume · " + t + " left"; }],
    [/^이어서 시작해요 · 남은 (.+)$/, function (t) { return "Resumes here · " + I.sub(t) + " left"; }],
    [/^어제 놓친 부분이 있었어요.*$/, function () { return "You missed a few things yesterday — worth catching up today."; }],
    [/^(\d+)년 한국 공휴일을 불러올까요\?$/, function (y) { return "Load " + y + " Korean public holidays?"; }],
    [/^매년 반복되는 공휴일과 (\d+)년 설날·추석·대체공휴일 등 (\d+)개를 쉬는 날 후보로 불러올까요\? \(나중에 목록에서 골라 지울 수 있어요\)$/, function (y, n) {
      return "Load Korea's yearly holidays plus " + y + "'s Seollal, Chuseok and substitute holidays (" + n + " in all) as rest-day candidates? You can remove any later from the list.";
    }],
    [/^(.+) 대체공휴일$/, function (n) { return I.sub(n) + " (substitute holiday)"; }],
    [/^(.+) · 매년 반복$/, function (n) { return I.sub(n) + " · every year"; }],
    [/^(.+)이라 쉬는 날이에요\. 해제는 설정 › 쉬는 날에서 할 수 있어요\.$/, function (n) { return "Rest day (" + I.sub(n) + "). You can undo this in Settings › Rest days."; }],
    [/^(.+)로 재설정 메일을 보냈어요$/, function (e) { return "Sent a reset email to " + e; }],
    [/^(.+) 계정으로 가입 요청이 접수됐어요\. 관리자가 승인하면 자동으로 이용할 수 있게 돼요\.$/, function (e) { return "Sign-up request received for " + e + ". You'll be able to use the app automatically once the admin approves it."; }],
    [/^로그인에 실패했어요 \((.+)\)$/, function (c) { return "Sign-in failed (" + c + ")"; }]
  ];

  // =====================================================================
  // 2차: 통계 · 기록 · 지인/응원 · 실행(▶) 화면
  // =====================================================================
  var D2 = {
    // ---------- 통계 ----------
    "성공": "Success", "주간": "Weekly", "월간": "Monthly", "시간": "Time",
    "제안만": "Suggested only", "전체": "All", "전체 기간": "All time",
    "연속일": "Streak", "성공일": "Success days", "이번 달 달성률": "This month's rate",
    "이 태그를 가진 항목이 없어요.": "No items have this tag.",
    "아직 항목이 없어요. 카테고리에 루틴 항목을 추가해보세요.": "No items yet. Add routine items to a category.",
    "지금 조정을 제안할 항목이 없어요.": "No items to suggest adjusting right now.",
    "이 기간에 완료한 시간 항목이 없어요.": "No timed items were completed in this period.",
    "딱 맞아요": "Right on",
    "지금 시간이 맞아요": "Current time is right",
    "이 항목은 제안 끄기": "Turn off suggestions for this item",
    "시간 조정 제안 꺼짐 ·": "Time suggestions off ·",
    "다시 켜기": "Turn on again",
    "자주": "Often", "초과": "over time", "일찍 끝나요": "finishes early",
    "시간 없는 항목 (횟수)": "Items without a time (counts)",
    "실측 = 카운트다운(▶)으로 마친 기록, 지정시간 = 홈·기록에서 바로 체크해 지정 시간으로 저장된 기록이에요. 평균과 조정 제안은 실측 기록으로만 계산해요.":
      "Measured = completions finished with the countdown (▶). Planned = completions checked on Home or in the log and saved with the set time. Averages and suggestions use measured records only.",
    "🟡 쉬는 날인데 뭔가 한 날 (스트릭에는 반영되지 않아요)": "🟡 Rest day, but you did something (doesn't count toward the streak)",

    // ---------- 기록 ----------
    "날짜별": "By date", "항목별": "By item",
    "항목 선택": "Choose an item",
    "미래 날짜는 기록할 수 없어요.": "You can't log future dates.",
    "이 날짜에 예정된 항목이 없어요.": "Nothing is scheduled on this date.",
    "쉬는 날 · 선택 항목": "Rest day · optional items",
    "불시·시작 전 항목": "Anytime / not-started items",
    "검색 결과가 없어요.": "No results.",
    "아직 남긴 하루 한 줄이 없어요.": "No one-liners yet.",
    "되돌리기": "Undo changes",
    "날짜를 탭해서 완료 여부를 바꾼 뒤 '저장'을 눌러야 반영돼요. 연한 칸(예정 없던 날)도 자유롭게 기록할 수 있어요. 카운트다운 없이 기록한 날은 지정된 시간으로 저장돼요.":
      "Tap dates to change whether they're done, then press “Save” to apply. You can also log the faded cells (days it wasn't scheduled). Days logged without the countdown are saved with the set time.",
    "미래 날짜는 기록할 수 없어요": "You can't log future dates",
    "체크를 해제할까요?": "Uncheck this?",
    "해제": "Uncheck",
    "저장하지 않은 변경이 있어요": "You have unsaved changes",
    "저장하지 않고 이동하면 변경한 내용이 사라져요.": "If you leave without saving, your changes will be lost.",
    "저장하지 않고 나가면 변경한 내용이 사라져요.": "If you exit without saving, your changes will be lost.",
    "이동": "Leave", "나가기": "Exit",
    "저장하지 않고 닫을까요?": "Close without saving?",
    "입력한 내용은 저장되지 않아요.": "What you typed won't be saved.",
    "카테고리 완료! 🎉": "Category complete! 🎉",

    // ---------- 시간 조정 토스트 ----------
    "이 항목은 제안하지 않아요 · 통계 시간 탭에서 다시 켤 수 있어요": "Won't suggest for this item · you can turn it back on in the Stats Time tab",
    "이 항목의 시간 조정 제안을 다시 켰어요": "Time suggestions turned back on for this item",

    // ---------- 지인 ----------
    "받은 요청": "Received requests", "수락": "Accept", "거절": "Decline",
    "아직 연결된 지인이 없어요. 아래에서 초대 코드를 주고받아 연결해 보세요.": "No friends connected yet. Exchange invite codes below to connect.",
    "아직 공개 전이에요": "Not shared yet",
    "▴ 접기": "▴ Collapse",
    "⚙ 공개 설정 · 초대 코드 · 지인 추가": "⚙ Sharing · Invite code · Add a friend",
    "내 공개 설정": "My sharing settings",
    "공개를 켜면": "When sharing is on,",
    "서로 수락한 지인에게만": "only friends who accepted each other",
    "타이틀 · 누적P · 연속일 · 성경 진행(%·권)이 보여요. 루틴 이름, 메모, 선물함, 이메일은 공개되지 않아요.":
      "can see your title, total points, streak and Bible progress (% · book). Routine names, notes, gift box and email stay private.",
    "닉네임 (1~12자)": "Nickname (1–12 characters)",
    "오늘 진행률도 공개": "Also share today's progress",
    "루틴 개수도 공개": "Also share routine count",
    "공개 켜기": "Turn on sharing", "공개 끄기": "Turn off sharing",
    "내 초대 코드": "My invite code",
    "새 코드 만들기": "Create a new code",
    "이 코드를 지인에게 알려 주세요. 지인이 코드를 입력해 요청을 보내면, 내가 수락한 사람만 연결돼요.":
      "Share this code with a friend. When they enter it and send a request, only people you accept get connected.",
    "지인 코드로 요청하기": "Request with a friend's code",
    "지인의 코드 8자리": "Friend's 8-character code",
    "이 코드의 주인": "this code's owner",
    "님에게 지인 요청을 보낼까요?": " — send a friend request?",
    "보낸 요청 · 수락 대기 중": "Sent requests · waiting for acceptance",
    "공개를 켜면 초대 코드가 만들어지고, 지인과 연결할 수 있어요.": "Turn on sharing to get an invite code and connect with friends.",
    "서버 규칙이 아직 적용되지 않았어요.": "The server rules haven't been applied yet.",
    "Firebase 콘솔에서 규칙을 적용한 뒤 다시 열어주세요.": "Apply the rules in the Firebase console, then open this again.",
    "불러오지 못했어요. 잠시 후 다시 시도해주세요.": "Couldn't load. Please try again in a moment.",
    "지인 끊기": "Remove friend",
    "끊으면 서로의 정보가 보이지 않게 돼요. 다시 연결하려면 새로 요청하고 상대가 수락해야 해요.":
      "Once removed, you won't see each other's info. To reconnect, send a new request and have them accept.",
    "연결을 끊었어요": "Friend removed",
    "아직 주고받은 응원이 없어요.": "No cheers exchanged yet.",
    "아래에서 먼저 마음을 전해 보세요 💌": "Send the first kind word below 💌",
    "💌 응원": "💌 Cheer",
    "지우기": "Delete",
    "오늘은 다 보냈어요 🌙": "All sent for today 🌙",
    "오늘은 이 지인에게 다 보냈어요. 내일 또 보내요 🌙": "You've sent all you can to this friend today. Send more tomorrow 🌙",
    "응원": "Cheer", "칭찬": "Praise",
    "💪 오늘도 힘내요!": "💪 Keep it up today!",
    "🌿 천천히 해도 괜찮아요": "🌿 It's okay to go slowly",
    "🤝 끝까지 함께해요": "🤝 Let's see it through together",
    "🙏 기도하고 있어요": "🙏 I'm praying for you",
    "🌅 내일은 더 좋을 거예요": "🌅 Tomorrow will be better",
    "👏 오늘 정말 잘했어요": "👏 You did great today",
    "🔥 꾸준함이 멋져요": "🔥 Your consistency is awesome",
    "🏆 연속 기록 대단해요": "🏆 Your streak is amazing",
    "🌱 조금씩 자라고 있어요": "🌱 You're growing little by little",
    "✨ 덕분에 힘이 나요": "✨ You give me strength",
    "오늘도 힘내요!": "Keep it up today!",
    "천천히 해도 괜찮아요": "It's okay to go slowly",
    "끝까지 함께해요": "Let's see it through together",
    "기도하고 있어요": "I'm praying for you",
    "내일은 더 좋을 거예요": "Tomorrow will be better",
    "오늘 정말 잘했어요": "You did great today",
    "꾸준함이 멋져요": "Your consistency is awesome",
    "연속 기록 대단해요": "Your streak is amazing",
    "조금씩 자라고 있어요": "You're growing little by little",
    "덕분에 힘이 나요": "You give me strength",

    // ---------- 지인·응원 토스트 ----------
    "서버 권한이 아직 열리지 않았어요 · Firebase 규칙 적용을 확인해주세요": "Server permissions aren't open yet · check that the Firebase rules are applied",
    "문제가 생겼어요 · 잠시 후 다시 시도해주세요": "Something went wrong · please try again in a moment",
    "닉네임을 입력해주세요": "Please enter a nickname",
    "닉네임은 12자까지예요": "Nicknames can be up to 12 characters",
    "공개 설정을 저장했어요": "Sharing settings saved",
    "공개를 껐어요": "Sharing turned off",
    "새 코드를 만들었어요": "New code created",
    "코드를 복사했어요": "Code copied",
    "복사에 실패했어요 · 직접 적어주세요": "Couldn't copy · please write it down",
    "코드는 8자리예요": "Codes are 8 characters",
    "코드를 찾을 수 없어요": "Code not found",
    "내 코드예요": "That's your own code",
    "이미 연결된 지인이에요": "Already connected",
    "이미 요청이 진행 중이에요": "A request is already pending",
    "요청을 보냈어요 · 상대가 수락하면 연결돼요": "Request sent · you'll connect once they accept",
    "연결됐어요": "Connected",
    "연결된 지인이 아니에요": "Not a connected friend",
    "닉네임을 먼저 정해주세요 · 지인 탭 → 공개 설정": "Set a nickname first · Friends tab → Sharing settings",
    "오늘은 이 지인에게 다 보냈어요": "You've sent all you can to this friend today",

    // ---------- 실행(▶) ----------
    "시간 초과": "Over time"
  };
  Object.keys(D2).forEach(function (k) { D[k] = D2[k]; });

  CTX.push({ sel: ".run-finish .big", map: { "완료": "complete" } });

  var WDN = WD;
  function dayTxt(n) { return plural(n, "day", "days"); }
  function timesTxt(n) { return n + "×"; }

  P.push(
    // 통계
    [/^(\d+)회$/, function (n) { return timesTxt(n); }],
    [/^조정 제안 (\d+)개$/, function (n) { return plural(n, "suggestion", "suggestions"); }],
    [/^최근 (\d+)일 기록 시간 합계 (.+) · 조정 제안 (\d+)개$/, function (d, t, n) { return "Last " + d + " days · time logged " + I.sub(t) + " · " + plural(n, "suggestion", "suggestions"); }],
    [/^전체 기간 기록 시간 합계 (.+) · 조정 제안 (\d+)개$/, function (t, n) { return "All time · time logged " + I.sub(t) + " · " + plural(n, "suggestion", "suggestions"); }],
    [/^지정 (.+?)(?: · 실측 평균 (.+))?$/, function (a, b) { return "Planned " + I.sub(a) + (b ? " · measured avg " + I.sub(b) : ""); }],
    [/^완료 (\d+)회 \(실측 (\d+) · 지정시간 (\d+)\)(?: · 총 (.+))?$/, function (n, m, p, tot) {
      return "Done " + n + "× (measured " + m + " · planned " + p + ")" + (tot ? " · total " + I.sub(tot) : "");
    }],
    [/^([+−])(.+?) \(([+−]?\d+%)\)$/, function (s, d, pct) { return s + I.sub(d) + " (" + pct + ")"; }],
    [/^(돼요)? ?— 최근 (\d+)회 중 (\d+)회, 보통 (.+) 걸려요\.$/, function (x, tot, cnt, med) {
      return (x ? " " : "") + "— " + cnt + " of your last " + tot + " runs; usually about " + I.sub(med) + ".";
    }],
    [/^(.+)으로 조정$/, function (t) { return "Adjust to " + I.sub(t); }],
    [/^(새 기준|실측) (\d+)\/(\d+)회 모으는 중$/, function (k, a, b) { return (k === "새 기준" ? "New baseline" : "Measured") + " " + a + "/" + b + " · collecting"; }],
    [/^(\d+)회(?: · 마지막 (\d+\/\d+))?$/, function (n, last) { return timesTxt(n) + (last ? " · last " + last : ""); }],

    // 기록
    [/^(\d+)월 (\d+)일 \(([일월화수목금토])\)$/, function (m, d, w) { return WDN[w] + ", " + mon(m) + " " + d; }],
    [/^(\d+)년 (\d+)월 \((\d+)\)$/, function (y, m, n) { return mon(m) + " " + y + " (" + n + ")"; }],
    [/^저장하지 않은 변경 (\d+)개 \(노란 테두리\)$/, function (n) { return plural(n, "unsaved change", "unsaved changes") + " (yellow border)"; }],
    [/^(?:(\d+)일 완료)?(?: · )?(?:(\d+)일 해제)? 저장했어요$/, function (a, r) {
      var parts = [];
      if (a) parts.push(dayTxt(a) + " checked");
      if (r) parts.push(dayTxt(r) + " unchecked");
      return "Saved: " + parts.join(" · ");
    }],
    [/^"(.*)" 완료 기록이 지워져요\.$/, function (n) { return "The completion record for “" + n + "” will be erased."; }],
    [/^"(.*)" \((.+)\) 기록이 지워져요\.$/, function (n, d) { return "The record for “" + n + "” (" + d + ") will be erased."; }],
    [/^시간을 (.+)으로 조정했어요$/, function (t) { return "Time adjusted to " + I.sub(t); }],
    [/^지금 시간을 유지해요\. 새 기록 (\d+)회가 쌓이면 다시 살펴볼게요$/, function (n) { return "Keeping the current time. We'll look again after " + n + " new records."; }],

    // 지인
    [/^내 지인 \((\d+)\)$/, function (n) { return "My friends (" + n + ")"; }],
    [/^· (.+) 갱신$/, function (t) { return "· updated " + t; }],
    [/^성경 (.+?) · (\d+)P · 🔥 (\d+)일(?: · 오늘 (\d+\/\d+))?$/, function (b, p, s, t) {
      return "Bible " + I.sub(b) + " · " + p + "P · 🔥 " + dayTxt(s) + (t ? " · today\u00a0" + t : "");
    }],
    [/^✨ (.+?)( 외 \d+)? · 칭찬해 보세요$/, function (l, more) { return "✨ " + I.sub(l) + (more ? " + " + more.replace(/[^\d]/g, "") + " more" : "") + " · send some praise"; }],
    [/^✨ (.+) · 칭찬하기$/, function (l) { return "✨ " + I.sub(l) + " · Send praise"; }],
    [/^🔥 (\d+)일 연속 달성$/, function (n) { return "🔥 " + n + "-day streak"; }],
    [/^(\d+)일 연속이라니, 정말 대단해요!$/, function (n) { return n + " days in a row — amazing!"; }],
    [/^📖 새 권 · (.+)$/, function (b) { return "📖 New book · " + I.sub(b); }],
    [/^(.+) 시작을 축하해요!$/, function (b) { return "Congrats on starting " + I.sub(b) + "!"; }],
    [/^(.+)님과 지인을 끊을까요\?$/, function (n) { return "Remove " + n + " as a friend?"; }],
    [/^🎀 (.+)님께$/, function (n) { return "🎀 To " + n; }],
    [/^💌 (.+)님께 보냈어요$/, function (n) { return "💌 Sent to " + n; }],
    [/^하루에 한 사람에게 최대 (\d+)번\(직접 쓴 문장 포함\) · 오늘 (\d+\/\d+)$/, function (m, u) { return "Up to " + m + " a day per person (including your own words) · today " + u; }],
    [/^오늘 (.+?)\/(\d+) \(문구·직접 쓴 문장 합쳐서\)$/, function (u, m) { return "Today " + u + "/" + m + " (preset + own words combined)"; }],
    [/^(\d+)\/(\d+) \(([일월화수목금토])\)( · 오늘)?$/, function (m, d, w, t) { return WDN[w] + " " + m + "/" + d + (t ? " · Today" : ""); }],
    [/^(오전|오후) (\d+):(\d+)$/, function (ap, h, m) { return h + ":" + m + " " + (ap === "오전" ? "AM" : "PM"); }],
    [/^(\d+)자까지 보낼 수 있어요$/, function (n) { return "Up to " + n + " characters"; }],
    [/^지인 요청이 (\d+)건 와 있어요 · 지인 탭$/, function (n) { return plural(n, "friend request", "friend requests") + " waiting · Friends tab"; }],
    [/^💌 새 응원 (\d+)개가 왔어요$/, function (n) { return "💌 " + plural(n, "new cheer", "new cheers") + " arrived"; }],

    // 실행(▶)
    [/^(.+) · 시간 초과$/, function (t) { return I.sub(t) + " · Over time"; }],
    [/^(\d+)\/(\d+)개 항목을 마쳤어요$/, function (a, b) { return "Finished " + a + " of " + b + " items"; }],
    [/^"(.+)"으로 이동했어요$/, function (n) { return "Moved to “" + n + "”"; }]
  );

  // 이모지로 시작하는 문장: "이모지 + 한글" → 이모지 + 번역(번역이 없으면 건너뜀). 다른 패턴이 먼저 맞도록 맨 끝에 둔다.
  P.push([/^([^\s가-힣A-Za-z0-9]+) (.+)$/, function (e, rest) { var t = I.sub(rest); return t === rest ? null : e + " " + t; }]);

  I.register(D, P, CTX);
  I.start();
})();
