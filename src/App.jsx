import { useEffect, useState } from "react";
import Setup from "./components/Setup.jsx";
import Quiz from "./components/Quiz.jsx";
import Results from "./components/Results.jsx";
import { createSession, loadSession, saveSession } from "./lib/quiz.js";

export default function App() {
  const [session, setSession] = useState(null);
  const [saved, setSaved] = useState(() => loadSession());

  useEffect(() => {
    if (session) saveSession(session);
  }, [session]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [session?.finishedAt, session === null]);

  const start = (opts) => {
    setSaved(null);
    setSession(createSession(opts));
  };

  const goHome = () => {
    saveSession(null);
    setSaved(null);
    setSession(null);
  };

  return (
    <div className="app">
      <header className="topbar">
        <button className="brand" onClick={goHome} disabled={!session?.finishedAt}>
          ICT Reviewer
        </button>
      </header>

      {!session && (
        <Setup
          onStart={start}
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

      {session && !session.finishedAt && (
        <Quiz session={session} setSession={setSession} onQuit={goHome} />
      )}

      {session?.finishedAt && (
        <Results session={session} onRetry={start} onHome={goHome} />
      )}
    </div>
  );
}
