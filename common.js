/* Shared by every page: helpers, sound and theme. */
/* ---------- Helpers ---------- */
const $ = id => document.getElementById(id);
const shuffle = a => { a = a.slice(); for (let i = a.length-1; i > 0; i--) { const j = Math.floor(Math.random()*(i+1)); [a[i],a[j]] = [a[j],a[i]]; } return a; };
const el = (tag, cls, text) => { const e = document.createElement(tag); if (cls) e.className = cls; if (text != null) e.textContent = text; return e; };
// localStorage can be blocked; never let it break the game.
const store = {
  get(k, d){ try { const v = localStorage.getItem(k); return v == null ? d : JSON.parse(v); } catch { return d; } },
  set(k, v){ try { localStorage.setItem(k, JSON.stringify(v)); } catch {} },
  del(k){ try { localStorage.removeItem(k); } catch {} }
};

/* ---------- Sound (Web Audio, no files needed) ---------- */
let ctx, muted = store.get("qz_mute", false);
function beep(freqs, dur = .14){
  if (muted) return;
  try {
    ctx = ctx || new (window.AudioContext || window.webkitAudioContext)();
    freqs.forEach((f, i) => {
      const o = ctx.createOscillator(), g = ctx.createGain(), t = ctx.currentTime + i*dur;
      o.frequency.value = f; o.type = "sine"; o.connect(g); g.connect(ctx.destination);
      g.gain.setValueAtTime(.15, t); g.gain.exponentialRampToValueAtTime(.001, t + dur);
      o.start(t); o.stop(t + dur);
    });
  } catch {}
}
const sfx = { good:()=>beep([660,880]), bad:()=>beep([220,160],.2), win:()=>beep([523,659,784,1047],.16) };
function paintSound(){ $("snd").textContent = muted ? "🔇" : "🔊"; $("snd").setAttribute("aria-label", muted ? "Unmute sound" : "Mute sound"); }

/* ---------- Theme ---------- */
function paintTheme(){
  const t = document.documentElement.dataset.theme || (matchMedia("(prefers-color-scheme:dark)").matches ? "dark" : "light");
  $("thm").textContent = t === "dark" ? "☀️" : "🌙";
}
const savedTheme = store.get("qz_theme", null);
if (savedTheme) document.documentElement.dataset.theme = savedTheme;

/* ---------- Header buttons ---------- */
$("snd").onclick = () => { muted = !muted; store.set("qz_mute", muted); paintSound(); };
$("thm").onclick = () => {
  const cur = document.documentElement.dataset.theme || (matchMedia("(prefers-color-scheme:dark)").matches ? "dark" : "light");
  const t = cur === "dark" ? "light" : "dark";
  document.documentElement.dataset.theme = t; store.set("qz_theme", t); paintTheme();
};

paintSound(); paintTheme();
