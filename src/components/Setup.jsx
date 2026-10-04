import { useState } from "react";
import { TOPICS } from "../data/questions.js";
import { poolFor, shuffle } from "../lib/quiz.js";

const COUNTS = [20, 40, 60, 80, 100];

const MODES = [
  {
    id: "instant",
    title: "Check as I go",
    text: "See the right answer and a short explanation after each question.",
  },
  {
    id: "end",
    title: "Score at the end",
    text: "Answer everything first, change answers freely, then submit to see your score.",
  },
];

export default function Setup({ onStart, saved, onResume, onDiscard }) {
  const [topics, setTopics] = useState(TOPICS);
  const [count, setCount] = useState(20);
  const [mode, setMode] = useState("instant");

  const pool = poolFor(topics);
  const amount = Math.min(count, pool.length);

  const toggleTopic = (t) =>
    setTopics((cur) => (cur.includes(t) ? cur.filter((x) => x !== t) : TOPICS.filter((x) => x === t || cur.includes(x))));

  const start = () => {
    const ids = shuffle(pool).slice(0, amount).map((q) => q.id);
    onStart({ ids, mode });
  };

  return (
    <main className="page setup">
      {saved && (
        <div className="resume card">
          <div>
            <strong>You have an unfinished quiz.</strong>
            <p className="muted">
              {saved.items.filter((it) => it.picked !== null).length} of {saved.items.length} answered
            </p>
          </div>
          <div className="row">
            <button className="btn ghost" onClick={onDiscard}>Discard</button>
            <button className="btn primary" onClick={onResume}>Resume</button>
          </div>
        </div>
      )}

      <section className="intro">
        <h1>Review your ICT lessons</h1>
        <p className="muted">
          Pick how many items you want and how you want to be checked. Questions and choices are shuffled every time.
        </p>
      </section>

      <section className="card block">
        <h2>Number of items</h2>
        <div className="chips">
          {COUNTS.map((n) => (
            <button
              key={n}
              className={`chip ${amount === n ? "on" : ""}`}
              disabled={n > pool.length}
              onClick={() => setCount(n)}
            >
              {n}
            </button>
          ))}
          {pool.length < 100 && !COUNTS.includes(pool.length) && pool.length > 0 && (
            <button
              className={`chip ${amount === pool.length && count >= pool.length ? "on" : ""}`}
              onClick={() => setCount(pool.length)}
            >
              All {pool.length}
            </button>
          )}
        </div>
        <p className="hint">{pool.length} questions available in the topics you picked.</p>
      </section>

      <section className="card block">
        <h2>Checking</h2>
        <div className="modes">
          {MODES.map((m) => (
            <label key={m.id} className={`mode ${mode === m.id ? "on" : ""}`}>
              <input
                type="radio"
                name="mode"
                checked={mode === m.id}
                onChange={() => setMode(m.id)}
              />
              <span className="mode-title">{m.title}</span>
              <span className="mode-text">{m.text}</span>
            </label>
          ))}
        </div>
      </section>

      <section className="card block">
        <div className="block-head">
          <h2>Topics</h2>
          <button
            className="link"
            onClick={() => setTopics(topics.length === TOPICS.length ? [] : TOPICS)}
          >
            {topics.length === TOPICS.length ? "Clear all" : "Select all"}
          </button>
        </div>
        <div className="topics">
          {TOPICS.map((t) => (
            <label key={t} className={`topic ${topics.includes(t) ? "on" : ""}`}>
              <input type="checkbox" checked={topics.includes(t)} onChange={() => toggleTopic(t)} />
              <span>{t}</span>
              <span className="count">{poolFor([t]).length}</span>
            </label>
          ))}
        </div>
      </section>

      <div className="start-bar">
        <button className="btn primary big" disabled={!amount} onClick={start}>
          {amount ? `Start ${amount} items` : "Pick at least one topic"}
        </button>
      </div>
    </main>
  );
}
