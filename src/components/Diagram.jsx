import { useEffect, useId, useRef, useState } from "react";
import { DIAGRAMS } from "../data/diagrams.js";
import BitField from "./BitField.jsx";

// Mermaid is large, so it loads only when the first diagram is shown.
const NARROW = "(max-width: 640px)";
let mermaidPromise = null;
let configuredFor = null;

function cssVar(name) {
  return getComputedStyle(document.documentElement).getPropertyValue(name).trim();
}

async function getMermaid() {
  mermaidPromise ??= import("mermaid").then((m) => m.default);
  const mermaid = await mermaidPromise;
  const dark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const narrow = window.matchMedia(NARROW).matches;
  const key = `${dark}-${narrow}`;
  if (configuredFor !== key) {
    const surface = cssVar("--surface");
    const text = cssVar("--text");
    const line = cssVar("--line");
    const soft = cssVar("--soft");
    const accent = cssVar("--accent");
    const accentSoft = cssVar("--accent-soft");
    mermaid.initialize({
      startOnLoad: false,
      securityLevel: "strict",
      theme: "base",
      fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif",
      themeVariables: {
        darkMode: dark,
        background: surface,
        primaryColor: accentSoft,
        primaryBorderColor: accent,
        primaryTextColor: text,
        secondaryColor: soft,
        tertiaryColor: surface,
        lineColor: cssVar("--muted"),
        textColor: text,
        clusterBkg: soft,
        clusterBorder: line,
        edgeLabelBackground: surface,
        noteBkgColor: soft,
        noteBorderColor: line,
        noteTextColor: text,
        actorBkg: accentSoft,
        actorBorder: accent,
        actorTextColor: text,
        signalColor: text,
        signalTextColor: text,
        labelBoxBkgColor: soft,
        labelTextColor: text,
        fontSize: "14px",
      },
      flowchart: { htmlLabels: true, wrappingWidth: narrow ? 150 : 220 },
      sequence: { mirrorActors: false },
    });
    configuredFor = key;
  }
  return mermaid;
}

// Diagrams always fit the width of their box so the whole picture is visible.
// When that shows one at under 85% of its natural size, an Enlarge button opens it full size.
const READABLE = 0.85;

function fit(box) {
  const svg = box.querySelector("svg");
  const natural = svg?.viewBox?.baseVal?.width;
  if (!natural) return 1;
  const shown = Math.min(natural, box.clientWidth || natural);
  svg.style.maxWidth = "none";
  svg.style.width = `${Math.round(shown)}px`;
  return shown / natural;
}

// On phones a flowchart is drawn both left-to-right and top-to-bottom,
// and whichever comes out narrower is shown, so it fits without much scrolling.
async function renderFor(mermaid, id, code, narrow) {
  const m = code.match(/^(\s*)flowchart (LR|TB)/);
  if (!narrow || !m) return (await mermaid.render(id, code)).svg;
  const flipped = code.replace(/^(\s*)flowchart (LR|TB)/, `$1flowchart ${m[2] === "LR" ? "TB" : "LR"}`);
  const a = (await mermaid.render(id + "a", code)).svg;
  const b = (await mermaid.render(id + "b", flipped)).svg;
  const width = (svg) => Number(svg.match(/viewBox="[\d.-]+ [\d.-]+ ([\d.]+)/)?.[1] ?? Infinity);
  return width(b) < width(a) ? b : a;
}

export default function Diagram({ id, compact = false }) {
  const d = DIAGRAMS[id];
  const isPacket = /^\s*packet/.test(d?.code ?? "");
  const ref = useRef(null);
  const domId = "m" + useId().replace(/[^a-zA-Z0-9]/g, "");
  const [status, setStatus] = useState(isPacket ? "ready" : "loading");
  const [scheme, setScheme] = useState(() => window.matchMedia("(prefers-color-scheme: dark)").matches);
  const [narrow, setNarrow] = useState(() => window.matchMedia(NARROW).matches);
  const [small, setSmall] = useState(false);
  const [zoom, setZoom] = useState(null);
  const refit = () => ref.current && setSmall(fit(ref.current) < READABLE - 0.01);

  useEffect(() => {
    const dark = window.matchMedia("(prefers-color-scheme: dark)");
    const phoneMq = window.matchMedia(NARROW);
    const onDark = () => setScheme(dark.matches);
    const onPhone = () => setNarrow(phoneMq.matches);
    dark.addEventListener("change", onDark);
    phoneMq.addEventListener("change", onPhone);
    const ro = new ResizeObserver(refit);
    if (ref.current) ro.observe(ref.current);
    return () => {
      dark.removeEventListener("change", onDark);
      phoneMq.removeEventListener("change", onPhone);
      ro.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!d || isPacket) return;
    let alive = true;
    setStatus("loading");
    getMermaid()
      .then((mermaid) => renderFor(mermaid, domId + scheme + narrow, d.code, narrow))
      .then((svg) => {
        if (!alive || !ref.current) return;
        ref.current.innerHTML = svg;
        refit();
        setStatus("ready");
      })
      .catch(() => alive && setStatus("error"));
    return () => {
      alive = false;
    };
  }, [id, scheme, narrow]);

  if (!d) return null;

  return (
    <figure className={`diagram ${compact ? "compact" : ""}`} data-status={status}>
      <figcaption>
        <span className="diagram-title">{d.title}</span>
        <span className="diagram-source">Source: {d.source}</span>
      </figcaption>
      {isPacket ? (
        <BitField code={d.code} />
      ) : (
        <>
          {status === "loading" && <div className="diagram-wait">Drawing diagram</div>}
          {status === "error" && <pre className="diagram-code">{d.code}</pre>}
          <div className="diagram-svg" ref={ref} hidden={status !== "ready"} />
          {status === "ready" && small && (
            <button className="link enlarge" onClick={() => setZoom(ref.current.innerHTML)}>
              Enlarge diagram
            </button>
          )}
          {zoom && <Zoom title={d.title} svg={zoom} onClose={() => setZoom(null)} />}
        </>
      )}
    </figure>
  );
}

function Zoom({ title, svg, onClose }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current.querySelector("svg");
    if (el) {
      el.style.width = `${el.viewBox.baseVal.width}px`;
      el.style.maxWidth = "none";
    }
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div className="zoom" role="dialog" aria-modal="true" aria-label={title}>
      <div className="zoom-bar">
        <span className="diagram-title">{title}</span>
        <button className="btn ghost" onClick={onClose} autoFocus>
          Close
        </button>
      </div>
      <div className="zoom-body" ref={ref} dangerouslySetInnerHTML={{ __html: svg }} />
    </div>
  );
}
