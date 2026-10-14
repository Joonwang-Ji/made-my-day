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
  // 이 파일에서 추가한 문구가 처음부터 화면에 있는 마크업(정적 텍스트)에도 적용되도록 한 번 더 훑는다
  if (document.body) I.translateTree(document.body);
})();
