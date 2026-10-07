import { useEffect, useState } from "react";
import Rich from "./Rich.jsx";
import Confirm from "./Confirm.jsx";
import Explanation from "./Explanation.jsx";
import { getQuestion, isCorrect } from "../lib/quiz.js";

const LETTERS = ["A", "B", "C", "D"];

export default function Quiz({ session, setSession, onQuit }) {
  const [showNav, setShowNav] = useState(false);
  const [confirm, setConfirm] = useState(null);

  const { items, current, mode } = session;
  const item = items[current];
  const q = getQuestion(item.id);
  const instant = mode === "instant";
  const locked = instant && item.picked !== null;
  const answered = items.filter((it) => it.picked !== null).length;
  const correctSoFar = items.filter(isCorrect).length;
  const isLast = current === items.length - 1;

  const update = (fn) => setSession((s) => ({ ...s, ...fn(s) }));

  const pick = (k) => {
    if (locked) return;
    update((s) => ({
      items: s.items.map((it, i) => (i === s.current ? { ...it, picked: it.order[k] } : it)),
    }));
  };

  const go = (i) => {
    if (i < 0 || i >= items.length) return;
    update(() => ({ current: i }));
    setShowNav(false);
  };

  const finish = () => update(() => ({ finishedAt: Date.now() }));

  const askFinish = () => {
    const left = items.length - answered;
    if (!left) return finish();
    setConfirm({
      title: instant ? "End the quiz now?" : "Submit your answers?",
      text: `You still have ${left} unanswered ${left === 1 ? "item" : "items"}. They will be counted as wrong.`,
      action: instant ? "End quiz" : "Submit anyway",
      onYes: finish,
    });
  };

  const askQuit = () =>
    setConfirm({
      title: "Leave this quiz?",
      text: "Your progress on this quiz will be lost.",
      action: "Leave",
      onYes: onQuit,
    });

  const toggleFlag = () =>
    update((s) => ({
      items: s.items.map((it, i) => (i === s.current ? { ...it, flagged: !it.flagged } : it)),
    }));

  const next = () => (isLast ? askFinish() : go(current + 1));

  useEffect(() => {
    const onKey = (e) => {
      if (confirm || e.ctrlKey || e.metaKey || e.altKey) return;
      const key = e.key.toLowerCase();
      const idx = "1234".indexOf(key) >= 0 ? "1234".indexOf(key) : "abcd".indexOf(key);
      if (key.length === 1 && idx >= 0) pick(idx);
      else if (e.key === "ArrowRight" || (e.key === "Enter" && e.target.tagName !== "BUTTON")) {
        if (!instant || item.picked !== null) next();
      } else if (e.key === "ArrowLeft") go(current - 1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  const stateOf = (it) => {
    if (it.picked === null) return "";
    if (!instant) return "done";
    return isCorrect(it) ? "right" : "wrong";
  };

  const navigator = (
    <div className="nav-grid">
      {items.map((it, i) => (
        <button
          key={it.id}
          className={`nav-cell ${stateOf(it)} ${i === current ? "here" : ""} ${it.flagged ? "flag" : ""}`}
          onClick={() => go(i)}
          aria-label={`Question ${i + 1}`}
        >
          {i + 1}
        </button>
      ))}
    </div>
  );

  return (
    <main className="page quiz">
      <div className="quiz-main">
        <div className="quiz-head">
          <div className="quiz-meta">
            <span className="counter">
              Question {current + 1} <span className="muted">of {items.length}</span>
            </span>
            <span className="tag">{q.topic}</span>
          </div>
          <div className="progress" aria-hidden="true">
            <div style={{ width: `${(answered / items.length) * 100}%` }} />
          </div>
          <div className="quiz-sub muted">
            <span>{answered} answered</span>
            {instant && <span>{correctSoFar} correct so far</span>}
            <button className="link mobile-only" onClick={() => setShowNav((v) => !v)}>
              {showNav ? "Hide questions" : "All questions"}
            </button>
          </div>
          {showNav && <div className="card nav-panel mobile-only">{navigator}</div>}
        </div>

        <article className="card flash" key={item.id}>
          <h2 className="q-text">
            <Rich text={q.text} />
          </h2>

          <ol className="choices">
            {item.order.map((ci, k) => {
              const chosen = item.picked === ci;
              let cls = "choice";
              if (locked) {
                if (ci === 0) cls += " right";
                else if (chosen) cls += " wrong";
                else cls += " dim";
              } else if (chosen) cls += " picked";
              return (
                <li key={ci}>
                  <button className={cls} onClick={() => pick(k)} disabled={locked}>
                    <span className="letter">{LETTERS[k]}</span>
                    <span className="choice-text">
                      <Rich text={q.choices[ci]} />
                    </span>
                  </button>
                </li>
              );
            })}
          </ol>

          {locked && (
            <div className={`feedback ${isCorrect(item) ? "ok" : "no"}`}>
              <strong>{isCorrect(item) ? "Correct" : "Not quite"}</strong>
              {!isCorrect(item) && (
                <p>
                  The answer is <b>{LETTERS[item.order.indexOf(0)]}</b>. <Rich text={q.choices[0]} />
                </p>
              )}
              <Explanation q={q} />
            </div>
          )}
        </article>

        <div className="actions">
          <button className="btn ghost" onClick={() => go(current - 1)} disabled={current === 0}>
            Back
          </button>
          {!instant && (
            <button className={`btn ghost ${item.flagged ? "flagged" : ""}`} onClick={toggleFlag}>
              {item.flagged ? "Marked" : "Mark"}
            </button>
          )}
          <button
            className="btn primary"
            onClick={next}
            disabled={instant && item.picked === null}
          >
            {isLast ? (instant ? "See results" : "Submit") : "Next"}
          </button>
        </div>
        <p className="keys muted desktop-only">Keys: 1 to 4 or A to D to answer, arrow keys to move, Enter for next.</p>
      </div>

      <div className="mobile-only mobile-end">
        <button className="link" onClick={askFinish}>
          {instant ? "End quiz early" : "Submit answers now"}
        </button>
        <button className="link quiet" onClick={askQuit}>Quit</button>
      </div>

      <aside className="quiz-side desktop-only">
        <div className="card">
          <div className="side-head">
            <h3>Questions</h3>
            <span className="muted">{answered}/{items.length}</span>
          </div>
          {navigator}
          <div className="legend muted">
            {instant ? (
              <>
                <span><i className="dot right" /> Correct</span>
                <span><i className="dot wrong" /> Wrong</span>
              </>
            ) : (
              <>
                <span><i className="dot done" /> Answered</span>
                <span><i className="dot flag" /> Marked</span>
              </>
            )}
          </div>
          <button className="btn primary wide" onClick={askFinish}>
            {instant ? "End quiz" : "Submit answers"}
          </button>
          <button className="btn ghost wide" onClick={askQuit}>
            Quit
          </button>
        </div>
      </aside>

      {confirm && (
        <Confirm
          {...confirm}
          onNo={() => setConfirm(null)}
          onYes={() => {
            setConfirm(null);
            confirm.onYes();
          }}
        />
      )}
    </main>
  );
}
