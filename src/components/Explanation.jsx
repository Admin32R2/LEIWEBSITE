import { useState } from "react";
import Rich from "./Rich.jsx";
import Diagram from "./Diagram.jsx";

// Explanation paragraphs, optional worked steps, and an optional diagram.
// In long lists (results review) the diagram waits behind a button so dozens don't render at once.
export default function Explanation({ q, lazyDiagram = false }) {
  const [open, setOpen] = useState(!lazyDiagram);

  return (
    <div className="explanation">
      {q.explain.map((p, i) => (
        <p key={i} className="explain">
          <Rich text={p} />
        </p>
      ))}

      {q.steps.length > 0 && (
        <div className="steps">
          <span className="steps-title">Solution</span>
          <ol>
            {q.steps.map((s, i) => (
              <li key={i}>
                <Rich text={s} />
              </li>
            ))}
          </ol>
        </div>
      )}

      {q.diagram &&
        (open ? (
          <Diagram id={q.diagram} compact />
        ) : (
          <button className="link" onClick={() => setOpen(true)}>
            Show diagram
          </button>
        ))}
    </div>
  );
}
