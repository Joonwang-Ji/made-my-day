// Made My Day — 영어 모드 전용 3차 보충 사전: 리뷰 화면 문구, 성경 책장·아바타·축하 화면·보상 문구.
// i18n-en.js(기본 사전)와 i18n-en-bible.js 뒤에 불러온다. 한국어 모드에서는 아무 것도 하지 않는다.
(function () {
  "use strict";
  var I = window.MMD_I18N;
  if (!I || I.lang !== "en") return;
  var MON = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  var MON3 = MON.map(function (m) { return m.slice(0, 3); });
  function num(n) { return String(n); }
  function plural(n, a, b) { return n + " " + (+n === 1 ? a : b); }

  var D = {
    // ---- 리뷰 ----
    "주간 리뷰": "Weekly review", "월간 리뷰": "Monthly review",
    "이번 주 한 줄": "This week in a line", "이번 달 한 줄": "This month in a line", "올해 한 줄": "This year in a line",
    "잘하고 있어요": "What's going well", "응원 한마디": "A word of cheer", "전문가 한마디": "Expert insight",
    "이번 달 하이라이트": "This month's highlights", "올해의 하이라이트": "This year's highlights",
    "다음 달을 위해": "For next month", "새해를 위해": "For the new year",
    "작년 이맘때와 비교": "Compared with this time last year",
    "자세히 보기": "Details",
    "요일별 달성률": "Rate by weekday", "카테고리별 달성률": "Rate by category",
    "주차별 달성률 흐름": "Rate by week", "달별 달성률 흐름": "Rate by month",
    "언제 많이 했나요": "When did you do the most?", "(완료한 시각 기준)": "(by completion time)",
    "완료한 시각은 오늘부터 기록돼요. 며칠 쌓이면 아침·오후·저녁 중 언제 많이 했는지 보여드릴게요.": "Completion times are recorded from today on. After a few days, I'll show whether you do more in the morning, afternoon or evening.",
    "이것도 보기": "See also",
    "아침 4~12시 · 오후 12~18시 · 저녁 18시 이후": "Morning 4 am–12 pm · Afternoon 12–6 pm · Evening after 6 pm",
    "이번 주는 예정된 항목이 없었어요.": "No items were scheduled this week.",
    "이번 달은 예정된 항목이 없었어요.": "No items were scheduled this month.",
    "이어서 2번 이상 쉰 항목": "Items skipped 2+ times in a row",
    "없어요 — 잘 이어 갔어요 🙂": "None — you kept it going 🙂",
    "시작 전 항목": "Not-started items",
    "시작 전·불시 항목, 쉬는 날은 달성률에서 빠져요. 오늘이 기간에 들어 있으면 오늘 아직 못 한 항목은 세지 않아요.": "Not-started and anytime items, and rest days, are left out of the rate. If today is in the period, items you haven't done yet today aren't counted.",
    "리뷰를 만들지 못했어요": "Couldn't create the review",
    "review-data.js 파일이 있어야 리뷰를 볼 수 있어요": "The review-data.js file is needed to view reviews",
    "이번 주 리뷰가 도착했어요": "Your weekly review has arrived",
    "주간 리뷰가 꺼져 있거나 아직 도착한 리뷰가 없어요.": "Weekly reviews are off, or none has arrived yet.",
    "월간 리뷰가 꺼져 있거나 아직 도착한 리뷰가 없어요.": "Monthly reviews are off, or none has arrived yet.",
    "올해 돌아보기는 12월 31일 저녁에 도착해요. (월간 리뷰를 켜 둔 경우)": "Your year in review arrives on the evening of December 31. (If monthly reviews are on)",
    // ---- 성경 책장 / 성취 ----
    "완료 ✓": "Done ✓", "잠김": "Locked",
    "🔒 아직 열리지 않았어요": "🔒 Not unlocked yet", "앞의 권들을 먼저 완주해보세요": "Finish the earlier books first",
    "← 목록으로": "← Back to list", "아직 시작 전이에요": "Not started yet",
    "아직 등장한 인물이 없어요": "No people have appeared yet",
    "획득": "Earned",
    "아직 세부 사건이 채워지지 않았어요 — 다음 업데이트에서 이어집니다.": "The details haven't been filled in yet — coming in the next update.",
    // ---- 아바타 ----
    "피부색": "Skin tone", "표정": "Expression", "머리색": "Hair color", "옷 색": "Clothes color",
    "(기본 옷 · 앞치마 등에 적용)": "(applies to basic clothes, aprons, etc.)",
    "· 성경 한 권을 마칠 때마다 하나씩 늘어나요": "· One more unlocks each time you finish a Bible book",
    "바로 착용": "Wear now", "나중에 고를게요": "Choose later", "착용했어요": "Equipped",
    // ---- 축하 / 보상 ----
    "장면 완성": "Scene complete", "새 마일스톤": "New milestone",
    "정말 대단해요 — 자신에게 특별한 선물을 해보는 건 어때요?": "Amazing — how about treating yourself to something special?",
    "오늘의 선물이 도착했어요": "Today's gift has arrived", "오늘 루틴을 잘 해냈어요. 열어볼까요?": "You did great with today's routine. Shall we open it?",
    "선물을 열고 있어요…": "Opening your gift…", "오늘의 선물은 이미 열었어요": "You already opened today's gift", "오늘의 보너스!": "Today's bonus!",
    "이번 주 보상이 열렸어요": "This week's reward is open", "지금 기록하기": "Record it now",
    "몇 달간 쌓아온 결실": "The fruit of months of effort",
    "정말 대단해요. 오랜 시간 흔들림 없이 꾸준히 해내셨어요 — 이번엔 크게, 나에게 선물해보는 건 어때요?": "Amazing. You've stayed steady for a long time without wavering — this time, how about a big gift for yourself?",
    "이번엔 어떻게 나에게 보상할까요? 자유롭게 적어보세요": "How will you reward yourself this time? Write freely",
    "저장하기": "Save", "나중에 기록할게요": "I'll record it later",
    "기록했어요": "Saved", "기록했어요 🎁": "Saved 🎁", "기록했어요 🎉": "Saved 🎉",
    "아직 열린 보상이 없어요": "No open rewards yet", "탭해서 기록하기": "Tap to record",
    "꾸준히 몇 달 가까이 애썼어요. 크게 하나 해보는 거 어때요?": "You've worked steadily for months. How about doing something big?",
    "이번 주도 잘 보냈어요. 어떤 보상을 원하시나요?": "You had another good week. What reward would you like?",
    "☕ 커피 한 잔": "☕ A cup of coffee", "🍫 간식": "🍫 A snack", "🎵 좋아하는 음악 듣기": "🎵 Listen to favorite music",
    "📱 여유시간 30분": "📱 30 minutes of free time", "🚶 산책 15분": "🚶 15-minute walk",
    "📖 책 한 챕터": "📖 One chapter of a book", "🎬 짧은 영상 한 편": "🎬 A short video", "🎧 좋아하는 음악": "🎧 Favorite music",
    "🍽️ 맛있는 외식": "🍽️ A nice meal out", "🛍️ 갖고 싶던 물건": "🛍️ Something I've wanted",
    "🎉 하루 온전히 쉬기": "🎉 A whole day of rest", "💆 마사지·휴식": "💆 Massage / rest"
  };

  function ampm(part) { return /^(새벽|아침|오전)$/.test(part) ? "AM" : "PM"; }
  function timeTxt(part, h, m) { return h + (m ? ":" + (+m < 10 ? "0" + (+m) : m) : ":00") + " " + ampm(part); }

  var P = [
    // 시각: "저녁 8시", "오전 7시 30분", 날짜 앞붙임 "9/27(일) 저녁 8시"
    [/^(?:(.+?) )?(새벽|아침|오전|오후|저녁|밤) (\d+)시(?: (\d+)분)?$/, function (d, part, h, m) {
      var t = timeTxt(part, h, m);
      return d ? I.sub(d) + " " + t : t;
    }],
    [/^마지막 날 (.+)$/, function (t) { return "Last day · " + I.sub(t); }],
    [/^다음 (주간|월간) 리뷰는 (.+)에 도착해요$/, function (k, w) { return "Next " + (k === "주간" ? "weekly" : "monthly") + " review arrives " + I.sub(w); }],
    [/^(\d+)주차$/, function (n) { return "Week " + n; }],
    [/^(\d{4})년 돌아보기$/, function (y) { return y + " in review"; }],
    [/^(\d{4})년 돌아보기가 도착했어요$/, function (y) { return "Your " + y + " year in review has arrived"; }],
    [/^(\d+)월 리뷰가 도착했어요$/, function (m) { return "Your " + MON[+m - 1] + " review has arrived"; }],
    [/^(\d{4})년 (\d+)월$/, function (y, m) { return MON3[+m - 1] + " " + y; }],
    [/^쉬는 날 (\d+)일, 시작 전·불시 항목은 달성률에서 빠져요\. 지난달·작년 비교는 그 달에 기록한 날이 충분할 때만 보여요\.$/, function (n) {
      return plural(n, "rest day", "rest days") + ". Not-started and anytime items are left out of the rate. Comparisons with last month and last year only show when that month has enough recorded days.";
    }],
    [/^(\d+)번 연속 · 마지막 (.+)$/, function (n, d) { return n + " in a row · last " + I.sub(d); }],
    [/^(\d+)번$/, function (n) { return n + "×"; }],
    // ---- 성경 책장 / 성취 ----
    [/^누적 ([\d,]+)P · 성경 (.+)$/, function (p, b) { return p + "P total · Bible " + I.sub(b); }],
    [/^📖 성경 (.+?) · (.+)$/, function (a, b) { return "📖 Bible " + I.sub(a) + " · " + b; }],
    [/^성경 여정 · (\d+)\/(\d+)권$/, function (a, b) { return "Bible journey · " + a + "/" + b; }],
    [/^([\s\S]+?)\n메달을 탭하면 말씀이 열려요$/, function (r) { return r + "\nTap a medal to open the verse"; }],
    [/^(.+) · 진행 중$/, function (t) { return I.sub(t) + " · In progress"; }],
    [/^🔒 ([\d,]+)P 더 모으면 열려요$/, function (n) { return "🔒 Collect " + n + "P more to unlock"; }],
    [/^(.+) 완주$/, function (b) { return b + " complete"; }],
    [/^🔒 (.+)을\(를\) 완주하면 열려요 · ([\d,]+)P 남았어요$/, function (b, n) { return "🔒 Finish " + b + " to unlock · " + n + "P to go"; }],
    [/^(.+) 완주 선물$/, function (b) { return b + " completion gift"; }],
    [/^(.+) 아이템 · (.+)$/, function (s, d) { return s + " item · " + d; }],
    // ---- 축하 / 보상 ----
    [/^(\d+)일 연속 달성!$/, function (n) { return n + "-day streak!"; }],
    [/^(?:평일 (\d+)일 중 (\d+)일 성공! )?주말에 나에게 줄 보상을 정해보세요\.$/, function (c, s) {
      return (c ? s + " of " + c + " weekdays succeeded! " : "") + "Pick a reward to give yourself this weekend.";
    }],
    [/^([\d,]+)P 돌파!$/, function (n) { return n + "P reached!"; }],
    [/^([\d,]+)P 돌파 보상!$/, function (n) { return n + "P reward!"; }],
    [/^🏆 ([\d,]+)P 돌파$/, function (n) { return "🏆 " + n + "P reached"; }],
    [/^🔥 (\d+)일 연속 배지$/, function (n) { return "🔥 " + n + "-day streak badge"; }],
    [/^🎀 주간 보상 · (.+)$/, function (p) { return "🎀 Weekly reward · " + I.sub(p); }],
    [/^이번 주 작은 보상 · (.+)$/, function (p) { return "This week's small reward · " + I.sub(p); }],
    [/^열린 보상 (\d+)개가 기다리고 있어요 — 탭해서 기록하기$/, function (n) { return plural(n, "open reward is", "open rewards are") + " waiting — tap to record"; }],
    [/^오늘은 기준 (\d+)% 달성이 어려워요$/, function (n) { return "Reaching " + n + "% today isn't possible"; }],
    [/^(\d+)개만 더 하면 기준 (\d+)% 달성이에요$/, function (n, p) { return "Just " + plural(n, "more item", "more items") + " to reach " + p + "%"; }]
  ];

  var CTX = [
    { sel: ".rv-day-lab", map: { "월": "Mon", "화": "Tue", "수": "Wed", "목": "Thu", "금": "Fri", "토": "Sat", "일": "Sun" } },
    { sel: ".rv-catname", map: { "아침": "Morning", "오후": "Afternoon", "저녁": "Evening" } },
    { sel: ".av-tab", map: { "얼굴": "Face", "머리": "Hair", "머리 위": "Headwear", "안경": "Glasses", "얼굴 소품": "Face extras", "옷": "Clothes", "어깨 동무": "Buddy", "배경": "Background", "테두리": "Border" } },
    { sel: ".section-label", map: { "옷": "Clothes" } },
    { sel: ".reward-idea-chip", map: {
      "아담": "Adam", "하와": "Eve", "가인": "Cain", "아벨": "Abel", "노아": "Noah", "셈": "Shem", "함": "Ham", "야벳": "Japheth",
      "아브라함": "Abraham", "이삭": "Isaac", "에서": "Esau", "야곱": "Jacob", "요셉": "Joseph", "유다": "Judah", "다윗": "David",
      "솔로몬": "Solomon", "마리아": "Mary",
      "흙으로 지음받은 첫 사람": "The first man, formed from the dust",
      "아담의 아내, 모든 산 자의 어머니": "Adam's wife, the mother of all the living",
      "아담의 맏아들": "Adam's firstborn son", "아담의 둘째 아들": "Adam's second son",
      "아담의 10대손, 하나님과 동행한 의인": "Adam's descendant in the tenth generation, a righteous man who walked with God",
      "노아의 아들": "A son of Noah",
      "셈의 후손, 믿음의 조상으로 부름받음": "A descendant of Shem, called to be the father of faith",
      "아브라함과 사라의 아들, 약속으로 태어난 자녀": "Son of Abraham and Sarah, the child born by promise",
      "이삭의 맏아들": "Isaac's firstborn son", "이삭의 둘째 아들, 훗날 이스라엘": "Isaac's second son, later called Israel",
      "야곱의 열한째 아들, 라헬의 첫 아들": "Jacob's eleventh son, Rachel's firstborn",
      "야곱의 넷째 아들, 다윗 가문의 뿌리": "Jacob's fourth son, the root of David's line",
      "이새의 아들, 이스라엘의 왕": "Son of Jesse, king of Israel",
      "다윗의 아들, 성전을 지은 왕": "David's son, the king who built the temple",
      "요셉의 아내, 예수님의 어머니": "Joseph's wife, the mother of Jesus"
    } }
  ];

  // ---- 4차 보완 ----
  I.register({
    "이 항목이 언제부터 있었는지 — 놓친 항목 통계 계산의 기준일": "When this item started — the base date for missed-item stats",
    // 토스트·안내 문구 (가져오기/내보내기/삭제/알람/지인)
    "JSON 형식이 아니에요": "That doesn't look like JSON",
    "가져올 내용이 없어요": "There's nothing to import",
    "이 앱에서 내보낸 파일이 아닌 것 같아요": "This doesn't look like a file exported from this app",
    "파일로 저장했어요": "Saved as a file",
    "파일을 읽지 못했어요": "Couldn't read the file",
    "가져왔어요": "Imported",
    "복사했어요": "Copied",
    "복사에 실패했어요. 직접 선택해서 복사해주세요": "Couldn't copy. Please select the text and copy it yourself",
    "항목과 지난 기록을 모두 삭제했어요": "Deleted the item and all its past records",
    "항목을 삭제했어요. 지난 기록과 평가는 그대로 남아요": "Item deleted. Its past records and evaluation stay as they were",
    "모든 알람을 껐어요": "All alarms turned off",
    "알람을 다시 켰어요": "Alarms turned back on",
    "한 번 더 눌러 끄기": "Tap again to turn off",
    "한 번 더 눌러 바꾸기": "Tap again to change",
    "거절했어요": "Declined",
    "요청을 취소했어요": "Request canceled",
    "🍿 간식": "🍿 A snack",
    // ---- 지인 아바타 확대 보기 ----
    "지인 아바타": "Friend's avatar", "이름 없음": "No name", "아직 공개 전이에요": "Not shared yet",
    "아직 아바타를 공개하지 않았어요.": "This avatar isn't shared yet.",
    "💌 응원 보내러 가기": "💌 Send a cheer"
  }, [
    [/^(\d+)개 추가했어요 \((\d+)개는 형식이 안 맞아 건너뜀\)$/, function (a, b) { return a + " added (" + b + " skipped: wrong format)"; }],
    [/^매년 반복 공휴일\((.+)\)$/, function (r) { return "Yearly holiday: " + I.sub(r); }]
  ], [
    { sel: ".bc-sec", map: { "성경": "Scripture" } }
  ]);

  I.register(D, P, CTX);

  // ---- 쉬어가기(streak pass) ----
  var PASS_D = {
    "☕ 쉬어가기": "☕ Streak pass", "쉬어가기": "Streak pass", "쉬어가기 보기": "Open streak pass",
    "기준에 못 미친 날의 스트릭을 지켜 주는 안전망이에요. 개수는 모으는 방식이라 아껴 쓰는 게 좋아요.": "A safety net that protects your streak on a day that fell short. You collect them over time, so it's best to use them sparingly.",
    "쉬어가기 사용됨": "Pass used", "쓸 수 있어요": "You can use one", "필요 없어요": "Not needed", "해당 없음": "Not applicable", "쓸 수 없어요": "Can't use",
    "연속일이 그대로 이어져요": "Your streak carries on",
    "오늘 기준을 넘기면 쓰지 않은 것으로 돌아와요": "If you pass the requirement today, it counts as not used",
    "이미 기준을 달성했어요": "You already met the requirement",
    "예정된 항목이 없거나 쉬는 날이에요": "Nothing was due, or it's a rest day",
    "바로 앞이나 뒤 날에 이미 썼어요 (연속 이틀은 안 돼요)": "Already used the day before or after (not two days in a row)",
    "이번 주에 이미 썼어요 (한 주에 한 번)": "Already used this week (once a week)",
    "보유한 쉬어가기가 없어요": "You have no streak passes",
    "취소하기": "Cancel pass", "쉬어가기 쓰기": "Use a streak pass", "쓰기": "Use",
    "얻는 방법": "How to earn", "쓰는 규칙": "Rules for using", "내역": "History",
    "연속 7일 성공할 때마다 1개": "1 for every 7 successful days in a row",
    "매월 1일에 1개": "1 on the 1st of each month",
    "가득 차면 더 모이지 않아요": "Once full, no more pile up",
    "오늘이나 어제, 기준에 못 미친 날만 써요": "Only for today or yesterday, on a day that fell short",
    "놓친 항목이 2개 이하일 때만 써요": "Only when you missed 2 items or fewer",
    "한 주(월~일)에 한 번, 연속 이틀은 안 돼요": "Once per week (Mon–Sun), never two days in a row",
    "쓴 날은 연속일이 +1 되진 않지만 끊기지도 않아요": "A pass day doesn't add to your streak, but doesn't break it either",
    "아직 내역이 없어요": "No history yet",
    "시작 선물 +1": "Starting gift +1", "새 달 선물 +1": "New-month gift +1", "연속 7일 성공 +1": "7-day streak +1", "쉬어가기 사용 −1": "Pass used −1",
    "시작 선물 (가득 차서 못 담았어요)": "Starting gift (full, not added)", "새 달 선물 (가득 차서 못 담았어요)": "New-month gift (full, not added)",
    "연속 7일 성공 (가득 차서 못 담았어요)": "7-day streak (full, not added)",
    "쉬어가기를 쓸까요?": "Use a streak pass?", "쉬어가기를 취소할까요?": "Cancel the streak pass?",
    "1개를 돌려받고, 그날은 다시 기준 미달로 계산돼요": "You get 1 back, and that day goes back to counting as short of the requirement.",
    "지금은 쓸 수 없어요": "You can't use one right now",
    "쉬어가기를 썼어요": "Streak pass used",
    "쉬어가기를 취소했어요 · 1개를 돌려받았어요": "Streak pass canceled · you got 1 back",
    "기준을 넘겨서 쉬어가기를 쓰지 않은 것으로 돌려놨어요": "You passed the requirement, so the streak pass is back as unused",
    "☕ 오늘 쉬어가기 중": "☕ Streak pass active today",
    "쉬어가기 중 · 스트릭은 그대로예요": "Pass active · your streak is safe",
    "☕ 쉬어가기를 쓴 날 (연속일은 이어지고, 성공일에는 세지 않아요)": "☕ Streak pass day (your streak carries on; not counted as a success day)",
    "☕ 이 날은 쉬어가기를 썼어요 (연속일은 이어져요)": "☕ You used a streak pass on this day (your streak carries on)"
  };
  var PASS_P = [
    [/^(어제|오늘) · (.+)$/, function (t, rest) { var r = I.sub(rest); return r === rest ? null : (t === "어제" ? "Yesterday" : "Today") + " · " + r; }],
    [/^놓친 항목 (\d+)개 · 쓰면 연속 (\d+)일이 이어져요$/, function (n, k) { return plural(n, "item", "items") + " missed · using one keeps a " + k + "-day streak"; }],
    [/^놓친 항목이 (\d+)개예요 \((\d+)개 이하일 때만 쓸 수 있어요\)$/, function (n, m) { return plural(n, "item", "items") + " missed (you can use one only if you missed " + m + " or fewer)"; }],
    [/^보유 (\d+)개 · 최대 (\d+)개$/, function (n, m) { return n + " held · max " + m; }],
    [/^다음 적립까지 연속 (\d+)일 \(지금 연속 (\d+)일\)$/, function (n, k) { return "Next one in " + plural(n, "more day", "more days") + " of streak (now " + k + ")"; }],
    [/^놓친 항목 (\d+)개 · 연속 (\d+)일이 이어져요 · 보유 (\d+)개 → (\d+)개$/, function (n, k, a, b) { return plural(n, "item", "items") + " missed · keeps a " + k + "-day streak · you have " + a + " → " + b; }],
    [/^☕ 쉬어가기 (\d+)$/, function (n) { return "☕ " + plural(n, "streak pass", "streak passes"); }],
    [/^☕ 어제는 기준 (\d+)%에 못 미쳤어요 \(놓친 항목 (\d+)개\)\. 쉬어가기로 연속 (\d+)일을 지킬 수 있어요$/, function (th, n, k) {
      return "☕ Yesterday fell short of the " + th + "% requirement (" + plural(n, "item", "items") + " missed). A streak pass keeps your " + k + "-day streak."; }]
  ];
  I.register(PASS_D, PASS_P);

  // ---- 21차: 징검다리(Stepping Stone) · 쉼표(Pause) · 당일 쉬는 날 횟수 · 백업 · 되돌리기 ----
  var REST2_D = {
    "징검다리 · 쉼표": "Stepping Stone · Pause",
    "🪨 징검다리": "🪨 Stepping Stone", "⏸️ 쉼표": "⏸️ Pause", "징검다리": "Stepping Stone", "쉼표": "Pause",
    "징검다리는 한두 개 모자란 날을 성공으로 이어 주고, 쉼표는 손 쓸 수 없는 날 하루를 통째로 쉬게 해 줘요. 둘 다 모으는 방식이라 아껴 쓰는 게 좋아요.":
      "A Stepping Stone carries a day an item or two short as a success, and a Pause lets you rest a whole day you just can't manage. You collect both over time, so use them sparingly.",
    "대부분 했는데 한두 개 모자란 날, 그날을 성공으로 이어 줘요.": "For a day you did most things but fell an item or two short — it counts that day as a success.",
    "아프거나 손 쓸 수 없는 날, 하루를 통째로 쉬어요.": "For a day you're sick or simply can't — rest the whole day.",
    "징검다리 사용됨": "Stepping Stone used", "이 날은 성공으로 인정돼요": "This day counts as a success",
    "징검다리 쓰기": "Use a Stepping Stone", "쉼표를 쓴 날이에요": "You used a Pause on this day",
    "보유한 징검다리가 없어요": "You have no Stepping Stones",
    "쉼표 사용됨": "Pause used", "스트릭은 그대로, 이 날은 포인트 0이에요": "Your streak is kept; this day earns 0 points",
    "하루를 통째로 쉬어요 · 연속일은 끊기지 않아요": "Rest the whole day · your streak won't break",
    "아파요": "Sick", "너무 바빠요": "Too busy", "기타": "Other",
    "하루 한 줄 (선택)": "One line for the day (optional)",
    "쓴 날은 항목을 체크할 수 없어요": "You can't check items on a Pause day",
    "쉼표 쓰기": "Use a Pause",
    "징검다리를 쓴 날이에요": "You used a Stepping Stone on this day", "이미 쉬는 날이에요": "It's already a rest day",
    "예정된 항목이 없는 날이에요": "Nothing was due that day", "보유한 쉼표가 없어요": "You have no Pauses",
    "기준까지 모자란 항목이 2개 이하일 때만 써요": "Only when you're 2 items or fewer short of the requirement",
    "쓴 날은 성공으로 인정돼 연속일이 +1 돼요": "That day counts as a success, so your streak grows by 1",
    "매월 1일에 1개 (최대 2개까지 모여요)": "1 on the 1st of each month (you can hold up to 2)",
    "쓴 날은 연속일이 끊기지도 늘지도 않아요": "Your streak neither breaks nor grows that day",
    "쓴 날은 체크할 수 없고 포인트는 0이에요": "You can't check items that day, and it earns 0 points",
    "미리 아는 휴일·여행은 쉬는 날로 정하세요": "For holidays or trips you know in advance, set a rest day",
    "징검다리 사용 −1": "Stepping Stone used −1", "쉼표 사용 −1": "Pause used −1",
    "징검다리를 쓸까요?": "Use a Stepping Stone?", "징검다리를 취소할까요?": "Cancel the Stepping Stone?",
    "징검다리를 썼어요": "Stepping Stone used", "징검다리를 취소했어요 · 1개를 돌려받았어요": "Stepping Stone canceled · you got 1 back",
    "쉼표를 썼어요 · 푹 쉬어요": "Pause used · get some good rest",
    "쉼표를 취소할까요?": "Cancel the Pause?", "1개를 돌려받고, 그날은 다시 체크할 수 있어요": "You get 1 back, and you can check items that day again.",
    "쉼표를 취소했어요 · 1개를 돌려받았어요": "Pause canceled · you got 1 back",
    "쉼표를 쓴 날은 체크할 수 없어요 (취소는 홈의 ⏸️ 쉼표에서)": "You can't check items on a Pause day (cancel it from ⏸️ Pause on Home)",
    "기준을 넘겨서 징검다리를 쓰지 않은 것으로 돌려놨어요": "You passed the requirement, so the Stepping Stone is back as unused",
    "새 기능 선물로 1개를 드려요": "Here's 1 as a gift for this new feature", "새 달 선물로 1개를 얻었어요": "You got 1 as a new-month gift",
    "연속 7일 성공으로 1개를 얻었어요": "You got 1 for a 7-day streak",
    "대부분 했는데 기준까지 1~2개 모자란 날, 오늘·어제에 쓰면 그날을 성공으로 이어 줘요. 연속 7일 성공할 때마다 1개씩, 최대 3개까지 모여요.":
      "On a day you did most things but were 1–2 items short, use it on today or yesterday and that day counts as a success. You earn 1 for every 7-day streak and can hold up to 3.",
    "아프거나 너무 바빠 손 쓸 수 없는 날, 하루를 통째로 쉬어요. 연속일은 끊기지 않고, 그날은 체크할 수 없고 포인트는 0이에요. 매월 1일에 1개씩, 최대 2개까지 모여요.":
      "On a day you're sick or too busy to manage anything, rest the whole day. Your streak won't break, but you can't check items that day and it earns 0 points. You get 1 on the 1st of each month and can hold up to 2.",
    "징검다리 +1": "Stepping Stone +1", "쉼표 +1": "Pause +1",
    "다음부터 이 알림 보지 않기": "Don't show this notice again",
    "⏸️ 오늘은 쉼표": "⏸️ Pausing today", "🪨 오늘 징검다리 중": "🪨 Stepping Stone today",
    "징검다리 · 쉼표": "Stepping Stones · Pauses", "⏸️ 오늘은 쉼표 · 푹 쉬어요": "⏸️ Pausing today · get some good rest",
    "징검다리 중 · 오늘은 성공으로 인정돼요": "Stepping Stone · today counts as a success",
    "오늘은 쉼표": "Pausing today", "푹 쉬어요 · 스트릭은 그대로예요": "Get some rest · your streak is safe",
    "⏸️ 어제는 기준에 많이 못 미쳤어요. 아팠거나 손 쓸 수 없었다면 쉼표로 연속일을 지킬 수 있어요":
      "⏸️ Yesterday fell well short. If you were sick or couldn't manage, a Pause keeps your streak.",
    "이번 달 당일·지난 날짜 쉬는 날은 3번을 다 썼어요. 내일 이후 날짜는 그대로 정할 수 있고, 손 쓸 수 없는 날은 쉼표를 써 보세요":
      "You've used all 3 same-day or past-date rest days this month. You can still set future dates, and for a day you can't manage, try a Pause.",
    "오늘은 이미 쉼표를 썼어요": "You already used a Pause today",
    "🪨 징검다리를 쓴 날 (성공일로 인정돼요)": "🪨 Stepping Stone day (counts as a success day)",
    "⏸️ 쉼표를 쓴 날 (연속일은 그대로, 달성률에서 빠져요)": "⏸️ Pause day (streak kept; left out of the rate)",
    "이번 달 달성률은 쉬는 날·쉼표를 뺀, 평가한 날 중 성공한 날의 비율이에요": "This month's rate is your success days out of the days evaluated, leaving out rest days and Pauses",
    "🪨 이 날은 징검다리를 썼어요 (성공으로 인정돼요)": "🪨 You used a Stepping Stone on this day (counts as a success)",
    "⏸️ 이 날은 쉼표를 썼어요 (체크할 수 없고 포인트는 0이에요)": "⏸️ You used a Pause on this day (no checking; 0 points)",
    "쉼과 안전망": "Rest and safety nets", "쓰지 않았어요": "None used",
    "시작 전·불시 항목, 쉬는 날·쉼표를 쓴 날은 달성률에서 빠져요. 오늘이 기간에 들어 있으면 오늘 아직 못 한 항목은 세지 않아요.":
      "Not-started and anytime items, rest days and Pause days are left out of the rate. If today is in the period, items you haven't done yet today aren't counted.",
    "아직 백업한 적이 없어요": "No backup yet", "마지막 백업 오늘": "Last backup today", "마지막 백업: 오늘": "Last backup: today",
    "되돌리기": "Undo", "되돌렸어요": "Restored"
  };
  var REST2_P = [
    [/^기준까지 (\d+)개 모자라요 · 쓰면 연속 (\d+)일이 돼요$/, function (n, k) { return plural(n, "item", "items") + " short · using one makes a " + k + "-day streak"; }],
    [/^기준까지 (\d+)개 모자라요 \((\d+)개 이하일 때만 쓸 수 있어요\)$/, function (n, m) { return plural(n, "item", "items") + " short (only usable when " + m + " or fewer short)"; }],
    [/^기준까지 (\d+)개 모자라요 · 연속 (\d+)일이 돼요 · 보유 (\d+)개 → (\d+)개$/, function (n, k, a, b) { return plural(n, "item", "items") + " short · makes a " + k + "-day streak · you have " + a + " → " + b; }],
    [/^(아파요|너무 바빠요|기타) · 스트릭은 그대로, 이 날은 포인트 0이에요$/, function (w) { return I.sub(w) + " · your streak is kept; this day earns 0 points"; }],
    [/^체크해 둔 (\d+)개의 포인트 (\d+)P가 빠져요$/, function (n, p) { return "The " + p + "P from " + plural(n, "checked item", "checked items") + " will be removed"; }],
    [/^다음 적립까지 (\d+)일 더 성공하면 돼요$/, function (n) { return "Next one after " + plural(n, "more successful day", "more successful days"); }],
    [/^다음 적립: (\d+월 \d+일)$/, function (d) { return "Next one: " + I.sub(d); }],
    [/^🪨 징검다리 (\d+)$/, function (n) { return "🪨 " + plural(n, "Stepping Stone", "Stepping Stones"); }],
    [/^⏸️ 쉼표 (\d+)$/, function (n) { return "⏸️ " + plural(n, "Pause", "Pauses"); }],
    [/^🪨 어제는 기준까지 (\d+)개 모자랐어요\. 징검다리로 연속 (\d+)일을 이어 갈 수 있어요$/, function (n, k) {
      return "🪨 Yesterday was " + plural(n, "item", "items") + " short. A Stepping Stone keeps it going as a " + k + "-day streak."; }],
    [/^당일 쉬는 날 지정은 이번 달 (\d+)번 남았어요 \(한 달 (\d+)번 · 공휴일 제외\)$/, function (n, m) {
      return "Same-day rest days left this month: " + n + " (" + m + " a month · public holidays don't count)"; }],
    [/^오늘·지난 날짜를 새로 쉬는 날로 정하는 건 한 달에 (\d+)번까지예요 \(이번 달 (\d+)번 남음 · 공휴일은 횟수에서 빠져요\)$/, function (m, n) {
      return "Newly marking today or a past date as a rest day: up to " + m + " a month (" + n + " left this month · public holidays don't count)"; }],
    [/^(\d+)개 추가했어요((?: \(\d+개는 형식이 안 맞아 건너뜀\))?)((?: \(당일·지난 날짜 \d+개는 이번 달 횟수를 넘어서 뺐어요\))?)$/, function (a, inv, bl) {
      var out = a + " added";
      var mi = inv.match(/(\d+)/); if (mi) out += " (" + mi[1] + " skipped: wrong format)";
      var mb = bl.match(/(\d+)/); if (mb) out += " (" + plural(mb[1], "same-day/past date", "same-day/past dates") + " left out: over this month's limit)";
      return out; }],
    [/^⏸️ 이 날은 쉼표를 썼어요 · (.+) \(체크할 수 없고 포인트는 0이에요\)$/, function (w) { return "⏸️ You used a Pause on this day · " + I.sub(w) + " (no checking; 0 points)"; }],
    [/^((?:🪨 징검다리 \d+번|⏸️ 쉼표 \d+번|쉬는 날 \d+일)(?: · (?:🪨 징검다리 \d+번|⏸️ 쉼표 \d+번|쉬는 날 \d+일))*)$/, function (all) {
      return all.split(" · ").map(function (p) {
        var m;
        if ((m = p.match(/^🪨 징검다리 (\d+)번$/))) return "🪨 " + plural(m[1], "Stepping Stone", "Stepping Stones");
        if ((m = p.match(/^⏸️ 쉼표 (\d+)번$/))) return "⏸️ " + plural(m[1], "Pause", "Pauses");
        if ((m = p.match(/^쉬는 날 (\d+)일$/))) return plural(m[1], "rest day", "rest days");
        return p;
      }).join(" · "); }],
    [/^쉬는 날 (\d+)일, 쉼표를 쓴 날, 시작 전·불시 항목은 달성률에서 빠져요\. 지난달·작년 비교는 그 달에 기록한 날이 충분할 때만 보여요\.$/, function (n) {
      return plural(n, "rest day", "rest days") + ", Pause days, and not-started or anytime items are left out of the rate. Comparisons with last month or last year only appear when that month has enough recorded days."; }],
    [/^마지막 백업 (\d+)일 전$/, function (n) { return "Last backup " + plural(n, "day", "days") + " ago"; }],
    [/^마지막 백업: (\d+)일 전 \((\d{4}-\d{2}-\d{2})\)$/, function (n, d) { return "Last backup: " + plural(n, "day", "days") + " ago (" + d + ")"; }],
    [/^‘(.*)’ 항목을 삭제했어요$/, function (nm) { return "Deleted “" + I.sub(nm) + "”"; }]
  ];
  I.register(REST2_D, REST2_P);
  // 위 패턴보다 포괄적인 분할 규칙: "📖 창세기 · 첫째 날, 빛이 있으라" 같은 "A · B" 조합(지인 카드 등)
  I.register(null, [[/^(📖 )?([^·]+?) · (.+)$/, function (ic, b, t) {
    var a = I.sub(b), c = I.sub(t);
    return (a === b && c === t) ? null : (ic || "") + a + " · " + c;
  }]]);
  // ---- 23차: 홈 화면에 앱으로 추가 · 오프라인 · 접근성(화면낭독기용 이름) ----
  I.register({
    "홈 화면에 앱으로 추가하는 방법": "How to add the app to your home screen",
    "홈 화면에 앱으로 추가": "Add to Home Screen",
    "앱 설치": "Install the app",
    "아이폰 · 안드로이드": "iPhone · Android",
    "아이폰 · 아이패드": "iPhone · iPad",
    "안드로이드": "Android",
    "Safari에서": "In Safari",
    "Chrome에서": "In Chrome",
    "삼성 인터넷에서": "In Samsung Internet",
    "Safari로 이 앱 주소를 열어요.": "Open this app's address in Safari.",
    "화면 아래쪽의 공유 버튼을 눌러요.": "Tap the Share button at the bottom of the screen.",
    "공유 버튼 모양": "Share button icon",
    "아이패드는 주소창 오른쪽 위에 있고, 안 보이면 ⋯ 버튼 안에 있어요.": "On iPad it's at the top right by the address bar; if you can't see it, look inside the ⋯ button.",
    "목록을 조금 내려 ‘홈 화면에 추가’를 눌러요.": "Scroll down a little and tap “Add to Home Screen”.",
    "오른쪽 위 ‘추가’를 누르면 끝이에요.": "Tap “Add” at the top right, and you're done.",
    "아이폰의 Chrome 앱에서도 공유 버튼에서 같은 방법으로 추가할 수 있어요.": "In the Chrome app on iPhone, you can add it the same way from the Share button.",
    "홈 화면 아이콘으로 처음 열면 한 번 더 로그인해 주세요. 아이폰은 Safari와 홈 화면 앱의 저장 공간이 따로예요.": "The first time you open it from the home screen icon, please sign in once more. On iPhone, Safari and home screen apps keep separate storage.",
    "지금 설치하기": "Install now",
    "버튼을 누르고 ‘설치’를 고르면 바로 홈 화면에 생겨요.": "Tap the button and choose “Install” — it appears on your home screen right away.",
    "오른쪽 위 ⋮ 메뉴를 눌러요.": "Tap the ⋮ menu at the top right.",
    "‘홈 화면에 추가’ 또는 ‘앱 설치’를 눌러요.": "Tap “Add to Home screen” or “Install app”.",
    "‘설치’(또는 ‘추가’)를 누르면 끝이에요.": "Tap “Install” (or “Add”), and you're done.",
    "아래쪽 ≡ 메뉴를 눌러요.": "Tap the ≡ menu at the bottom.",
    "‘현재 페이지 추가’를 누르고 ‘홈 화면’을 골라요.": "Tap “Add page to” and choose “Home screen”.",
    "홈 화면 아이콘으로 열면 주소창 없이 앱처럼 전체 화면으로 열려요.": "Opened from the home screen icon, it runs full screen like an app, without the address bar.",
    "지금 홈 화면 앱으로 쓰고 계세요 🙂 다른 기기에 추가할 때 아래 방법을 참고하세요.": "You're already using the home screen app 🙂 Use the steps below to add it on another device.",
    "⚠️ 카카오톡 같은 앱 안에서 열려 있어요": "⚠️ This page is open inside another app (like KakaoTalk)",
    "여기서는 홈 화면에 추가할 수 없어요. Safari로 다시 열어 주세요.": "You can't add it to the home screen from here. Please open it again in Safari.",
    "여기서는 홈 화면에 추가할 수 없어요. Chrome으로 다시 열어 주세요.": "You can't add it to the home screen from here. Please open it again in Chrome.",
    "화면 구석의 ⋯ 또는 공유 메뉴에서 ‘Safari로 열기’를 누르면 돼요.": "Tap “Open in Safari” from the ⋯ or Share menu in a corner of the screen.",
    "기본 브라우저로 열기": "Open in browser",
    "주소 복사": "Copy address",
    "주소를 복사했어요 · 브라우저 주소창에 붙여넣어 주세요": "Address copied · paste it into your browser's address bar",
    "이 주소를 복사해 주세요": "Please copy this address",
    "이 브라우저에서는 메뉴에서 직접 추가해 주세요": "In this browser, please add it from the menu",
    "홈 화면에 추가했어요": "Added to your home screen",
    "오프라인 · 연결되면 합쳐서 저장해요": "Offline · will merge and save when you reconnect",
    "서버 연결 확인 중 · 기록은 기기에 먼저 저장돼요": "Checking the connection · changes are saved on this device first",
    "다시 연결됐어요 · 기록을 합쳐서 저장해요": "Back online · merging and saving your records",
    "인터넷에 연결되면 열려요": "It will open once you're connected to the internet",
    "저장 안 된 기록이 있어요 · 로그아웃할까요?": "Some records aren't saved yet · Log out anyway?",
    "뒤로": "Back", "홈으로": "Home", "도움말": "Help", "메모 검색": "Search notes",
    "이전 달": "Previous month", "다음 달": "Next month", "이전 주": "Previous week", "다음 주": "Next week",
    "메뉴": "Menu", "위로 옮기기": "Move up", "아래로 옮기기": "Move down", "항목 복제": "Duplicate item", "카운트다운 시작": "Start countdown"
  }, [
    [/^(.+) 도움말$/, function (t) { return "Help: " + I.sub(t); }],
    [/^(.+) 카운트다운 시작$/, function (c) { return "Start countdown: " + I.sub(c); }]
  ]);
  // ---- 25차: 처음 안내(코치마크) 말풍선 · 도움말 '처음 안내 다시 보기' ----
  I.register({
    "건너뛰기": "Skip", "다음": "Next", "알겠어요": "Got it",
    "날짜를 눌러 보세요": "Tap the date",
    "쉬는 날·징검다리·쉼표를 고르고, 하루 한 줄 메모도 쓸 수 있어요.": "Choose a Rest day, a Stepping Stone or a Pause, and write your “One line a day” note.",
    "나만의 타이틀": "Your own title",
    "타이틀을 누르면 원하는 문구와 이모지로 바꿀 수 있어요.": "Tap the title to change it to any words and emoji you like.",
    "아바타": "Avatar",
    "아바타를 누르면 꾸미기와 성경 진행(메달)을 볼 수 있어요.": "Tap your avatar to dress it up and see your Bible progress (medals).",
    "항목 체크": "Checking items",
    "항목을 누르면 완료로 체크돼요. 체크를 풀 때는 실수하지 않게 한 번 더 물어봐요.": "Tap an item to check it off. To uncheck, you'll be asked once more so you don't do it by mistake.",
    "▶ 순서대로 실행": "▶ Run in order",
    "▶를 누르면 이 카테고리의 오늘 항목을 타이머와 함께 순서대로 진행해요.": "Tap ▶ to go through today's items in this category one by one with a timer.",
    "언제든 다시 볼 수 있어요": "You can see this again anytime",
    "설정 > 사용법·도움말 > 처음 안내 다시 보기에서 이 안내를 다시 볼 수 있어요.": "You can replay this guide from Settings > Help & how to use > Replay the welcome guide.",
    "지난 리뷰": "Past reviews",
    "주간·월간·연간 리뷰는 통계의 ‘리뷰’ 탭에서 다시 볼 수 있어요.": "You can reread your weekly, monthly and yearly reviews in the “Reviews” tab of Stats.",
    "태그로 골라 보기": "Filter by tag",
    "태그를 누르면 그 태그 항목만 모아 봐요. ‘미분류’는 태그를 안 단 항목이에요.": "Tap a tag to see only items with that tag. “Untagged” shows items without any tag.",
    "항목별 보기": "View by item",
    "‘항목별’을 누르면 한 항목의 지난 기록을 달력으로 모아 보고 고칠 수 있어요.": "Tap “By item” to see one item's past records on a calendar and fix them.",
    "지난 날짜 고치기": "Fixing past days",
    "날짜를 골라 그날 못 누른 체크를 나중에 바로잡을 수 있어요.": "Pick a date to fix checks you missed that day.",
    "응원 주고받기": "Sending cheers",
    "지인 카드를 누르면 응원을 주고받는 대화가 열려요.": "Tap a friend's card to open a chat where you send and receive cheers.",
    "초대 코드로 연결": "Connect with an invite code",
    "공개 설정을 켜고 초대 코드를 주고받으면 서로 지인이 돼요.": "Turn on sharing and exchange invite codes to become friends.",
    "처음 안내": "Welcome guide",
    "처음 안내 다시 보기": "Replay the welcome guide",
    "홈 · 통계 · 기록 · 지인": "Home · Stats · Records · Friends"
  });
  // ---- 26차: 설정 > 데이터 '오프라인 준비 상태' · 초과 완료 모양 도움말 ----
  I.register({
    "오프라인 준비 상태": "Offline readiness",
    "인터넷이 안 될 때도 앱을 열 수 있는지 이 기기의 준비 상태를 보여 줘요. 문제가 생겼을 때 원인을 찾는 데 써요.": "Shows whether this device is ready to open the app without the internet. Useful for finding the cause when something goes wrong.",
    "다시 확인": "Check again",
    "다시 확인했어요": "Checked again",
    "오프라인으로 열 준비가 됐어요": "Ready to open offline",
    "아직 오프라인 준비가 덜 됐어요": "Not fully ready for offline yet",
    "이 브라우저에서는 오프라인으로 열 수 없어요.": "This browser can't open the app offline.",
    "인터넷이 될 때 앱을 완전히 닫았다가 다시 열고 10초쯤 기다린 뒤 여기서 다시 확인해 주세요.": "While online, fully close the app, open it again, wait about 10 seconds, then check here again.",
    "오프라인 도우미": "Offline helper",
    "지원 안 함": "Not supported", "작동 중": "Running", "아직 준비 안 됨": "Not ready yet",
    "보관된 앱 파일": "Saved app files",
    "보관된 로그인·저장 도구": "Saved sign-in & sync tools",
    "이 기기에 저장된 기록": "Records saved on this device",
    "로그인 기억": "Remembered sign-in",
    "아직 못 올린 변경": "Changes not yet uploaded",
    "있음": "Yes", "없음": "No",
    "연결되면 합쳐서 올라가요": "Will be merged and uploaded when you reconnect",
    "앱 버전": "App version",
    "준비됐는지 확인하기": "Checking that it's ready",
    "설정 > 데이터 맨 아래 ‘오프라인 준비 상태’에서 이 기기가 인터넷 없이 열 준비가 됐는지 볼 수 있어요. 덜 됐다면 인터넷이 될 때 앱을 완전히 닫았다가 다시 열어 주세요.": "At the bottom of Settings > Data, “Offline readiness” shows whether this device is ready to open without the internet. If it isn't, fully close the app and open it again while you're online.",
    "초과는 어떻게 보이나요": "How overtime looks",
    "유예를 넘겨 마친 날은 금색으로 보이고, 색을 구분하기 어려워도 알 수 있게 모양도 달라요. 홈·기록의 점은 마름모로, 통계의 달력 칸은 오른쪽 위 모서리에 표시가 생겨요.": "Days finished past the grace time show in gold, and their shape differs too so you can tell even without color: dots on Home and Records become diamonds, and calendar cells in Stats get a mark in the top-right corner."
  });
  // ---- 27차: 습관 만들기 ----
  I.register({
    "습관 만들기": "Build a Habit",
    "새 습관 만들기": "New habit",
    "습관 편집": "Edit habit",
    "이름 없는 습관": "Untitled habit",
    "홈에 고정": "Pin to Home",
    "오늘은 쉬는 날": "Rest day today",
    "오늘은 해당 없음": "Not scheduled today",
    "✓ 오늘 완료": "✓ Done today",
    "새 습관을 위해 항목 몇 개를 묶어, 그 묶음만의 연속일을 따로 셀 수 있어요.": "Group a few items for a new habit and keep a separate streak just for that group.",
    "최고 기록": "Best",
    "시작한 지(일)": "Days since start",
    "🎉 목표를 달성했어요": "🎉 Goal reached",
    "묶인 항목이 모두 삭제됐어요. 편집에서 항목을 다시 골라 주세요.": "All grouped items were deleted. Pick items again in Edit.",
    "삭제됨": "Deleted",
    "최근 기록": "Recent days",
    "놓침": "Missed",
    "해당 없음·쉬는 날": "Not scheduled · rest",
    "편집": "Edit",
    "처음부터 다시": "Start over",
    "이름": "Name",
    "묶을 항목": "Items to group",
    "묶인 항목 · 오늘": "Grouped items · today",
    "고른 항목이 그날 모두 끝나면 성공이에요. 요일이 아닌 날·쉬는 날은 건너뛰어요.": "A day counts when all picked items are done. Days they aren't scheduled and rest days are skipped.",
    "불시 · 고를 수 없음": "Anytime · can't pick",
    "아직 항목이 없어요. 먼저 홈에서 루틴 항목을 추가해 주세요.": "No items yet. Add routine items on Home first.",
    "목표 일수": "Goal (days)",
    "안 정함": "None",
    "항목을 바꾸면 지난 날짜도 바뀐 항목으로 다시 계산돼요.": "If you change the items, past days are recalculated with the new items.",
    "연속일은 오늘부터 세요.": "The streak starts counting today.",
    "예: 예배 1시간": "e.g. Worship 1 hour",
    "직접 입력": "Custom",
    "예: 60": "e.g. 60",
    "목표 일수 직접 입력": "Enter goal days",
    "1~365일 사이의 숫자를 적어 주세요.": "Enter a number from 1 to 365.",
    "목표 일수는 1~365일 사이로 적어 주세요": "Goal must be between 1 and 365 days",
    "이름을 적어 주세요": "Please enter a name",
    "항목을 하나 이상 골라 주세요": "Pick at least one item",
    "습관을 만들었어요": "Habit created",
    "홈에 고정했어요": "Pinned to Home",
    "홈에서 내렸어요": "Unpinned from Home",
    "처음부터 다시 셀까요?": "Start counting over?",
    "오늘부터 연속일을 새로 세요. 지난 연속일과 최고 기록은 사라지고 되돌릴 수 없어요": "The streak starts fresh from today. The old streak and best record will be gone and can't be restored",
    "다시 시작": "Start over",
    "오늘부터 다시 세요": "Counting again from today",
    "이 습관을 삭제할까요?": "Delete this habit?",
    "묶음만 지워지고 항목과 기록은 그대로 남아요": "Only the group is removed; your items and records stay",
    "습관을 삭제했어요": "Habit deleted",
    "새 습관이 자리 잡아 가고 있어요. 이대로 이어 가 봐요.": "Your new habit is taking root. Keep it going!"
  }, [
    [/^오늘 (\d+)\/(\d+)$/, function (a, b) { return "Today " + a + "/" + b; }],
    [/^연속 (\d+)일$/, function (n) { return n + "-day streak"; }],
    [/^목표 (\d+)일$/, function (n) { return "Goal: " + n + " days"; }],
    [/^(21|30|66|100)일$/, function (n) { return n + " days"; }],
    [/^(\d+)개 선택$/, function (n) { return n + " selected"; }],
    [/^([\d.]+) 시작$/, function (d) { return "Started " + d; }],
    [/^홈에는 (\d+)개까지 고정할 수 있어요$/, function (n) { return "You can pin up to " + n + " on Home"; }],
    [/^습관은 (\d+)개까지 만들 수 있어요$/, function (n) { return "You can make up to " + n + " habits"; }]
  ]);
  // ---- 28차: 응원 고치기·지우기 ----
  I.register({
    "수정": "Edit",
    "고칠 문장을 적어 보세요": "Edit your message",
    "보낸 응원 고치는 중": "Editing a sent cheer",
    "취소": "Cancel",
    "응원을 고쳤어요": "Cheer edited",
    "한 번 더": "Tap again"
  }, []);
  // ---- 29차: 습관 시작 날짜 · 달성 후 끝내기/이어가기 ----
  I.register({
    "완료": "Done",
    "완료한 습관": "Finished habits",
    "목표 달성 · 다음을 골라 주세요": "Goal reached · choose what's next",
    "이 습관을 끝낼까요, 더 이어갈까요?": "Finish this habit, or keep going?",
    "끝내기": "Finish",
    "이어가기": "Keep going",
    "이어가면 목표 없이 연속일만 계속 세요. 끝내면 완료한 습관으로 보관돼요.": "Keep going to count the streak with no goal. Finish to keep it under Finished habits.",
    "시작까지(일)": "Days to start",
    "해 온 날(일)": "Days kept",
    "묶인 항목": "Grouped items",
    "묶인 항목이 모두 삭제됐어요.": "All grouped items were deleted.",
    "묶인 항목이 모두 삭제됐어요. 편집에서 항목을 다시 골라 주세요.": "All grouped items were deleted. Pick items again in Edit.",
    "마지막 기록": "Last days",
    "다시 이어가기": "Resume",
    "끝내고 보관하기": "Finish and keep",
    "시작 날짜": "Start date",
    "지난 날짜를 고르면 그날부터 앱 기록으로 다시 세요. 앞날을 고르면 그날부터 세요.": "Pick a past date to recount from your app records since then. Pick a future date to start counting that day.",
    "시작 날짜를 골라 주세요": "Please pick a start date",
    "이미 목표를 달성했어요": "You've already reached the goal",
    "목표 없이 계속 세요": "Counting on with no goal",
    "완료한 습관으로 보관했어요": "Kept as a finished habit",
    "이 습관을 끝낼까요?": "Finish this habit?",
    "지금 연속일과 최고 기록을 멈추고 완료한 습관으로 보관해요. 나중에 다시 이어갈 수 있어요": "This freezes the current streak and best record and keeps it as a finished habit. You can resume it later",
    "다시 이어서 세요": "Counting again",
    "새 습관이 자리 잡아 가고 있어요. 이 습관을 끝낼까요, 더 이어갈까요?": "Your new habit is taking root. Finish it, or keep going?"
  }, [
    [/^(\d+)일까지 이어가기$/, function (n) { return "Keep going to " + n + " days"; }],
    [/^🎉 목표 (\d+)일을 달성했어요$/, function (n) { return "🎉 You reached your " + n + "-day goal"; }],
    [/^이어가면 목표가 (\d+)일로 바뀌어요\. 끝내면 완료한 습관으로 보관돼요\.$/, function (n) { return "Keep going to change the goal to " + n + " days. Finish to keep it under Finished habits."; }],
    [/^🌳 완료한 습관 · (.+)$/, function (d) { return "🌳 Finished habit · " + d; }],
    [/^([\d.]+)부터 세요\. 그 전에 체크한 기록은 이 습관에 들어가지 않아요\.$/, function (d) { return "Counting starts " + d + ". Check-ins before then don't count for this habit."; }],
    [/^다음 목표 (\d+)일$/, function (n) { return "Next goal: " + n + " days"; }]
  ]);
  // ---- 30차: 다시 시작(연속일이 끊긴 뒤) ----
  I.register({
    "다시 시작": "Start again",
    "🌅 오늘 다시 1일을 시작해요": "🌅 Day 1 starts again today",
    "🌱 다시 일어서는 중": "🌱 Getting back on track",
    "다시 일어섰어요!": "Back on track!",
    "넘어진 자리에서 다시 일어서는 것이 진짜 습관이에요.": "Getting up where you fell is what makes a real habit.",
    "주님의 자비는 아침마다 새로워요.": "The Lord's mercies are new every morning.",
    "의인은 일곱 번 넘어져도 다시 일어나요.": "The righteous fall seven times and rise again.",
    "주님을 바라는 사람은 새 힘을 얻어 다시 걸어가요.": "Those who hope in the Lord gain new strength and walk on.",
    "뒤에 있는 것은 잊고, 앞에 있는 것을 향해 달려가요.": "Forget what lies behind and run toward what lies ahead.",
    "넘어져도 아주 엎드러지지 않아요. 주님이 손을 붙들어 주세요.": "Though we stumble, we won't fall flat — the Lord holds our hand.",
    "넘어져도 다시 일어나요. 어둠 속에서도 주님이 빛이 되어 주세요.": "When I fall, I will rise. Even in darkness, the Lord is my light.",
    "애가 3:22-23": "Lamentations 3:22-23",
    "잠언 24:16": "Proverbs 24:16",
    "이사야 40:31": "Isaiah 40:31",
    "빌립보서 3:13-14": "Philippians 3:13-14",
    "시편 37:24": "Psalm 37:24",
    "미가 7:8": "Micah 7:8"
  }, [
    [/^지난 연속 (\d+)일은 사라지지 않았어요\.$/, function (n) { return "Your " + n + "-day streak still counts."; }],
    [/^최고 기록 (\d+)일도 그대로예요\.$/, function (n) { return "Your best, " + n + " days, stays too."; }],
    [/^최근 30일 중 (\d+)일 성공$/, function (n) { return n + " of the last 30 days successful"; }],
    [/^다시 (\d+)일 이으면 보너스 \+(\d+)P$/, function (n, p) { return "Keep it up " + n + " days for +" + p + "P"; }],
    [/^끊긴 뒤 다시 (\d+)일을 이었어요\.$/, function (n) { return "You kept it going " + n + " days after the break."; }]
  ]);
  // ---- 31차: 홈 화면 구성 ----
  I.register({
    "홈 화면 구성": "Home layout",
    "보일 것 · 순서": "What to show · Order",
    "↑↓로 순서를 바꾸고, 동그라미를 눌러 켜고 꺼요. 안내와 루틴 카테고리는 끌 수 없어요.": "Use ↑↓ to reorder and tap the circle to turn things on or off. Notices and routine categories can't be turned off.",
    "안내": "Notices",
    "오늘 진행": "Today's progress",
    "루틴 카테고리": "Routine categories",
    "성공 보너스·받을 보상·리뷰 도착 안내는 끌 수 없어요.": "Success-bonus, reward and review notices can't be turned off.",
    "홈에서 카테고리 이름을 누르면 항목 목록을 접고 펼 수 있어요.": "On Home, tap a category name to collapse or expand its items.",
    "기본 구성으로 되돌리기": "Reset to default layout",
    "기본 구성으로 되돌렸어요": "Layout reset to default",
    "구성은 계정에 저장돼 모든 기기에서 같게 보여요.": "Your layout is saved to your account and looks the same on every device.",
    "안내는 하나만 보이고 나머지는 접기": "Show one notice and fold the rest",
    "징검다리·쉼표 안내": "Stepping Stone · Pause notice",
    "다시 시작 카드": "Start-again card",
    "어제 놓친 부분": "Missed yesterday",
    "이번 주 진행": "This week's progress",
    "공휴일 추가 안내": "Holiday reminder",
    "오늘 다 끝낸 카테고리는 접어 두기": "Collapse categories finished today",
    "안내 접기": "Fold notices",
    "모두 보임": "Everything shown",
    "모두 보임 · 안내 하나만": "Everything shown · one notice",
    "보일 것 · 순서 · 접기": "What to show · Order · Folding",
    "어디서 바꾸나요": "Where to change it",
    "안내는 하나만": "One notice at a time",
    "습관 카드": "Habit cards",
    "카테고리 접기": "Collapsing categories",
    "모든 기기에서 같게": "Same on every device"
  }, [
    [/^안내 (\d+)개 더 보기$/, function (n) { return n === "1" ? "1 more notice" : n + " more notices"; }],
    [/^숨긴 것 (\d+)개( · 안내 하나만)?$/, function (n, one) { return n + " hidden" + (one ? " · one notice" : ""); }],
    [/^접어 둔 카테고리 모두 펴기 · (\d+)$/, function (n) { return "Expand all collapsed categories · " + n; }]
  ]);
  // ---- 32차: 할 일 ----
  I.register({
    "할 일": "To-dos",
    "할 일 적기": "Add a to-do",
    "오늘 할 일": "Today",
    "밀린 것": "Overdue",
    "정리할 것": "To sort",
    "몰아서 정리하기": "Sort them all",
    "미리 알림·캘린더로 보낼 것": "To send to Reminders · Calendar",
    "예정": "Upcoming",
    "언젠가": "Someday",
    "메모": "Notes",
    "끝낸 것": "Done",
    "버림": "Discarded",
    "지난 일정": "Past event",
    "→ 미리 알림": "→ Reminders",
    "→ 캘린더": "→ Calendar",
    "보낼 것": "To send",
    "정말 할 건가요?": "Will you really do it?",
    "할 거예요": "I'll do it",
    "날짜 정하기": "Pick a date",
    "언젠가로": "Move to Someday",
    "버리기": "Discard",
    "오늘 할 일이 없어요.": "Nothing to do today.",
    "떠오르는 게 있으면 아래 줄에 막 적어 두세요.": "When something comes to mind, jot it down in the line below.",
    "오늘 끝낸 것": "Done today",
    "예정된 할 일이 없어요.": "Nothing upcoming.",
    "‘언젠가’ 할 일이 없어요.": "No “Someday” to-dos.",
    "날짜를 아직 못 정한 일을 여기에 모아 둬요.": "To-dos without a date yet are kept here.",
    "메모가 없어요.": "No notes.",
    "#태그를 붙여 적으면 태그별로 모아 볼 수 있어요.": "Add #tags to see notes grouped by tag.",
    "아직 끝낸 것이 없어요.": "Nothing done yet.",
    "보관함 보기": "View archive",
    "끝낸 지 180일 지난 것": "Items done more than 180 days ago",
    "막 적기": "Quick capture",
    "떠오른 것을 그대로 적어요 (예: 내일 3시 학부모 상담)": "Write it as it comes (e.g. meeting tomorrow 3pm)",
    "담기": "Add",
    "적던 것도 담았어요": "What you were typing was added too",
    "○ 일정 같아요": "○ Looks like an event",
    "– 메모 같아요": "– Looks like a note",
    "• 할 일 같아요": "• Looks like a to-do",
    "적을 땐 아무것도 묻지 않아요. 날짜·시각은 정리할 때 고쳐요.": "Nothing is asked while you capture. Fix dates and times when you sort.",
    "방금 담은 것": "Just added",
    "지금 정리하기": "Sort now",
    "빼기": "Remove",
    "적은 그대로:": "As typed:",
    "원문으로": "Use original",
    "• 할 일": "• To-do",
    "○ 일정": "○ Event",
    "– 메모": "– Note",
    "날짜": "Date",
    "내일": "Tomorrow",
    "이번 주말": "This weekend",
    "안 정함": "None",
    "시각 지우기": "Clear time",
    "날짜 고르기": "Pick a date",
    "점심": "Noon",
    "시각": "Time",
    "시작": "Start",
    "끝": "End",
    "시각을 비워 두면 하루 종일 일정이에요. 끝 시각을 비우면 1시간으로 보내요.": "Leave the time empty for an all-day event. Without an end time, it's sent as 1 hour.",
    "캘린더로 다시 보내기": "Send to Calendar again",
    "미리 알림으로 다시 보내기": "Send to Reminders again",
    "캘린더로 보내기": "Send to Calendar",
    "미리 알림으로 보내기": "Send to Reminders",
    "이미 미리 알림으로 보냈어요.": "Already sent to Reminders.",
    "이미 캘린더로 보냈어요.": "Already sent to Calendar.",
    "여기서 고쳐도 그쪽은 그대로예요.": "Changes here won't change it there.",
    "시간을 안 정하면 오전 9시 알림으로 보내요.": "Without a time, it's sent with a 9 AM alert.",
    "메모는 앱 안 ‘메모’에 모아 둬요. 글에 #태그를 붙이면 태그별로 볼 수 있어요.": "Notes are kept under “Notes” in the app. Add #tags to see them by tag.",
    "버린 것은 ‘끝낸 것’에 남아요. 언제든 되살릴 수 있어요.": "Discarded items stay under “Done”. You can bring them back anytime.",
    "고치기": "Edit",
    "정리하기": "Sort",
    "정리 끝": "Sorted",
    "정리 끝!": "All sorted!",
    "보관함": "Archive",
    "← 이전": "← Back",
    "다음 →": "Next →",
    "끝낸 할 일": "Done",
    "버린 것": "Discarded",
    "되살리기": "Bring back",
    "완전히 지우기": "Delete for good",
    "한 번 더 누르면 지워요": "Tap again to delete",
    "정리할 것 모두 정리하기": "Sort everything waiting",
    "일정": "Events",
    "남겨 둠": "Left",
    "미리 알림·캘린더로 보낼 것은 없어요.": "Nothing to send to Reminders or Calendar.",
    "보낼 것이 없어요.": "Nothing to send.",
    "캘린더": "Calendar",
    "미리 알림": "Reminders",
    "단축어 앱이 열리고 ‘MMD 보내기’가 한 번에 넣어요. 끝나면 이 앱으로 돌아와 주세요.": "The Shortcuts app opens and “MMD 보내기” adds them all at once. Then come back to this app.",
    "처음이라면: 단축어 만드는 방법": "First time? How to make the shortcut",
    "잘 들어갔나요?": "Did they go in?",
    "네, 들어갔어요": "Yes, they're in",
    "아니요, 안 들어갔어요": "No, they're not",
    "단축어를 확인해 주세요": "Please check the shortcut",
    "보내기는 아이폰·맥의 단축어 앱에 있는 ‘MMD 보내기’ 단축어가 해요. 처음 한 번만 만들어 두면 돼요. 보낼 것은 그대로 남아 있어요.": "Sending is done by the “MMD 보내기” shortcut in the Shortcuts app on your iPhone or Mac. You only need to make it once. The items are still waiting to be sent.",
    "단축어 만드는 방법 보기": "How to make the shortcut",
    "보낼 것을 골라 주세요": "Choose what to send",
    "정리할 것이 없어요": "Nothing to sort",
    "끝냈어요": "Done",
    "좋아요, 오늘 해 봐요": "Great, let's do it today",
    "‘언젠가’로 옮겼어요": "Moved to “Someday”",
    "버렸어요 · ‘끝낸 것’에 남아요": "Discarded · kept under “Done”",
    "되살렸어요": "Brought back",
    "지웠어요": "Deleted",
    "글을 적어 주세요": "Please write something",
    "정리할 것에 다시 담았어요": "Added back to “To sort”",
    "인터넷에 연결되면 볼 수 있어요.": "You can see it once you're online.",
    "끝내거나 버린 지 180일이 지난 할 일·일정은 여기로 옮겨 보관해요(계정에 계속 남아요).": "To-dos and events done or discarded more than 180 days ago are moved here (they stay in your account).",
    "다시 적기": "Add again",
    "보관함이 비어 있어요.": "The archive is empty.",
    "어제": "Yesterday",
    "↑↓로 순서를 바꾸고, 동그라미를 눌러 켜고 꺼요. 안내와 루틴 카테고리는 끌 수 없어요.": "Use ↑↓ to reorder and tap the circle to turn things on or off. Notices and routine categories can't be turned off."
  }, [
    [/^(\d+)개가 3일 넘게 기다려요$/, function (n) { return n + " waiting over 3 days"; }],
    [/^(\d+)개 더$/, function (n) { return n + " more"; }],
    [/^(\d+)번 미룸$/, function (n) { return n === "1" ? "Postponed once" : "Postponed " + n + "×"; }],
    [/^(\d+)번 미뤘어요$/, function (n) { return n === "1" ? "Postponed once" : "Postponed " + n + " times"; }],
    [/^더 보기 · (\d+)$/, function (n) { return "Show more · " + n; }],
    [/^(\d+)개 보내기$/, function (n) { return "Send " + n; }],
    [/^미리 알림·캘린더 앱에서 (\d+)개가 들어갔는지 확인해 주세요\.$/, function (n) { return "Check that " + n + " item" + (n === "1" ? "" : "s") + " went into Reminders or Calendar."; }],
    [/^(\d+)개를 보냈다고 표시했어요$/, function (n) { return "Marked " + n + " as sent"; }],
    [/^보낸 것 중 끝내거나 버린 (\d+)개는 미리 알림·캘린더에 그대로 남아 있을 수 있어요\. 아래 스위치를 켜기 전에 보낸 것은 그쪽에서 직접 정리해 주세요\.$/, function (n) { return n + " sent item" + (n === "1" ? "" : "s") + " you finished or discarded may still be in Reminders · Calendar. Items sent before turning on the switch below need to be cleaned up there yourself."; }],
    [/^(\d{4})년 · (\d+)$/, function (y, n) { return y + " · " + n; }]
  ]);
  // ---- 33차: 할 일 다듬기 ----
  I.register({
    "떠오른 것을 적고 Enter": "Jot it down and press Enter",
    "정리할 것에 담았어요": "Added to “To sort”",
    "캘린더에 반영할 것": "To update in Calendar",
    "미리 알림에 반영할 것": "To update in Reminders",
    "미리 알림에 들어가 있어요.": "It's in Reminders.",
    "캘린더에 들어가 있어요.": "It's in Calendar.",
    "고친 내용은 다음 [보내기] 때 그쪽에도 반영돼요.": "Your changes go there with the next [Send].",
    "언젠가로 옮기면 그쪽에서는 지워요.": "Moving it to Someday removes it there.",
    "미리 알림에 들어간 것은 다음 [보내기] 때 그쪽에서 지워요.": "The copy in Reminders is removed with the next [Send].",
    "캘린더에 들어간 것은 다음 [보내기] 때 그쪽에서 지워요.": "The copy in Calendar is removed with the next [Send].",
    "그쪽에도 반영할 변경": "Updates for Reminders · Calendar",
    "완료로": "Mark done",
    "완료 취소": "Undo done",
    "고친 내용으로": "Update",
    "보낸 것을 고치면 그쪽에도 반영": "Update sent items there too",
    "켜 둔 뒤에 보낸 것부터, 앱에서 끝내거나 고치거나 지우면 다음 보내기 때 미리 알림·캘린더도 맞춰요.": "For items sent after turning this on, finishing, editing or deleting them in the app updates Reminders and Calendar with the next send.",
    "단축어에 ‘지우기·완료’ 갈래를 추가한 뒤 켜 주세요.": "Turn this on after adding the “remove · complete” branches to your shortcut.",
    "추가하는 방법": "How to add them",
    "이제부터 보낸 것은 고치면 그쪽에도 반영해요": "From now on, changes to sent items go there too",
    "반영을 껐어요": "Updates turned off",
    "지웠어요 · 다음 보내기 때 그쪽에서도 지워요": "Deleted · it will be removed there with the next send"
  });
  // ---- 34차: 시각 고르기 · 줄 밀기 · 보내기 줄이기 ----
  I.register({
    "시각 고르기": "Pick a time",
    "끝 시각": "End time",
    "끝 시각은 시작보다 뒤여야 해요": "End time must be after the start",
    "보내는 중이에요": "Sending…",
    "단축어가 끝나면 이 앱으로 돌아와요. 돌아오면 자동으로 보냈다고 표시해요.": "When the shortcut finishes you'll come back here, and the items are marked as sent automatically.",
    "다 됐어요": "All done",
    "안 됐어요": "It didn't work",
    // 37차: 합치기 기록 · 시각 휠 오전/오후
    "합치기 기록": "Merge log",
    "다른 기기와 기록을 합칠 때마다 무엇이 달라졌는지 이 기기에 남겨요(최근 30번). 체크가 풀리거나 보냈다 표시가 사라졌을 때 원인을 찾는 데 써요.": "Each time records are merged with another device, what changed is saved on this device (last 30). Use it to find out why a check came undone or a sent mark disappeared.",
    "아직 합친 기록이 없어요": "No merges yet",
    "오전/오후": "AM/PM"
  });
  // ---- 39차: 고치기 창 새 디자인 · 마감일 · 오늘 덜어내기 · 저녁 정리 · 언젠가 점검 ----
  I.register({
    "다른 날짜 고르기": "Pick another date",
    "정확한 시각": "Exact time",
    "고르기": "Pick",
    "지우기": "Clear",
    "마감일": "Deadline",
    "(선택)": "(optional)",
    "마감일 지우기": "Clear deadline",
    "오늘 할 일이 많아요": "Lots to do today",
    "하루에 다 하기엔 벅찰 수 있어요. 내일로 옮길 것을 골라 볼까요?": "That may be a lot for one day. Want to pick some to move to tomorrow?",
    "덜어내기": "Lighten",
    "오늘 남은 것": "Left today",
    "자기 전에 정리하면 머리가 가벼워져요. 내일로 보내거나 그대로 둘 수 있어요.": "Tidying up before bed clears your head. Send things to tomorrow or leave them.",
    "오늘 정리하기": "Tidy today",
    "한 달 넘게 그대로인 것": "Untouched for over a month",
    "계속 둘지, 이제 할지, 버릴지 가볍게 정해 봐요.": "Decide lightly: keep, do now, or discard.",
    "점검하기": "Review",
    "오늘 덜어내기": "Lighten today",
    "언젠가 점검": "Someday review",
    "오늘 할 일이 많아요. 옮길 것을 골라 주세요.": "That's a lot for today. Pick what to move.",
    "오늘 남은 것이에요. 어떻게 할까요?": "Here's what's left today. What would you like to do?",
    "한 달 넘게 그대로인 것이에요. 하나씩 정해 주세요.": "These have sat for over a month. Decide on each.",
    "남은 것 모두 내일로": "Move all to tomorrow",
    "그대로": "Keep",
    "내일로": "Tomorrow",
    "계속 둠": "Keep",
    "오늘 하기": "Do today",
    "점검 끝": "Done reviewing",
    "옮기기": "Move",
    "오늘 남은 할 일이 없어요": "Nothing left for today",
    "점검할 것이 없어요": "Nothing to review"
  }, [
    [/^옮기기 · (\d+)$/, function (n) { return "Move " + n; }],
    [/^(\d+)개를 옮겼어요$/, function (n) { return "Moved " + n; }],
    [/^점검했어요(?: · (\d+)개를 바꿨어요)?$/, function (n) { return n ? "Reviewed · changed " + n : "Reviewed"; }]
  ]);
  // ---- 40차: 기기 움직임 기록(체크 해제 경로·앱 열림·백그라운드 복귀) ----
  I.register({
    "기기 움직임 기록": "Device activity log",
    "체크를 해제한 화면, 앱을 열 때의 상태, 오래 백그라운드에 있다가 돌아온 때를 이 기기에 남겨요(최근 40개). 합치기 기록에서 체크가 빠졌을 때 직접 푼 것인지 가려내는 데 써요.": "This device keeps a note of the screen where a check was removed, how the app was opened, and when it came back after a long time in the background (last 40). Use it to tell whether you unchecked something yourself when a merge dropped a check.",
    "아직 기록이 없어요": "No entries yet"
  });
  // ---- 41차: 부모 칭찬 · 감점 · 만회 ----
  I.register({
    "⭐ 받은 칭찬 · 감점": "⭐ Praise & deductions received",
    "⭐ 칭찬 · 감점 주기": "⭐ Give praise / deduction",
    "칭찬 · 감점": "Praise · Deductions",
    "👪 이 지인을 부모로 인정하기": "👪 Recognize this friend as my parent",
    "👪 부모 인정 해제하기": "👪 Remove parent recognition",
    "한 번 더 눌러 확인": "Tap again to confirm",
    "이 지인은 내게 칭찬·감점 포인트를 줄 수 있어요. 해제하면 더는 줄 수 없어요.": "This friend can give you praise or deduction points. Once removed, they can't any more.",
    "내 부모님·보호자일 때만 인정하세요. 인정하면 이 지인이 칭찬·감점 포인트를 줄 수 있어요(감점은 하루·주간 한도가 있어요).": "Only recognize your own parent or guardian. They will be able to give you praise and deduction points (deductions have daily and weekly limits).",
    "👪 내가 부모로 인정한 지인": "👪 Friend I recognize as a parent",
    "👪 나를 부모로 인정한 지인 · 아바타를 눌러 칭찬·감점": "👪 Recognizes you as a parent · tap their avatar to give praise or deductions",
    "부모 인정을 해제했어요": "Parent recognition removed",
    "부모로 인정했어요 · 이제 칭찬·감점을 받을 수 있어요": "Recognized as a parent · you can now receive praise and deductions",
    "이 지인이 아직 부모로 인정하지 않았어요": "This friend hasn't recognized you as a parent yet",
    "아직 받은 기록이 없어요.": "No entries received yet.",
    "최근 60개만 보여요.": "Showing the latest 60 only.",
    "⭐ 칭찬": "⭐ Praise", "🌧️ 감점": "🌧️ Deduction", "💛 만회": "💛 Make-up",
    "칭찬": "Praise", "감점": "Deduction", "만회": "Make-up", "취소됨": "Cancelled",
    "이유 (꼭 적어주세요, 30자까지)": "Reason (required, up to 30 characters)",
    "칭찬 보내기": "Send praise", "감점 보내기": "Send deduction", "만회 보내기": "Send make-up", "보내는 중…": "Sending…",
    "보낸 기록": "Sent entries", "아직 보낸 기록이 없어요.": "No entries sent yet.",
    "감점은 누적 포인트를 줄이고 다음 메달을 그만큼 늦춰요. 이미 받은 메달·아이템·연속일은 그대로예요. 자녀가 볼 수 있으니 이유를 다정하게 적어주세요.": "A deduction lowers the total and delays the next medal by that amount. Medals, items and streaks already earned stay. Your child can read the reason, so please write it kindly.",
    "만회할 감점이 없어요.": "There is no deduction to make up.",
    "이번 주 감점 한도(10P)를 모두 썼어요.": "You've used this week's deduction limit (10P).",
    "이유를 적어주세요": "Please write a reason", "이유는 30자까지예요": "The reason can be up to 30 characters",
    "오늘 칭찬 칸을 모두 썼어요": "You've used all of today's praise slots",
    "오늘 감점 칸을 모두 썼어요": "You've used all of today's deduction slots",
    "오늘 만회 칸을 모두 썼어요": "You've used all of today's make-up slots",
    "만회할 감점이 없어요": "There is no deduction to make up", "이번 주 감점 한도를 모두 썼어요": "This week's deduction limit is used up",
    "보낼 수 없어요 · 자녀가 부모 인정을 해제했거나 규칙이 아직 적용되지 않았을 수 있어요": "Can't send · the child may have removed recognition, or the server rules aren't applied yet",
    "기록을 취소했어요 · 자녀 포인트에서 빠져요": "Entry cancelled · removed from the child's points",
    "받은 기록이 포인트에 반영됐어요.": "The entry is reflected in your points.",
    "다음엔 더 잘할 수 있어요. 만회할 기회도 있어요.": "You can do better next time. There's a chance to make up for it, too."
  }, [
    [/^⭐ (.+)님께$/, function (n) { return "⭐ To " + n; }],
    [/^(.+)님이 남긴 기록$/, function (n) { return "A note from " + n; }],
    [/^누적 ([\d,]+)P$/, function (p) { return p + "P total"; }],
    [/^감점으로 다음 메달이 (\d+)P 늦춰져 있어요\. .+$/, function (n) { return "The next medal is delayed by " + n + "P because of a deduction. Points you earn next fill that in first. Medals, items and streaks you already earned stay."; }],
    [/^오늘 (칭찬|감점|만회) 칸을 모두 썼어요\(하루 (\d+)번\)\. 내일 다시 줄 수 있어요\.$/, function (k, n) { return "You've used all of today's " + ({ "칭찬": "praise", "감점": "deduction", "만회": "make-up" })[k] + " slots (" + n + " a day). You can give again tomorrow."; }],
    [/^오늘 (칭찬|감점|만회) (\d+)\/(\d+)번 사용 · 한 번에 최대 (\d+)P( · 이번 주 감점 (\d+)\/(\d+)P)?$/, function (k, u, t, m, w, wu, wm) {
      return "Today: " + u + "/" + t + " " + ({ "칭찬": "praise", "감점": "deduction", "만회": "make-up" })[k] + " used · max " + m + "P at a time" + (w ? " · this week's deductions " + wu + "/" + wm + "P" : "");
    }],
    [/^(.+) (칭찬|감점|만회) ([+−])(\d+)P를 보냈어요$/, function (a, k, sg, n) { return a + " " + ({ "칭찬": "Praise", "감점": "Deduction", "만회": "Make-up" })[k] + " " + sg + n + "P sent"; }]
  ]);
  // 이 파일에서 추가한 문구가 처음부터 화면에 있는 마크업(정적 텍스트)에도 적용되도록 한 번 더 훑는다
  if (document.body) I.translateTree(document.body);
})();
