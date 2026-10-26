/* =====================================================
   QUESTION BANK — format: [question, correct, wrong1, wrong2, wrong3]
   Add or edit questions here; the game shuffles everything.
   ===================================================== */
const CATS = {
 "General Knowledge":{icon:"🌍",q:[
  ["What is the capital of Australia?","Canberra","Sydney","Melbourne","Perth"],
  ["Which planet is known as the Red Planet?","Mars","Venus","Jupiter","Mercury"],
  ["How many continents are there?","7","5","6","8"],
  ["Who painted the Mona Lisa?","Leonardo da Vinci","Michelangelo","Raphael","Van Gogh"],
  ["Which is the largest ocean?","Pacific","Atlantic","Indian","Arctic"],
  ["What is the currency of Japan?","Yen","Won","Yuan","Ringgit"],
  ["Which is the longest river in Africa?","Nile","Congo","Niger","Zambezi"],
  ["In which year did humans first land on the Moon?","1969","1965","1972","1959"],
  ["Which is the largest country by area?","Russia","Canada","China","United States"],
  ["Who wrote Romeo and Juliet?","William Shakespeare","Charles Dickens","Jane Austen","Mark Twain"],
  ["Which is the smallest country in the world?","Vatican City","Monaco","Malta","San Marino"],
  ["What is the capital of Canada?","Ottawa","Toronto","Vancouver","Montreal"],
  ["Which is the largest hot desert in the world?","Sahara","Gobi","Kalahari","Arabian"],
  ["How many players does one football team have on the pitch?","11","9","10","12"],
  ["Which language has the most native speakers?","Mandarin Chinese","English","Spanish","Hindi"]]},
 "Science":{icon:"🔬",q:[
  ["What is the chemical symbol for gold?","Au","Ag","Gd","Go"],
  ["Which part of the cell is the powerhouse?","Mitochondria","Nucleus","Ribosome","Golgi body"],
  ["Which gas do plants absorb for photosynthesis?","Carbon dioxide","Oxygen","Nitrogen","Hydrogen"],
  ["Roughly how fast does light travel?","300,000 km/s","30,000 km/s","150,000 km/s","3,000 km/s"],
  ["What is the hardest natural substance?","Diamond","Quartz","Steel","Granite"],
  ["How many bones are in an adult human body?","206","186","226","256"],
  ["What is the pH of pure water?","7","1","10","14"],
  ["Which force pulls objects towards Earth?","Gravity","Magnetism","Friction","Inertia"],
  ["Which planet is closest to the Sun?","Mercury","Venus","Earth","Mars"],
  ["What is H₂O commonly known as?","Water","Hydrogen peroxide","Salt","Ozone"],
  ["What do bees collect to make honey?","Nectar","Sap","Dew","Resin"],
  ["Which organ pumps blood around the body?","Heart","Liver","Lungs","Kidney"],
  ["What is the most abundant gas in Earth’s atmosphere?","Nitrogen","Oxygen","Carbon dioxide","Argon"],
  ["Which blood cells carry oxygen?","Red blood cells","White blood cells","Platelets","Plasma"],
  ["What is the centre of an atom called?","Nucleus","Electron","Orbit","Shell"]]},
 "Mathematics":{icon:"➗",q:[
  ["What is 12 × 12?","144","124","132","154"],
  ["What is the square root of 169?","13","11","14","17"],
  ["What do the angles of a triangle add up to?","180°","90°","270°","360°"],
  ["What is pi, to two decimal places?","3.14","2.71","1.62","3.41"],
  ["What is 15% of 200?","30","20","35","25"],
  ["Which of these is a prime number?","17","15","21","27"],
  ["Solve: 3x + 5 = 20. What is x?","5","4","6","15"],
  ["What is 4 cubed?","64","16","48","81"],
  ["What is 7 × 8?","56","54","58","48"],
  ["How many degrees are in a right angle?","90°","45°","180°","60°"],
  ["What is 1/2 + 1/4?","3/4","2/6","2/4","1/8"],
  ["How many sides does a hexagon have?","6","5","7","8"],
  ["What is 25 squared?","625","525","250","725"],
  ["What comes next: 2, 4, 8, 16, …?","32","24","30","36"],
  ["What is the average of 4, 8 and 12?","8","6","10","12"]]},
 "Business and Management":{icon:"💼",q:[
  ["What does CEO stand for?","Chief Executive Officer","Chief Economic Officer","Central Executive Operator","Chief Enterprise Owner"],
  ["In a SWOT analysis, what does S stand for?","Strengths","Sales","Strategy","Savings"],
  ["How is profit calculated?","Revenue − Expenses","Revenue + Expenses","Assets − Revenue","Expenses − Assets"],
  ["Which is NOT one of the 4 Ps of marketing?","Profit","Product","Price","Promotion"],
  ["What does ROI measure?","Return on investment","Rate of inflation","Risk of insolvency","Rent over income"],
  ["What does a balance sheet show?","Assets, liabilities and equity","Daily sales only","Employee schedules","Advertising budget"],
  ["Which management function includes setting goals?","Planning","Auditing","Recruiting","Invoicing"],
  ["What is the break-even point?","Total revenue equals total costs","Profit is highest","Sales stop","Costs are zero"],
  ["What does HR stand for?","Human Resources","Higher Revenue","Human Records","Hourly Rate"],
  ["What is money earned from selling goods or services called?","Revenue","Liability","Equity","Overhead"],
  ["What does B2B mean?","Business to business","Back to basics","Buy to build","Brand to buyer"],
  ["What does owning a share in a company give you?","Part ownership of the company","A loan to the company","Free office space","A fixed salary"],
  ["What does a budget plan?","Income and spending","Staff birthdays","Office layout","Logo design"],
  ["Which leadership style lets team members help make decisions?","Democratic","Autocratic","Coercive","Bureaucratic"],
  ["What does KPI stand for?","Key Performance Indicator","Key Profit Index","Known Product Income","Keep People Informed"]]},
 "Technology":{icon:"💻",q:[
  ["What does HTML stand for?","HyperText Markup Language","HighText Machine Language","Hyperlink Text Mode Language","Home Tool Markup Language"],
  ["Which of these is NOT a programming language?","HTTP","Python","Java","Ruby"],
  ["What does CPU stand for?","Central Processing Unit","Central Program Utility","Computer Personal Unit","Core Processing Utility"],
  ["Which language is used to style web pages?","CSS","SQL","Python","Bash"],
  ["How many bits are in one byte?","8","4","16","10"],
  ["Which company develops Android?","Google","Apple","Microsoft","Nokia"],
  ["What is SQL used for?","Querying databases","Styling pages","Compiling code","Drawing graphics"],
  ["What is binary 101 in decimal?","5","3","6","7"],
  ["What does URL stand for?","Uniform Resource Locator","Universal Resource Link","Unified Retrieval Locator","User Route Location"],
  ["Which of these is an operating system?","Linux","Python","HTML","Excel"],
  ["What does RAM stand for?","Random Access Memory","Read And Modify","Rapid Action Memory","Run All Memory"],
  ["Which symbol starts a comment in Python?","#","//","<!--","/*"],
  ["What does Wi-Fi let devices do?","Connect wirelessly to a network","Print documents","Store files offline","Charge batteries"],
  ["Which of these is a web browser?","Firefox","Photoshop","Linux","Python"],
  ["What does AI stand for?","Artificial Intelligence","Automatic Internet","Advanced Interface","Applied Input"]]},
 "English":{icon:"📖",q:[
  ["What is the plural of “child”?","Children","Childs","Childes","Childrens"],
  ["Which word is a synonym of “happy”?","Joyful","Gloomy","Angry","Tired"],
  ["Which of these words is a verb?","Run","Table","Blue","Softly"],
  ["Which spelling is correct?","Necessary","Neccessary","Necesary","Neccesary"],
  ["What is the antonym of “ancient”?","Modern","Old","Historic","Aged"],
  ["Complete: She ___ to school every day.","goes","go","going","gone"],
  ["Which word is a conjunction?","But","Under","Slowly","Green"],
  ["What is the past tense of “begin”?","Began","Begun","Beginned","Begon"],
  ["Which word is an adjective?","Beautiful","Quickly","Dance","Under"],
  ["What is the opposite of “increase”?","Decrease","Expand","Grow","Raise"],
  ["Choose the correct word: They are going to ___ house.","their","there","they’re","thier"],
  ["Which sentence is correct?","She doesn’t like apples.","She don’t like apples.","She not like apples.","She no like apples."],
  ["Which word is a synonym of “big”?","Large","Tiny","Narrow","Short"],
  ["Which punctuation mark ends a question?","?",".","!",","],
  ["What is the plural of “mouse” (the animal)?","Mice","Mouses","Mices","Meese"]]}
};
const DIFF = {Easy:{time:25,pts:1},Medium:{time:18,pts:2},Hard:{time:10,pts:3}};

/* ---------- Views & navigation ---------- */
const VIEWS = ["home","quiz","res","leaderboard"];
function go(v){
  clearInterval(timer);
  const target = v === "categories" ? "home" : v;
  VIEWS.forEach(n => { const e = $(n === "home" || n === "quiz" || n === "res" ? "v-"+n : "v-"+n); e.hidden = n !== target; });
  document.querySelectorAll(".menu button").forEach(b => b.classList.toggle("on", b.dataset.go === v));
  if (v === "home") refreshHome();
  if (v === "leaderboard") renderBoard();
  if (v === "categories") $("categories").scrollIntoView({behavior:"smooth"}); else window.scrollTo(0, 0);
}

/* ---------- Home ---------- */
let diff = store.get("qz_diff", "Medium");
function refreshHome(){
  $("s-q").textContent = Object.values(CATS).reduce((n, c) => n + c.q.length, 0);
  $("s-d").textContent = store.get("qz_done", 0);
  const best = store.get("qz_best", null);
  $("s-b").textContent = best == null ? "–" : best + "%";
  $("resume").hidden = !store.get("qz_progress", null);
}
function buildHome(){
  Object.keys(DIFF).forEach(d => {
    const b = el("button", "", d);
    b.setAttribute("aria-pressed", d === diff);
    b.onclick = () => { diff = d; store.set("qz_diff", d); [...$("diff").children].forEach(x => x.setAttribute("aria-pressed", x.textContent === d)); };
    $("diff").append(b);
  });
  Object.entries(CATS).forEach(([name, c]) => {
    const b = el("button", "glass cat");
    b.append(el("i", "", c.icon), el("strong", "", name), el("span", "muted", c.q.length + " questions"));
    b.onclick = () => startQuiz(name);
    $("cats").append(b);
  });
  const sel = $("lbf"); sel.append(new Option("All categories", "all"));
  Object.keys(CATS).forEach(n => sel.append(new Option(n, n)));
  sel.onchange = renderBoard;
}

/* ---------- Quiz logic ---------- */
let S = null, timer = null, locked = false;
function startQuiz(cat){
  // Randomise question order and answer order; remember the correct index.
  const quiz = shuffle(CATS[cat].q).map(([q, right, ...wrong]) => {
    const opts = shuffle([right, ...wrong]);
    return { q, opts, a: opts.indexOf(right) };
  });
  S = { cat, diff, quiz, i: 0, ans: [] };
  store.set("qz_progress", S);
  go("quiz"); showQ();
}
function showQ(){
  const q = S.quiz[S.i], n = S.quiz.length;
  locked = false;
  $("prog").textContent = `Question ${S.i + 1} of ${n}`;
  $("pbar").style.width = (S.i / n * 100) + "%";
  $("pbarW").setAttribute("aria-valuenow", Math.round(S.i / n * 100));
  $("qtext").textContent = q.q; $("fb").textContent = ""; $("next").hidden = true;
  const box = $("opts"); box.innerHTML = "";
  q.opts.forEach((t, i) => {
    const b = el("button", "opt"); b.append(el("kbd", "", i + 1), document.createTextNode(t));
    b.onclick = () => pick(i); box.append(b);
  });
  $("qbox").classList.remove("out");
  startTimer(DIFF[S.diff].time);
}
function startTimer(sec){
  clearInterval(timer);
  const end = Date.now() + sec * 1000;
  const tick = () => {
    const left = Math.max(0, (end - Date.now()) / 1000);
    $("time").textContent = Math.ceil(left) + "s";
    $("time").classList.toggle("low", left <= 5);
    $("tbar").style.width = (left / sec * 100) + "%";
    if (left <= 0) { clearInterval(timer); pick(-1); }
  };
  tick(); timer = setInterval(tick, 100);
}
function pick(i){
  if (locked) return;            // only one answer per question
  locked = true; clearInterval(timer);
  const q = S.quiz[S.i], ok = i === q.a, btns = [...$("opts").children];
  S.ans.push(i);
  btns.forEach(b => b.disabled = true);
  if (i >= 0) btns[i].classList.add("sel");
  btns[q.a].classList.add("right");
  if (i >= 0 && !ok) btns[i].classList.add("wrong");
  $("fb").textContent = i < 0 ? "Time is up! The correct answer is highlighted." : ok ? "Correct! Well done." : "Not quite. The correct answer is highlighted.";
  (ok ? sfx.good : sfx.bad)();
  $("pbar").style.width = ((S.i + 1) / S.quiz.length * 100) + "%";
  $("next").textContent = S.i === S.quiz.length - 1 ? "See Results" : "Next Question";
  $("next").hidden = false; $("next").focus();
  S.i++; store.set("qz_progress", S); S.i--;   // saved state points to the next question
}
function next(){
  if (!locked) return;
  if (S.i === S.quiz.length - 1) return finish();
  $("qbox").classList.add("out");
  setTimeout(() => { S.i++; showQ(); }, 220);
}

/* ---------- Results ---------- */
function finish(){
  const n = S.quiz.length, correct = S.ans.filter((a, i) => a === S.quiz[i].a).length;
  const pct = Math.round(correct / n * 100), pts = correct * DIFF[S.diff].pts;
  S.result = { correct, pct, pts, saved: false };
  store.del("qz_progress");
  store.set("qz_done", store.get("qz_done", 0) + 1);
  if (pct > store.get("qz_best", -1)) store.set("qz_best", pct);
  go("res");
  $("rpct").textContent = pct + "%";
  $("rc").textContent = "✅ " + correct + " correct";
  $("rw").textContent = "❌ " + (n - correct) + " incorrect";
  $("rp").textContent = "⭐ " + pts + " points (" + S.diff + ")";
  $("rmsg").textContent = pct >= 90 ? "Outstanding! You are a quiz champion." : pct >= 70 ? "Great job! Almost perfect." : pct >= 50 ? "Good effort. Try again to beat your score." : "Keep practising. You will improve!";
  $("trophy").textContent = pct >= 90 ? "🏆" : pct >= 70 ? "🥈" : pct >= 50 ? "⭐" : "💪";
  $("saveScore").disabled = false; $("saveScore").textContent = "Save to leaderboard";
  $("pname").value = store.get("qz_name", "");
  const list = $("review"); list.innerHTML = "";
  S.quiz.forEach((q, i) => {
    const ok = S.ans[i] === q.a, li = el("li", ok ? "ok" : "");
    li.append(el("strong", "", (i + 1) + ". " + q.q), el("br"),
      document.createTextNode(ok ? "✅ " + q.opts[q.a] : "❌ " + (S.ans[i] < 0 ? "No answer (time up)" : q.opts[S.ans[i]]) + " — correct: " + q.opts[q.a]));
    list.append(li);
  });
  if (pct >= 70) { sfx.win(); confetti(); }
}
function confetti(){
  const box = $("v-res"), colors = ["#6C3BDB","#B69CFF","#f5d90a","#ffffff","#ff7ac8"];
  for (let i = 0; i < 40; i++) {
    const c = el("span", "conf");
    c.style.left = Math.random() * 100 + "%"; c.style.background = colors[i % colors.length];
    c.style.animationDelay = Math.random() * .8 + "s";
    box.append(c); setTimeout(() => c.remove(), 4200);
  }
}

/* ---------- Leaderboard (server first, localStorage fallback) ---------- */
const API = "/api/leaderboard";
async function saveScore(){
  if (!S || !S.result || S.result.saved) return;
  const name = $("pname").value.trim() || "Player";
  store.set("qz_name", name);
  const row = { name, cat: S.cat, diff: S.diff, pct: S.result.pct, pts: S.result.pts };
  $("saveScore").disabled = true;
  try {   // share the score with everyone through the Python backend
    const r = await fetch(API, { method: "POST", headers: {"Content-Type": "application/json"}, body: JSON.stringify(row) });
    if (!r.ok) throw new Error();
  } catch {}   // backend not running: the local copy below still works
  const rows = store.get("qz_board", []);
  rows.push({ ...row, t: Date.now() });
  rows.sort((a, b) => b.pts - a.pts || b.pct - a.pct || a.t - b.t);
  store.set("qz_board", rows.slice(0, 50));
  S.result.saved = true; $("saveScore").textContent = "Saved ✓";
}
let boardToken = 0;
async function renderBoard(){
  const f = $("lbf").value, list = $("board"), token = ++boardToken;
  let rows, note;
  try {
    const r = await fetch(API + "?category=" + encodeURIComponent(f));
    if (!r.ok) throw new Error();
    rows = await r.json(); note = "Global leaderboard from the server.";
  } catch {
    rows = store.get("qz_board", []).filter(r => f === "all" || r.cat === f).slice(0, 10);
    note = "Showing scores saved on this device (server not connected).";
  }
  if (token !== boardToken) return;   // a newer filter choice replaced this request
  $("lbnote").textContent = note; list.innerHTML = "";
  if (!rows.length) { list.append(el("li", "glass muted", "No scores yet. Finish a quiz and save your score to appear here.")); return; }
  rows.forEach((r, i) => {
    const li = el("li", "glass"), who = el("div");
    who.append(el("strong", "", r.name), el("br"), el("small", "muted", r.cat + " · " + r.diff));
    li.append(el("span", "rank", "#" + (i + 1)), who, el("b", "", r.pts + " pts · " + r.pct + "%"));
    list.append(li);
  });
}

/* ---------- Events ---------- */
document.addEventListener("click", e => { const b = e.target.closest("[data-go]"); if (b) go(b.dataset.go); });
$("start").onclick = () => go("categories");
$("resume").onclick = () => {
  const p = store.get("qz_progress", null);
  if (!p) return refreshHome();
  S = p; S.i = Math.min(S.ans.length, S.quiz.length - 1); S.ans = S.ans.slice(0, S.i);
  go("quiz"); showQ();
};
$("next").onclick = next;
$("restart").onclick = () => startQuiz(S.cat);
$("again").onclick = () => startQuiz(S.cat);
$("saveScore").onclick = saveScore;
document.addEventListener("keydown", e => {
  if ($("v-quiz").hidden || e.target.tagName === "INPUT") return;
  if (e.key >= "1" && e.key <= "4") { const b = $("opts").children[+e.key - 1]; if (b && !locked) b.click(); }
  if (e.key === "Enter" && locked && !$("next").hidden && document.activeElement !== $("next")) next();
});

buildHome();
const startView = location.hash.slice(1);   // e.g. index.html#leaderboard
go(["home","categories","leaderboard"].includes(startView) ? startView : "home");
