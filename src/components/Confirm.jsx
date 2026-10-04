import { useEffect } from "react";

export default function Confirm({ title, text, action, onYes, onNo }) {
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onNo();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onNo]);

  return (
    <div className="overlay" onClick={onNo}>
      <div className="dialog card" role="dialog" aria-modal="true" onClick={(e) => e.stopPropagation()}>
        <h3>{title}</h3>
        <p className="muted">{text}</p>
        <div className="row end">
          <button className="btn ghost" onClick={onNo}>Cancel</button>
          <button className="btn primary" onClick={onYes} autoFocus>{action}</button>
        </div>
      </div>
    </div>
  );
}
