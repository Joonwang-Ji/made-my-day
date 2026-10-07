  // ---- 재사용 SVG 부품 (매번 새로 그리지 않고 조합) ----
  var SVG_P = {
    rays: function (cx, cy, r1, r2, n, c) {
      var s = "";
      for (var i = 0; i < n; i++) {
        var a = (Math.PI * 2 * i) / n;
        s += '<line x1="' + (cx + r1 * Math.cos(a)) + '" y1="' + (cy + r1 * Math.sin(a)) +
          '" x2="' + (cx + r2 * Math.cos(a)) + '" y2="' + (cy + r2 * Math.sin(a)) +
          '" stroke="' + c + '" stroke-width="3" stroke-linecap="round"/>';
      }
      return s;
    },
    sun: function (cx, cy, r, c) {
      return '<circle cx="' + cx + '" cy="' + cy + '" r="' + r + '" fill="' + c + '"/>' + SVG_P.rays(cx, cy, r + 4, r + 12, 8, c);
    },
    moon: function (cx, cy, r, c) {
      return '<circle cx="' + cx + '" cy="' + cy + '" r="' + r + '" fill="' + c + '"/>' +
        '<circle cx="' + (cx + r * 0.5) + '" cy="' + (cy - r * 0.3) + '" r="' + (r * 0.85) + '" fill="var(--card,#fff)"/>';
    },
    star: function (cx, cy, r, c) {
      var pts = [], n = 5;
      for (var i = 0; i < n * 2; i++) {
        var rad = i % 2 === 0 ? r : r * 0.42;
        var a = (Math.PI * i) / n - Math.PI / 2;
        pts.push((cx + rad * Math.cos(a)) + "," + (cy + rad * Math.sin(a)));
      }
      return '<polygon points="' + pts.join(" ") + '" fill="' + c + '"/>';
    },
    stars: function (pts, r, c) { return pts.map(function (p) { return SVG_P.star(p[0], p[1], r, c); }).join(""); },
    wave: function (y, c, opacity) {
      return '<path d="M0 ' + y + ' Q 15 ' + (y - 6) + ' 30 ' + y + ' T 60 ' + y + ' T 90 ' + y + ' T 120 ' + y +
        ' V100 H0 Z" fill="' + c + '" opacity="' + (opacity || 1) + '"/>';
    },
    ground: function (y, c) { return '<rect x="-5" y="' + y + '" width="110" height="' + (100 - y) + '" fill="' + c + '"/>'; },
    tree: function (cx, cy, c1, c2) {
      return '<rect x="' + (cx - 3) + '" y="' + (cy - 6) + '" width="6" height="20" fill="' + c1 + '"/>' +
        '<circle cx="' + cx + '" cy="' + (cy - 16) + '" r="16" fill="' + c2 + '"/>';
    },
    plant: function (cx, cy, c) {
      return '<path d="M' + cx + ' ' + cy + ' q -6 -14 -2 -22 M' + cx + ' ' + cy + ' q 6 -12 3 -24 M' + cx + ' ' + cy +
        ' q 0 -18 0 -26" stroke="' + c + '" stroke-width="3" fill="none" stroke-linecap="round"/>';
    },
    flame: function (cx, cy, r, c) {
      return '<path d="M' + cx + ' ' + (cy + r) + ' C ' + (cx - r) + ' ' + (cy + r * 0.4) + ' ' + (cx - r * 0.6) + ' ' + (cy - r) +
        ' ' + cx + ' ' + (cy - r * 1.6) + ' C ' + (cx + r * 0.6) + ' ' + (cy - r) + ' ' + (cx + r) + ' ' + (cy + r * 0.4) +
        ' ' + cx + ' ' + (cy + r) + ' Z" fill="' + c + '"/>';
    },
    bird: function (cx, cy, c) {
      return '<path d="M' + (cx - 10) + ' ' + cy + ' Q ' + cx + ' ' + (cy - 9) + ' ' + (cx + 10) + ' ' + cy +
        ' M' + (cx - 10) + ' ' + (cy + 4) + ' Q ' + cx + ' ' + (cy - 5) + ' ' + (cx + 10) + ' ' + (cy + 4) +
        '" stroke="' + c + '" stroke-width="2.5" fill="none" stroke-linecap="round"/>';
    },
    fish: function (cx, cy, c) {
      return '<path d="M' + (cx - 12) + ' ' + cy + ' Q ' + cx + ' ' + (cy - 8) + ' ' + (cx + 10) + ' ' + cy +
        ' Q ' + cx + ' ' + (cy + 8) + ' ' + (cx - 12) + ' ' + cy + ' Z" fill="' + c + '"/>' +
        '<polygon points="' + (cx + 10) + ',' + cy + ' ' + (cx + 17) + ',' + (cy - 5) + ' ' + (cx + 17) + ',' + (cy + 5) + '" fill="' + c + '"/>';
    },
    animal: function (cx, cy, c) {
      return '<ellipse cx="' + cx + '" cy="' + cy + '" rx="15" ry="9" fill="' + c + '"/>' +
        '<circle cx="' + (cx + 14) + '" cy="' + (cy - 4) + '" r="6" fill="' + c + '"/>' +
        '<rect x="' + (cx - 10) + '" y="' + (cy + 6) + '" width="3" height="10" fill="' + c + '"/>' +
        '<rect x="' + (cx + 6) + '" y="' + (cy + 6) + '" width="3" height="10" fill="' + c + '"/>';
    },
    person: function (cx, cy, c, scale) {
      scale = scale || 1;
      var hy = cy - 15 * scale, hr = 6.5 * scale, bw = 10 * scale, hemY = cy + 20 * scale, shY = cy - 10 * scale;
      return '<circle cx="' + cx + '" cy="' + hy + '" r="' + hr + '" fill="' + c + '"/>' +
        '<path d="M ' + (cx - bw) + ' ' + hemY + ' C ' + (cx - bw) + ' ' + (shY - bw * 0.3) + ' ' + (cx - bw * 0.55) + ' ' + shY + ' ' + cx + ' ' + shY +
        ' C ' + (cx + bw * 0.55) + ' ' + shY + ' ' + (cx + bw) + ' ' + (shY - bw * 0.3) + ' ' + (cx + bw) + ' ' + hemY + ' Z" fill="' + c + '"/>';
    },
    ark: function (cx, cy, c1, c2) {
      return '<path d="M' + (cx - 28) + ' ' + cy + ' Q ' + cx + ' ' + (cy + 16) + ' ' + (cx + 28) + ' ' + cy +
        ' L ' + (cx + 24) + ' ' + (cy - 14) + ' L ' + (cx - 24) + ' ' + (cy - 14) + ' Z" fill="' + c1 + '"/>' +
        '<rect x="' + (cx - 14) + '" y="' + (cy - 24) + '" width="28" height="10" rx="2" fill="' + c2 + '"/>';
    },
    ladder: function (cx, cy, c) {
      var s = '<line x1="' + (cx - 10) + '" y1="' + (cy - 30) + '" x2="' + (cx - 6) + '" y2="' + (cy + 30) + '" stroke="' + c + '" stroke-width="3"/>' +
        '<line x1="' + (cx + 10) + '" y1="' + (cy - 30) + '" x2="' + (cx + 6) + '" y2="' + (cy + 30) + '" stroke="' + c + '" stroke-width="3"/>';
      for (var i = 0; i < 6; i++) {
        var y = cy - 26 + i * 11;
        s += '<line x1="' + (cx - 9 + i * 0.6) + '" y1="' + y + '" x2="' + (cx + 9 - i * 0.6) + '" y2="' + y + '" stroke="' + c + '" stroke-width="2.5"/>';
      }
      return s;
    },
    rainbow: function (cx, cy, c) {
      var cols = ["#e05a5a", "#e8a13a", "#e0d24a", "#5ab06a", "#4a90c4", "#7a5ac4"];
      var s = "";
      for (var i = 0; i < cols.length; i++) {
        s += '<path d="M ' + (cx - 46 + i * 1.5) + ' ' + cy + ' A ' + (46 - i * 7.2) + ' ' + (46 - i * 7.2) + ' 0 0 1 ' +
          (cx + 46 - i * 1.5) + ' ' + cy + '" fill="none" stroke="' + cols[i] + '" stroke-width="6"/>';
      }
      return s;
    },
    tower: function (cx, cy, c) {
      var s = "";
      for (var i = 0; i < 4; i++) {
        var w = 30 - i * 5, y = cy + 8 - i * 11;
        s += '<rect x="' + (cx - w / 2) + '" y="' + y + '" width="' + w + '" height="11" fill="' + c + '" opacity="' + (0.6 + i * 0.1) + '"/>';
      }
      return s;
    },
    coat: function (cx, cy) {
      var cols = ["#c4574a", "#d99a3a", "#d9cd3a", "#5ba36a", "#4a86b0", "#7a5aa8"];
      var s = '<path d="M' + (cx - 12) + ' ' + (cy - 16) + ' L' + (cx + 12) + ' ' + (cy - 16) + ' L' + (cx + 12) + ' ' + (cy + 16) + ' L' + (cx - 12) + ' ' + (cy + 16) + ' Z" fill="#fff" opacity="0"/>';
      for (var i = 0; i < cols.length; i++) {
        s += '<rect x="' + (cx - 12 + i * 4) + '" y="' + (cy - 16) + '" width="4" height="32" fill="' + cols[i] + '"/>';
      }
      return s;
    },
    crown: function (cx, cy, c) {
      return '<polygon points="' + (cx - 16) + ',' + (cy + 8) + ' ' + (cx - 16) + ',' + (cy - 4) + ' ' + (cx - 8) + ',' + (cy + 4) +
        ' ' + cx + ',' + (cy - 10) + ' ' + (cx + 8) + ',' + (cy + 4) + ' ' + (cx + 16) + ',' + (cy - 4) + ' ' + (cx + 16) + ',' + (cy + 8) +
        '" fill="' + c + '"/>';
    },
    scroll: function (cx, cy, c) {
      return '<rect x="' + (cx - 16) + '" y="' + (cy - 12) + '" width="32" height="24" rx="2" fill="' + c + '"/>' +
        '<circle cx="' + (cx - 16) + '" cy="' + cy + '" r="4" fill="' + c + '"/>' +
        '<circle cx="' + (cx + 16) + '" cy="' + cy + '" r="4" fill="' + c + '"/>';
    },
    altarFire: function (cx, cy, c1, c2) {
      return '<path d="M' + (cx - 16) + ' ' + (cy + 14) + ' L' + (cx - 10) + ' ' + (cy - 4) + ' L' + (cx + 10) + ' ' + (cy - 4) +
        ' L' + (cx + 16) + ' ' + (cy + 14) + ' Z" fill="' + c1 + '"/>' + SVG_P.flame(cx, cy - 10, 9, c2);
    },
    well: function (cx, cy, c) {
      return '<ellipse cx="' + cx + '" cy="' + cy + '" rx="16" ry="7" fill="' + c + '" opacity="0.5"/>' +
        '<path d="M' + (cx - 16) + ' ' + cy + ' L' + (cx - 12) + ' ' + (cy + 20) + ' L' + (cx + 12) + ' ' + (cy + 20) +
        ' L' + (cx + 16) + ' ' + cy + '" fill="none" stroke="' + c + '" stroke-width="2.5"/>';
    }
  };

  var GOLD = "#c9a24a", DEEP = "#3a6b8a", SAGE = "#5a9a6a", DUSK = "#7a5aa8", EMBER = "#c4574a", SKYC = "#6a9fd4", NIGHT = "#2e3b55";

  var BIBLE_ICONS = {
    light: function () { return SVG_P.rays(50, 50, 8, 42, 12, GOLD) + '<circle cx="50" cy="50" r="10" fill="#fff8e0"/>'; },
    sky: function () { return SVG_P.wave(30, SKYC, .5) + SVG_P.wave(68, DEEP, .8); },
    land: function () { return SVG_P.wave(70, DEEP, .6) + SVG_P.ground(72, SAGE) + SVG_P.plant(40, 74, "#2f6b3f") + SVG_P.plant(60, 76, "#2f6b3f") + SVG_P.plant(75, 74, "#2f6b3f"); },
    lights: function () { return SVG_P.sun(32, 36, 12, GOLD) + SVG_P.moon(72, 60, 10, "#dcdce8") + SVG_P.stars([[20, 70], [82, 30], [60, 20]], 5, "#e8e0b0"); },
    sea: function () { return SVG_P.wave(60, DEEP, .9) + SVG_P.fish(35, 72, "#e8dfae") + SVG_P.fish(65, 80, "#e8dfae") + SVG_P.bird(30, 30, NIGHT) + SVG_P.bird(65, 22, NIGHT); },
    beasts: function () { return SVG_P.ground(78, SAGE) + SVG_P.animal(18, 84, "#8a6a4a") + SVG_P.animal(84, 86, "#8a6a4a") + SVG_P.person(50, 46, "#c4574a", 1.5); },
    rest: function () { return SVG_P.sun(50, 40, 13, GOLD) + '<path d="M28 66 h44" stroke="' + GOLD + '" stroke-width="3" stroke-linecap="round" opacity=".6"/>'; },
    eden: function () { return SVG_P.ground(70, SAGE) + SVG_P.tree(50, 70, "#6b4a2f", "#3a8a4f") + SVG_P.person(30, 74, EMBER, .9); },
    eve: function () { return SVG_P.ground(72, SAGE) + SVG_P.person(38, 76, EMBER, .9) + SVG_P.person(62, 76, DUSK, .9); },
    fall: function () { return SVG_P.ground(72, "#8a7a4a") + SVG_P.tree(50, 72, "#6b4a2f", "#7a3a3a") + '<circle cx="50" cy="60" r="4" fill="' + EMBER + '"/>'; },
    altar: function () { return SVG_P.ground(78, SAGE) + SVG_P.altarFire(50, 66, "#8a8070", EMBER); },
    ark: function () { return SVG_P.wave(74, DEEP, .8) + SVG_P.ark(50, 60, "#6b4a2f", "#8a6a4a") + SVG_P.bird(50, 30, NIGHT); },
    flood: function () { return SVG_P.wave(30, DEEP, .5) + SVG_P.wave(55, DEEP, .7) + SVG_P.wave(78, "#1e3f55", 1); },
    rainbow: function () { return SVG_P.wave(80, SAGE, .8) + SVG_P.rainbow(50, 78, null); },
    tower: function () { return SVG_P.ground(80, "#c9a24a") + SVG_P.tower(50, 70, "#a8895a"); },
    call: function () { return SVG_P.ground(76, "#c9a24a") + SVG_P.person(40, 70, DUSK, 1) + '<path d="M55 68 L80 68 M74 62 L80 68 L74 74" stroke="' + DUSK + '" stroke-width="2.5" fill="none" stroke-linecap="round"/>'; },
    covenant: function () { return '<rect width="100" height="100" fill="' + NIGHT + '" opacity=".12"/>' + SVG_P.stars([[25, 30], [50, 20], [75, 32], [35, 55], [65, 50], [50, 70]], 6, "#f0e6a8"); },
    fire: function () { return SVG_P.ground(78, "#8a6a4a") + SVG_P.flame(35, 66, 11, EMBER) + SVG_P.flame(55, 70, 13, EMBER) + SVG_P.flame(72, 64, 9, "#d98a3a"); },
    birth: function () { return SVG_P.person(50, 60, EMBER, 1.2) + '<circle cx="50" cy="52" r="5" fill="#f5e0c0"/>'; },
    akedah: function () { return SVG_P.ground(78, "#a8895a") + SVG_P.altarFire(50, 66, "#8a8070", "#d98a3a") + SVG_P.animal(78, 76, "#e8e0c8"); },
    birthright: function () { return SVG_P.person(35, 68, EMBER, 1) + SVG_P.person(65, 68, DUSK, 1) + '<circle cx="50" cy="80" r="6" fill="#8a6a3a"/>'; },
    ladder: function () { return SVG_P.ground(82, "#8a7a5a") + SVG_P.ladder(50, 50, "#c9a24a") + SVG_P.stars([[25, 20], [75, 18], [50, 12]], 4, "#f0e6a8"); },
    wrestle: function () { return SVG_P.wave(84, DEEP, .7) + SVG_P.person(42, 62, DUSK, 1) + SVG_P.person(58, 62, "#e8e0c8", 1); },
    coat: function () { return SVG_P.coat(50, 50); },
    pit: function () { return SVG_P.ground(60, "#8a6a4a") + SVG_P.well(50, 56, "#6b4a2f"); },
    throne: function () { return SVG_P.ground(80, "#c9a24a") + SVG_P.crown(50, 44, GOLD) + '<rect x="38" y="58" width="24" height="24" fill="#a8895a"/>'; },
    embrace: function () { return SVG_P.ground(80, SAGE) + SVG_P.person(44, 68, EMBER, 1) + SVG_P.person(56, 68, DUSK, 1); },
    scroll: function () { return SVG_P.scroll(50, 50, "#a8895a"); }
  };

// <<AVATAR SYSTEM>>
  // ---- 아바타 (상반신 조합형) ----
  // 저장 값은 숫자/문자열 id뿐이고, 그림은 아래 표에서만 꺼내 그린다(외부 값이 SVG에 그대로 들어가지 않음).
  // av = { sk, hs, hc, ex, hw, fa, gl, ou, oc, cp, bg, fr }
  //   sk 피부색 0-5 · hs 머리 0-29 · hc 머리색 0-7 · ex 표정 0-9 · oc 옷색 0-5
  //   gl 안경(기본 id) · hw 머리 위 · fa 얼굴 소품 · ou 옷 · cp 어깨 동무 · bg 배경 · fr 테두리 (기본 id 또는 권 완주 아이템 id)
  var AV_SKIN = ["#F6D7C0", "#EBC09E", "#D9A57B", "#B98058", "#8D5B3E", "#5E3B2A"];
  var AV_HAIRC = ["#2B2118", "#5A3A22", "#8A5A2B", "#D2AE6D", "#B9B9BD", "#A6402E", "#12100E", "#E9C7C1"];
  var AV_OC = ["#7A9E7E", "#5B7FA6", "#C9A063", "#B0574B", "#6E6A8C", "#4A4A4A"];
  var AV_BGC = { c0: "#DCE8D5", c1: "#D5E3EE", c2: "#F1E4C8", c3: "#EBD5D5", c4: "#DDD8EC", c5: "#E8E4DA" };
  var AV_HS_NAMES = ["댄디컷", "스포츠 머리", "웨이브 단발", "곱슬머리", "긴 생머리", "단발", "포니테일", "올림머리 1", "가르마 머리", "뱅 단발", "투블럭", "쉼표머리", "긴 웨이브", "양갈래", "올백", "삭발", "중단발", "시스루 뱅", "올림머리 2", "아프로", "땋은 머리", "픽시컷", "상고머리", "리프컷", "다운펌", "펌 머리", "리젠트", "바가지 머리", "크롭컷", "리프컷"];
  var AV_HS_GROUPS = [["남성 스타일", [10, 28, 1, 0, 8, 29, 11, 25, 26, 27, 14, 15]], ["여성 스타일", [5, 9, 4, 17, 16, 12, 2, 13, 21, 6, 7, 18, 20]], ["공용 스타일", [3, 19]]];
  var AV_EX_NAMES = ["미소", "활짝", "차분", "윙크", "놀람", "씨익", "졸림", "눈웃음", "시무룩", "메롱"];
  var AV_SKIN_NAMES = ["아주 밝은", "밝은", "보통", "갈색", "짙은 갈색", "아주 짙은"];
  var AV_HAIRC_NAMES = ["검정", "갈색", "밤색", "금발", "은발", "적갈색", "칠흑", "분홍"];
  var AV_OC_NAMES = ["세이지", "파랑", "겨자", "벽돌", "보라", "먹색"];
  // 기본으로 처음부터 쓸 수 있는 선택지 (id → 이름)
  var AV_BASE_NAMES = {
    hw: { none: "없음", cap: "야구모자", phones: "헤드폰", beanie: "비니" },
    fa: { none: "없음", freckles: "주근깨", beard: "수염", stache: "콧수염", goatee: "턱수염", mole: "점", lashes: "속눈썹", blush: "볼터치" },
    gl: { none: "없음", round: "동그란", rect: "직사각형", square: "정사각", oval: "타원", cat: "캣아이", half: "반테", sun: "선글라스" },
    ou: { tee: "티셔츠", hoodie: "후드", shirt: "셔츠" },
    cp: { none: "없음" },
    bg: { c0: "연두", c1: "하늘", c2: "크림", c3: "분홍", c4: "연보라", c5: "회백" },
    fr: { none: "없음", thin: "얇은 금테", dbl: "이중 금테" }
  };
  var AV_DEFAULT = { sk: 1, hs: 0, hc: 1, ex: 0, hw: "none", fa: "none", gl: "none", ou: "tee", oc: 0, cp: "none", bg: "c0", fr: "thin" };
  var AV_SLOT_FIELD = { hw: "hw", fa: "fa", gl: "gl", ou: "ou", cp: "cp", bg: "bg", fr: "fr" };
  var AV_SLOT_LABEL = { hw: "머리 위", fa: "얼굴", gl: "안경", ou: "옷", cp: "어깨 동무", bg: "배경", fr: "테두리" };

  // 66권 완주 아이템 — 권마다 1개, 완주하면 자동 지급. id = "i_" + 권 id
  var AV_ITEMS = [
    { book: "gen", slot: "bg", name: "무지개 하늘", desc: "노아에게 주신 약속의 무지개가 뒤에 걸려요." },
    { book: "exo", slot: "bg", name: "갈라진 홍해", desc: "바다가 양쪽으로 서고 마른 길이 열렸어요." },
    { book: "lev", slot: "ou", name: "제사장 에봇", desc: "열두 보석이 박힌 흉패를 두른 거룩한 옷." },
    { book: "num", slot: "bg", name: "광야의 진영", desc: "천막들과 구름 기둥이 함께한 사십 년의 길." },
    { book: "deu", slot: "cp", name: "십계명 돌판", desc: "어깨 곁에 떠 있는 두 돌판." },
    { book: "jos", slot: "cp", name: "여리고의 뿔나팔", desc: "일곱 바퀴를 돌고 불던 양 뿔나팔." },
    { book: "jdg", slot: "cp", name: "기드온의 횃불", desc: "항아리를 깨뜨리자 밤이 환해졌어요." },
    { book: "rut", slot: "hw", name: "보리 이삭 관", desc: "보아스의 밭에서 주운 이삭으로 엮었어요." },
    { book: "1sa", slot: "cp", name: "다윗의 물매", desc: "매끄러운 돌 하나를 든 목동의 물매." },
    { book: "2sa", slot: "hw", name: "다윗의 왕관", desc: "목동에서 왕이 된 이의 금관." },
    { book: "1ki", slot: "bg", name: "성전의 두 기둥", desc: "솔로몬이 세운 야긴과 보아스." },
    { book: "2ki", slot: "ou", name: "엘리야의 겉옷", desc: "불수레와 함께 받은 갑절의 영감." },
    { book: "1ch", slot: "cp", name: "다윗의 수금", desc: "레위 사람들이 성전에서 탔던 수금." },
    { book: "2ch", slot: "cp", name: "성전의 등잔대", desc: "일곱 등불이 꺼지지 않는 금 등잔대." },
    { book: "ezr", slot: "cp", name: "율법 두루마리", desc: "에스라가 백성 앞에서 펴 읽은 말씀." },
    { book: "neh", slot: "bg", name: "재건된 성벽", desc: "오십이 일 만에 다시 세워진 예루살렘 성벽." },
    { book: "est", slot: "hw", name: "왕후의 관", desc: "‘죽으면 죽으리라’ 하던 에스더의 관." },
    { book: "job", slot: "bg", name: "폭풍 속 하늘", desc: "폭풍 가운데서도 끝내 버틴 욥의 하늘." },
    { book: "psa", slot: "bg", name: "푸른 초장", desc: "쉴 만한 물가로 인도하시는 목자의 들." },
    { book: "pro", slot: "cp", name: "부지런한 개미", desc: "지혜를 가르치는 작은 스승." },
    { book: "ecc", slot: "cp", name: "모래시계", desc: "범사에 기한이 있고 때가 있다." },
    { book: "sng", slot: "hw", name: "백합 화관", desc: "‘나는 샤론의 수선화, 골짜기의 백합화.’" },
    { book: "isa", slot: "cp", name: "날아오르는 독수리", desc: "여호와를 앙망하는 자는 새 힘을 얻어." },
    { book: "jer", slot: "cp", name: "토기장이의 항아리", desc: "토기장이 손에 빚어지는 진흙 그릇." },
    { book: "lam", slot: "fa", name: "한 방울의 눈물", desc: "무너진 성 위에서 흘린 애가." },
    { book: "ezk", slot: "cp", name: "눈 달린 바퀴", desc: "그발 강가에서 본 환상의 바퀴." },
    { book: "dan", slot: "cp", name: "사자굴의 사자", desc: "입을 막힌 사자가 곁에서 잠잠해요." },
    { book: "hos", slot: "fa", name: "발그레한 볼", desc: "끝까지 놓지 않는 사랑에 뺨이 붉어져요." },
    { book: "jol", slot: "cp", name: "메뚜기", desc: "황폐한 해를 갚아 주시는 약속의 메뚜기." },
    { book: "amo", slot: "cp", name: "다림줄", desc: "곧은 정의를 재는 다림줄." },
    { book: "oba", slot: "bg", name: "바위 절벽", desc: "높은 바위 틈에 산다던 에돔의 교만." },
    { book: "jon", slot: "cp", name: "큰 물고기", desc: "요나를 사흘 밤낮 품은 물고기." },
    { book: "mic", slot: "bg", name: "여호와의 산", desc: "칼이 쟁기가 되는 날의 산." },
    { book: "nam", slot: "ou", name: "전령의 망토", desc: "산 위에서 좋은 소식을 전하는 발." },
    { book: "hab", slot: "bg", name: "새벽의 파수대", desc: "파수대에 서서 응답을 기다리는 새벽." },
    { book: "zep", slot: "cp", name: "기쁜 노랫소리", desc: "여호와께서 노래하며 즐거워하신다." },
    { book: "hag", slot: "hw", name: "일꾼의 수건", desc: "성전을 다시 세우던 일꾼들의 머릿수건." },
    { book: "zec", slot: "cp", name: "감람나무 가지", desc: "‘능력으로 되지 않고 나의 영으로 되리라.’" },
    { book: "mal", slot: "fr", name: "정련하는 불꽃", desc: "은을 연단하듯 정결하게 하는 불꽃 테두리." },
    { book: "mat", slot: "bg", name: "베들레헴의 별", desc: "동방 박사들을 이끈 별." },
    { book: "mrk", slot: "ou", name: "광야의 낙타털 옷", desc: "광야에서 외친 이의 거친 옷." },
    { book: "luk", slot: "cp", name: "찾은 어린양", desc: "잃었다가 찾은 양 한 마리." },
    { book: "jhn", slot: "fr", name: "포도나무 덩굴", desc: "‘나는 포도나무요 너희는 가지라.’" },
    { book: "act", slot: "hw", name: "성령의 불꽃", desc: "오순절에 각 사람 위에 임한 불의 혀." },
    { book: "rom", slot: "ou", name: "로마 시민의 토가", desc: "로마로 향한 복음의 길을 걷는 옷." },
    { book: "1co", slot: "cp", name: "사랑의 하트", desc: "사랑은 영원히 떨어지지 아니한다." },
    { book: "2co", slot: "fr", name: "금이 간 질그릇", desc: "약함 속에서 온전해지는 능력의 테두리." },
    { book: "gal", slot: "hw", name: "성령의 열매 관", desc: "사랑·희락·화평의 열매로 엮은 관." },
    { book: "eph", slot: "ou", name: "전신 갑주", desc: "믿음의 방패와 의의 흉배를 갖춘 차림." },
    { book: "php", slot: "hw", name: "월계관", desc: "푯대를 향해 달려간 이의 관." },
    { book: "col", slot: "bg", name: "별이 빛나는 우주", desc: "만물이 그분 안에 지은 바 되었어요." },
    { book: "1th", slot: "cp", name: "은 나팔", desc: "주께서 나팔 소리와 함께 오시리라." },
    { book: "2th", slot: "ou", name: "일꾼의 앞치마", desc: "조용히 자기 일을 하며 먹는 사람의 앞치마." },
    { book: "1ti", slot: "ou", name: "사역자의 스톨", desc: "선한 싸움을 싸우는 목회자의 띠." },
    { book: "2ti", slot: "cp", name: "가죽 책", desc: "‘가죽 종이에 쓴 것을 가져오라.’" },
    { book: "tit", slot: "hw", name: "선한 일의 머리띠", desc: "선한 일에 열심인 사람의 붉은 머리띠." },
    { book: "phm", slot: "bg", name: "노을 진 마을", desc: "형제로 맞아들이는 저녁의 집들." },
    { book: "heb", slot: "bg", name: "구름 같은 증인들", desc: "허다한 증인의 구름이 에워싼 하늘." },
    { book: "jas", slot: "ou", name: "행함의 조끼", desc: "믿음을 행함으로 보이는 일꾼의 조끼." },
    { book: "1pe", slot: "cp", name: "산 돌", desc: "산 돌 위에 세워지는 신령한 집." },
    { book: "2pe", slot: "bg", name: "샛별 뜨는 새벽", desc: "샛별이 마음에 떠오르는 새벽." },
    { book: "1jn", slot: "fr", name: "빛의 테두리", desc: "하나님은 빛이시라." },
    { book: "2jn", slot: "fa", name: "하트 볼터치", desc: "진리 안에서 나누는 사랑의 표시." },
    { book: "3jn", slot: "cp", name: "환대의 빵", desc: "나그네를 맞은 가이오의 식탁 위 빵." },
    { book: "jud", slot: "cp", name: "지키는 방패", desc: "넘어지지 않게 지키시는 분의 방패." },
    { book: "rev", slot: "hw", name: "생명의 면류관", desc: "죽도록 충성한 자에게 주시는 면류관." }
  ];
  var AV_ITEM_BY_ID = {};
  AV_ITEMS.forEach(function (it, i) { it.id = "i_" + it.book; it.idx = i; AV_ITEM_BY_ID[it.id] = it; });

  function avShade(hex, f) {
    var n = parseInt(hex.slice(1), 16), r = n >> 16, g = (n >> 8) & 255, b = n & 255;
    function c(v) { return Math.max(0, Math.min(255, Math.round(v * f))); }
    return "#" + ((1 << 24) + (c(r) << 16) + (c(g) << 8) + c(b)).toString(16).slice(1);
  }
  // 둘레를 따라 부품을 되풀이해서 놓는 도우미: fn(각도(도)) → svg 조각, (50,50) 중심 회전
  function avAround(n, from, to, fn) {
    var s = "";
    for (var i = 0; i < n; i++) {
      var a = n === 1 ? from : from + (to - from) * i / (n - 1);
      s += '<g transform="rotate(' + a.toFixed(1) + ' 50 50)">' + fn(i, a) + '</g>';
    }
    return s;
  }
  function avStar4(x, y, r, c) {
    var k = r * 0.28;
    return '<path d="M' + x + ' ' + (y - r) + ' L' + (x + k) + ' ' + (y - k) + ' L' + (x + r) + ' ' + y + ' L' + (x + k) + ' ' + (y + k) +
      ' L' + x + ' ' + (y + r) + ' L' + (x - k) + ' ' + (y + k) + ' L' + (x - r) + ' ' + y + ' L' + (x - k) + ' ' + (y - k) + ' Z" fill="' + c + '"/>';
  }
  function avCloud(x, y, s, c) {
    return '<g fill="' + c + '"><ellipse cx="' + x + '" cy="' + y + '" rx="' + (10 * s) + '" ry="' + (4.6 * s) + '"/><circle cx="' + (x - 4 * s) + '" cy="' + (y - 3 * s) + '" r="' + (4.6 * s) + '"/><circle cx="' + (x + 3 * s) + '" cy="' + (y - 4 * s) + '" r="' + (5.4 * s) + '"/></g>';
  }

  // ---------- 배경 ----------
  var AV_ART_BG = {
    i_gen: function () {
      var cols = ["#D9776B", "#E9A85C", "#EBD36B", "#8FBF7A", "#6FA8D6", "#8E7CC3"], s = '<rect width="100" height="100" fill="#DCEBF4"/>';
      for (var i = 0; i < cols.length; i++) { var r = 47 - i * 4.6; s += '<path d="M' + (50 - r) + ' 80 A' + r + ' ' + r + ' 0 0 1 ' + (50 + r) + ' 80" fill="none" stroke="' + cols[i] + '" stroke-width="4.8"/>'; }
      return s + avCloud(14, 80, 1, "#FFFFFF") + avCloud(86, 80, 1, "#FFFFFF");
    },
    i_exo: function () {
      var s = '<rect width="100" height="100" fill="#CDE1E6"/><rect y="78" width="100" height="22" fill="#E2CF9B"/>';
      s += '<path d="M0 6 H30 C27 30 33 55 29 100 H0Z" fill="#3F7CA0"/><path d="M100 6 H70 C73 30 67 55 71 100 H100Z" fill="#3F7CA0"/>';
      for (var i = 0; i < 4; i++) {
        s += '<path d="M2 ' + (16 + i * 16) + ' q7 -5 14 0 t14 0" fill="none" stroke="#8FC1D8" stroke-width="1.6"/><path d="M70 ' + (24 + i * 16) + ' q7 -5 14 0 t14 0" fill="none" stroke="#8FC1D8" stroke-width="1.6"/>';
      }
      return s;
    },
    i_num: function () {
      var s = '<rect width="100" height="100" fill="#EBD6B2"/><rect y="66" width="100" height="34" fill="#D9BE8A"/>';
      s += '<path d="M8 66 L20 46 L32 66Z" fill="#8A6A4A"/><path d="M20 66 L20 46 L32 66Z" fill="#7A5B3C"/><path d="M60 66 L70 52 L80 66Z" fill="#9A7A56"/>';
      s += '<rect x="80" y="14" width="9" height="46" rx="4.5" fill="#F7EBD0"/><ellipse cx="84.5" cy="18" rx="9" ry="6" fill="#F7EBD0"/>';
      return s + '<circle cx="18" cy="22" r="6" fill="#F1D774"/>';
    },
    i_1ki: function () {
      var s = '<rect width="100" height="100" fill="#F1E8D2"/>';
      [[14, 26], [72, 26]].forEach(function (p) {
        s += '<rect x="' + p[0] + '" y="20" width="14" height="80" fill="#E4D9BC" stroke="#C2A25E" stroke-width="1.2"/>' +
          '<rect x="' + (p[0] - 2) + '" y="16" width="18" height="6" rx="1.5" fill="#D8C99B" stroke="#C2A25E" stroke-width="1.2"/>' +
          '<circle cx="' + (p[0] + 7) + '" cy="30" r="2.4" fill="#B0574B"/><circle cx="' + (p[0] + 3) + '" cy="33" r="2.4" fill="#B0574B"/><circle cx="' + (p[0] + 11) + '" cy="33" r="2.4" fill="#B0574B"/>';
      });
      return s + '<rect x="8" y="8" width="84" height="7" fill="#D8C99B" stroke="#C2A25E" stroke-width="1.2"/>';
    },
    i_neh: function () {
      var s = '<rect width="100" height="100" fill="#DDE6EC"/><rect x="0" y="46" width="100" height="54" fill="#B9A58A"/>';
      for (var i = 0; i < 9; i++) s += '<rect x="' + (2 + i * 11.5) + '" y="40" width="7" height="8" fill="#B9A58A"/>';
      s += '<rect x="0" y="28" width="17" height="72" fill="#A8946F"/><rect x="83" y="28" width="17" height="72" fill="#A8946F"/>';
      for (var j = 0; j < 4; j++) s += '<rect x="' + (j * 4.5) + '" y="22" width="3.4" height="7" fill="#A8946F"/><rect x="' + (83 + j * 4.5) + '" y="22" width="3.4" height="7" fill="#A8946F"/>';
      for (var k = 0; k < 5; k++) s += '<path d="M0 ' + (56 + k * 9) + ' H100" stroke="#9C8868" stroke-width="1"/>';
      return s;
    },
    i_job: function () {
      var s = '<rect width="100" height="100" fill="#59667A"/>' + avCloud(24, 24, 1.5, "#7A879A") + avCloud(76, 18, 1.3, "#6F7C90") + avCloud(60, 40, 1.2, "#8592A4");
      s += '<path d="M22 30 L15 48 L22 47 L16 64 L30 42 L23 43 L28 30Z" fill="#F1D774"/>';
      return s + '<path d="M0 84 Q25 78 50 84 T100 84 V100 H0Z" fill="#46526A"/>';
    },
    i_psa: function () {
      var s = '<rect width="100" height="100" fill="#DDEBF3"/><circle cx="20" cy="20" r="8" fill="#F1D774"/>';
      s += '<path d="M0 66 Q28 46 56 62 T100 56 V100 H0Z" fill="#A9C99A"/><path d="M0 80 Q30 62 62 78 T100 74 V100 H0Z" fill="#8DB682"/>';
      return s + '<path d="M70 100 Q64 88 74 82 T72 68" fill="none" stroke="#9CC6D8" stroke-width="4" stroke-linecap="round"/>';
    },
    i_oba: function () {
      var s = '<rect width="100" height="100" fill="#E7D9C4"/>';
      s += '<path d="M0 0 H30 L24 18 L32 30 L22 46 L30 62 L20 100 H0Z" fill="#A18C72"/><path d="M0 0 H16 L12 22 L18 44 L10 100 H0Z" fill="#8C785F"/>';
      s += '<path d="M100 0 H70 L78 20 L68 36 L78 56 L70 100 H100Z" fill="#A18C72"/><path d="M100 0 H86 L90 24 L82 48 L90 100 H100Z" fill="#8C785F"/>';
      return s + '<path d="M44 14 q6 -6 12 0 q-6 -2 -12 0Z" fill="#5A4A3A"/>';
    },
    i_mic: function () {
      var s = '<rect width="100" height="100" fill="#F3E6C9"/>' + avAround(12, 0, 330, function () { return '<path d="M50 50 L47.5 4 L52.5 4Z" fill="#F7E3A6" opacity=".7"/>'; });
      s += '<path d="M6 80 L44 26 L50 20 L56 26 L94 80 Z" fill="#8FA39A"/><path d="M40 32 L50 20 L60 32 L54 30 L50 36 L46 30Z" fill="#F7F1DE"/>';
      return s + '<path d="M0 82 Q50 72 100 82 V100 H0Z" fill="#A9C99A"/>';
    },
    i_hab: function () {
      var s = '<rect width="100" height="100" fill="#F0D9B5"/><rect y="56" width="100" height="44" fill="#E7B98E"/><circle cx="76" cy="58" r="10" fill="#F4C56A"/>';
      s += '<rect x="12" y="24" width="14" height="76" fill="#7B6A58"/><rect x="9" y="20" width="20" height="6" fill="#6A5A48"/><rect x="14" y="28" width="6" height="8" fill="#F4C56A"/>';
      return s + '<path d="M0 86 Q40 76 100 84 V100 H0Z" fill="#C9986E"/>';
    },
    i_mat: function () {
      var s = '<rect width="100" height="100" fill="#26345B"/>' + avStar4(50, 12, 10, "#F5D66C") + avStar4(24, 26, 3.4, "#FFF3C4") + avStar4(78, 30, 3, "#FFF3C4") + avStar4(12, 50, 2.4, "#FFF3C4") + avStar4(90, 54, 2.6, "#FFF3C4");
      s += '<path d="M50 12 L44 44 L56 44Z" fill="#F5D66C" opacity=".25"/>';
      return s + '<path d="M0 84 Q30 70 60 82 T100 76 V100 H0Z" fill="#1A2445"/>';
    },
    i_col: function () {
      var s = '<rect width="100" height="100" fill="#211C3F"/>';
      var pts = [[12, 16, 1.4], [28, 34, 1], [40, 10, 1.2], [62, 24, 1], [86, 12, 1.4], [92, 44, 1], [8, 60, 1.2], [22, 78, 1], [78, 70, 1.2], [66, 8, 1]];
      pts.forEach(function (p) { s += '<circle cx="' + p[0] + '" cy="' + p[1] + '" r="' + p[2] + '" fill="#FFF3C4"/>'; });
      s += '<circle cx="80" cy="30" r="9" fill="#8E7CC3"/><ellipse cx="80" cy="30" rx="15" ry="3.6" fill="none" stroke="#C9BDF0" stroke-width="1.6" transform="rotate(-18 80 30)"/>';
      return s + avStar4(22, 22, 5, "#FFE9A0");
    },
    i_phm: function () {
      var s = '<rect width="100" height="100" fill="#F2C48E"/><rect y="0" width="100" height="34" fill="#E9A57A"/><circle cx="50" cy="66" r="16" fill="#F3A65A"/>';
      s += '<path d="M0 74 Q26 64 50 72 T100 68 V100 H0Z" fill="#8A5A44"/>';
      [[10, 62], [26, 66], [76, 64], [90, 60]].forEach(function (p) {
        s += '<path d="M' + (p[0] - 6) + ' ' + p[1] + ' L' + p[0] + ' ' + (p[1] - 7) + ' L' + (p[0] + 6) + ' ' + p[1] + ' V' + (p[1] + 10) + ' H' + (p[0] - 6) + 'Z" fill="#6B4433"/>';
      });
      return s + '<rect x="72" y="46" width="3" height="8" fill="#6B4433"/>';
    },
    i_heb: function () {
      var s = '<rect width="100" height="100" fill="#CFE4F2"/>' + avAround(8, -28, 28, function () { return '<path d="M50 -4 L46 26 L54 26Z" fill="#F7F1DE" opacity=".5"/>'; });
      return s + avCloud(16, 30, 1.5, "#FFFFFF") + avCloud(86, 26, 1.4, "#FFFFFF") + avCloud(10, 62, 1.7, "#F4F8FC") + avCloud(92, 60, 1.6, "#F4F8FC") + avCloud(50, 90, 2.4, "#F4F8FC");
    },
    i_2pe: function () {
      var s = '<rect width="100" height="100" fill="#3B4A7A"/><rect y="46" width="100" height="54" fill="#8A7FA0"/><rect y="62" width="100" height="38" fill="#E7B98E"/>';
      s += avStar4(24, 20, 9, "#FFF3C4") + '<circle cx="24" cy="20" r="2.4" fill="#FFFFFF"/>' + avStar4(70, 14, 2.6, "#FFF3C4") + avStar4(88, 30, 2.2, "#FFF3C4");
      return s + '<path d="M0 84 Q30 74 64 82 T100 78 V100 H0Z" fill="#7A5B4A"/>';
    }
  };
  // ---------- 프레임(테두리) ----------
  var AV_ART_FR = {
    none: function () { return ""; },
    thin: function () { return '<circle cx="50" cy="50" r="45.3" fill="none" stroke="#C2A25E" stroke-width="1.6"/>'; },
    dbl: function () { return '<circle cx="50" cy="50" r="45" fill="none" stroke="#C2A25E" stroke-width="2.6"/><circle cx="50" cy="50" r="41.2" fill="none" stroke="#E2C77E" stroke-width="1"/>'; },
    i_mal: function () {
      return '<circle cx="50" cy="50" r="45.5" fill="none" stroke="#B5522E" stroke-width="1.6"/>' +
        avAround(20, 0, 342, function (i) { return '<path d="M50 3 Q55 9 50 16 Q45 9 50 3Z" fill="' + (i % 2 ? "#F6C35A" : "#EE7B36") + '"/><path d="M50 8 Q52.4 11 50 14 Q47.6 11 50 8Z" fill="#FFF0B0"/>'; });
    },
    i_jhn: function () {
      var s = '<circle cx="50" cy="50" r="43" fill="none" stroke="#6F9C5B" stroke-width="2.2"/>';
      s += avAround(14, 0, 335, function (i) { return '<ellipse cx="50" cy="' + (i % 2 ? 6.6 : 10) + '" rx="3.4" ry="1.7" fill="#7FB068" transform="rotate(' + (i % 2 ? 30 : -30) + ' 50 ' + (i % 2 ? 6.6 : 10) + ')"/>'; });
      [40, 160, 250].forEach(function (a) {
        s += '<g transform="rotate(' + a + ' 50 50)"><circle cx="47.4" cy="10" r="2.6" fill="#7A5A9A"/><circle cx="52.6" cy="10" r="2.6" fill="#6C4C8C"/><circle cx="50" cy="13.6" r="2.6" fill="#7A5A9A"/><circle cx="47.6" cy="15" r="0" fill="#7A5A9A"/></g>';
      });
      return s;
    },
    i_2co: function () {
      var s = '<circle cx="50" cy="50" r="43.5" fill="none" stroke="#B98058" stroke-width="5.4"/>';
      s += '<circle cx="50" cy="50" r="46" fill="none" stroke="#9A6A48" stroke-width="1"/>';
      return s + avAround(9, 10, 350, function (i) { return '<path d="M50 4.6 l-1.8 3.2 l2.2 1.4 l-1.6 3.4" fill="none" stroke="#E8C55A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>'; });
    },
    i_1jn: function () {
      return '<circle cx="50" cy="50" r="36.5" fill="none" stroke="#E2C15A" stroke-width="1"/>' +
        avAround(30, 0, 348, function (i) { return '<path d="M50 ' + (i % 2 ? 4.4 : 2.8) + ' V' + (i % 2 ? 9 : 12) + '" stroke="#E2C15A" stroke-width="' + (i % 2 ? 1.6 : 2.2) + '" stroke-linecap="round"/>'; });
    }
  };
  // ---------- 옷 ----------
  // 각 옷은 { under(몸통, 목 뒤), over(목 위에 덮는 깃·장식) } 를 돌려준다
  var AV_BODY = "M12 100 C12 82 28 71 50 71 C72 71 88 82 88 100 Z";
  var AV_ART_OU = {
    tee: function (c) { return { under: '<path d="' + AV_BODY + '" fill="' + c.oc + '"/>', over: '<path d="M40.5 70.5 Q50 81 59.5 70.5 Z" fill="' + c.skinD + '"/><path d="M40.5 70.5 Q50 81 59.5 70.5" fill="none" stroke="' + avShade(c.oc, .8) + '" stroke-width="1.4"/>' }; },
    hoodie: function (c) {
      return { under: '<ellipse cx="50" cy="71" rx="23" ry="9" fill="' + avShade(c.oc, .78) + '"/><path d="' + AV_BODY + '" fill="' + c.oc + '"/>',
        over: '<path d="M41.5 70.5 L50 80 L58.5 70.5 Z" fill="' + c.skinD + '"/><path d="M41.5 70.5 L50 80 L58.5 70.5" fill="none" stroke="' + avShade(c.oc, .78) + '" stroke-width="2"/><path d="M46 79 L45 92 M54 79 L55 92" stroke="#F7F4EC" stroke-width="1.5" stroke-linecap="round"/><circle cx="45" cy="92.6" r="1.3" fill="#F7F4EC"/><circle cx="55" cy="92.6" r="1.3" fill="#F7F4EC"/>' };
    },
    shirt: function (c) {
      return { under: '<path d="' + AV_BODY + '" fill="' + c.oc + '"/>',
        over: '<path d="M50 79 L39 70 L44 66 L50 72Z M50 79 L61 70 L56 66 L50 72Z" fill="#F7F4EC" stroke="' + avShade(c.oc, .8) + '" stroke-width="1" stroke-linejoin="round"/><path d="M50 79 V100" stroke="' + avShade(c.oc, .85) + '" stroke-width="1"/><circle cx="50" cy="86" r="1.3" fill="#F7F4EC"/><circle cx="50" cy="93" r="1.3" fill="#F7F4EC"/>' };
    },
    i_lev: function (c) {
      var g = "";
      [["#B0574B", 42, 80], ["#4C7FB0", 50, 80], ["#5C9A6A", 42, 88], ["#8E5FB0", 50, 88]].forEach(function (q) { g += '<rect x="' + q[1] + '" y="' + q[2] + '" width="6.4" height="6.4" rx="1.4" fill="' + q[0] + '" stroke="#8A6E1E" stroke-width=".8"/>'; });
      return { under: '<path d="' + AV_BODY + '" fill="#F2ECDD"/>',
        over: '<path d="M41.5 70.5 Q50 79 58.5 70.5 Z" fill="' + c.skinD + '"/><rect x="38" y="77.5" width="24" height="19" rx="2" fill="#E2C15A" stroke="#8A6E1E" stroke-width="1"/>' + g + '<circle cx="31" cy="77" r="3" fill="#3D5A80" stroke="#C2A25E" stroke-width="1.2"/><circle cx="69" cy="77" r="3" fill="#3D5A80" stroke="#C2A25E" stroke-width="1.2"/><path d="M38 96.5 H62" stroke="#3D5A80" stroke-width="2"/>' };
    },
    i_2ki: function (c) {
      var fl = "";
      for (var i = 0; i < 8; i++) fl += '<path d="M' + (16 + i * 9.8) + ' 100 Q' + (18 + i * 9.8) + ' 94 ' + (20.5 + i * 9.8) + ' 100Z" fill="' + (i % 2 ? "#F6C35A" : "#EE7B36") + '"/>';
      return { under: '<path d="' + AV_BODY + '" fill="#7C5A3C"/><path d="M42 71 L58 71 L61 100 L39 100Z" fill="#D9CBA6"/>',
        over: '<path d="M43 70.5 L50 80 L57 70.5 Z" fill="' + c.skinD + '"/><circle cx="50" cy="76" r="0" fill="#000"/>' + fl + '<path d="M40 72 L39 100 M60 72 L61 100" stroke="#5E4128" stroke-width="1.4"/>' };
    },
    i_nam: function (c) {
      return { under: '<path d="' + AV_BODY + '" fill="#B0574B"/><path d="M40 71 L60 71 L58 100 L42 100Z" fill="#F1E6D0"/>',
        over: '<path d="M42.5 70.5 L50 80 L57.5 70.5 Z" fill="' + c.skinD + '"/><path d="M40 71 L34 100 M60 71 L66 100" stroke="#8A3E34" stroke-width="1.6"/><circle cx="41" cy="73" r="2.6" fill="#E2C15A" stroke="#8A6E1E" stroke-width=".8"/><circle cx="59" cy="73" r="2.6" fill="#E2C15A" stroke="#8A6E1E" stroke-width=".8"/><path d="M41 73 Q50 78 59 73" fill="none" stroke="#E2C15A" stroke-width="1.2"/>' };
    },
    i_mrk: function (c) {
      var h = "";
      for (var i = 0; i < 22; i++) { var x = 18 + (i * 37) % 64, y = 76 + (i * 53) % 22; h += '<path d="M' + x + ' ' + y + ' l1.6 3.4" stroke="#8A6A3F" stroke-width="1.1" stroke-linecap="round"/>'; }
      return { under: '<path d="' + AV_BODY + '" fill="#B08A5A"/>',
        over: '<path d="M41 70.5 Q50 80 59 70.5 Z" fill="' + c.skinD + '"/>' + h + '<path d="M13 94 Q50 88 87 94 L87 99 Q50 93 13 99Z" fill="#5A3A22"/><rect x="46" y="91" width="8" height="6" rx="1" fill="#C2A25E"/>' };
    },
    i_rom: function (c) {
      return { under: '<path d="' + AV_BODY + '" fill="#F3EFE6"/>',
        over: '<path d="M41.5 70.5 Q50 79 58.5 70.5 Z" fill="' + c.skinD + '"/><path d="M28 74 L46 72 L74 100 L50 100Z" fill="#E4DCC9"/><path d="M46 72 L53 72 L82 100 L74 100Z" fill="#7E4B8A"/><path d="M14 88 Q30 80 44 84" fill="none" stroke="#D5CBB4" stroke-width="1.4"/>' };
    },
    i_eph: function (c) {
      return { under: '<path d="' + AV_BODY + '" fill="#A9B2BB"/>',
        over: '<path d="M40 70.5 Q50 77 60 70.5" fill="none" stroke="#7F8993" stroke-width="2.2"/><path d="M41.5 70.5 Q50 78 58.5 70.5 Z" fill="' + c.skinD + '"/><ellipse cx="22" cy="84" rx="10" ry="6" transform="rotate(-24 22 84)" fill="#C5CDD5" stroke="#8F99A3" stroke-width="1"/><ellipse cx="78" cy="84" rx="10" ry="6" transform="rotate(24 78 84)" fill="#C5CDD5" stroke="#8F99A3" stroke-width="1"/><path d="M50 78 V94 M36 80 Q44 86 50 84 Q56 86 64 80" fill="none" stroke="#7F8993" stroke-width="1.4"/><path d="M13 94 Q50 88 87 94 L87 100 H13Z" fill="#8A6A3A"/><rect x="45" y="91" width="10" height="7" rx="1.4" fill="#E2C15A" stroke="#8A6E1E" stroke-width=".8"/>' };
    },
    i_2th: function (c) {
      return { under: '<path d="' + AV_BODY + '" fill="' + c.oc + '"/>',
        over: '<path d="M40.5 70.5 Q50 81 59.5 70.5 Z" fill="' + c.skinD + '"/><path d="M36 76 L64 76 L69 100 L31 100Z" fill="#C9B58F"/><path d="M36 76 L41 68 M64 76 L59 68" stroke="#A89568" stroke-width="2" stroke-linecap="round"/><rect x="42" y="86" width="16" height="9" rx="1.6" fill="#B9A47A" stroke="#A89568" stroke-width=".8"/>' };
    },
    i_1ti: function (c) {
      return { under: '<path d="' + AV_BODY + '" fill="#3A3F4A"/>',
        over: '<path d="M42 70.5 L50 78 L58 70.5 Z" fill="' + c.skinD + '"/><path d="M40 68 L50 74 L60 68" fill="none" stroke="#F4EFE0" stroke-width="3"/><path d="M41 70 L48 76 L45 100 L34 100Z" fill="#F4EFE0" stroke="#C9A34A" stroke-width="1.2"/><path d="M59 70 L52 76 L55 100 L66 100Z" fill="#F4EFE0" stroke="#C9A34A" stroke-width="1.2"/><path d="M40.4 86 h5 M38.6 92 h5 M54.6 86 h5 M56.4 92 h5" stroke="#C9A34A" stroke-width="1.4" stroke-linecap="round"/>' };
    },
    i_jas: function (c) {
      return { under: '<path d="' + AV_BODY + '" fill="#F1EDE4"/>',
        over: '<path d="M50 79 L40 70.5 L44 66.5 L50 72Z M50 79 L60 70.5 L56 66.5 L50 72Z" fill="#FFFFFF" stroke="#D5CFC0" stroke-width="1"/><path d="M40 71 L21 84 L17 100 L44 100 L46 84Z" fill="#7A5B32"/><path d="M60 71 L79 84 L83 100 L56 100 L54 84Z" fill="#7A5B32"/><circle cx="43" cy="88" r="1.3" fill="#E2C15A"/><circle cx="43" cy="95" r="1.3" fill="#E2C15A"/>' };
    }
  };
  // ---------- 머리 위 ----------
  var AV_ART_HW = {
    none: function () { return ""; },
    cap: function () { return '<path d="M32 38.4 C31 12.4 69 12.4 68 38.4 Z" fill="#3E5C76"/><path d="M32 38.4 Q50 34 68 38.4 Q50 41.4 32 38.4Z" fill="#2E475C"/><path d="M52 36.4 h20 q4 0 5 3.4 q-14 3 -25 -0.4Z" fill="#2E475C"/><circle cx="50" cy="19.4" r="1.8" fill="#2E475C"/>'; },
    phones: function () { return '<path d="M32 44 C29 15 71 15 68 44" fill="none" stroke="#3C3C3C" stroke-width="3.2" stroke-linecap="round"/><rect x="28" y="38" width="8" height="14" rx="3.6" fill="#5A5A5A" stroke="#3C3C3C" stroke-width="1.4"/><rect x="64" y="38" width="8" height="14" rx="3.6" fill="#5A5A5A" stroke="#3C3C3C" stroke-width="1.4"/>'; },
    beanie: function () { return '<path d="M32.4 36 C31 11 69 11 67.6 36 Z" fill="#C9705F"/><rect x="31.6" y="31.5" width="36.8" height="7" rx="3.5" fill="#E08E7C"/><circle cx="50" cy="14.6" r="4.4" fill="#E08E7C"/>'; },
    i_rut: function () {
      var s = "";
      for (var i = 0; i < 7; i++) {
        var a = -62 + i * 20.7, r = 21.4;
        s += '<g transform="rotate(' + a.toFixed(1) + ' 50 43)"><path d="M50 ' + (43 - r) + ' V' + (43 - r - 9) + '" stroke="#B89A4C" stroke-width="1.2"/>' +
          '<ellipse cx="48.4" cy="' + (43 - r - 3) + '" rx="1.5" ry="2.6" fill="#E2C15A"/><ellipse cx="51.6" cy="' + (43 - r - 3) + '" rx="1.5" ry="2.6" fill="#E2C15A"/><ellipse cx="50" cy="' + (43 - r - 7) + '" rx="1.5" ry="2.8" fill="#EBD07A"/></g>';
      }
      return '<path d="M32 36 Q50 20 68 36" fill="none" stroke="#B89A4C" stroke-width="1.6"/>' + s;
    },
    i_2sa: function () {
      return '<path d="M33 31 L34.5 17 L42 25 L50 13 L58 25 L65.5 17 L67 31 Z" fill="#E2C15A" stroke="#A67F1F" stroke-width="1.3" stroke-linejoin="round"/><rect x="33" y="29" width="34" height="5" rx="1.5" fill="#EBCE6E" stroke="#A67F1F" stroke-width="1.1"/><circle cx="50" cy="31.6" r="1.8" fill="#B0574B"/><circle cx="42" cy="31.6" r="1.4" fill="#4C7FB0"/><circle cx="58" cy="31.6" r="1.4" fill="#4C7FB0"/><circle cx="50" cy="13" r="1.8" fill="#B0574B"/><circle cx="34.5" cy="17" r="1.5" fill="#B0574B"/><circle cx="65.5" cy="17" r="1.5" fill="#B0574B"/>';
    },
    i_est: function () {
      return '<path d="M37 30 L39.5 21 L45 26 L50 17 L55 26 L60.5 21 L63 30 Z" fill="#EBD48E" stroke="#A67F1F" stroke-width="1.1" stroke-linejoin="round"/><rect x="36" y="28.6" width="28" height="3.6" rx="1.4" fill="#E2C15A" stroke="#A67F1F" stroke-width=".9"/><ellipse cx="50" cy="23.6" rx="2.2" ry="3" fill="#8E5FB0" stroke="#5E3A7A" stroke-width=".8"/><circle cx="50" cy="16.4" r="1.3" fill="#8E5FB0"/><circle cx="39.6" cy="20.6" r="1.1" fill="#B0574B"/><circle cx="60.4" cy="20.6" r="1.1" fill="#B0574B"/>';
    },
    i_sng: function () {
      var s = '<path d="M32 36 Q50 19 68 36" fill="none" stroke="#6F9C5B" stroke-width="2"/>';
      [-56, -30, -6, 18, 42, 66].forEach(function (a, i) {
        s += '<g transform="rotate(' + a + ' 50 43)"><ellipse cx="46" cy="21" rx="2.2" ry="1.1" fill="#7FB068" transform="rotate(-24 46 21)"/><g transform="translate(50 20.4)"><circle cx="0" cy="-2.6" r="2" fill="#FFFFFF"/><circle cx="2.5" cy="-.8" r="2" fill="#FFFFFF"/><circle cx="1.6" cy="2.1" r="2" fill="#FFFFFF"/><circle cx="-1.6" cy="2.1" r="2" fill="#FFFFFF"/><circle cx="-2.5" cy="-.8" r="2" fill="#FFFFFF"/><circle cx="0" cy="0" r="1.2" fill="#F1D774"/></g></g>';
      });
      return s;
    },
    i_hag: function () {
      return '<path d="M32.4 38.4 C31 15 69 15 67.6 38.4 Q50 32 32.4 38.4Z" fill="#D8C79C" stroke="#A89568" stroke-width="1.1"/><path d="M33 37 Q50 32 67 37" fill="none" stroke="#8A6A3F" stroke-width="3.2"/><path d="M64 36 Q74 40 76 52 L70 48 L72 58 L66 46Z" fill="#D8C79C" stroke="#A89568" stroke-width="1"/><path d="M40 25 Q50 20 60 25" fill="none" stroke="#B9A47A" stroke-width="1.2"/>';
    },
    i_act: function () {
      var f = function (x, y, s, c1, c2) { return '<g transform="translate(' + x + ' ' + y + ') scale(' + s + ')"><path d="M0 -12 Q7 -4 5 3 Q3 9 0 9 Q-3 9 -5 3 Q-7 -4 0 -12Z" fill="' + c1 + '"/><path d="M0 -4 Q3 0 2 4 Q1 6.5 0 6.5 Q-1 6.5 -2 4 Q-3 0 0 -4Z" fill="' + c2 + '"/></g>'; };
      return f(38, 25, .75, "#EE7B36", "#F6C35A") + f(62, 25, .75, "#EE7B36", "#F6C35A") + f(50, 19.5, 1, "#F0902F", "#FFE38A");
    },
    i_gal: function () {
      var s = '<path d="M32 36 Q50 19 68 36" fill="none" stroke="#6F9C5B" stroke-width="2"/>', cols = ["#7A5A9A", "#E0904A", "#C0483E", "#8FBF5A", "#E7C64A", "#7A5A9A"];
      [-58, -34, -10, 14, 38, 62].forEach(function (a, i) {
        s += '<g transform="rotate(' + a + ' 50 43)"><ellipse cx="46.6" cy="21.2" rx="2.4" ry="1.2" fill="#7FB068" transform="rotate(-24 46.6 21.2)"/><circle cx="50" cy="21" r="2.9" fill="' + cols[i] + '"/><circle cx="49" cy="20" r=".8" fill="#FFFFFF" opacity=".55"/></g>';
      });
      return s;
    },
    i_php: function () {
      var s = "";
      for (var i = 0; i < 6; i++) {
        var a = 30 + i * 13;
        s += '<g transform="rotate(' + (-a) + ' 50 43)"><ellipse cx="46.6" cy="22.6" rx="4.2" ry="1.8" fill="#6F9C5B" transform="rotate(-38 46.6 22.6)"/></g><g transform="rotate(' + a + ' 50 43)"><ellipse cx="53.4" cy="22.6" rx="4.2" ry="1.8" fill="#6F9C5B" transform="rotate(38 53.4 22.6)"/></g>';
      }
      return '<path d="M32.5 38 Q50 22 67.5 38" fill="none" stroke="#5A8248" stroke-width="1.6"/>' + s + '<path d="M50 24 l-2 -3 M50 24 l2 -3" stroke="#B0574B" stroke-width="1.4" stroke-linecap="round"/>';
    },
    i_tit: function () {
      return '<path d="M33 35 Q50 29 67 35 L67 39 Q50 33 33 39Z" fill="#B0574B"/><path d="M33 35 Q50 29 67 35" fill="none" stroke="#8A3E34" stroke-width="1"/><path d="M66 37 l8 4 M66 37 l7 -2" stroke="#B0574B" stroke-width="2.4" stroke-linecap="round"/>';
    },
    i_rev: function () {
      return '<path d="M32 33 L33 19 L41 27 L50 14 L59 27 L67 19 L68 33 Z" fill="#F0D060" stroke="#A67F1F" stroke-width="1.3" stroke-linejoin="round"/><rect x="32" y="30.6" width="36" height="6" rx="2" fill="#F5DC78" stroke="#A67F1F" stroke-width="1.1"/><circle cx="50" cy="33.6" r="2.2" fill="#B0574B"/><circle cx="41" cy="33.6" r="1.7" fill="#4C7FB0"/><circle cx="59" cy="33.6" r="1.7" fill="#4C7FB0"/><circle cx="36" cy="33.6" r="1.3" fill="#5C9A6A"/><circle cx="64" cy="33.6" r="1.3" fill="#5C9A6A"/><circle cx="50" cy="14" r="2" fill="#FFFFFF" stroke="#A67F1F" stroke-width=".8"/><circle cx="33" cy="19" r="1.7" fill="#8E5FB0"/><circle cx="67" cy="19" r="1.7" fill="#8E5FB0"/>' + avStar4(24, 20, 3.4, "#FFF3C4") + avStar4(78, 18, 2.8, "#FFF3C4");
    }
  };
  // ---------- 얼굴 소품 ----------
  var AV_ART_FA = {
    none: function () { return ""; },
    goatee: function (c) { return '<path d="M44.6 54.4 Q50 52.4 55.4 54.4 Q55 61.8 50 62.4 Q45 61.8 44.6 54.4Z" fill="' + c.hair + '"/>'; },
    mole: function (c) { return '<circle cx="57.4" cy="49.6" r=".95" fill="' + avShade(c.skin, .5) + '"/>'; },
    lashes: function () { return '<path d="M40.8 41.2 L39.2 39.8 M42.2 40.6 L41.4 38.8 M45.6 41.2 L46.6 39.8 M59.2 41.2 L60.8 39.8 M57.8 40.6 L58.6 38.8 M54.4 41.2 L53.4 39.8" stroke="#2B2118" stroke-width=".9" stroke-linecap="round" fill="none"/>'; },
    blush: function () { return '<ellipse cx="38.8" cy="49" rx="3.4" ry="2" fill="#F08A8A" opacity=".5"/><ellipse cx="61.2" cy="49" rx="3.4" ry="2" fill="#F08A8A" opacity=".5"/>'; },
    freckles: function (c) { return '<g fill="' + avShade(c.skin, .72) + '"><circle cx="40.6" cy="48.6" r=".9"/><circle cx="43.4" cy="49.6" r=".9"/><circle cx="46" cy="48.4" r=".9"/><circle cx="54" cy="48.4" r=".9"/><circle cx="56.6" cy="49.6" r=".9"/><circle cx="59.4" cy="48.6" r=".9"/></g>'; },
    beard: function (c) { return '<path d="M35.4 46 C35 62 42 66.6 50 66.6 C58 66.6 65 62 64.6 46 C63 54 58.6 55.6 50 55.6 C41.4 55.6 37 54 35.4 46Z" fill="' + c.hair + '"/><path d="M45 52.6 Q50 54.6 55 52.6" fill="none" stroke="' + c.skinD + '" stroke-width="1.4" stroke-linecap="round"/>'; },
    stache: function (c) { return '<path d="M44 51 Q47 48.6 50 50.4 Q53 48.6 56 51 Q53 52.6 50 51.8 Q47 52.6 44 51Z" fill="' + c.hair + '"/>'; },
    i_lam: function () { return '<path d="M42.6 46.6 Q40.6 50.6 42.6 52 Q44.6 50.6 42.6 46.6Z" fill="#8FC1E0" stroke="#5B8FB0" stroke-width=".8"/><circle cx="42" cy="50.6" r=".7" fill="#FFFFFF"/>'; },
    i_hos: function () { return '<ellipse cx="38.6" cy="49.4" rx="3.8" ry="2.4" fill="#F08A8A" opacity=".65"/><ellipse cx="61.4" cy="49.4" rx="3.8" ry="2.4" fill="#F08A8A" opacity=".65"/>'; },
    i_2jn: function () {
      var h = function (x, y, s) { return '<path transform="translate(' + x + ' ' + y + ') scale(' + s + ')" d="M0 3 C-5 -1 -3 -5 0 -2 C3 -5 5 -1 0 3Z" fill="#E86A7A"/>'; };
      return h(38.4, 49.6, .95) + h(61.6, 49.6, .95) + h(35.6, 46, .5) + h(64.4, 46, .5);
    }
  };
  // ---------- 안경 (기본 · 처음부터 사용) ----------
  var AV_GL_C = "#3C3C3C";
  function avGlTemples() { return '<path d="M37.6 42 L34.6 41.2 M62.4 42 L65.4 41.2" stroke="' + AV_GL_C + '" stroke-width="1.3" stroke-linecap="round"/>'; }
  var AV_ART_GL = {
    none: function () { return ""; },
    round: function () { return '<circle cx="43.4" cy="43.6" r="5.6" fill="#FFFFFF" fill-opacity=".25" stroke="' + AV_GL_C + '" stroke-width="1.5"/><circle cx="56.6" cy="43.6" r="5.6" fill="#FFFFFF" fill-opacity=".25" stroke="' + AV_GL_C + '" stroke-width="1.5"/><path d="M49 43.4 h2 M37.8 43 L34.6 42 M62.2 43 L65.4 42" stroke="' + AV_GL_C + '" stroke-width="1.5" stroke-linecap="round"/>'; },
    // 가로가 세로보다 약간 긴 직사각형 (11.8 x 9)
    rect: function () { return '<rect x="37.4" y="39.2" width="11.8" height="9" rx="1.5" fill="#FFFFFF" fill-opacity=".25" stroke="' + AV_GL_C + '" stroke-width="1.4"/><rect x="50.8" y="39.2" width="11.8" height="9" rx="1.5" fill="#FFFFFF" fill-opacity=".25" stroke="' + AV_GL_C + '" stroke-width="1.4"/><path d="M49.2 42 h1.6" stroke="' + AV_GL_C + '" stroke-width="1.4" stroke-linecap="round"/>' + avGlTemples(); },
    square: function () { return '<rect x="38.2" y="38.6" width="10.4" height="10.4" rx="2" fill="#FFFFFF" fill-opacity=".25" stroke="' + AV_GL_C + '" stroke-width="1.4"/><rect x="51.4" y="38.6" width="10.4" height="10.4" rx="2" fill="#FFFFFF" fill-opacity=".25" stroke="' + AV_GL_C + '" stroke-width="1.4"/><path d="M48.6 42 h2.8" stroke="' + AV_GL_C + '" stroke-width="1.4" stroke-linecap="round"/>' + avGlTemples(); },
    oval: function () { return '<ellipse cx="43.4" cy="43.6" rx="6" ry="4.6" fill="#FFFFFF" fill-opacity=".25" stroke="' + AV_GL_C + '" stroke-width="1.4"/><ellipse cx="56.6" cy="43.6" rx="6" ry="4.6" fill="#FFFFFF" fill-opacity=".25" stroke="' + AV_GL_C + '" stroke-width="1.4"/><path d="M49.4 43 h1.2" stroke="' + AV_GL_C + '" stroke-width="1.4" stroke-linecap="round"/>' + avGlTemples(); },
    cat: function () { return '<path d="M37 39.4 L48.8 41.4 Q48.8 48.4 43.2 48.4 Q37.2 48.4 37 39.4Z" fill="#FFFFFF" fill-opacity=".25" stroke="#8A3E5A" stroke-width="1.4" stroke-linejoin="round"/><path d="M63 39.4 L51.2 41.4 Q51.2 48.4 56.8 48.4 Q62.8 48.4 63 39.4Z" fill="#FFFFFF" fill-opacity=".25" stroke="#8A3E5A" stroke-width="1.4" stroke-linejoin="round"/><path d="M48.8 41.6 h2.4 M37 39.6 L34.6 38.6 M63 39.6 L65.4 38.6" stroke="#8A3E5A" stroke-width="1.4" stroke-linecap="round"/>'; },
    half: function () { return '<path d="M37.6 40.2 H49.2 V43.6 Q49.2 48 43.4 48 Q37.6 48 37.6 43.6Z" fill="#FFFFFF" fill-opacity=".22" stroke="' + AV_GL_C + '" stroke-width=".8"/><path d="M50.8 40.2 H62.4 V43.6 Q62.4 48 56.6 48 Q50.8 48 50.8 43.6Z" fill="#FFFFFF" fill-opacity=".22" stroke="' + AV_GL_C + '" stroke-width=".8"/><path d="M37.2 40.2 H49.6 M50.4 40.2 H62.8" stroke="' + AV_GL_C + '" stroke-width="1.9" stroke-linecap="round"/><path d="M49.6 40.6 h.8" stroke="' + AV_GL_C + '" stroke-width="1.4"/>' + avGlTemples(); },
    sun: function () { return '<rect x="37.2" y="39.4" width="12" height="8.8" rx="3.4" fill="#25252E" stroke="#111114" stroke-width="1.2"/><rect x="50.8" y="39.4" width="12" height="8.8" rx="3.4" fill="#25252E" stroke="#111114" stroke-width="1.2"/><path d="M49.2 41.6 h1.6" stroke="#111114" stroke-width="1.4" stroke-linecap="round"/><path d="M39.6 41.6 l3 -.1 M53.2 41.6 l3 -.1" stroke="#FFFFFF" stroke-width="1" stroke-linecap="round" opacity=".55"/><path d="M37.2 42 L34.6 41.2 M62.8 42 L65.4 41.2" stroke="#111114" stroke-width="1.3" stroke-linecap="round"/>'; }
  };
  // ---------- 어깨 동무(오른쪽 어깨 곁) ----------
  var AV_ART_CP = {
    none: function () { return ""; },
    i_deu: function () { return '<g stroke="#8C877C" stroke-width="1.2"><path d="M65 84 V64 Q65 58 71 58 Q77 58 77 64 V84Z" fill="#C4BEB2"/><path d="M78 84 V66 Q78 60 84 60 Q90 60 90 66 V84Z" fill="#B9B3A8"/></g><g stroke="#6F6A60" stroke-width="1" stroke-linecap="round"><path d="M68 65 h6 M68 69 h6 M68 73 h6 M68 77 h6 M81 67 h6 M81 71 h6 M81 75 h6"/></g>'; },
    i_jos: function () { return '<path d="M67 86 C64 70 74 58 90 60 C82 62 76 68 76 80 C75 84 71 87 67 86Z" fill="#C4A06A" stroke="#7A5B32" stroke-width="1.4" stroke-linejoin="round"/><path d="M88 60 l3 -1.4" stroke="#7A5B32" stroke-width="2.2" stroke-linecap="round"/><path d="M69 78 Q72 68 82 63" fill="none" stroke="#E0C58F" stroke-width="1.2"/>'; },
    i_jdg: function () { return '<path d="M78 88 L74 64" stroke="#7A5B32" stroke-width="3" stroke-linecap="round"/><path d="M73 65 Q66 57 72 47 Q74 53 77 52 Q80 47 80 42 Q86 50 81 59 Q79 65 73 65Z" fill="#EE7B36"/><path d="M74 62 Q71 57 75 53 Q77 57 79 55 Q80 59 77 62Z" fill="#F6C35A"/>'; },
    i_1sa: function () { return '<path d="M70 58 Q66 74 74 82" fill="none" stroke="#8A6A4A" stroke-width="1.6" stroke-linecap="round"/><path d="M84 58 Q88 74 80 82" fill="none" stroke="#8A6A4A" stroke-width="1.6" stroke-linecap="round"/><path d="M70 58 h14" stroke="#8A6A4A" stroke-width="1.6" stroke-linecap="round"/><ellipse cx="77" cy="82" rx="7.4" ry="4.6" fill="#8A6A4A" stroke="#5E4128" stroke-width="1"/><circle cx="77" cy="80.6" r="3.2" fill="#A7A39A" stroke="#7B776E" stroke-width=".8"/>'; },
    i_1ch: function () { return '<path d="M69 88 L71 60 Q80 52 88 62 L84 88 Z" fill="#E7C868" fill-opacity=".35" stroke="#B08A2E" stroke-width="2" stroke-linejoin="round"/><g stroke="#8A6E1E" stroke-width=".9"><path d="M73 62 V86 M76.4 58.6 V86.4 M79.8 58.2 V86.6 M83.2 60 V87"/></g>'; },
    i_2ch: function () {
      var f = function (x) { return '<path d="M' + x + ' 56 Q' + (x + 2) + ' 59 ' + x + ' 62 Q' + (x - 2) + ' 59 ' + x + ' 56Z" fill="#F6C35A"/>'; };
      return '<g fill="none" stroke="#C9A34A" stroke-width="1.8" stroke-linecap="round"><path d="M77 90 V64"/><path d="M69 90 H85 M71 90 Q71 86 77 86 Q83 86 83 90"/><path d="M77 78 Q69 78 69 66 V64 M77 78 Q85 78 85 66 V64 M77 72 Q72 72 72 66 V64 M77 72 Q82 72 82 66 V64"/></g>' + f(69) + f(72) + f(77) + f(82) + f(85);
    },
    i_ezr: function () { return '<rect x="66" y="62" width="24" height="18" rx="1.4" fill="#F1E6C6" stroke="#B89A4C" stroke-width="1.1"/><rect x="63.6" y="59.6" width="4.8" height="22.8" rx="2.4" fill="#D9C58E" stroke="#B89A4C" stroke-width="1"/><rect x="87.6" y="59.6" width="4.8" height="22.8" rx="2.4" fill="#D9C58E" stroke="#B89A4C" stroke-width="1"/><path d="M71 67 h14 M71 71 h14 M71 75 h9" stroke="#8A7A55" stroke-width="1.2" stroke-linecap="round"/>'; },
    i_pro: function () { return '<g fill="#6B3A2A" stroke="#6B3A2A" stroke-width="1"><ellipse cx="70" cy="76" rx="3.4" ry="2.6"/><ellipse cx="77" cy="76.6" rx="3" ry="2.4"/><ellipse cx="85" cy="76" rx="4.6" ry="3.4"/></g><g fill="none" stroke="#6B3A2A" stroke-width="1.1" stroke-linecap="round"><path d="M68 74 Q65 70 62 70 M69 73 Q68 68 65 66 M76 78 L74 83 M79 78 L81 83 M84 78 L88 83 M72 78 L69 83"/></g>'; },
    i_ecc: function () { return '<path d="M68 58 H88 M68 88 H88" stroke="#8A6A4A" stroke-width="3" stroke-linecap="round"/><path d="M70 59 H86 L79 72 L86 87 H70 L77 72Z" fill="#FFFFFF" fill-opacity=".4" stroke="#8A6A4A" stroke-width="1.6" stroke-linejoin="round"/><path d="M73 60.6 H83 L78 68Z" fill="#E2C15A"/><path d="M78 72 V80 M73 87 Q78 80 83 87Z" fill="#E2C15A" stroke="#E2C15A" stroke-width="1.2"/>'; },
    i_isa: function () { return '<path d="M78 70 C70 60 64 54 62 56 C64 62 68 68 74 72Z" fill="#6B4A32"/><path d="M78 70 C86 58 94 54 96 56 C94 62 88 68 82 72Z" fill="#6B4A32"/><path d="M72 66 Q66 62 64 58 M84 66 Q90 62 92 58" fill="none" stroke="#8A6A4A" stroke-width="1"/><ellipse cx="78" cy="74" rx="3.6" ry="6" fill="#6B4A32"/><circle cx="78" cy="66.4" r="3.4" fill="#F7F4EC"/><path d="M78 68 l3.6 1.2 l-3.4 1.2Z" fill="#E2A93C"/><circle cx="77" cy="65.8" r=".7" fill="#2B2118"/><path d="M76 80 l-2 5 M80 80 l2 5" stroke="#E2A93C" stroke-width="1.4" stroke-linecap="round"/>'; },
    i_jer: function () { return '<path d="M71 62 Q64 70 68 80 Q71 88 78 88 Q85 88 88 80 Q92 70 85 62Z" fill="#C0774E" stroke="#8A4A2A" stroke-width="1.4" stroke-linejoin="round"/><path d="M71 62 Q78 66 85 62" fill="#A8613A" stroke="#8A4A2A" stroke-width="1.4"/><rect x="72" y="58" width="12" height="5" rx="2" fill="#D9895C" stroke="#8A4A2A" stroke-width="1.2"/><path d="M68 74 Q78 78 88 74" fill="none" stroke="#8A4A2A" stroke-width="1"/>'; },
    i_ezk: function () {
      var s = '<circle cx="77" cy="72" r="11" fill="none" stroke="#C9A34A" stroke-width="3.4"/><circle cx="77" cy="72" r="11" fill="none" stroke="#8A6E1E" stroke-width=".8"/>';
      for (var i = 0; i < 4; i++) s += '<path d="M77 72 L' + (77 + 11 * Math.cos(i * Math.PI / 4)) + ' ' + (72 + 11 * Math.sin(i * Math.PI / 4)) + ' L' + (77 - 11 * Math.cos(i * Math.PI / 4)) + ' ' + (72 - 11 * Math.sin(i * Math.PI / 4)) + '" stroke="#C9A34A" stroke-width="1.6"/>';
      return s + '<ellipse cx="77" cy="72" rx="5.2" ry="3.4" fill="#FFFFFF" stroke="#8A6E1E" stroke-width="1"/><circle cx="77" cy="72" r="2.2" fill="#3D5A80"/><circle cx="76.4" cy="71.4" r=".7" fill="#FFFFFF"/>';
    },
    i_dan: function () {
      var s = "";
      for (var i = 0; i < 12; i++) { var a = i * Math.PI / 6; s += '<circle cx="' + (77 + 9.4 * Math.cos(a)).toFixed(1) + '" cy="' + (72 + 9.4 * Math.sin(a)).toFixed(1) + '" r="4.2" fill="#B8792F"/>'; }
      return s + '<circle cx="77" cy="72" r="8.4" fill="#C48B3C"/><ellipse cx="77" cy="73.6" rx="6" ry="6.4" fill="#E8BE6A"/><circle cx="74.4" cy="71.4" r="1" fill="#2B2118"/><circle cx="79.6" cy="71.4" r="1" fill="#2B2118"/><path d="M75.4 74.4 L77 73.4 L78.6 74.4 L77 76Z" fill="#8A4A3A"/><path d="M77 76 Q75 78.4 73.6 77.4 M77 76 Q79 78.4 80.4 77.4" fill="none" stroke="#8A4A3A" stroke-width=".9" stroke-linecap="round"/><circle cx="71.6" cy="65.2" r="2.2" fill="#E8BE6A"/><circle cx="82.4" cy="65.2" r="2.2" fill="#E8BE6A"/>';
    },
    i_jol: function () { return '<g transform="rotate(-14 78 74)"><ellipse cx="76" cy="74" rx="9" ry="3.8" fill="#7FA35A" stroke="#5A7D3C" stroke-width="1"/><ellipse cx="86" cy="72" rx="3.6" ry="3" fill="#8DB566" stroke="#5A7D3C" stroke-width="1"/><circle cx="87.4" cy="71.4" r=".8" fill="#2B2118"/><path d="M70 74 L62 78 L62 72 Z" fill="#6E9450"/><path d="M74 72 L68 62 L82 70Z" fill="#9CC276" stroke="#5A7D3C" stroke-width=".8"/><path d="M74 77 L70 86 L64 86 M80 77 L82 86 L88 86" fill="none" stroke="#5A7D3C" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/><path d="M88 70 Q92 64 96 64" fill="none" stroke="#5A7D3C" stroke-width=".9"/></g>'; },
    i_amo: function () { return '<path d="M70 58 H84" stroke="#7A5B32" stroke-width="2.6" stroke-linecap="round"/><path d="M77 58 V78" stroke="#6E6E6E" stroke-width="1.2"/><path d="M77 78 L72.4 86 L81.6 86Z" fill="#8A8A8A" stroke="#5A5A5A" stroke-width="1" stroke-linejoin="round"/><path d="M77 58 L77 56" stroke="#7A5B32" stroke-width="2"/>'; },
    i_jon: function () { return '<path d="M65 74 Q74 62 86 70 Q90 72 90 74 Q90 76 86 78 Q74 86 65 74Z" fill="#6F9AB5" stroke="#4A7592" stroke-width="1.2" stroke-linejoin="round"/><path d="M66 74 L58 66 L60 74 L58 82Z" fill="#5A88A4" stroke="#4A7592" stroke-width="1" stroke-linejoin="round"/><circle cx="83" cy="72" r="1.6" fill="#FFFFFF"/><circle cx="83.4" cy="72" r=".8" fill="#2B2118"/><path d="M74 66 Q76 62 79 64" fill="none" stroke="#4A7592" stroke-width="1"/><path d="M72 76 Q78 80 84 77" fill="#B8D6E6" opacity=".7"/>'; },
    i_zep: function () { return '<g fill="#C9A34A" stroke="#C9A34A"><ellipse cx="70" cy="80" rx="3.6" ry="2.6" transform="rotate(-20 70 80)"/><ellipse cx="82" cy="76" rx="3.6" ry="2.6" transform="rotate(-20 82 76)"/><path d="M73.2 79 V62 L85 58 V75" fill="none" stroke-width="1.8"/><path d="M73.2 62 L85 58 V62.4 L73.2 66.4Z"/></g><circle cx="90" cy="64" r="1.2" fill="#F1D774"/><circle cx="66" cy="66" r="1" fill="#F1D774"/>'; },
    i_zec: function () {
      var lv = "";
      [[72, 78, -30], [74, 70, -60], [80, 66, -80], [84, 72, 20], [82, 80, 40], [76, 84, -10]].forEach(function (p) { lv += '<ellipse cx="' + p[0] + '" cy="' + p[1] + '" rx="5" ry="2.2" fill="#8FAE6A" stroke="#5F7D3E" stroke-width=".8" transform="rotate(' + p[2] + ' ' + p[0] + ' ' + p[1] + ')"/>'; });
      return '<path d="M70 88 Q76 76 78 60" fill="none" stroke="#7A6A3A" stroke-width="1.8" stroke-linecap="round"/>' + lv + '<ellipse cx="86" cy="76" rx="2.2" ry="3" fill="#4A4A32"/><ellipse cx="72" cy="66" rx="2" ry="2.8" fill="#4A4A32"/>';
    },
    i_luk: function () {
      return '<g stroke="#D8D2C4" stroke-width="1"><circle cx="70" cy="78" r="5.4" fill="#FFFFFF"/><circle cx="77" cy="75" r="6.4" fill="#FFFFFF"/><circle cx="84" cy="78" r="5.4" fill="#FFFFFF"/><circle cx="77" cy="82" r="5.6" fill="#FFFFFF"/></g><circle cx="88" cy="70" r="4.8" fill="#4A3B32"/><ellipse cx="84.4" cy="67" rx="1.8" ry="2.8" fill="#4A3B32" transform="rotate(-30 84.4 67)"/><ellipse cx="91.6" cy="67.4" rx="1.8" ry="2.8" fill="#4A3B32" transform="rotate(30 91.6 67.4)"/><circle cx="87" cy="69.6" r=".8" fill="#FFFFFF"/><circle cx="89.6" cy="69.6" r=".8" fill="#FFFFFF"/><path d="M72 86 v4 M82 86 v4" stroke="#4A3B32" stroke-width="2" stroke-linecap="round"/>';
    },
    i_1co: function () { return '<path d="M76 88 C60 76 62 62 70 62 C74 62 76 65 76 67 C76 65 78 62 82 62 C90 62 92 76 76 88Z" fill="#D9564B" stroke="#A73A31" stroke-width="1.4" stroke-linejoin="round"/><path d="M68 66 Q66 68 67 71" fill="none" stroke="#FFFFFF" stroke-width="1.4" stroke-linecap="round" opacity=".7"/><path transform="translate(88 58) scale(.7)" d="M0 6 C-8 0 -6 -6 0 -3 C6 -6 8 0 0 6Z" fill="#F08A8A" stroke="#C25A5A" stroke-width="1.2"/>'; },
    i_1th: function () { return '<path d="M68 88 L86 66" stroke="#C7CDD3" stroke-width="3.2" stroke-linecap="round"/><path d="M84 70 L92 60 L96 64 L86 74Z" fill="#DDE2E7" stroke="#8C949C" stroke-width="1.2" stroke-linejoin="round"/><path d="M68 88 L86 66" stroke="#8C949C" stroke-width=".8"/><circle cx="76" cy="78" r="1.8" fill="#E2C15A"/><circle cx="68.4" cy="87.6" r="2.2" fill="#E2C15A"/>'; },
    i_2ti: function () { return '<g transform="rotate(-8 78 74)"><rect x="66" y="60" width="22" height="28" rx="2" fill="#7A5B32" stroke="#4E3A1E" stroke-width="1.2"/><rect x="66" y="60" width="4.6" height="28" rx="2" fill="#5E4526"/><rect x="72.4" y="66" width="12" height="7" rx="1" fill="none" stroke="#E2C15A" stroke-width="1.1"/><path d="M76 78 h9 M76 82 h9" stroke="#E2C15A" stroke-width="1.1" stroke-linecap="round"/><path d="M84 60 V70 L86 68 L88 70 V60" fill="#B0574B"/></g>'; },
    i_1pe: function () { return '<path d="M66 88 Q66 80 74 79 Q84 78 90 82 Q92 88 88 90 H68Z" fill="#8C8A84" stroke="#66645E" stroke-width="1.1"/><path d="M69 78 Q69 70 76 69 Q84 69 86 75 Q86 79 82 80 H72Z" fill="#B7B4AC" stroke="#8C8A84" stroke-width="1.1"/><path d="M73 68 Q73 61 79 61 Q85 62 84 67 Q83 70 79 70 H75Z" fill="#9C9A94" stroke="#66645E" stroke-width="1.1"/>'; },
    i_3jn: function () { return '<ellipse cx="77" cy="78" rx="13" ry="8.6" fill="#D5A45C" stroke="#9A6E2E" stroke-width="1.4"/><path d="M68 75 Q70 72 72 75 M74 73 Q76 70 78 73 M80 75 Q82 72 84 75" fill="none" stroke="#9A6E2E" stroke-width="1.3" stroke-linecap="round" transform="translate(0 -1)"/><path d="M70 82 Q77 86 84 82" fill="none" stroke="#B98A46" stroke-width="1.1" opacity=".8"/>'; },
    i_jud: function () { return '<path d="M65 62 H89 V76 Q89 86 77 92 Q65 86 65 76Z" fill="#4C6A8E" stroke="#E2C15A" stroke-width="2" stroke-linejoin="round"/><path d="M77 66 V88" stroke="#E2C15A" stroke-width="2.4"/><path d="M69 72 H85" stroke="#E2C15A" stroke-width="2.4"/>'; }
  };

  // ---------- 머리카락 ----------
  // 굵고 뚜렷한 실루엣 + 볼륨 + 최소한의 결/윤기. 얼굴보다 머리 덩어리가 살짝 커야 자연스럽다.
  function avMix(a, b, t) {
    var pa = parseInt(a.slice(1), 16), pb = parseInt(b.slice(1), 16), o = "#";
    [16, 8, 0].forEach(function (sh) { var x = Math.round(((pa >> sh) & 255) * (1 - t) + ((pb >> sh) & 255) * t); o += (x < 16 ? "0" : "") + x.toString(16); });
    return o;
  }
  function avS(ds, col, w, op) { return '<path d="' + ds.join(" ") + '" fill="none" stroke="' + col + '" stroke-width="' + w + '" stroke-linecap="round" opacity="' + op + '"/>'; }
  function avP(d, col, op) { return '<path d="' + d + '" fill="' + col + '"' + (op ? ' opacity="' + op + '"' : '') + '/>'; }
  function avMir(x) { return '<g transform="translate(100 0) scale(-1 1)">' + x + '</g>'; }
  function avBoth(x) { return x + avMir(x); }
  // 여성형 긴 머리 뒷면 (머리 덩어리 + 목 뒤 그림자)
  function avLongBack(h, hd, bottom, flare) {
    var w = flare || 0;
    return avP("M30.4 42 C28.4 26 38.6 15.4 50 15.4 C61.4 15.4 71.6 26 69.6 42 C72.6 58 " + (71.6 + w) + " " + (bottom - 14) + " " + (68 + w) + " " + bottom + " L" + (32 - w) + " " + bottom + " C" + (28.4 - w) + " " + (bottom - 14) + " 27.4 58 30.4 42Z", h) +
      avP("M39 50 H61 V" + bottom + " H39Z", hd, .32);
  }
  function avHairBack0(hs, c) {
    var h = c.hair, hd = avShade(h, .62);
    switch (hs) {
      case 2: return avP("M29.6 42 C27.4 26 38.4 15.6 50 15.6 C61.6 15.6 72.6 26 70.4 42 C74 52 70 58 72 66 C73 72 68 74 65 72 L35 72 C32 74 27 72 28 66 C30 58 26 52 29.6 42Z", h) + avP("M39 50 H61 V72 H39Z", hd, .3);
      case 3: { var cb = ""; [[34, 30, 8], [66, 30, 8], [50, 19, 9], [41, 21, 8], [59, 21, 8], [29.6, 40, 6.6], [70.4, 40, 6.6]].forEach(function (q) { cb += '<circle cx="' + q[0] + '" cy="' + q[1] + '" r="' + q[2] + '" fill="' + h + '"/>'; }); return cb; }
      case 4: return avLongBack(h, hd, 88);
      case 17: return avLongBack(h, hd, 86);
      case 12: return avP("M30 42 C27.4 26 38.4 15.4 50 15.4 C61.6 15.4 72.6 26 70 42 C76 54 68 62 73 72 C75 80 68 86 65 88 L35 88 C32 86 25 80 27 72 C32 62 24 54 30 42Z", h) + avP("M39 50 H61 V88 H39Z", hd, .32);
      case 5: case 9: return avP("M29.4 42 C27.6 24 38.4 15.6 50 15.6 C61.6 15.6 72.4 24 70.6 42 L71 54 C71.2 61 65 63 58 62.6 L42 62.6 C35 63 28.8 61 29 54Z", h) + avP("M39 50 H61 V62 H39Z", hd, .3);
      case 16: return avP("M29.6 42 C27.6 25 38.4 15.6 50 15.6 C61.6 15.6 72.4 25 70.4 42 C72 54 72.6 60 71.4 67 C64 70 36 70 28.6 67 C27.4 60 28 54 29.6 42Z", h) + avP("M39 50 H61 V69 H39Z", hd, .3);
      case 6: return avP("M64.2 26.4 C72 25 77.2 32.4 76.6 43 C76.2 52 73.6 60.6 69.6 66.6 C67.8 61.6 68.4 54 67.2 46.6 C66.4 41 65.6 35 64.6 31Z", h) + avS(["M70 32 Q73.6 42 71.4 56"], avShade(h, .66), 1, .35) + '<rect x="60.8" y="27.4" width="6.8" height="5.2" rx="2" fill="#C95F52" transform="rotate(24 64 30)"/>';
      case 7: case 18: return c.hwOn ? "" : '<circle cx="50" cy="14.4" r="9.4" fill="' + h + '"/>' + avS(["M43.6 11.6 Q50 8 56.4 11.6", "M42 16 Q50 12.4 58 16"], hd, .9, .45);
      case 13: {
        var t = avP("M36.6 34 C29.4 33.6 25.4 41 25.8 51 C26 59 28 65 31.6 69.6 C34 65.4 36.4 58 37 49 C37.4 42.6 37.4 38 36.6 34Z", h) + avS(["M31 44 Q29.6 54 32 64"], avShade(h, .66), 1, .35) + '<rect x="30.4" y="34.6" width="6.4" height="4.6" rx="2" fill="#C95F52" transform="rotate(-14 33.6 37)"/>';
        return avBoth(t);
      }
      case 19: {
        var a = "";
        [[50, 34, 27], [28, 40, 8], [72, 40, 8], [31, 24, 9], [69, 24, 9], [50, 12, 10.6], [40, 15, 9], [60, 15, 9], [24, 32, 7], [76, 32, 7]].forEach(function (q) { a += '<circle cx="' + q[0] + '" cy="' + q[1] + '" r="' + q[2] + '" fill="' + h + '"/>'; });
        return a;
      }
      case 20: return avP("M30.6 42 C28.6 26 38.6 15.6 50 15.6 C61.4 15.6 71.4 26 69.4 42 C70 48 68 52 65 53 L35 53 C32 52 30 48 30.6 42Z", h);
    }
    return "";
  }
  // 얼굴 옆으로 내려오는 타래
  function avLock(h, bottom, curl) {
    return avP("M31.6 40 C29 " + (bottom - 26) + " 29.6 " + (bottom - 12) + " " + (30.6 - (curl || 0)) + " " + (bottom - 3) + " Q34 " + (bottom + 2) + " 37.4 " + (bottom - 3) + " C36.6 " + (bottom - 14) + " 36.2 " + (bottom - 28) + " 36 40Z", h);
  }
  function avHairFront0(hs, c) {
    var h = c.hair, hd = avShade(h, .68), hl = avShade(h, 1.45);
    var shine = function (d) { return avS([d], hl, 1.8, .38); };
    switch (hs) {
      case 0: // 짧은 컷 (옆으로 넘긴 앞머리)
        return avP("M31.6 46 C28.8 28 37 15.8 50 15.6 C63 15.8 71.2 28 68.4 46 L66.2 47.6 C65.6 41.6 63.8 37 61 34.4 C57 35.8 52 34.6 48.6 31 C45.8 34.8 40.6 37.2 37 37.6 C35.6 40 34.6 43.4 33.8 47.6Z", h) +
          avS(["M45 21.4 Q48 27 46.4 32", "M54.6 19.6 Q58.4 25 57.4 31"], hd, 1, .5) + shine("M38 26 C44 19.4 56 18.6 63 25");
      case 1: // 크루 컷 (짧고 평평한 윗머리)
        return avP("M32.6 44.6 C30.6 30 38.4 19.4 50 19.4 C61.6 19.4 69.4 30 67.4 44.6 L66 46 C65 38.8 61.6 33.8 50 33.4 C38.4 33.8 35 38.8 34 46Z", h) + shine("M38 26 C44 21.6 56 21.6 62 26");
      case 2: // 웨이브 단발
        return avP("M31 48 C28.4 27 38 16 50 15.8 C62 16 71.6 27 69 48 C67.8 42 65 36.6 60 34 C54.4 32.6 51.6 29.4 50 26.6 C48.4 29.4 45.6 32.6 40 34 C35 36.6 32.2 42 31 48Z", h) + avBoth(avP("M31.6 44 C27 50 33 56 29 64 C28 69 33 71 36 68 C33 62 38 58 36.4 50Z", h)) +
          avS(["M42 24 Q45 28 42 33", "M58 24 Q55 28 58 33"], hd, 1, .45) + shine("M37 26 C43 18.6 57 18.6 63 26");
      case 3: { // 곱슬머리 (짧은 컬)
        var s = avP("M32.6 46 C30.6 30 39.4 22 50 22 C60.6 22 69.4 30 67.4 46 C66 38 59 33 50 33 C41 33 34 38 32.6 46Z", h);
        [[35, 34, 6], [41, 27, 6.6], [50, 23.6, 6.8], [59, 27, 6.6], [65, 34, 6], [32.6, 42, 5.2], [67.4, 42, 5.2], [45.6, 31.4, 5], [54.4, 31.4, 5], [38.6, 37, 4.2], [61.4, 37, 4.2]].forEach(function (q) { s += '<circle cx="' + q[0] + '" cy="' + q[1] + '" r="' + q[2] + '" fill="' + h + '" stroke="' + hd + '" stroke-width=".7" stroke-opacity=".45"/>'; });
        return s;
      }
      case 4: // 긴 생머리 (가운데 가르마)
        return avP("M30.8 48 C28.2 28 38 15.6 50 15.4 C62 15.6 71.8 28 69.2 48 C67.8 42 64.6 36 59.4 32.2 C54.4 29 48.4 26.4 44.8 24.6 C43 27.8 40 30.4 37 33.4 C33.8 36.8 32 42 30.8 48Z", h) + avS(["M44.8 15.8 Q44.4 20 44.8 24.6"], hd, 1, .55) +
          avBoth(avP("M30.8 34 L37.2 33.6 L37.4 41.6 L35.2 50 L31 50Z", h)) + avBoth(avLock(h, 86)) + shine("M37 25 C43 17.6 57 17.6 63 25");
      case 5: // 단발 (옆 넘김 앞머리)
        return avP("M31.4 48 C29 28 38 16.8 50 16.6 C62 16.8 71 28 68.6 48 C67 42 64 37 59 34.6 C52 37 44 36 38 32.6 C35 37 32.6 42 31.4 48Z", h) +
          avBoth(avP("M30.8 34 L37.2 33.6 L37.4 41.6 L35.2 50 L31 50Z", h)) + avBoth(avLock(h, 61, -1)) + avS(["M44 22 Q47 28 44.6 33", "M54 21 Q58 26 56.6 32"], hd, 1, .45) + shine("M37 26 C43 18 57 18 63 26");
      case 6: case 7: // 뒤로 묶은 머리 (앞머리 없이 이마 드러남)
        return avP("M32 47 C29.4 28 38 16.8 50 16.6 C62 16.8 70.6 28 68 47 C66.8 40.6 63.6 35 58 32.2 C53 30.2 47 30.2 42 32.2 C36.4 35 33.2 40.6 32 47Z", h) +
          avS(["M40 34 Q44 26 50 21", "M50 30.6 Q54 25 61 22"], hd, 1, .45) + shine("M38 26 C44 18.6 56 18.6 62 26");
      case 8: // 가르마 머리 (남성 컷)
        return avP("M31.4 46 C28.6 28 37.4 16.6 50 16.4 C62.6 16.6 71.4 28 68.6 46 L66.4 47.6 C65.8 42 64 37.6 61.6 35 C57 34 50.6 31.6 43.8 25.4 C41.2 31.6 38 36 35.4 40 L33.6 47.6Z", h) +
          avS(["M43.8 25.4 Q42.6 21 42 17.4"], hd, 1.2, .8) + avS(["M45.6 26 Q54 28.6 61 33.6", "M47.6 21.6 Q57 22.6 65 30"], hd, 1, .45) + shine("M46 19.6 C54 17.6 62 21 66 28");
      case 9: // 뱅 단발 (일자 앞머리)
        return avP("M30.6 48 C28.6 28 38 16.6 50 16.6 C62 16.6 71.4 28 69.4 48 C68.6 41 67.4 36.6 65.4 35.2 C58 37 42 37 34.6 35.2 C32.6 36.6 31.4 41 30.6 48Z", h) +
          avBoth(avP("M30.8 34 L37.2 33.6 L37.4 41.6 L35.2 50 L31 50Z", h)) + avBoth(avLock(h, 61, -1)) + avS(["M41 22 L40 35", "M50 20 V36.2", "M59 22 L60 35"], hd, 1, .35) + shine("M37 25 C43 17.6 57 17.6 63 25");
      case 10: // 투블럭 (옆·뒤는 짧게, 윗머리는 길게)
        return avP("M32.4 46 C30.6 34 38 27 50 27 C62 27 69.4 34 67.6 46 L66 47.6 C65 41 62.4 36.6 59.6 34 L40.4 34 C37.6 36.6 35 41 34 47.6Z", hd, .92) +
          avP("M34.4 38 C31.4 22 40 13.4 51 13.6 C62 13.8 69 22 65.4 38 C64.4 34.6 62.4 32 59 30.6 C54 32.6 46 32 41.6 29.6 C38 31.4 35.6 34.4 34.4 38Z", h) +
          avS(["M42 18 Q45 24 43 29", "M52 15.6 Q56 21 55 28"], hd, 1, .45) + shine("M40 20 C46 14.6 58 14.6 63 21");
      case 11: // 뾰족 머리
        return avP("M32.4 44 C30.6 32 39 26 50 26 C61 26 69.4 32 67.6 44 C65.4 36.6 59 32.6 50 32.6 C41 32.6 34.6 36.6 32.4 44Z", h) +
          avP("M33 36 L28 22 L38.6 27.6 L37.6 9.6 L46.4 25 L50 6.6 L54.4 25 L63 10.4 L62.4 27.8 L72 22 L67 36 C60 30.6 40 30.6 33 36Z", h) +
          avS(["M38 28 L38 17", "M50 26 L50 13", "M62 28 L63 17"], hd, 1, .4) + avS(["M44 22 L47 14"], hl, 1.4, .4);
      case 12: // 긴 웨이브 (가운데 가르마)
        return avP("M30.6 48 C28 28 38 15.6 50 15.4 C62 15.6 72 28 69.4 48 C67.6 42.4 64.6 36 59 32 C54.2 29 48.4 26.6 44.8 24.8 C43 28 40 30.6 37.4 33.4 C34 37 32.2 42.4 30.6 48Z", h) + avS(["M44.8 15.8 Q44.4 20.4 44.8 24.8"], hd, 1, .55) +
          avBoth(avP("M32 44 C27 54 34 60 30.6 70 C29.4 76 35 79 38 75.6 C35 68.6 39 63 36.2 55 C35.6 51 35.8 47 35.8 44Z", h)) + shine("M37 25 C43 17.6 57 17.6 63 25");
      case 13: // 양갈래 (가운데 가르마)
        return avP("M32 46 C29.6 28 38.6 16.6 50 16.4 C61.4 16.6 70.4 28 68 46 C66.6 40 62.6 34.4 56.4 32 C52.4 30.6 48.4 29.8 45 29.4 C41.8 31.6 38 33.4 35.4 36.6 C33.4 39 32.4 42.4 32 46Z", h) + avS(["M45 17 Q44.4 23 45 29.4"], hd, 1, .55) +
          avS(["M38 26 Q40 31 38 35", "M58 26 Q56 30.4 58 34.6"], hd, 1, .4) + shine("M38 26 C44 18.4 56 18.4 62 26");
      case 14: // 올백
        return avP("M31.6 45 C29 26 39 14.6 50 14.6 C61 14.6 71 26 68.4 45 L66.4 46.6 C65.4 38 62 32 56 29.6 C53 28.6 51 28.4 50 29.4 C49 28.4 47 28.6 44 29.6 C38 32 34.6 38 33.6 46.6Z", h) +
          avS(["M36 37 Q40 26 48 19", "M42 32 Q47 24 56 19", "M60 31 Q59 25 54 20"], hd, 1, .45) + shine("M40 24 C46 17 56 16.6 62 23");
      case 15: // 삭발 (그림자처럼 보이는 짧은 머리)
        return avP("M33.4 42 C32.6 30 40 24.6 50 24.6 C60 24.6 67.4 30 66.6 42 C64.6 35 59 31.4 50 31.4 C41 31.4 35.4 35 33.4 42Z", h, .34);
      case 16: // 중단발 (가운데 가르마 + 바깥으로 살짝 뻗는 끝)
        return avP("M30.8 48 C28.4 28 38 15.8 50 15.6 C62 15.8 71.6 28 69.2 48 C67.6 41.8 64 36 58 32.2 C53.4 29.4 48.2 27 44.6 25.2 C42.8 28.4 40 30.8 37.2 33.6 C33.8 37 32.2 42 30.8 48Z", h) + avS(["M44.6 15.8 Q44.2 20.6 44.6 25.2"], hd, 1, .55) +
          avBoth(avP("M30.8 34 L37.2 33.6 L37.4 41.6 L35.2 50 L31 50Z", h)) + avBoth(avP("M31.6 40 C30 52 30 58 27.4 65 C31.4 66 35.6 64 37 60 C36 54 36.4 50 36 40Z", h)) + shine("M37 25 C43 17.6 57 17.6 63 25");
      case 17: { // 시스루 뱅 긴 머리 (이마가 비치는 얇은 앞머리)
        var wv = "";
        for (var k = 0; k < 9; k++) { var x = 40.6 + k * 2.35, sw = (k - 4) * .5; wv += "M" + x.toFixed(1) + " 29.6 Q" + (x + sw * .5).toFixed(1) + " 34.6 " + (x + sw).toFixed(1) + " 38.6 "; }
        return avP("M30.8 48 C28.4 28 38 15.8 50 15.6 C62 15.8 71.6 28 69.2 48 C67.6 42.6 64 36.2 58.4 32.4 Q50 30 41.6 32.4 C36 36.2 32.4 42.6 30.8 48Z", h) +
          avS([wv], h, .9, .72) + avBoth(avLock(h, 84)) + shine("M37 25 C43 17.6 57 17.6 63 25");
      }
      case 18: // 똥머리 + 옆으로 넘긴 뱅
        return avP("M31.6 46 C29.2 28 38.4 16.6 50 16.4 C61.6 16.6 70.8 28 68.4 46 C67.4 41.6 66 38.6 64 36.4 C58 38 42 38 36 36.4 C34 38.6 32.6 41.6 31.6 46Z", h) +
          avS(["M41 25 L40 36.6", "M50 23 V37.6", "M59 25 L60 36.6"], hd, 1, .35) + shine("M38 25 C44 18 56 18 62 25");
      case 19: // 아프로
        return avP("M34 44 C32.6 30 41 25 50 25 C59 25 67.4 30 66 44 C64 36 58.4 32.6 50 32.6 C41.6 32.6 36 36 34 44Z", h) +
          '<circle cx="38.6" cy="28.6" r="4.6" fill="' + h + '"/><circle cx="50" cy="25.6" r="5" fill="' + h + '"/><circle cx="61.4" cy="28.6" r="4.6" fill="' + h + '"/>';
      case 20: { // 땋은 머리 (가운데 가르마로 곱게 넘겨 귀 뒤에서 모은 뒤, 어깨 앞으로 한 가닥 땋아 내림)
        var cap = avP("M31 47 C28.6 28 38.4 16.2 50 16 C61.6 16.2 71.4 28 69 47 C67.8 40.4 64.6 34.4 59.4 31.2 C55.6 28.8 51.6 28 48.4 27.8 C44.8 28 40.6 28.8 37.2 31.6 C34 34.8 32.4 40.6 31 47Z", h) +
          avS(["M48.4 16.4 Q48 22 48.4 27.8"], hd, 1, .5) +
          avS(["M46 20 C41 22 36.6 27 33.6 36", "M44 18.4 C38.4 21 33.8 27 31.8 34", "M51 19 C56.6 21 62.6 26.6 66 35"], hd, .9, .32) +
          shine("M37 25 C43 17.8 57 17.8 63 25");
        // 귀 뒤에서 모이는 머리 (얼굴 바깥쪽에서 시작해 얼굴을 가리지 않음)
        var gx = 70.2, g = avP("M65.8 36 C70.2 38 74 43 74.6 49.4 C74.8 53.4 73 56.4 70.4 58 C68.4 56 67 53.4 67 50.6 C67.6 46.6 67.2 42 65.6 38.6Z", h);
        // 땋은 가닥: 어긋나게 겹친 잎 모양을 아래로 이어 붙이고, 아래로 갈수록 가늘게
        var n = 10, y0 = 49.4, dy = 4.7, br = "", cxAt = function (t) { return gx - 3.3 * t + 1.1 * Math.sin(t * 6.4); };
        for (var i = 0; i < n; i++) {
          var t0 = i / n, t1 = (i + 1.5) / n, ya = y0 + i * dy, yb = ya + dy * 1.55;
          var wa = 3.9 - 1.5 * t0, wb = 3.9 - 1.5 * Math.min(1, t1), xa = cxAt(t0), xb = cxAt(Math.min(1, t1)), dir = i % 2 ? 1 : -1;
          var x1 = xa - dir * wa, x2 = xb + dir * wb, mx = (x1 + x2) / 2, my = (ya + yb) / 2, th = 5.2 - 1.4 * t0;
          var ln = Math.sqrt((x2 - x1) * (x2 - x1) + (yb - ya) * (yb - ya)), nx = -(yb - ya) / ln * th, ny = (x2 - x1) / ln * th;
          var leaf = "M" + x1.toFixed(1) + " " + ya.toFixed(1) + " Q" + (mx + nx).toFixed(1) + " " + (my + ny).toFixed(1) + " " + x2.toFixed(1) + " " + yb.toFixed(1) + " Q" + (mx - nx).toFixed(1) + " " + (my - ny).toFixed(1) + " " + x1.toFixed(1) + " " + ya.toFixed(1) + "Z";
          br += avP(leaf, i % 2 ? avShade(h, .86) : h) +
            avS(["M" + (x1 * .7 + x2 * .3).toFixed(1) + " " + (ya * .7 + yb * .3).toFixed(1) + " L" + (x1 * .4 + x2 * .6).toFixed(1) + " " + (ya * .4 + yb * .6).toFixed(1)], hl, .7, .34);
        }
        var tipX = cxAt(1), tipY = y0 + n * dy + 1.6;
        br += avP("M" + (tipX - 2.4).toFixed(1) + " " + (tipY - 1).toFixed(1) + " C" + (tipX - 2.8).toFixed(1) + " " + (tipY + 2.6).toFixed(1) + " " + (tipX - .6).toFixed(1) + " " + (tipY + 4.6).toFixed(1) + " " + tipX.toFixed(1) + " " + (tipY + 5.4).toFixed(1) + " C" + (tipX + .8).toFixed(1) + " " + (tipY + 4.4).toFixed(1) + " " + (tipX + 3).toFixed(1) + " " + (tipY + 2.4).toFixed(1) + " " + (tipX + 2.4).toFixed(1) + " " + (tipY - 1).toFixed(1) + "Z", h) +
          '<rect x="' + (tipX - 3).toFixed(1) + '" y="' + (tipY - 2).toFixed(1) + '" width="6" height="2.8" rx="1.3" fill="#C95F52"/>';
        return cap + br + g;
      }
      case 21: // 픽시컷 (짧고 볼륨 있는 여성 컷)
        return avP("M31.6 46 C29 28 38 16 50 15.8 C62 16 71 28 68.4 46 C67.6 41 66 37.4 63.4 35.2 C57.6 36.8 50 36 43.6 32 C41 35.4 38 38.4 35.6 40 C33.8 41.4 32.6 43.4 31.6 46Z", h) +
          avBoth(avP("M32.4 36 C31.8 44 33.2 50.2 36.2 53.6 C36.6 49 36.8 44 38 39.6 L37.2 35Z", h)) + avS(["M44 21 Q49 26 47 32", "M56 20 Q61 25 59.4 31"], hd, 1, .45) + shine("M37 26 C43 17.6 57 17.6 63 26");
    }
    return "";
  }
  // ---------- 남성 · 일상 스타일 (머리 크기를 얼굴에 맞춰 낮게) ----------
  var AV_MALE_HS = { 3: 1, 19: 1, 0: 1, 1: 1, 8: 1, 10: 1, 11: 1, 14: 1, 15: 1, 22: 1, 23: 1, 24: 1, 25: 1, 26: 1, 27: 1, 28: 1, 29: 1 };
  var avHUid = 0;
  // 앞머리 아래에 생기는 이마 그림자 (얼굴 안쪽으로만)
  function avFS(d, c) {
    var id = "avf" + (++avHUid);
    return '<clipPath id="' + id + '"><ellipse cx="50" cy="43.4" rx="15.4" ry="17"/></clipPath><path d="' + d + '" transform="translate(0 1.7)" fill="' + c.skinD + '" opacity=".55" clip-path="url(#' + id + ')"/>';
  }
  function avMaleFrontOld(hs, c) {
    var h = c.hair, hd = avShade(h, .66), hl = avShade(h, 1.45);
    var shine = function (d) { return avS([d], hl, 1.7, .34); };
    var hair = function (d, extra) { return avFS(d, c) + avP(d, h) + (extra || ""); };
    switch (hs) {
      case 0: // 댄디컷 (자연스럽게 옆으로 넘긴 앞머리)
        return hair("M31.4 45 C29.6 28.6 38.4 19.6 50 19.4 C62 19.6 70.4 28.6 68.6 45 L66.8 46 C66 40.4 64.4 36 61.6 33.4 C56.4 35 50.4 34.4 45.6 32 C43.4 35 39.6 36.6 36.6 37 C35.2 39.6 34.4 42.6 33.6 46Z",
          avS(["M46 23 Q49 28 47 32", "M54.6 22 Q58.4 26 57.4 31"], hd, 1, .45) + shine("M38 27 C43 21.6 55 21 62 26"));
      case 1: // 스포츠 머리 (전체를 짧게)
        return hair("M32.4 44 C31 30.6 38 21.4 50 21.2 C62 21.4 69 30.6 67.6 44 L66.6 45 C65.8 37.6 61.4 33.2 50 32.8 C38.6 33.2 34.2 37.6 33.4 45Z", shine("M39 27 C44 23.4 56 23.4 61 27"));
      case 8: // 가르마 머리 (6:4 가르마, 단정하게)
        return hair("M31.4 45 C29.6 28.6 38.4 19.6 50 19.4 C62 19.6 70.4 28.6 68.6 45 L66.8 46 C66.2 40 64.4 36 61.8 33.6 C57 32.4 51 30.6 44 27.4 C41.4 32 37.6 36 35.6 39 C34.6 41 34 43.6 33.4 46Z",
          avS(["M44 27.4 Q43.2 24.6 42.8 22.4"], hd, 1, .5) + avS(["M45.6 28 Q54 30 61 34", "M47.4 24 Q57 25.4 65 31"], hd, 1, .4) + shine("M46 22 C54 20.6 62 24 66 30"));
      case 10: // 투블럭 (옆·뒤는 짧게, 윗머리는 자연스러운 앞머리)
        return avP("M32 46 C30.4 34.6 38 28 50 28 C62 28 69.6 34.6 68 46 L66.4 47 C65.4 41 62.8 37 60 35.4 L40 35.4 C37.2 37 34.6 41 33.6 47Z", avMix(h, c.skin, .3)) +
          hair("M34.4 40 C31.8 27 38.6 19 50 18.8 C61.4 19 68.2 27 65.6 40 C64.6 36.4 62.4 34 59 32.6 C54 34.6 46 34.2 41.4 32 C38 33.8 35.6 36.6 34.4 40Z",
          avS(["M43 22 Q46 27 44 32", "M54 21 Q57 26 56 31"], hd, 1, .45) + shine("M40 25 C46 20 57 20 62 25"));
      case 11: // 쉼표머리 (앞머리 끝이 쉼표처럼 살짝 말림)
        return hair("M31.2 45 C29.4 28.6 38.4 19.4 50 19.2 C62 19.4 70.6 28.6 68.8 45 L66.8 46 C66.2 40.6 64.4 36.4 61.4 33.8 C57.4 33 53.4 34.2 51 37 C50 38.4 50.6 39.8 52.4 40 C49.6 40.8 46.6 39.4 45.4 36.6 C44.4 34.4 42 34.4 39.6 35.6 C37 37.4 35.4 40.6 33.4 46Z",
          avS(["M44 22.6 Q47 27 45.4 32", "M55 22 Q58 26 57 31"], hd, 1, .45) + shine("M38 27 C44 21.6 56 21.6 62 27"));
      case 14: // 올백 (이마를 드러내고 뒤로 넘김)
        return hair("M31.4 44 C29.4 28 38.4 18.6 50 18.2 C61.6 18.6 70.6 28 68.6 44 L66.8 45.6 C66 38 62.6 32.6 57 29.8 C53.6 28.8 51.2 28.6 50 29.4 C48.8 28.6 46.4 28.8 43 29.8 C37.4 32.6 34 38 33.2 45.6Z",
          avS(["M37 36 Q40 27 48 21.4", "M43 31 Q48 24 57 20.6", "M60 31 Q59 26 55 22"], hd, 1, .3) + shine("M40 25 C46 19.6 56 19.4 62 24"));
      case 3: { // 곱슬머리 (짧은 컬: 윤곽은 몽글몽글, 안쪽은 소용돌이 결 / 이마선은 눈썹 위에서 깔끔하게)
        var cu = avP("M32.6 41 C29.8 30 38.4 19.6 50 19.6 C61.6 19.6 70.2 30 67.4 41 C66.2 37 63.2 33.2 58 31.6 Q50 30 42 31.6 C36.8 33.2 33.8 37 32.6 41Z", h);
        var bang = [[38.4, 31.4, 4.5], [44.4, 30.4, 4.3], [50.4, 30, 4.3], [56.4, 30.4, 4.3], [62.2, 31.4, 4.5]];
        bang.forEach(function (q) { cu += '<circle cx="' + q[0] + '" cy="' + (q[1] + 1) + '" r="' + q[2] + '" fill="' + hd + '" opacity=".28"/>'; });
        bang.forEach(function (q) { cu += '<circle cx="' + q[0] + '" cy="' + q[1] + '" r="' + q[2] + '" fill="' + h + '"/>'; });
        [[34.6, 38.2, 4.4], [65.4, 38.2, 4.4]].forEach(function (q) { cu += '<circle cx="' + q[0] + '" cy="' + q[1] + '" r="' + q[2] + '" fill="' + h + '"/>'; });
        var ar = function (x, y, r) { return "M" + (x - r).toFixed(1) + " " + y + " C" + (x - r).toFixed(1) + " " + (y - r * 1.9).toFixed(1) + " " + (x + r).toFixed(1) + " " + (y - r * 1.9).toFixed(1) + " " + (x + r).toFixed(1) + " " + y; };
        cu += avS([ar(40, 25.6, 2.6), ar(50, 24, 2.8), ar(60, 25.6, 2.6), ar(34.8, 31.6, 2.2), ar(65.2, 31.6, 2.2), ar(45, 28.6, 2.2), ar(55, 28.6, 2.2)], hd, .8, .5);
        return '<g transform="translate(0 33) scale(1 .76) translate(0 -33)">' + cu + shine("M38.6 24 C43 20.6 53 20 59 22.4") + "</g>";
      }
      case 19: { // 아프로 (이마선까지 머리카락으로 덮음)
        var af = avP("M30.6 46 C27.6 26 38.6 12.6 50 12.6 C61.4 12.6 72.4 26 69.4 46 C67.6 39 62 33.6 50 33.2 C38 33.6 32.4 39 30.6 46Z", h);
        [[38, 15.6, 8], [50, 12.6, 8.6], [62, 15.6, 8], [31, 27, 7.4], [69, 27, 7.4], [30, 38, 6.4], [70, 38, 6.4], [36, 35.6, 5], [43, 33.4, 5.2], [50, 32.6, 5.4], [57, 33.4, 5.2], [64, 35.6, 5]].forEach(function (q) { af += '<circle cx="' + q[0] + '" cy="' + q[1] + '" r="' + q[2] + '" fill="' + h + '" stroke="' + hd + '" stroke-width=".7" stroke-opacity=".35"/>'; });
        return avZ(af + shine("M38 18 C44 13.6 56 13.6 62 18"), .86);
      }
      case 15: // 삭발
        return avP("M33.4 41 C32.8 30.6 40 25.4 50 25.4 C60 25.4 67.2 30.6 66.6 41 C64.6 35 59 31.8 50 31.8 C41 31.8 35.4 35 33.4 41Z", avMix(h, c.skin, .55));
      case 22: // 상고머리 (윗면은 평평하게, 옆은 짧게 깎아 올림)
        return hair("M33 44.6 C31.4 30 35.4 21.8 41.6 20.6 L58.4 20.6 C64.6 21.8 68.6 30 67 44.6 L66 46 C65.4 39.6 63.8 35 61 32.8 C56 31.8 44 31.8 39 32.8 C36.2 35 34.6 39.6 34 46Z",
          avP("M33.4 46 C31.8 36 34 31 38.6 30.4 C36.2 33.4 35 38.6 35 46Z M66.6 46 C68.2 36 66 31 61.4 30.4 C63.8 33.4 65 38.6 65 46Z", hd, .55) + shine("M41 23.4 H59"));
      case 23: // 리프컷 (옆으로 넘긴 앞머리 + 귀를 덮고 끝이 살짝 뻗는 옆머리)
        return hair("M30.6 48 C28.6 29 37.8 19.2 50 19 C62.2 19.2 71.4 29 69.4 48 C70.2 51.4 70 54.6 68 56 C66.4 54 66 51 65.4 47.4 C64.8 41.4 62.2 36.6 58 34.4 C52.4 35.6 46 34.2 41 30.2 C38.6 35 35.6 41 34.6 47.4 C34 51 33.6 54 32 56 C30 54.6 29.8 51.4 30.6 48Z",
          avS(["M44 24 Q47 29 45 33", "M55 22.6 Q58.6 27 57.4 32"], hd, 1, .4) + shine("M38 26 C44 20.4 56 20.4 62 26"));
      case 24: // 다운펌 (앞머리를 이마 위로 곧게 내림)
        return hair("M31.6 45 C30 28.6 38.6 19.8 50 19.6 C61.4 19.8 70 28.6 68.4 45 L66.8 46 C66.4 41 65.6 37.4 64.6 35.4 C58 36.8 42 36.8 35.4 35.4 C34.4 37.4 33.6 41 33.2 46Z",
          avS(["M42 23 L41 35", "M50 21.6 V36", "M58 23 L59 35"], hd, 1, .35) + shine("M38 26 C44 21.6 56 21.6 62 26"));
      case 25: // 펌 머리 (볼륨 있는 자연 웨이브)
        return hair("M31 46 C28 36 29.6 28.6 34.6 25 C35.4 19.6 42 17.6 47 19 C50 16.8 56 17 58.4 19.6 C64 18.4 67.4 23 66.4 26 C70.6 29 72 37 69 46 L66.8 47 C66 41 64.4 37 61 35.2 C57 36.6 54 34.6 50 33.4 C46 34.6 43 36.6 39 35.2 C35.6 37 34 41 33.2 47Z",
          avS(["M40 24 Q44 27 42 32", "M51 22 Q55 26 53 31", "M60 26 Q63 29 62 33"], hd, 1, .45) + shine("M37 26 C42 20.6 56 20 63 26"));
      case 27: // 바가지 머리 (동그란 헬멧형 + 일자 앞머리, 귀 윗부분만 살짝 덮음)
        return hair("M30.6 45 C28.4 28 37.4 18.8 50 18.6 C62.6 18.8 71.6 28 69.4 45 L67.4 45.6 C66.8 41.6 66.2 39 65.4 37.2 C59.4 35 54 36 50 35.2 C46 36 40.6 35 34.6 37.2 C33.8 39 33.2 41.6 32.6 45.6Z",
          avS(["M41 36.4 L40.4 31.6", "M47 36 L46.6 30", "M53 36 L53.4 30", "M59 36.4 L59.6 31.6"], hd, 1, .3) + shine("M37 26 C43 20.4 57 20.4 63 26"));
      case 26: // 리젠트 (앞머리를 위로 세운 볼륨 컷)
        return hair("M32.4 44 C30.6 31 33.6 25 38.6 22.4 C41 16.4 51 13.6 59.4 17 C65.6 19.6 68.4 25.6 67.6 31 C69 35 68.6 40.6 67.6 44 L66.4 45 C65.6 39 63.6 35.2 60.4 33.2 C55 32.2 46 32.2 40.6 33.2 C37 35.2 35 39 33.6 45Z",
          avS(["M42 24 Q47 20 53 19.4", "M40 29 Q47 24 57 23.4"], hd, 1, .4) + shine("M42 21 C48 16.8 58 17.6 63 23"));
    }
    return "";
  }

  // 남성 머리 공통 바깥 윤곽: 귀 윗부분(y 41.4)에서 시작해 얼굴보다 2~3 정도만 넓게 두른다 (구레나룻이 귀 바깥으로 나오지 않게)
  function avOut(t, wl) {
    var wr = 100 - wl;
    return "M34.6 41.4 C" + (wl + .6) + " 38.4 " + wl + " " + (t + 13) + " " + (wl + 2) + " " + (t + 8) + " C" + (wl + 4.6) + " " + (t + 2.4) + " 43 " + t + " 50 " + t +
      " C57 " + t + " " + (wr - 4.6) + " " + (t + 2.4) + " " + (wr - 2) + " " + (t + 8) + " C" + wr + " " + (t + 13) + " " + (wr - .6) + " 38.4 65.4 41.4";
  }
  // 경로의 y좌표만 py 기준으로 k배 (절대좌표 경로 전용: M L C Q). 머리 높이만 낮출 때 쓴다
  function avSY(d, k, py) {
    var n = 0;
    return d.replace(/-?\d*\.?\d+/g, function (m) { var v = parseFloat(m), o = (n++ % 2) ? py + (v - py) * k : v; return String(Math.round(o * 100) / 100); });
  }
  // 두피 받침: 앞머리 바깥 윤곽과 얼굴 사이로 배경이 비치는 틈이 생기지 않도록 얼굴 뒤에 깔아 둔다
  var AV_SCALP = { 1: [21.6, 33.2, .3], 8: [17.8, 31.6, 0, .9], 10: [18.2, 32.6], 14: [17, 32, 0, .92], 28: [19.4, 32.2], 29: [19, 31] };
  function avScalp(hs, c) {
    var q = AV_SCALP[hs];
    if (!q) return "";
    var d = avOut(q[0], q[1]) + "Z";
    if (q[3]) d = avSY(d, q[3], 41.4);
    return avP(d, q[2] ? avMix(c.hair, c.skin, q[2]) : c.hair);
  }
  function avMaleFront(hs, c) {
    var h = c.hair, hd = avShade(h, .66), hl = avShade(h, 1.45);
    var shine = function (d) { return avS([d], hl, 1.7, .34); };
    var hair = function (d, extra) { return avFS(d, c) + avP(d, h) + (extra || ""); };
    switch (hs) {
      case 0: // 댄디컷 (자연스럽게 옆으로 넘긴 앞머리)
        return hair(avOut(18.8, 31.8) + " L65 38 C64.4 36 63 34.4 61.2 33.2 C56 35.4 49.6 34.8 45 31.8 C43.4 34.8 39.8 36.6 36.2 37.2 C35.4 38.4 34.9 40 34.6 41.4Z",
          avS(["M46 23 Q49 28 47 32", "M54.6 22 Q58.4 26 57.4 31"], hd, 1, .45) + shine("M38 27 C43 21.6 55 21 62 26"));
      case 1: { // 스포츠 머리 (아주 짧게 깎은 머리: 정수리는 진하고 헤어라인으로 갈수록 두피가 비치는 짧은 결 + 은은한 가르마 홈)
        var d1 = avOut(21.6, 33.2) + " L65 37.4 C64 34.2 59.6 32 50 31.8 C40.4 32 36 34.2 35 37.4 L34.6 41.4Z";
        var gid = "avsg" + (++avHUid), cid = "avsc" + avHUid;
        var st = "";
        for (var gy = 22.6; gy < 33.6; gy += 1.45) for (var gx = 33.4; gx < 66.8; gx += 1.6) {
          var jx = gx + Math.sin(gy * 7.3 + gx * 2.9) * .55, jy = gy + Math.cos(gx * 4.1 + gy * 3.3) * .4;
          if (Math.abs(jx - 43.4) < .9 && jy < 31.8) continue;
          st += '<circle cx="' + jx.toFixed(1) + '" cy="' + jy.toFixed(1) + '" r=".28" fill="' + hd + '" opacity="' + (jy < 28 ? .4 : .26) + '"/>';
        }
        return avFS(d1, c) +
          '<defs><linearGradient id="' + gid + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + avMix(h, c.skin, .05) + '"/><stop offset=".55" stop-color="' + avMix(h, c.skin, .22) + '"/><stop offset="1" stop-color="' + avMix(h, c.skin, .55) + '"/></linearGradient><clipPath id="' + cid + '"><path d="' + d1 + '"/></clipPath></defs>' +
          '<path d="' + d1 + '" fill="url(#' + gid + ')"/><g clip-path="url(#' + cid + ')">' + st +
          avS(["M43.4 22.6 C43 26.2 42.6 29.2 42.4 32.4"], hd, .9, .3) + avS(["M44.5 22.8 C44.1 26.4 43.7 29.4 43.5 32.4"], avMix(c.skin, "#ffffff", .25), .6, .22) + '</g>' +
          avS(["M35.6 36.8 C37.4 33.8 41.6 32.2 50 32 C58.4 32.2 62.6 33.8 64.4 36.8"], hd, .9, .16);
      }
      case 8: { // 가르마 머리 (3:7 가르마, 양옆으로 부드럽게 흐르는 볼륨 · 윗선을 낮춰 얼굴과 붙게)
        var sy8 = function (d) { return avSY(d, .9, 41.4); };
        return hair(sy8(avOut(17.8, 31.6) + " L65 38 C64.6 35.6 62.6 33.4 59.6 32.2 C54.6 30.6 49 28.6 44.6 25.4 C43.8 29 42 32.4 39.4 35 C37.2 36.6 35.6 38.6 34.6 41.4Z"),
          avS([sy8("M44.4 18.2 Q43.6 22 44.6 25.4")], hd, 1.2, .7) + avS([sy8("M47 27 Q55 30 62.4 34.4"), sy8("M47.6 22.6 Q58 24.6 66 31.4"), sy8("M43 22.6 Q38 27 35.4 34")], hd, 1, .4) + shine(sy8("M47 20.6 C55 19.4 63 23 66 29")));
      }
      case 10: { // 투블럭 (상고머리 모양을 합침: 윗머리는 둥글고 단정하게, 옆·뒤는 짧게 쳐 올림)
        var sid = "M34.6 41.4 C32.4 38.6 32 33.4 33.4 29.4 C35.6 24.6 41.4 22.6 50 22.6 C58.6 22.6 64.4 24.6 66.6 29.4 C68 33.4 67.6 38.6 65.4 41.4 L63.6 35.6 C58 33.4 42 33.4 36.4 35.6Z";
        var top = "M35.4 35.4 C32.8 30.6 33.4 24 38 20 C41.6 17 46 16.6 50 16.6 C57 16.6 63 19 66 24 C67.8 28.6 67 32.6 64.6 35.4 C63.4 33.8 62 32.8 59.8 32.2 C55 33.4 46.4 33.4 41 32 C38.6 32.8 36.8 34 35.4 35.4Z";
        return avP(sid, avMix(h, c.skin, .42)) + avP("M34.6 41.4 C32.6 38 32.4 32 34.2 28 L37.4 29.2 C36 33.4 36 37.6 37.2 40.2Z M65.4 41.4 C67.4 38 67.6 32 65.8 28 L62.6 29.2 C64 33.4 64 37.6 62.8 40.2Z", avMix(h, c.skin, .62), .8) +
          avS(["M36.2 37.6 L36.4 40.4", "M63.8 37.6 L63.6 40.4"], hd, .8, .3) +
          avFS(top, c) + avP(top, h) + avS(["M42.6 19.6 Q45 25.6 43.4 31.6", "M51.6 17.4 Q55 23.6 54 31.6", "M60 20.4 Q62.6 26 61.8 31.4"], hd, 1, .42) + shine("M39.8 22 C46 17 58 17.2 63.4 23.4");
      }
      case 11: // 쉼표머리 (앞머리 끝이 쉼표처럼 살짝 말림)
        return hair(avOut(18.8, 31.8) + " L65 38 C64.4 36 63.4 34.8 61.4 33.8 C57.4 33 53.4 34.2 51 37 C50 38.4 50.6 39.8 52.4 40 C49.6 40.8 46.6 39.4 45.4 36.6 C44.4 34.4 42 34.4 39.6 35.6 C37 37.4 35.6 39.6 34.6 41.4Z",
          avS(["M44 22.6 Q47 27 45.4 32", "M55 22 Q58 26 57 31"], hd, 1, .45) + shine("M38 27 C44 21.6 56 21.6 62 27"));
      case 14: { // 올백 (이마를 훤히 드러내고 머리결을 뒤로 쓸어 넘김 · 윗선을 낮춰 얼굴과 붙게)
        var sy14 = function (d) { return avSY(d, .92, 41.4); };
        return hair(sy14(avOut(17, 32) + " L65 36 C64.4 33 62.4 30.8 59.4 29.6 C56.6 28.4 53 29.6 50 31.6 C47 29.6 43.4 28.4 40.6 29.6 C37.6 30.8 35.6 33 35 36 L34.6 41.4Z"),
          avS([sy14("M37.4 31.4 C38.4 25.4 43 21 49.6 19.2"), sy14("M42.4 29.6 C43.6 24 48 20.4 53.6 19"), sy14("M48 30 C49.4 24.6 53 21 58 19.8"), sy14("M56 29.6 C57.4 25 60.6 22 64 21.6"), sy14("M62.6 31 C63.4 28 64.6 25.6 66 24.4")], hd, 1, .5) + shine(sy14("M40 24 C46 18.4 57 18 63 23.6")));
      }
      case 15: // 삭발 (머리카락 없음)
        return "";
      case 28: { // 크롭컷 (짧고 결이 살아 있는 앞머리를 눈썹 위에서 일자로 자름 + 짧은 옆머리)
        var d28 = avOut(19.4, 32.2) + " L65 36 L62.8 34.4 L60.4 35.8 L57.6 34 L55 35.6 L52.2 33.8 L49.4 35.6 L46.4 33.8 L43.6 35.6 L40.8 34 L38.4 35.8 L36.2 34.4 L35 36 L34.6 41.4Z";
        return avFS(d28, c) + avP(d28, h) +
          avP("M34.6 41.4 C32.8 38.6 32.6 33 34 29 L37.4 30.2 C36.4 33.4 36.4 37.6 37.4 40.2Z M65.4 41.4 C67.2 38.6 67.4 33 66 29 L62.6 30.2 C63.6 33.4 63.6 37.6 62.6 40.2Z", avMix(h, c.skin, .5), .8) +
          avS(["M44.4 22.4 Q45.4 28 43.8 33.6", "M50.4 21.4 Q51.4 27.6 50 33.8", "M56.6 22.6 Q57.4 28 56 33.6", "M39 26 Q39.6 30.4 38.4 34", "M62 26.6 Q61.6 30.6 62.4 33.8"], hd, 1, .42) + shine("M38.6 26 C44 20.4 57 20.4 62 26.4");
      }
      case 29: { // 리프컷 (가운데에서 갈라져 양옆으로 흐르는 앞머리 + 볼 옆으로 가볍게 내려오는 옆머리)
        var d29 = avOut(20.2, 31.8) + " C66.4 44 66 47.4 64.8 49.6 C64.2 47.2 63.6 45 63 43 C62.6 41 62.8 39.2 62.8 36.8 C59.6 34.6 55 32.2 50 28.8 C49.2 28.2 48.6 28 48 27.8 C46.8 30.8 43.4 34.2 37.2 36.8 C37.2 39.2 37.4 41 37 43 C36.4 45 35.8 47.2 35.2 49.6 C34 47.4 33.6 44 34.6 41.4Z";
        return avFS(d29, c) + avP(d29, h) +
          avS(["M47.4 22 C46.4 26 43.4 30.8 38.4 36.4", "M43 21.2 C41.6 26.4 37.4 31 34.6 33.6", "M50.6 21.8 C53.6 27 58 31.6 62.4 35.6", "M55.6 21.2 C58.6 25.4 62.8 29.6 66 32.4"], hd, 1, .42) +
          avS(["M35.8 44.6 Q35.2 47 35.4 48.6", "M64.2 44.6 Q64.8 47 64.6 48.6"], hd, 1, .35) + shine("M37.6 25.4 C43.6 19.6 57 19.6 63 25.6");
      }
      case 25: // 펌 머리 (볼륨 있는 자연 웨이브)
        return hair("M34.6 41.4 C31.6 37 30.6 30 34.6 25.4 C35.4 19.6 42 17.6 47 19 C50 16.8 56 17 58.4 19.6 C64 18.4 67 23 66 26 C69.6 29.6 69.4 36.6 65.4 41.4 C65 38.6 64 36.6 61 35.2 C57 36.6 54 34.6 50 33.4 C46 34.6 43 36.6 39 35.2 C36 36.6 35 38.6 34.6 41.4Z",
          avS(["M40 24 Q44 27 42 32", "M51 22 Q55 26 53 31", "M60 26 Q63 29 62 33"], hd, 1, .45) + shine("M37 26 C42 20.6 56 20 63 26"));
      case 26: // 리젠트 (앞머리를 높게 세워 뒤로 넘긴 볼륨 + 짧게 정리한 옆머리)
        return hair("M34.6 41.4 C32.4 37.4 32 31 33.6 26.4 C34.2 22 37.2 18.6 41.6 16.6 C44 11.4 51 9.8 57.6 11.6 C64 13.4 67.6 18.4 67 25 C68.4 30 67.8 37 65.4 41.4 L65 36.6 C64.4 34.4 62.6 32.8 60.2 32.4 C56 33.8 52 34 48 33.2 C44.6 32.6 41.6 32.8 39 34.4 C36.6 35.8 35.2 38 34.6 41.4Z",
          avP("M34.6 41.4 C32.6 38 32.4 32 34 27.6 L37 29 C35.8 33 35.8 37.4 37 40Z M65.4 41.4 C67.4 38 67.6 32 66 27.6 L63 29 C64.2 33 64.2 37.4 63 40Z", avMix(h, c.skin, .45), .85) +
          avS(["M40.4 31 C40.4 23 45 16.4 55 13.6", "M45.6 31.4 C45.6 24 50 18 59 15.4", "M52 31.4 C52.4 25 56.4 19.6 63 18", "M58.4 32 C59 27 62 22.6 66 21.4"], hd, 1, .5) + shine("M42 18.6 C48 13 58 12.8 64 17.6"));
      case 27: // 바가지 머리 (동그란 헬멧형 + 일자 앞머리, 귀 윗부분만 살짝 덮음)
        return hair("M33.4 43.4 C31.4 38 30.8 31 33 26 C36 20 43 18.4 50 18.4 C57 18.4 64 20 67 26 C69.2 31 68.6 38 66.6 43.4 L65.2 43.8 C64.8 41 64.4 38.8 63.8 37 C59 35.2 54.4 35.8 50 35.2 C45.6 35.8 41 35.2 36.2 37 C35.6 38.8 35.2 41 34.8 43.8Z",
          avS(["M41 36.4 L40.4 31.6", "M47 36 L46.6 30", "M53 36 L53.4 30", "M59 36.4 L59.6 31.6"], hd, 1, .3) + shine("M37 26 C43 20.4 57 20.4 63 26"));
    }
    return avMaleFrontOld(hs, c);
  }

  // 여성·공용 스타일은 머리 덩어리가 위로 너무 솟지 않도록 세로를 살짝 눌러 얼굴 비율에 맞춘다
  function avSq(x, k) { return '<g transform="translate(50 46) scale(.93 ' + (k || .84) + ') translate(-50 -46)">' + x + '</g>'; }
  function avDirectBack(hs, c) {
    var h = c.hair, b = "";
    if (hs === 3) { var b3 = ""; [[50, 19.4, 8.6], [41.4, 21, 7.6], [58.6, 21, 7.6], [34.6, 27, 7.2], [65.4, 27, 7.2], [31.2, 35, 6.2], [68.8, 35, 6.2], [31.4, 42, 4.6], [68.6, 42, 4.6]].forEach(function (q) { b3 += '<circle cx="' + q[0] + '" cy="' + q[1] + '" r="' + q[2] + '" fill="' + h + '"/>'; }); b += '<g transform="translate(0 33) scale(1 .76) translate(0 -33)">' + b3 + "</g>"; }
    if (hs === 19) [[50, 30, 27], [26, 36, 9], [74, 36, 9], [28, 22, 10], [72, 22, 10], [50, 12, 11], [37, 14, 10], [63, 14, 10], [23, 30, 8], [77, 30, 8]].forEach(function (q) { b += '<circle cx="' + q[0] + '" cy="' + q[1] + '" r="' + q[2] + '" fill="' + h + '"/>'; });
    b += avScalp(hs, c);
    return hs === 19 ? avZ(b, .86) : b;
  }
  function avZ(x, k) { return '<g transform="translate(50 46) scale(' + k + ') translate(-50 -46)">' + x + '</g>'; }
  function avHairBack(hs, c) { return AV_MALE_HS[hs] ? avXs(avDirectBack(hs, c), hs) : avSq(avHairBack0(hs, c), .84); }
  function avXs(x, hs) { var k = hs === 19 ? .88 : (hs === 3 ? .9 : 1); return k === 1 ? x : '<g transform="translate(50 0) scale(' + k + ' 1) translate(-50 0)">' + x + '</g>'; }
  function avHairFront(hs, c) { return AV_MALE_HS[hs] ? avXs(avMaleFront(hs, c), hs) : avSq(avHairFront0(hs, c), .84); }


  // ---------- 머리 위 소품과 머리카락의 조화 ----------
  // 소품을 쓰면 소품 바깥으로 삐져나오는 머리카락(위·옆)을 잘라내고, 소품 아래(yb 이하)의 머리카락만 그대로 보여준다.
  // 부피가 큰 머리(곱슬·아프로)는 소품을 쓰면 옆으로 퍼지는 폭을 얼굴 너비 안으로 모은다
  var AV_VOL_HS = { 3: 1, 19: 1 };
  var AV_HW_CLIP = {
    cap: { yb: 38.4, top: '<path d="M32 38.4 C31 12.4 69 12.4 68 38.4Z"/>' },
    beanie: { yb: 36, top: '<path d="M32.4 36 C31 11 69 11 67.6 36Z"/>' },
    i_hag: { yb: 38.4, top: '<path d="M32.4 38.4 C31 15 69 15 67.6 38.4Z"/>' },
    i_2sa: { yb: 33, top: '<rect x="33" y="0" width="34" height="33"/>' },
    i_est: { yb: 31, top: '<rect x="36" y="0" width="28" height="31"/>' },
    i_rev: { yb: 35, top: '<rect x="32" y="0" width="36" height="35"/>' },
    i_rut: { yb: 36, top: '<rect x="31" y="0" width="38" height="36"/>' },
    i_sng: { yb: 36, top: '<rect x="31" y="0" width="38" height="36"/>' },
    i_gal: { yb: 36, top: '<rect x="31" y="0" width="38" height="36"/>' },
    i_php: { yb: 38, top: '<rect x="31" y="0" width="38" height="38"/>' }
  };

  // ---------- 얼굴 ----------
  function avFace(ex, c) {
    var eye = c.eye, brow = avShade(c.hair, .9);
    var s = c.noEars ? "" : '<ellipse cx="34.6" cy="45.4" rx="2.4" ry="3.2" fill="' + c.skin + '"/><ellipse cx="65.4" cy="45.4" rx="2.4" ry="3.2" fill="' + c.skin + '"/>';
    s += '<ellipse cx="50" cy="43.4" rx="15.4" ry="17" fill="' + c.skin + '"/>';
    // 눈썹
    var bd = "M39.6 38 Q43.4 36.2 46.6 37.8 M53.4 37.8 Q56.6 36.2 60.4 38";
    if (ex === 4) bd = "M39.6 36.4 Q43.4 34.2 46.6 35.8 M53.4 35.8 Q56.6 34.2 60.4 36.4";
    else if (ex === 8) bd = "M39.6 39.6 Q43 38.6 46.6 36.6 M53.4 36.6 Q57 38.6 60.4 39.6";
    else if (ex === 5) bd = "M39.6 38 Q43.4 36.2 46.6 37.8 M53.4 36.4 Q56.6 34.8 60.4 36.6";
    s += '<path d="' + bd + '" fill="none" stroke="' + brow + '" stroke-width="1.5" stroke-linecap="round"/>';
    // 눈
    var lid = function (x) { return '<path d="M' + (x - 2.2) + ' 43.2 Q' + x + ' 42 ' + (x + 2.2) + ' 43.2" fill="none" stroke="' + brow + '" stroke-width=".9"/>'; };
    var arc = function (x) { return '<path d="M' + (x - 2.2) + ' 44.4 Q' + x + ' 41 ' + (x + 2.2) + ' 44.4" fill="none" stroke="' + eye + '" stroke-width="1.6" stroke-linecap="round"/>'; };
    var dot = function (x, rx, ry) { return '<ellipse cx="' + x + '" cy="43.4" rx="' + rx + '" ry="' + ry + '" fill="' + eye + '"/><circle cx="' + (x + .5) + '" cy="' + (43.4 - ry * .35) + '" r=".6" fill="#FFFFFF"/>'; };
    if (ex === 3) s += dot(43.4, 1.7, 2.3) + '<path d="M54.6 43.8 Q56.6 41.2 58.6 43.8" fill="none" stroke="' + eye + '" stroke-width="1.6" stroke-linecap="round"/>';
    else if (ex === 7) s += arc(43.4) + arc(56.6);
    else if (ex === 4) s += '<ellipse cx="43.4" cy="43.4" rx="2.6" ry="3" fill="#FFFFFF" stroke="' + eye + '" stroke-width=".7"/><ellipse cx="56.6" cy="43.4" rx="2.6" ry="3" fill="#FFFFFF" stroke="' + eye + '" stroke-width=".7"/><circle cx="43.4" cy="43.6" r="1.5" fill="' + eye + '"/><circle cx="56.6" cy="43.6" r="1.5" fill="' + eye + '"/>';
    else if (ex === 6) s += '<ellipse cx="43.4" cy="44" rx="1.7" ry="1.2" fill="' + eye + '"/><ellipse cx="56.6" cy="44" rx="1.7" ry="1.2" fill="' + eye + '"/><path d="M41 42.8 H45.8 M54.2 42.8 H59" stroke="' + brow + '" stroke-width="1.5" stroke-linecap="round"/>';
    else if (ex === 8) s += dot(43.4, 1.7, 2.2) + dot(56.6, 1.7, 2.2);
    else s += dot(43.4, 1.7, 2.3) + dot(56.6, 1.7, 2.3);
    // 코
    s += '<path d="M50 44.6 Q48.6 48.4 50 49" fill="none" stroke="' + c.skinD + '" stroke-width="1.1" stroke-linecap="round"/>';
    // 입
    var blush = '<ellipse cx="38.6" cy="49.2" rx="2.8" ry="1.8" fill="#F08A8A" opacity=".4"/><ellipse cx="61.4" cy="49.2" rx="2.8" ry="1.8" fill="#F08A8A" opacity=".4"/>';
    if (ex === 1 || ex === 7) s += '<path d="M43.6 51.2 Q50 58.8 56.4 51.2 Z" fill="#7A3B32"/><path d="M44.8 51.6 Q50 53.2 55.2 51.6 L54.6 53.2 Q50 54.4 45.4 53.2Z" fill="#FFFFFF"/>' + blush;
    else if (ex === 2) s += '<path d="M46.4 52.6 H53.6" stroke="#8A4B3C" stroke-width="1.6" stroke-linecap="round"/>';
    else if (ex === 4) s += '<ellipse cx="50" cy="53.4" rx="2.4" ry="3.1" fill="#7A3B32"/>';
    else if (ex === 5) s += '<path d="M45.4 53 Q50 54.6 54 52.6 Q55.6 51.8 56.6 50.2" fill="none" stroke="#8A4B3C" stroke-width="1.6" stroke-linecap="round"/>';
    else if (ex === 6) s += '<path d="M47 53 Q50 54 53 53" fill="none" stroke="#8A4B3C" stroke-width="1.5" stroke-linecap="round"/><ellipse cx="56.4" cy="53.6" rx="1.2" ry="1.5" fill="#9CCBE8" opacity=".85"/>';
    else if (ex === 8) s += '<path d="M45.4 54.4 Q50 50.6 54.6 54.4" fill="none" stroke="#8A4B3C" stroke-width="1.6" stroke-linecap="round"/>';
    else if (ex === 9) s += '<path d="M44 51.4 Q50 56.6 56 51.4" fill="none" stroke="#8A4B3C" stroke-width="1.6" stroke-linecap="round"/><path d="M47.2 54.4 Q47.4 59.4 50.4 59.4 Q53.2 59.4 52.8 54.2Z" fill="#E8707A" stroke="#C25566" stroke-width=".7"/><path d="M50.2 54.6 V57.6" stroke="#C25566" stroke-width=".6"/>';
    else s += '<path d="M45 51.4 Q50 56 55 51.4" fill="none" stroke="#8A4B3C" stroke-width="1.6" stroke-linecap="round"/>';
    return s;
  }

  var avUid = 0;
  // av → 완성된 <svg> 문자열. size는 px. opts.dim=true면 잠긴 미리보기(회색·흐림)
  function avatarSVG(av, size, opts) {
    av = sanitizeAvatar(av);
    var id = "avc" + (++avUid);
    var skin = AV_SKIN[av.sk], hair = AV_HAIRC[av.hc], oc = AV_OC[av.oc];
    var c = { skin: skin, skinD: avShade(skin, .9), hair: hair, oc: oc, eye: "#2B2118", hwOn: av.hw !== "none", noEars: { 4: 1, 5: 1, 9: 1, 12: 1, 16: 1, 17: 1 }[av.hs] === 1 };
    var hk = AV_HW_CLIP[av.hw] || null, hwrap = function (x) { return hk ? '<g clip-path="url(#' + id + 'h)">' + (AV_VOL_HS[av.hs] ? '<g clip-path="url(#' + id + 'v)">' + x + '</g>' : x) + '</g>' : x; };
    var ouFn = AV_ART_OU[av.ou] || AV_ART_OU.tee, ou = ouFn(c);
    var bgArt = AV_BGC[av.bg] ? '<rect width="100" height="100" fill="' + AV_BGC[av.bg] + '"/>' : (AV_ART_BG[av.bg] ? AV_ART_BG[av.bg]() : '<rect width="100" height="100" fill="' + AV_BGC.c0 + '"/>');
    var s = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="' + size + '" height="' + size + '"' + ((opts && opts.dim) ? ' style="filter:grayscale(.9);opacity:.5"' : '') + '>' +
      '<defs><clipPath id="' + id + '"><circle cx="50" cy="50" r="46"/></clipPath>' + (hk ? '<clipPath id="' + id + 'h"><rect x="0" y="' + hk.yb + '" width="100" height="' + (100 - hk.yb) + '"/>' + ((AV_VOL_HS[av.hs] && hk.top.indexOf('<rect') === 0) ? '' : hk.top) + '</clipPath><clipPath id="' + id + 'v"><rect x="29" y="0" width="42" height="100"/></clipPath>' : '') + '</defs><g clip-path="url(#' + id + ')">';
    s += bgArt;
    s += hwrap(avHairBack(av.hs, c));
    s += ou.under;
    s += '<path d="M44.4 55 H55.6 V72 H44.4Z" fill="' + c.skinD + '"/>';
    s += ou.over;
    s += avFace(av.ex, c);
    s += (AV_ART_FA[av.fa] || AV_ART_FA.none)(c);
    s += (AV_ART_GL[av.gl] || AV_ART_GL.none)(c);
    s += hwrap(avHairFront(av.hs, c));
    s += (AV_ART_HW[av.hw] || AV_ART_HW.none)(c);
    if (av.cp !== "none" && AV_ART_CP[av.cp]) s += '<g transform="translate(1.2 3.8) scale(.92)">' + AV_ART_CP[av.cp](c) + '</g>';
    s += (AV_ART_FR[av.fr] || AV_ART_FR.thin)(c);
    return s + '</g></svg>';
  }
  function sanitizeAvatar(a) {
    var o = {}, d = AV_DEFAULT;
    a = (a && typeof a === "object") ? a : {};
    function num(k, max) { var v = a[k]; return (typeof v === "number" && isFinite(v) && v >= 0 && v <= max && Math.floor(v) === v) ? v : d[k]; }
    o.sk = num("sk", 5); o.hs = num("hs", 29); if (o.hs === 22) o.hs = 10; /* 상고머리는 투블럭에 합쳐짐 */ if (o.hs === 23 || o.hs === 24) o.hs = 0; /* 예전 리프컷·다운펌 번호는 댄디컷으로 */ o.hc = num("hc", 7); o.ex = num("ex", 9); o.oc = num("oc", 5);
    function pick(k, slot) {
      var v = a[k];
      if (typeof v !== "string") return d[k];
      if (AV_BASE_NAMES[slot][v]) return v;
      var it = AV_ITEM_BY_ID[v];
      return (it && it.slot === slot) ? v : d[k];
    }
    if (a.gl === undefined && a.fa === "glasses") { var mg = {}; for (var mk in a) mg[mk] = a[mk]; mg.fa = "none"; mg.gl = "round"; a = mg; }
    o.hw = pick("hw", "hw"); o.fa = pick("fa", "fa"); o.gl = pick("gl", "gl"); o.ou = pick("ou", "ou"); o.cp = pick("cp", "cp"); o.bg = pick("bg", "bg"); o.fr = pick("fr", "fr");
    return o;
  }
  function avItemName(id) { var it = AV_ITEM_BY_ID[id]; return it ? it.name : ""; }
  function avBookOf(it) { return BIBLE_BOOKS.filter(function (b) { return b.id === it.book; })[0]; }
  // 완주한 권 수 = 지급된 아이템 수. 완주 이후(회독)에도 전부 열려 있다.
  function avCompletedBooks(points) {
    var n = 0;
    for (var i = 0; i < BIBLE_BOOKS.length; i++) { if (points >= BIBLE_BOOKS[i].cumEnd) n++; else break; }
    return n;
  }
  function avItemUnlocked(it, points) {
    var b = avBookOf(it);
    return !!b && points >= b.cumEnd;
  }
// <<END AVATAR SYSTEM>>
