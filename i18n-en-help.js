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
      ["Top area", "Tap the date to jot a “One line a day” note right away. The flame on the right is your current streak of successful days; tap it to open the achievements screen. Tap the gear (⚙) next to your avatar to open Settings. The round card below shows today's progress."],
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
      ["Stepping Stone · Pause", "A day an item or two short can be carried over with a “Stepping Stone”, and a day you simply can't manage can be rested with a “Pause”. See the “Stepping Stone · Pause” help for the full rules."],
      ["What the numbers cover", "“Streak” in Stats is the full run of consecutive days up to today, regardless of the month you're viewing. “Success days” next to it counts only within the month on screen, so the ranges differ."],
      ["Relation to points", "Even if your streak breaks, your total points and Bible journey stay. Badges you've earned don't disappear either."]
    ], see: ["pass", "badges", "points", "keeprest"] },
    pass: { t: "Stepping Stone · Pause", sub: "Protecting your streak on a day you fell short", s: [
      ["Two safety nets", "A <b>Stepping Stone</b> carries your streak over a day where you did most things but fell an item or two short. A <b>Pause</b> lets you rest a whole day when you're sick or simply can't. For holidays or trips you know about in advance, set a rest day instead."],
      ["Stepping Stone", "Use it on today or yesterday when you're 2 items or fewer short of the requirement. That day counts as a success, so your streak grows by 1 and you still get that day's gift. Once per week (Mon–Sun), never on two days in a row."],
      ["Earning Stepping Stones", "1 for every 7 successful days in a row (days bridged with a Stepping Stone don't count toward the 7). You can hold up to 3."],
      ["Pause", "Use it on today or yesterday when you fell short. The day is skipped like a rest day, so your streak neither breaks nor grows. In exchange you can't check items that day and it earns 0 points. You can pick a reason (Sick · Too busy · Other) and leave a one-line note."],
      ["Earning Pauses", "You get 1 on the 1st of each month and can hold up to 2 (one unused Pause carries over to the next month)."],
      ["Where to use them", "Tap the date on Home to see how many you have and open them (Home doesn't show the counts, so you're not tempted to use them too often). If you fell short yesterday, a reminder card appears on Home, and you can also open them from Settings › Routine rules."],
      ["Getting one back", "If you later fill a Stepping Stone day past the requirement, it counts as not used and comes back. You can also cancel either one for today or yesterday to get it back (a Stepping Stone can't be canceled once that day's gift is opened)."],
      ["Notice when you earn one", "When you earn a new one, you're told once. Tick “Don't show this notice again” in that window to stop notices for that kind."],
      ["Weekly reward · stats", "A Stepping Stone day counts as a success day. A Pause day is left out of the weekly reward and this month's success rate. They're marked 🪨 · ⏸️ on the Stats calendar."]
    ], see: ["streak", "rewards", "rest"] },
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
      ["Year in review", "If monthly reviews are on, a look back at the whole year arrives on the evening of December 31 (at your monthly review time). It shows the monthly rate trend, your most consistent item, your Bible journey, and one thing to try in the new year. The Home card stays until the end of January, and after that you can open it from the “Reviews” tab in Statistics."],
      ["Past reviews", "The “Reviews” tab in Statistics lets you revisit the last 12 weeks, the last 12 months, and each year. Past reviews are also recalculated from your records at that time."],
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
      ["Resting today", "Use the button at the top, or tap the date on Home, to mark today as a rest day or unmark it."],
      ["Today or past dates: 3 a month", "Newly marking today or a past date as a rest day is limited to 3 times a month. Days in the public-holiday table (Seollal, Chuseok, substitute holidays and so on) don't count, and future dates can be added freely. Unmarking gives the use back."],
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
      ["When it rings", "It rings when the time reaches 0:00 in the ▶ countdown, and if you leave it without pressing Done, it rings again every minute until you do. It doesn't ring while paused. It doesn't ring when you check an item by tapping on Home, or when you press Done early during the countdown."],
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
      ["Weekly reward", "If you succeed on 4 or more of the 5 weekdays (Mon–Fri), a “small reward” opens. It's judged on Fri, Sat and Sun. Even when rest days or Pauses shrink the days to evaluate, with 3 or more days you may miss one (with 4 days, 3 successes); with 2 or fewer you need all of them."],
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
      ["Cheers you receive", "You can leave a simple reaction on a cheer you received. What you sent and received are gathered in one conversation, like a chat."],
      ["Edit · delete", "Tap a cheer you sent to open a menu. You can edit your own sentences and delete cheers you sent. No mark is left when you edit or delete, and a deleted cheer disappears from your friend's screen too. Today's sent count stays the same, though."],
      ["Links", "If your own sentence includes a link starting with https:// or www., it's underlined and opens in a new window when tapped."]
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
    ], see: ["settings", "offline"] },
    keys: { t: "Using a keyboard", sub: "Shortcuts for a MacBook or external keyboard", s: [
      ["Jump to the menu", "Press <b>1–5</b> to go straight to Home · To-dos · Stats · Records · Friends in the bottom menu. Settings is the gear (⚙) at the top right of Home. Press <b>M</b> to move focus to the bottom menu. Press <b>N</b> anywhere to open quick capture for to-dos."],
      ["Back · Close", "Press <b>Esc</b> or <b>Delete (Backspace)</b> to go back. If a window is open, Esc closes it; in yes/no windows it picks “Cancel”. Pressing Esc in a text field leaves the field."],
      ["Moving in lists", "Use <b>↑ ↓</b> to move between rows of the same kind (item checks, settings rows, etc.) and <b>← →</b> between menu buttons and chips. <b>Home · End</b> jump to the first and last. Press <b>Enter</b> or <b>Space</b> to select."],
      ["When a window opens", "Focus moves into the window, and Tab stays inside it. When you close it, focus returns to where you were."],
      ["See this again", "Press <b>?</b> anytime to open this guide. Shortcuts don't work while you're typing."]
    ], see: ["home", "settings"] },
    habit: { t: "Build a Habit", sub: "A separate streak for a group of items", s: [
      ["What is it?", "For a new habit, group a few items and count a streak just for that group, separate from your overall streak. e.g. Morning worship 40 min + Evening worship 20 min → “Worship 1 hour”."],
      ["A successful day", "A day counts when <b>all</b> of the group's items scheduled that day are done. Items not scheduled that day are left out. Your overall streak threshold (%) doesn't apply."],
      ["Rest days · Pause · Stepping Stone", "Rest days and Pause days neither break nor add to the streak. Stepping Stones don't apply to habit streaks."],
      ["Start date", "The streak counts from the start date, which you can pick when you make or edit a habit. Pick a past date to recount from your check-ins in the app since that day; pick a future date to see the days left, like “D-3”. Tap “Start over” to count fresh from today."],
      ["Pin to Home", "You can pin up to 2 habits on Home. Once a habit has settled in, unpin it to keep Home light. All habits are at the bottom of Stats > Success, where you can also make new ones."],
      ["Goal days", "Choose 21 · 30 · 66 · 100 days, or tap “Custom” to type any number from 1 to 365 (e.g. 60). You'll get a celebration when your streak reaches the goal."],
      ["When you reach the goal", "Choose <b>Keep going</b> to move the goal to the next step (21 → 30 → 66 → 100 days); after 100 it keeps counting with no goal. Choose <b>Finish</b> to freeze that day's streak and best record and keep the habit under “Finished habits” in Stats (it's also unpinned from Home). If a past start date means you've already passed the goal, you're asked right in the habit window, without a celebration."],
      ["Finished habits", "Bring a finished habit back with “Resume”. Habits without a goal can also be finished with “Finish and keep” in the habit window."]
    ], see: ["streak", "pass"] },
    todo: { t: "To-dos", sub: "Quick capture · sort in one go · lists", s: [
      ["Quick capture", "Type whatever comes to mind in the line at the <b>bottom</b> of the To-dos tab (where your thumb reaches) and press Enter (or the <b>+</b> on the right) — it piles up under “To sort”. During a routine countdown, tap the <b>✎</b> at the top right to capture without stopping the timer. From other tabs, tap the <b>+</b> at the right of the to-do line on Home, or <b>press and hold</b> “To-dos” in the bottom menu to open a text box (keyboard: <b>N</b>). Nothing is asked while you capture. If you close the box with text still in it, that text is added too."],
      ["Date words", "Words like “tomorrow”, “Friday”, “next Tue”, “10/25”, “3pm”, “2:30 PM” or “evening” are highlighted as you type and filled in as the date and time when you sort. Without AM/PM, 1–6 o'clock is read as afternoon. Recognized words are taken out of the title; tap “Use original” while sorting to bring back exactly what you typed."],
      ["Sort in one go", "Tap “Sort them all” to go card by card and choose To-do · Event · Note · Discard. The suggested type is already selected. For a to-do, pick a date (Today · Tomorrow · This weekend · Next week · Pick a date · Someday) and a time (Morning · Noon · Afternoon · Evening · exact time — spin the wheel, then tap OK; nothing changes while you spin); for an event, a date and start/end times. Items waiting more than 3 days are highlighted in gold."],
      ["Lists", "“Today” has today's to-dos and events (grouped into Morning · Afternoon · Evening when times are mixed; a chosen time slot shows its real time like “Morning · 9:00 AM”, and an item with no time but “send” on shows “9:00 AM alert”), “Upcoming” starts tomorrow, “Someday” has to-dos without a date, and “Notes” groups notes by #tag. Tap the circle to check a to-do off; tap a row to edit it. <b>Swipe a row right</b> to finish it (to-dos only) or <b>left</b> to reveal [Delete] (with a 6-second Undo). Swipe sideways anywhere that isn't a row (the tab strip or empty space) to move to the next tab."],
      ["Overdue", "To-dos not done by their date move to the next day under “Overdue”. The third time one is postponed, the app asks “Will you really do it?” — choose I'll do it · Pick a date · Move to Someday · Discard."],
      ["Done · Archive", "Finished to-dos, discarded items and past events stay under “Done”. After 180 days they move to your account's archive to keep the app light; open it with “View archive”."],
      ["The edit sheet", "Tap a row and everything sits on one screen, top to bottom: <b>text → summary pills → type → date → time → deadline → send</b>. Pick a time slot (Any · Morning · Noon · Afternoon · Evening), or tap “Exact time” for a specific time. Save and Delete stay pinned at the bottom."],
      ["Deadline (optional)", "“Date” is the day you <b>start</b> (the day it shows up under Today); “Deadline” is the day it <b>must be done</b>. They're separate. A deadline shows on the row as “Due tomorrow” or “Due 10/25”, and turns gold when it is a day away or past. Deadlines are not sent to Reminders."],
      ["Lighten today · Evening wrap-up", "With 7 or more to-dos today, a notice appears above Today. Tap [Lighten] to pick <b>Keep · Tomorrow · Someday</b> row by row and move them in one go. After 7 PM, if anything is left, a “Left today” notice offers the same wrap-up. Undo shows for 6 seconds after moving. Tapping [It's fine] or [Later] hides the notice for the day (on this device only)."],
      ["Someday review", "If anything in “Someday” has sat for over a month, a notice appears above the list. In [Review], choose <b>Keep · Do today · Discard</b>. If you choose Keep, it asks again a month later."],
      ["Separate from routines", "To-dos don't mix with your routine streak or points. Home shows just one line — today's to-dos · overdue · to sort (turn it off or reorder it in Settings > Home layout). Open Settings from the gear (⚙) at the top right of Home."]
    ], see: ["todoshortcut", "homelayout"] },
    todoshortcut: { t: "Send to Reminders · Calendar", sub: "Make the “MMD 보내기” shortcut · Keep sent items updated", s: [
      ["How sending works", "Items with “Send to Reminders / Send to Calendar” turned on are gathered; tap [Send n] and the “MMD 보내기” shortcut puts to-dos into Reminders and events into Calendar in one go. Tap [Send] on the send bar to send straight away, without the list. Items are marked as sent the moment you tap; if they didn't go in once the shortcut finishes, tap the brief “Undo” (if you miss it, open the item and choose “Send again”). Sending the same item again leaves only one copy on your iPhone. Sent items keep a “→ Reminders” or “→ Calendar” mark."],
      ["When you change a sent item", "Turn on “Update sent items there too” on the send screen. For items sent after that, finishing one in the app completes the reminder, editing its title, date or time updates it there, and discarding, deleting or moving it to Someday or Notes removes it there. Changes wait under “to update” and go along with your next [Send]. Changes made in Reminders or Calendar don't come back to the app. Overdue to-dos keep their original date there. Before turning it on, add branches ⑤ · ⑥ below and the “Notes” field in ③ · ④ to your shortcut."],
      ["Times used", "To-dos without a time get a 9 AM alert that day; Morning · Noon · Afternoon · Evening are sent as 9:00 · 12:00 · 15:00 · 19:00. Events without an end time are sent as 1 hour, and events without a time as all-day."],
      ["① Make the shortcut", "Open the <b>Shortcuts</b> app on iPhone (or Mac) → <b>+</b> → rename it exactly <b>MMD 보내기</b> (with the space). Action names can differ a little by device and version (on Mac, “If” may appear as a <b>conditional</b>)."],
      ["② Read the input", "Add <b>Get Dictionary from Input</b> (input: “Shortcut Input”) → <b>Get Dictionary Value</b> (key <b>items</b>) → <b>Repeat with Each</b>. When you use a dictionary value in a condition, tap it and change its type to <b>Text</b>. Several values share the same name, so pick each one from the bubble right under the block it comes from."],
      ["③ To-dos into Reminders", "Inside the repeat, add <b>Get Dictionary Value</b> (key <b>type</b>, from the Repeat Item) and an <b>If</b> (“is” reminder). Inside it: <b>Get Dates from Input</b> (the Repeat Item's <b>start</b>) → <b>Add New Reminder</b> with <b>title</b> as the title, [Alert] set with that date in the time field, and <b>key</b> in the <b>Notes</b> field (putting the dictionary value in directly gives an alert-location error)."],
      ["④ Events into Calendar", "In <b>Otherwise</b>: <b>Get Dates from Input</b> twice for start and end → <b>Add New Event</b> with title <b>title</b>, those dates as start and end, and <b>key</b> in <b>Notes</b>. Turn off “Show Compose Sheet”. For all-day events, add another <b>If</b> inside it: when <b>allDay</b> is yes, use an event with “All Day” on (with Notes too)."],
      ["⑤ Remove branch (for updates)", "<b>Above</b> the repeat from ②: <b>Get Dictionary Value</b> (key <b>remove</b>) → <b>Repeat with Each</b> → an <b>If</b> on the Repeat Item's <b>type</b> (Text). For reminder: <b>Find Reminders</b> (filter: <b>Notes</b> contains the Repeat Item's <b>key</b>) → <b>Remove Reminders</b>. Otherwise: <b>Find Calendar Events</b> (<b>Notes</b> contains <b>key</b>) → <b>Remove Events</b>. The <b>Start Date</b> range it starts with can't be removed, and it only searches the <b>first 4 years</b> of it (2019–2099 searches only up to 2023, so new events are missed). Set its start to <b>Current Date → Adjust Date (subtract 1 year)</b>. You don't need a calendar-name filter. Turn off “Confirm Before Deleting”. An edited item is removed here, then ③ · ④ add it back with the new details."],
      ["⑥ Complete branch (for updates)", "<b>Below</b> the repeat from ② (at the very end): <b>Get Dictionary Value</b> (key <b>complete</b>) → <b>Repeat with Each</b> → the Repeat Item's <b>key</b> (Text) → <b>Find Reminders</b> (<b>Notes</b> contains <b>key</b>, Limit off) → the edit action you find by searching “Reminder”, set to <b>“Set Is Completed of Reminder to Yes”</b>. Giving the key a name with <b>Set Variable</b> (e.g. DoneKey) makes it easier to pick. When everything is in, turn on “Update sent items there too” on the send screen."],
      ["If it doesn't work", "Check that the shortcut is named exactly “MMD 보내기” and that you tapped “Allow” for Reminders and Calendar the first time it ran. The app sends JSON: items (type · title · start · end · allDay · key), remove (type · key), complete (type · key). The key starts with “mmd://”. When checking values while editing the shortcut, use <b>Show Alert</b> or <b>Count</b> instead of <b>Quick Look</b> (Quick Look shows text values as a blank screen). If you answer that it didn't go through, the items and updates stay ready to send again."]
    ], see: ["todo"] },
    homelayout: { t: "Home layout", sub: "What to show · Order · Folding", s: [
      ["Where to change it", "In Settings > Home layout, reorder Notices · To-dos · Today's progress · Build a Habit · Routine categories with ↑↓ and tap the circle to turn them on or off. Notices and routine categories can't be turned off."],
      ["One notice at a time", "When several notices pile up, only the most urgent one shows; tap “n more notices” below it to expand. Urgency order: success bonus → Stepping Stone · Pause → rewards to claim → start again → reviews → missed yesterday → this week's progress → holidays. You can also turn notices off one by one (success-bonus, reward and review notices can't be turned off)."],
      ["Habit cards", "Habits pinned to Home show small, side by side in one row, with the streak and today's status (✓ done · 1/2 · – not due). Tap one to open the habit window."],
      ["Collapsing categories", "On Home, tap a category name to collapse or expand its items. With “Collapse categories finished today” on, categories you've finished fold up by themselves. Categories you collapse yourself stay collapsed until you expand them."],
      ["Same on every device", "Your layout is saved to your account, so it looks the same on iPhone, iPad and Mac. “Reset to default layout” brings back the original look."]
    ], see: ["home", "habit"] },
    comeback: { t: "Start again", sub: "After your streak breaks", s: [
      ["Start-again card", "When your streak breaks, a “Start again” card appears on Home. It shows your last streak and best record, a Bible line, and how many of the last 30 days were successful. It goes away when your streak reaches 3 days. If you close it with ×, only the bonus progress (○○○ n/3) stays as a small line — tap it to open the card again."],
      ["Stepping Stone · Pause first", "If yesterday broke your streak but a Stepping Stone or Pause can still save it, that notice comes first. The start-again card appears only when it can't be saved."],
      ["Back-on-track bonus", "If your streak was 3 days or more before it broke, keep it going for 3 days again to get a celebration and 10P bonus. Once per break."]
    ], see: ["streak", "pass"] },
    offline: { t: "When you're offline", sub: "Offline records · merged saving", s: [
      ["You can still check items", "Even without internet, checks and records are saved on this device first. They stay even if you close the app. A small <b>Offline</b> label appears at the top."],
      ["Opening without internet", "If you've opened the app on this device while connected at least once, it opens to your last records even without internet. On a brand-new device, it opens once you're connected."],
      ["Merged when you reconnect", "When you're back online, your records are <b>merged by date and item</b> with your other devices' records and saved. Checks made on other devices are not lost. If the same item was changed differently on both, this device (saving last) wins."],
      ["Not available offline", "Features that need the server — friends and cheers — work once you're connected. If you log out, records not yet saved are merged when you log back in with the same account."]
    ], see: ["backup", "streak"] }
  };

  var G = [
    ["Screen guides", ["home", "todo", "todoshortcut", "homelayout", "edit", "stats", "backfill", "friends", "achieve", "settings", "keys"]],
    ["Routine & stats rules", ["colors", "streak", "habit", "comeback", "pass", "days", "notstarted", "review", "keeprest", "rest", "timesuggest", "alarm", "grace"]],
    ["Points & rewards", ["points", "rewards", "badges", "avatar"]],
    ["Friends & data", ["share", "cheers", "backup", "offline"]]
  ];

  window.MMD_HELP_EN = { topics: T, groups: G };
})();
