import { useEffect, useState } from "react";
import Setup from "./components/Setup.jsx";
import Quiz from "./components/Quiz.jsx";
import Results from "./components/Results.jsx";
import Notes from "./components/Notes.jsx";
import { getSubject } from "./data/subjects.js";
import { createSession, loadSession, saveSession } from "./lib/quiz.js";

export default function App() {
  const [session, setSession] = useState(null);
  const [saved, setSaved] = useState(() => loadSession());
  const [studying, setStudying] = useState(null);

  useEffect(() => {
    if (session) saveSession(session);
  }, [session]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [session?.finishedAt, session === null, studying]);

  const start = (opts) => {
    setSaved(null);
    setStudying(null);
    setSession(createSession(opts));
  };

  const goHome = () => {
    saveSession(null);
    setSaved(null);
    setSession(null);
    setStudying(null);
  };

  const inQuiz = session && !session.finishedAt;

  return (
    <div className="app">
      <header className="topbar">
        <button className="brand" onClick={goHome} disabled={inQuiz || (!session && !studying)}>
          Reviewer
        </button>
        {session && <span className="topbar-subject muted">{getSubject(session.subject).short}</span>}
        {studying && !session && (
          <button className="link topbar-back" onClick={() => setStudying(null)}>
            Back to setup
          </button>
        )}
      </header>

      {!session && studying && <Notes subjectId={studying} onQuiz={() => setStudying(null)} />}

      {!session && !studying && (
        <Setup
          onStart={start}
          onStudy={setStudying}
          saved={saved}
          onResume={() => {
            setSession(saved);
            setSaved(null);
          }}
          onDiscard={() => {
            saveSession(null);
            setSaved(null);
          }}
        />
      )}

      {inQuiz && <Quiz session={session} setSession={setSession} onQuit={goHome} />}

      {session?.finishedAt && <Results session={session} onRetry={start} onHome={goHome} />}
    </div>
  );
}
