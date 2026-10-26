"""Interactive Quiz Game: Flask backend.
Serves the website from ./static and stores the leaderboard in SQLite."""
import sqlite3
from flask import Flask, jsonify, request

app = Flask(__name__, static_folder="static", static_url_path="")
DB = "quiz.db"
CATEGORIES = {"General Knowledge", "Science", "Mathematics",
              "Business and Management", "Technology", "English"}
DIFFICULTIES = {"Easy", "Medium", "Hard"}


def init_db():
    with sqlite3.connect(DB) as con:
        con.execute(
            "CREATE TABLE IF NOT EXISTS scores ("
            "id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, cat TEXT, diff TEXT, "
            "pct INTEGER, pts INTEGER, created TEXT DEFAULT CURRENT_TIMESTAMP)"
        )


@app.get("/")
def home():
    return app.send_static_file("index.html")


@app.get("/about")
def about():
    return app.send_static_file("about.html")


@app.get("/api/leaderboard")
def leaderboard():
    cat = request.args.get("category", "all")
    sql = "SELECT name, cat, diff, pct, pts FROM scores"
    args = ()
    if cat != "all":
        sql += " WHERE cat = ?"
        args = (cat,)
    sql += " ORDER BY pts DESC, pct DESC, id ASC LIMIT 10"
    with sqlite3.connect(DB) as con:
        rows = con.execute(sql, args).fetchall()
    keys = ("name", "cat", "diff", "pct", "pts")
    return jsonify([dict(zip(keys, r)) for r in rows])


@app.post("/api/leaderboard")
def add_score():
    d = request.get_json(silent=True) or {}
    name = str(d.get("name", "")).strip()[:20]
    cat, diff, pct, pts = d.get("cat"), d.get("diff"), d.get("pct"), d.get("pts")
    ints = all(isinstance(v, int) and not isinstance(v, bool) for v in (pct, pts))
    if not name or cat not in CATEGORIES or diff not in DIFFICULTIES \
            or not ints or not 0 <= pct <= 100 or not 0 <= pts <= 100:
        return jsonify(error="Invalid score."), 400
    with sqlite3.connect(DB) as con:
        con.execute("INSERT INTO scores (name, cat, diff, pct, pts) VALUES (?,?,?,?,?)",
                    (name, cat, diff, pct, pts))
    return jsonify(ok=True), 201


init_db()

if __name__ == "__main__":
    app.run(debug=True)
