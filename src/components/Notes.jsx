import { useEffect, useState } from "react";
import Rich from "./Rich.jsx";
import Diagram from "./Diagram.jsx";
import { getSubject } from "../data/subjects.js";

export default function Notes({ subjectId, onQuiz }) {
  const subject = getSubject(subjectId);
  const [idx, setIdx] = useState(0);
  const chapter = subject.notes[idx];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [idx]);

  return (
    <main className="page notes">
      <section className="intro">
        <h1>{subject.short} study notes</h1>
        <p className="muted">{subject.name}. Every point and diagram is taken from the course lecture and laboratory files.</p>
      </section>

      <nav className="chapter-tabs" aria-label="Chapters">
        {subject.notes.map((c, i) => (
          <button key={c.topic} className={`chapter-tab ${i === idx ? "on" : ""}`} onClick={() => setIdx(i)}>
            {c.topic}
          </button>
        ))}
      </nav>

      <article className="chapter">
        <h2>{chapter.topic}</h2>
        <p className="lead">{chapter.summary}</p>

        {chapter.sections.map((sec) => (
          <section key={sec.heading} className="card note-section">
            <h3>{sec.heading}</h3>

            {sec.points && (
              <ul className="points">
                {sec.points.map((p, i) => (
                  <li key={i}>
                    <Rich text={p} />
                  </li>
                ))}
              </ul>
            )}

            {sec.formula && (
              <div className="formulas">
                {sec.formula.map((f, i) => (
                  <code key={i}>{f}</code>
                ))}
              </div>
            )}

            {sec.table && (
              <div className="table-wrap">
                <table>
                  <thead>
                    <tr>
                      {sec.table.head.map((h, i) => (
                        <th key={i}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {sec.table.rows.map((r, i) => (
                      <tr key={i}>
                        {r.map((cell, j) => (
                          <td key={j}>
                            <Rich text={cell} />
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {sec.diagrams?.map((d) => (
              <Diagram key={d} id={d} />
            ))}
          </section>
        ))}
      </article>

      <div className="notes-foot">
        <button className="btn ghost" disabled={idx === 0} onClick={() => setIdx(idx - 1)}>
          Previous chapter
        </button>
        {idx < subject.notes.length - 1 ? (
          <button className="btn primary" onClick={() => setIdx(idx + 1)}>
            Next chapter
          </button>
        ) : (
          <button className="btn primary" onClick={onQuiz}>
            Start a quiz
          </button>
        )}
      </div>
    </main>
  );
}
