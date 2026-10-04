import { useState } from "react";
import Rich from "./Rich.jsx";
import { formatTime, getQuestion, isCorrect, summarize } from "../lib/quiz.js";

const LETTERS = ["A", "B", "C", "D"];

function verdict(p) {
  if (p >= 90) return "Excellent work. You know this material well.";
  if (p >= 75) return "Good job. A quick look at the items you missed and you are set.";
  if (p >= 50) return "Not bad. Go over the items below and try again.";
  return "Keep going. Review the explanations below and take another round.";
}

export default function Results({ session, onRetry, onHome }) {
  const sum = summarize(session);
  const missed = session.items.filter((it) => !isCorrect(it));
  const [filter, setFilter] = useState(missed.length ? "wrong" : "all");

  const shown = session.items
    .map((it, i) => ({ it, n: i + 1 }))
    .filter(({ it }) => (filter === "all" ? true : filter === "wrong" ? !isCorrect(it) : isCorrect(it)));

  const topics = Object.entries(sum.topics).sort((a, b) => a[1].correct / a[1].total - b[1].correct / b[1].total);

  return (
    <main className="page results">
      <section className="card score">
        <div className="score-num">
          <span className="big">{sum.correct}</span>
          <span className="muted">/ {sum.total}</span>
        </div>
        <div className="score-info">
          <div className="pct">{sum.percent}%</div>
          <p>{verdict(sum.percent)}</p>
          <div className="stats muted">
            <span>{sum.correct} correct</span>
            <span>{sum.wrong} wrong</span>
            {sum.skipped > 0 && <span>{sum.skipped} skipped</span>}
            <span>{formatTime(sum.seconds)}</span>
          </div>
        </div>
      </section>

      <div className="result-actions">
        {missed.length > 0 && (
          <button
            className="btn primary"
            onClick={() => onRetry({ ids: missed.map((it) => it.id), mode: session.mode })}
          >
            Retry the {missed.length} I missed
          </button>
        )}
        <button
          className="btn ghost"
          onClick={() => onRetry({ ids: session.items.map((it) => it.id), mode: session.mode })}
        >
          Retake same set
        </button>
        <button className="btn ghost" onClick={onHome}>New quiz</button>
      </div>

      <section className="card block">
        <h2>By topic</h2>
        <ul className="topic-bars">
          {topics.map(([t, v]) => {
            const p = Math.round((v.correct / v.total) * 100);
            return (
              <li key={t}>
                <div className="bar-label">
                  <span>{t}</span>
                  <span className="muted">
                    {v.correct}/{v.total}
                  </span>
                </div>
                <div className={`bar ${p < 50 ? "low" : p < 75 ? "mid" : ""}`}>
                  <div style={{ width: `${p}%` }} />
                </div>
              </li>
            );
          })}
        </ul>
      </section>

      <section className="review">
        <div className="review-head">
          <h2>Review</h2>
          <div className="tabs" role="tablist">
            {[
              ["wrong", `Missed (${missed.length})`],
              ["right", `Correct (${sum.correct})`],
              ["all", `All (${sum.total})`],
            ].map(([id, label]) => (
              <button
                key={id}
                role="tab"
                aria-selected={filter === id}
                className={`tab ${filter === id ? "on" : ""}`}
                onClick={() => setFilter(id)}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {shown.length === 0 && (
          <p className="card empty muted">
            {filter === "wrong" ? "Nothing missed. Every answer was correct." : "Nothing to show here."}
          </p>
        )}

        {shown.map(({ it, n }) => {
          const q = getQuestion(it.id);
          const ok = isCorrect(it);
          return (
            <article key={it.id} className={`card review-item ${ok ? "ok" : "no"}`}>
              <div className="review-top">
                <span className="num">#{n}</span>
                <span className="tag">{q.topic}</span>
                <span className={`status ${ok ? "ok" : "no"}`}>
                  {ok ? "Correct" : it.picked === null ? "Skipped" : "Wrong"}
                </span>
              </div>
              <h3 className="q-text small">
                <Rich text={q.text} />
              </h3>
              <ul className="answers">
                {it.order.map((ci, k) => {
                  const mine = it.picked === ci;
                  const cls = ci === 0 ? "right" : mine ? "wrong" : "";
                  return (
                    <li key={ci} className={cls}>
                      <span className="letter">{LETTERS[k]}</span>
                      <span>{q.choices[ci]}</span>
                      {mine && <em className="mark">Your answer</em>}
                      {ci === 0 && !mine && <em className="mark">Correct answer</em>}
                    </li>
                  );
                })}
              </ul>
              <p className="explain">{q.explain}</p>
            </article>
          );
        })}
      </section>
    </main>
  );
}
