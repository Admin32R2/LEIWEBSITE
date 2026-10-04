import { QUESTIONS } from "../data/questions.js";

const byId = new Map(QUESTIONS.map((q) => [q.id, q]));
export const getQuestion = (id) => byId.get(id);

export function shuffle(list) {
  const a = [...list];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function poolFor(topics) {
  return QUESTIONS.filter((q) => topics.includes(q.topic));
}

// Each item keeps the order its choices were shown in.
// order[k] is the index into question.choices, so 0 is always the correct one.
export function createSession({ ids, mode }) {
  return {
    mode,
    items: shuffle(ids).map((id) => ({
      id,
      order: shuffle([0, 1, 2, 3]),
      picked: null,
      flagged: false,
    })),
    current: 0,
    startedAt: Date.now(),
    finishedAt: null,
  };
}

export const isCorrect = (item) => item.picked === 0;

export function summarize(session) {
  const total = session.items.length;
  const correct = session.items.filter(isCorrect).length;
  const skipped = session.items.filter((it) => it.picked === null).length;
  const topics = {};
  for (const it of session.items) {
    const t = getQuestion(it.id).topic;
    topics[t] ??= { total: 0, correct: 0 };
    topics[t].total++;
    if (isCorrect(it)) topics[t].correct++;
  }
  return {
    total,
    correct,
    wrong: total - correct - skipped,
    skipped,
    percent: total ? Math.round((correct / total) * 100) : 0,
    topics,
    seconds: Math.round(((session.finishedAt ?? Date.now()) - session.startedAt) / 1000),
  };
}

export function formatTime(seconds) {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return m ? `${m}m ${s}s` : `${s}s`;
}

const KEY = "ict-reviewer-session";

export function saveSession(session) {
  try {
    if (session && !session.finishedAt) localStorage.setItem(KEY, JSON.stringify(session));
    else localStorage.removeItem(KEY);
  } catch {
    // storage can be blocked, the app still works without it
  }
}

export function loadSession() {
  try {
    const s = JSON.parse(localStorage.getItem(KEY));
    if (s?.items?.length && s.items.every((it) => byId.has(it.id))) return s;
  } catch {
    // ignore broken or blocked storage
  }
  return null;
}
