const $ = (id) => document.getElementById(id);
const show = (id) => ["pick", "play", "result"].forEach((s) => ($(s).hidden = s !== id));
let category, questions, index, answers;

async function api(url, body) {
  const res = await fetch(url, body && {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.error || "Request failed.");
  return data;
}

async function init() {
  try {
    const cats = await api("/api/categories");
    cats.forEach((c) => {
      const b = document.createElement("button");
      b.className = "service cat";
      b.textContent = c;
      b.onclick = () => start(c);
      $("cats").append(b);
    });
  } catch {
    $("msg").textContent = "Categories could not load. Refresh the page to try again.";
  }
}

async function start(c) {
  try {
    questions = await api("/api/quiz/" + encodeURIComponent(c));
  } catch (e) {
    $("msg").textContent = e.message;
    return;
  }
  category = c; index = 0; answers = [];
  $("msg").textContent = "";
  show("play");
  render();
}

function render() {
  const q = questions[index];
  $("progress").textContent = `${category}: question ${index + 1} of ${questions.length}`;
  $("question").textContent = q.q;
  $("next").hidden = true;
  $("options").innerHTML = "";
  q.o.forEach((text, i) => {
    const b = document.createElement("button");
    b.className = "opt";
    b.textContent = text;
    b.onclick = () => choose(i);
    $("options").append(b);
  });
}

async function choose(i) {
  const btns = [...document.querySelectorAll(".opt")];
  btns.forEach((b) => (b.disabled = true));
  try {
    const r = await api("/api/check", { category, index, choice: i });
    answers.push(i);
    btns[r.answer].classList.add("right");
    if (!r.correct) btns[i].classList.add("wrong");
    $("next").textContent = index === questions.length - 1 ? "See results" : "Next question";
    $("next").hidden = false;
  } catch (e) {
    $("msg").textContent = e.message;
    btns.forEach((b) => (b.disabled = false));
  }
}

$("next").onclick = () => {
  if (++index < questions.length) return render();
  show("result");
  $("score").textContent = "Quiz finished. Save your score to see the leaderboard.";
  $("board").innerHTML = "";
  $("save").disabled = false;
};

$("save").onclick = async () => {
  $("save").disabled = true;
  try {
    const r = await api("/api/score", { category, answers, name: $("player").value });
    $("score").textContent = `You scored ${r.score} out of ${r.total}.`;
    $("board").innerHTML = "";
    r.leaderboard.forEach((row) => {
      const li = document.createElement("li");
      li.textContent = `${row.name}: ${row.score}/${row.total}`;
      $("board").append(li);
    });
  } catch (e) {
    $("msg").textContent = e.message;
    $("save").disabled = false;
  }
};

$("again").onclick = () => { $("msg").textContent = ""; show("pick"); };
init();
