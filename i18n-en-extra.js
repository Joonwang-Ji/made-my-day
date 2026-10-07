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
    "착용 중인 아이템": "Wearing now", "기본": "Default",
    "아직 아바타를 공개하지 않았어요.": "This avatar isn't shared yet.",
    "기본 모습 그대로예요.": "Just the default look.",
    "노란 칸은 받은 선물, 테두리는 지금 착용 중인 선물이에요.": "Gold cells are gifts received; the outlined one is what they're wearing now.",
    "💌 응원 보내러 가기": "💌 Send a cheer"
  }, [
    [/^(\d+)개 추가했어요 \((\d+)개는 형식이 안 맞아 건너뜀\)$/, function (a, b) { return a + " added (" + b + " skipped: wrong format)"; }],
    [/^완주 선물 (\d+)\/(\d+)개$/, function (a, b) { return "Completion gifts " + a + "/" + b; }],
    [/^다음 선물: (.+) 완주까지 ([\d,]+)P$/, function (b, p) { return "Next gift: " + p + "P until " + I.sub(b) + " is complete"; }],
    [/^모든 완주 선물을 모았어요(?: · (\d+)회독 중)? 🎉$/, function (g) { return "All completion gifts collected" + (g ? " · reading #" + g : "") + " 🎉"; }],
    [/^🎁 (.+) 완주$/, function (b) { return "🎁 " + I.sub(b) + " done"; }],
    [/^매년 반복 공휴일\((.+)\)$/, function (r) { return "Yearly holiday: " + I.sub(r); }]
  ], [
    { sel: ".bc-sec", map: { "성경": "Scripture" } }
  ]);

  I.register(D, P, CTX);
  // 위 패턴보다 포괄적인 분할 규칙: "📖 창세기 · 첫째 날, 빛이 있으라" 같은 "A · B" 조합(지인 카드 등)
  I.register(null, [[/^(📖 )?([^·]+?) · (.+)$/, function (ic, b, t) {
    var a = I.sub(b), c = I.sub(t);
    return (a === b && c === t) ? null : (ic || "") + a + " · " + c;
  }]]);
  // 이 파일에서 추가한 문구가 처음부터 화면에 있는 마크업(정적 텍스트)에도 적용되도록 한 번 더 훑는다
  if (document.body) I.translateTree(document.body);
})();
