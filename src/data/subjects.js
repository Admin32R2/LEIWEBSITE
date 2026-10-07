import { TOPICS as ICT_TOPICS, QUESTIONS as ICT_RAW } from "./questions.js";
import { TOPICS as CSC_TOPICS, RAW as CSC_RAW } from "./csc105/questions.js";
import { NOTES as CSC_NOTES } from "./csc105/notes.js";

// Every question is normalized to:
// { id, subject, topic, text, choices (first is correct), explain: string[], steps: string[], diagram: id | null }

export const SUBJECTS = [
  {
    id: "ict",
    name: "ICT Fundamentals",
    short: "ICT",
    topics: ICT_TOPICS,
    notes: null,
    questions: ICT_RAW.map((q) => ({
      id: `ict-${q.id}`,
      subject: "ict",
      topic: q.topic,
      text: q.text,
      choices: q.choices,
      explain: [q.explain],
      steps: [],
      diagram: null,
    })),
  },
  {
    id: "csc105",
    name: "CSC 105 Computer Architecture and Organization",
    short: "CSC 105",
    topics: CSC_TOPICS,
    notes: CSC_NOTES,
    questions: CSC_RAW.map((q, i) => ({
      id: `csc105-${i + 1}`,
      subject: "csc105",
      topic: q.t,
      text: q.q,
      choices: q.c,
      explain: [].concat(q.e),
      steps: q.s ?? [],
      diagram: q.d ?? null,
    })),
  },
];

export const getSubject = (id) => SUBJECTS.find((s) => s.id === id) ?? SUBJECTS[0];
export const ALL_QUESTIONS = SUBJECTS.flatMap((s) => s.questions);
