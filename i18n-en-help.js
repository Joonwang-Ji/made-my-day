// Made My Day — English help text (영어 모드에서만 쓰임; index.html 의 HELP_TOPICS / HELP_GROUPS 를 통째로 대신한다)
// 구조는 index.html 의 HELP_TOPICS 와 같다: 주제 id → { t: 제목, sub: 부제, s: [[소제목, 본문(HTML 허용)], ...], see: [관련 주제 id] }
// 한국어 HELP_TOPICS 를 고치면 여기도 같이 고쳐 주세요. (id 가 빠지면 그 주제는 한국어로 나옵니다)
(function () {
  "use strict";
  var I = window.MMD_I18N;
  if (!I || I.lang !== "en") return;

  var T = {
    home: { t: "Home screen", sub: "Check-offs · ▶ countdown · top area", s: [
      ["Checking items", "Tap an item's name to mark it done, and tap again to undo it. When you uncheck something you already checked, the app asks once more to prevent mistakes."],
      ["▶ Countdown", "Press ▶ on a category to go through today's items one by one with a timer. Items you've already finished are skipped. When time runs out it doesn't move on by itself — the overtime (+min:sec) is shown, and you press Done to go to the next one."],
      ["Top area", "Tap the date to jot a “One line a day” note right away. The flame on the right is your current streak of successful days; tap it to open the achievements screen. The round card below shows today's progress."],
      ["Notice strips", "Tap “Missed yesterday” to see the items you missed. If there's a gift, a gift strip appears, and if there's a time-adjustment suggestion, a small badge appears at the top."]
    ], see: ["colors", "streak", "alarm"] },
    edit: { t: "Edit items", sub: "Name · time · days · tags · start date", s: [
      ["Adding and editing items", "Type the item's name, then tap the time chip and day chips to set them. If you arrange items in the order you actually move through your day, the ▶ countdown will follow that order too."],
      ["Start date", "Every item has a start date. Days before the start date aren't counted as missed, and you can't check them off in the log either."],
      ["Duplicate · move · tags", "You can duplicate an item or move it to another category. Past records follow it when you move it. If you add tags, you can view stats grouped by tag."],
      ["Items with no name", "If an item with an empty name is left, you can't leave this screen."]
    ], see: ["days", "timesuggest"] },
    stats: { t: "Stats screen", sub: "Success · Weekly · Monthly · Time", s: [
      ["Four tabs", "<b>Success</b>: all items together, with the days you succeeded shown on one monthly calendar. <b>Weekly</b>: a one-week table per item. <b>Monthly</b>: a one-month calendar per item. <b>Time</b>: checks how long each item takes and suggests time adjustments."],
      ["Tag filter", "Pick a tag to see only the items with that tag."],
      ["Notes and jumping", "On the Success calendar, days with a note have a small dot. Tap such a day to jump to that date in the log."]
    ], see: ["colors", "timesuggest", "streak"] },
    colors: { t: "What the stat colors mean", sub: "Green · gold · blue · dotted", s: [
      ["Green", "A cell you completed normally."],
      ["Gold (done)", "A completion where you went over the set time in the countdown. If you check it again from Home or the log, it goes back to green."],
      ["Dotted · faded cell", "A day before the start date, or a day the item wasn't scheduled."],
      ["Date number colors", "Saturdays and Sundays are gold, and rest days are shown in blue tones."],
      ["Rest-day bonus", "Items you chose to do on a rest day show up as gold “bonus” cells on the Success calendar. They aren't counted toward the streak."]
    ], see: ["streak", "keeprest"] },
    backfill: { t: "Past records", sub: "By date · By item · One line a day", s: [
      ["By date", "Pick a date to check or uncheck the items that were due that day. Unchecking a checked item asks for confirmation once."],
      ["By item", "Pick one item, tap several days on its calendar to mark them, then press <b>Save</b> at the end to apply."],
      ["One line a day", "Write that day's one-line note at the bottom of the By date screen. The third tab gathers past notes by month and lets you search them."],
      ["Days you can't check", "You can't check dates before an item's start date."],
      ["Time records", "A completion you check in the log is saved with the time set for that item."]
    ], see: ["rest", "days"] },
    streak: { t: "Streak rules", sub: "What counts as a successful day", s: [
      ["What a successful day is", "Add up everything due that day; if the completion rate reaches your requirement, the day is a success. It's the total across all categories, not per category, so missing one small category won't break your streak."],
      ["Choosing the requirement", "In Settings you can choose 100%, 90%, 80% or 70%. When you change it, the new requirement applies from that day on, and earlier days keep the requirement they had at the time."],
      ["How it carries on", "Rest days and days with nothing due are skipped — they neither break nor add to the streak. “Anytime” items and items you chose to do on a rest day don't count toward the streak."],
      ["What the numbers cover", "“Streak” in Stats is the full run of consecutive days up to today, regardless of the month you're viewing. “Success days” next to it counts only within the month on screen, so the ranges differ."],
      ["Relation to points", "Even if your streak breaks, your total points and Bible journey stay. Badges you've earned don't disappear either."]
    ], see: ["badges", "points", "keeprest"] },
    days: { t: "Repeat days · Anytime", sub: "Choosing days, and Anytime items", s: [
      ["Choosing days", "Pick Every day, Weekdays or Weekends, or tap the day cells yourself. You can't save if you deselect every day."],
      ["When you change the days", "The new days apply from the day you change them. Earlier dates keep the days they had at the time, so their scheduled items, successes, streaks and points stay the same. If you change an item's days several times in one day, only the last change is kept."],
      ["Rest-day keep and Not started work the same way", "Changing “Keep on rest days” or turning “Not started” on or off also applies only from that day. Earlier dates' evaluation stays as it was."],
      ["Anytime", "An item you do now and then, with no set days. Check it yourself on Home or in the log; it doesn't count toward streaks, the ▶ countdown or missed items — only points. You don't set a time for it either."],
      ["Other settings in the same window", "In this window you also set, per item, whether it stays on rest days, its timer end sound (mute), and whether to turn off time suggestions."]
    ], see: ["keeprest", "alarm", "timesuggest"] },
    review: { t: "Weekly · monthly reviews", sub: "Weekly · monthly look-backs · arrival time", s: [
      ["What a review is", "The app calculates the last 7 days of records on the spot and shows a short summary. There are no scores or grades — just what went well and one thing you could change next week. It isn't saved, so whenever you open it, it's recalculated from your records at that time."],
      ["Arrival time", "It isn't a server notification. After the set time has passed, opening the app shows a “This week's review has arrived” card on Home. It opens only when you tap it, and when a new review comes, the previous card disappears. The default is Sunday 8:00 PM."],
      ["Monthly review", "It arrives after 8:00 PM on the last day of each month (you can change the time). It shows the month's completion rate, highlights, and one thing to try next month. If you logged 7 or more days last month, it also compares with last month; with 14 or more days in the same month last year, it compares with this time last year too."],
      ["Year in review", "If monthly reviews are on, a look back at the whole year arrives on the evening of December 31 (at your monthly review time). It shows the monthly rate trend, your most consistent item, your Bible journey, and one thing to try in the new year. The Home card stays until the end of January, and after that you can open it from “Past reviews”."],
      ["Past reviews", "In Settings, “Past reviews” lets you revisit the last 12 weeks, the last 12 months, and each year. Past reviews are also recalculated from your records at that time."],
      ["Time of completion", "Items you check today now get the completion time saved too. Under “See details” you can see whether you did more in the morning (4–12), afternoon (12–18) or evening (after 18). Records filled in later for past dates have no time."],
      ["When there are few records", "If fewer than 3 days are recorded, a welcome message appears instead of a review."],
      ["Not-started items", "If you turn on “Not started” in Edit items, the item shows in the list but is left out of the completion rate, streak and review calculations. It counts as started from the day you turn it off."]
    ], see: ["settings", "days"] },
    notstarted: { t: "Not started", sub: "Items you haven't started yet", s: [
      ["When to use it", "Use it to add an item in advance that you want to try but haven't started yet."],
      ["Left out of calculations", "It isn't counted in completion rate, streak, missed items or reviews. On Home it looks like an optional item, and checking it adds points only."],
      ["Turning it on and off", "Turning “Not started” on leaves the item out of your rate from that day (earlier records stay as they were); turning it off counts it again from that day."]
    ], see: ["review", "days"] },
    keeprest: { t: "On rest days", sub: "Keep on rest days · optional check-offs", s: [
      ["Default behavior", "On days marked as rest days, items are removed from “things to do”."],
      ["Keep on rest days", "When on, the item stays something to do even on rest days. Use it for items you really want to keep on rest days too. If you change it later, it applies only from that day."],
      ["Doing it by choice", "Items without the keep setting also show as “Rest day · optional” on rest days, and you can check them if you want. They give points but don't count toward the streak."]
    ], see: ["rest", "streak"] },
    rest: { t: "Manage rest days", sub: "Days off · public holidays · yearly recurring", s: [
      ["Resting today", "Use the button at the top to mark today as a rest day, or to unmark it."],
      ["Adding ranges and dates", "Add a whole range at once, or paste a list of dates. If you add one as “yearly recurring,” the same month and day becomes a rest day every year."],
      ["Add Korean public holidays", "In “Add Korean public holidays,” pick from Korea's fixed holidays and ones like Seollal, Chuseok and substitute holidays. Days you've already added are removed from the list, so nothing is duplicated. Uncheck any day you won't actually take off before adding."],
      ["What rest days do", "Rest days are skipped in the streak — they neither break nor add to it."]
    ], see: ["keeprest", "streak"] },
    timesuggest: { t: "Time suggestions", sub: "Checking whether item times are right", s: [
      ["What it does", "Once you have 5 or more records actually timed with the ▶ countdown, it compares them with the set time and suggests an adjustment for items that often run over or often finish early. Completions checked without the countdown are recorded with the set time."],
      ["When a suggestion appears", "A “Time suggestions” badge appears at the top of Home. Tap it to go to the Stats Time tab, and once you adjust the time, the suggestion goes away."],
      ["When you don't need it", "If you press “Current time is right,” it won't suggest again until 10 new records have built up. If you turn on “Don't suggest time changes for this item” in the item's repeat-days window, that item stays excluded."],
      ["Viewing the Time tab", "By default only items with a suggestion are shown. Press [All] to see full stats by period (7 · 30 · 90 days · all time) and by tag."]
    ], see: ["stats", "days"] },
    avatar: { t: "My avatar", sub: "Customizing · finish-a-book items", s: [
      ["Customizing your avatar", "Tap the face at the top right of Home, or “Customize my avatar” in Settings, to freely pick skin tone, hair, expression, clothes, background and more. All the basic options are unlocked from the start."],
      ["How items grow", "Each time you finish a Bible book, an item that fits that book is given automatically — a rainbow background for Genesis, the parted Red Sea for Exodus, and so on. You can press [Wear now] when it's given, or pick it later in the editor."],
      ["Locked items", "Items you haven't received yet also show faded in the editor. Tap one to see which book unlocks it and how many P are left."],
      ["How friends see you", "If you're connected with friends and have sharing turned on, your avatar shows on your friend card and in the chat screen."]
    ], see: ["achieve", "share"] },
    grace: { t: "Overtime grace", sub: "Time to hear and silence the alarm is forgiven", s: [
      ["What it means", "If you press Done within the set time (10 seconds by default) after the countdown reaches 0:00, it isn't treated as “over time” and is recorded as a normal completion (green). It's there to forgive the time it takes to hear the alarm, pick up your phone and turn it off."],
      ["About time records", "If you finish within the grace, the time taken is saved as the time you set. That way “Time suggestions” aren't thrown off by alarm reaction time."],
      ["On screen", "After 0:00, +MM:SS runs in calm gray, then turns red when the grace ends. The alarm still rings at 0:00."]
    ], see: ["home", "days"] },
    alarm: { t: "Timer alarm", sub: "When it rings · silent switch · turn all off", s: [
      ["When it rings", "It rings once at the moment the time reaches 0:00 in the ▶ countdown. It doesn't ring when you check an item by tapping on Home, or when you press Done early during the countdown."],
      ["Turn off all alarms", "When “Turn off all alarms” is on, there's no sound or vibration at all. Turn it on when you need to be quiet for a while, like in a meeting or a service, and turn it off afterward. While it's on, the silent-switch setting and sound preview are locked. It applies to this device only."],
      ["Silent switch", "If “Ring even when the silent switch is on” is on (it is by default), you'll hear sound even with the iPhone's silent switch on."],
      ["Per-item mute · preview", "In an item's repeat-days window you can mute just that item. Use “Preview alarm sound” in Settings to check the sound."]
    ], see: ["home", "days"] },
    achieve: { t: "Achievements screen", sub: "Total points · Bible journey · gift box", s: [
      ["Total points and Bible journey", "The number at the top is your total points so far. As points build up, medals open one by one across the 66 books from Genesis to Revelation. In “See the whole Bible journey” you can view the books and scenes that have opened, and tap a filled cell for details."],
      ["My gift box", "All the rewards you gave yourself — daily, weekly, badge and quarterly — are gathered here in one place. Tap one to edit or delete it."],
      ["Badges and the genealogy track", "You can also see your streak badges here, along with the genealogy track that fills in as the story moves forward."]
    ], see: ["points", "rewards", "badges"] },
    points: { t: "Points and Bible journey", sub: "How points build up", s: [
      ["How they build up", "Each completed item is 1P. Finishing a whole category that day adds 3P more. The bonus box that opens on a successful day gives 5P more. Anytime items count toward points too."],
      ["They don't go down", "Points don't drop even if your streak breaks. Your streak record and your points are separate."],
      ["Bible journey", "The 66 books open in order as your total points grow. Filling all 66 takes about 12,200P. When a new book opens, a book-opening animation plays."]
    ], see: ["rewards", "badges", "achieve"] },
    rewards: { t: "Gift box and rewards", sub: "Daily · weekly · badge · quarterly rewards", s: [
      ["Daily box", "When you meet the day's success requirement, a bonus box arrives. Opening it adds 5P. If you press [Later], a box card stays on Home."],
      ["Weekly reward", "If you succeed on 4 or more of the 5 weekdays (Mon–Fri), a “small reward” opens. It's judged on Fri, Sat and Sun. If rest days leave fewer than 5 days to evaluate, you need to succeed on all of them."],
      ["Badge reward", "It opens each time you earn a streak badge (3 · 7 · 14 · 30 · 60 · 100 · 200 · 365 days). Under 30 days is a small reward and 30 or more is a big reward, with different suggestion chips."],
      ["Quarterly reward", "Each time your total points pass 3000P · 6000P · 9000P… (every 3000P), a “big reward” opens, repeating. It celebrates in full screen, with no suggestion chips — you just type your own."],
      ["All in one place", "Daily, weekly, badge and quarterly reward records are all gathered in one gift box. Tap an entry to fill it in later, edit what you already wrote, or delete it."]
    ], see: ["points", "streak"] },
    badges: { t: "Streak badges", sub: "3 · 7 · 14 · 30 · 60 · 100 · 200 · 365 days", s: [
      ["How to earn a badge", "You earn a badge when your longest streak of successful days reaches 3 · 7 · 14 · 30 · 60 · 100 · 200 · 365 days."],
      ["They don't disappear", "A badge you've earned stays even if your streak breaks. When a new badge opens, a full-screen celebration plays."]
    ], see: ["streak", "rewards"] },
    friends: { t: "Friends screen", sub: "Connect · refresh · chat", s: [
      ["Connecting with friends", "You request with an invite code, and you connect once the other person accepts. Connected friends show as cards; tap a card to enter the screen with details and the cheer chat."],
      ["Refresh", "The ↻ at the top right reloads your friends' info."],
      ["Unread cheers", "When a cheer arrives, a badge shows on the Friends tab and on Home."],
      ["Removing a friend", "You can remove one from the ⋯ menu at the top of the chat screen, and it asks once more to confirm."]
    ], see: ["share", "cheers"] },
    share: { t: "My sharing settings", sub: "What's visible to whom", s: [
      ["Sharing is up to you", "Until you turn sharing on, friends can't see anything. Once on, <b>only friends who accepted each other</b> can see your title · total P · streak · Bible progress (% · book)."],
      ["Optional sharing", "Turn on “Also share today's progress” and “Also share routine count” only if you want to."],
      ["Public summary", "This summary is all friends can see. Routine names and detailed records aren't visible."],
      ["Nickname and turning off", "You need a nickname to share. You can stop any time with “Turn off sharing.”"]
    ], see: ["friends", "cheers"] },
    cheers: { t: "Sending cheers", sub: "Preset phrases · your own words", s: [
      ["Sending", "To a connected friend you can send a preset cheer or praise phrase, or a sentence of your own (up to 100 characters)."],
      ["2 a day", "You can send up to 2 per day to one friend. Preset phrases and your own sentences are counted together."],
      ["Cheers you receive", "You can leave a simple reaction on a cheer you received. What you sent and received are gathered in one conversation, like a chat."]
    ], see: ["friends", "share"] },
    settings: { t: "Settings screen", sub: "Display · routine rules · alerts & reviews · account", s: [
      ["Open by group", "Choose a group on the first Settings screen to open its detailed settings. Each row shows its current value below, so you can check without opening it."],
      ["Display", "Change text size, sharper text and theme. These apply to this device only."],
      ["Routine rules", "Set the streak requirement and overtime grace, and go into Manage rest days."],
      ["Alerts & reviews", "Set alarm sound, turn off all alarms, and weekly and monthly reviews."],
      ["Data · account", "Backup and restore are under “Backup & restore”; changing your password and signing out are under “Account.”"]
    ], see: ["streak", "alarm", "review", "backup"] },
    backup: { t: "Backup & restore", sub: "File · text", s: [
      ["Save as file", "Download all your records as one file and keep it. You can restore from this file if you switch devices or lose your data."],
      ["As text", "You can copy it as text, or paste text in to import. Text is handy for pasting into a chat with Claude."],
      ["Before importing", "It's safest to back up your current state before importing."]
    ], see: ["settings"] }
  };

  var G = [
    ["Screen guides", ["home", "edit", "stats", "backfill", "friends", "achieve", "settings"]],
    ["Routine & stats rules", ["colors", "streak", "days", "notstarted", "review", "keeprest", "rest", "timesuggest", "alarm", "grace"]],
    ["Points & rewards", ["points", "rewards", "badges", "avatar"]],
    ["Friends & data", ["share", "cheers", "backup"]]
  ];

  window.MMD_HELP_EN = { topics: T, groups: G };
})();
