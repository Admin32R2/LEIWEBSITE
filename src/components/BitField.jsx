import Rich from "./Rich.jsx";

// Renders a Mermaid `packet` block natively so bit layouts stay readable on any screen.
// The diagram source stays Mermaid code. This only parses its "start-end: label" lines.
export function parsePacket(code) {
  const fields = [];
  let title = null;
  for (const line of code.split("\n").map((l) => l.trim())) {
    const t = line.match(/^title\s+(.+)$/);
    if (t) title = t[1];
    const f = line.match(/^(\d+)(?:-(\d+))?:\s*"(.*)"$/);
    if (f) {
      const start = Number(f[1]);
      const end = f[2] === undefined ? start : Number(f[2]);
      fields.push({ start, end, bits: end - start + 1, label: f[3] });
    }
  }
  return { title, fields };
}

export default function BitField({ code }) {
  const { title, fields } = parsePacket(code);
  const total = fields.reduce((n, f) => n + f.bits, 0);

  return (
    <div className="bitfield">
      {title && (
        <p className="bitfield-title">
          <Rich text={title} />
        </p>
      )}

      <div className="bit-row" role="img" aria-label={fields.map((f) => `${f.label}, ${f.bits} bits`).join(". ")}>
        {fields.map((f) => (
          <div key={f.start} className="bit-cell" style={{ flexGrow: f.bits }}>
            <span className="bit-range">
              <span>{f.start}</span>
              {f.bits > 1 && <span>{f.end}</span>}
            </span>
            <span className="bit-label">{f.label}</span>
          </div>
        ))}
      </div>

      <ul className="bit-list">
        {fields.map((f) => (
          <li key={f.start}>
            <span className="bit-name">{f.label}</span>
            <span className="bit-meta">
              bit{f.bits > 1 ? `s ${f.start} to ${f.end}` : ` ${f.start}`}, {f.bits} {f.bits === 1 ? "bit" : "bits"}
            </span>
            <span className="bit-bar" aria-hidden="true">
              <span style={{ width: `${(f.bits / total) * 100}%` }} />
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
