import React, { useState, useEffect } from 'react';
import { Header404 } from './components/Header404';
import { FoxScene } from './components/FoxScene';
import { MessageSection } from './components/MessageSection';
import { ControlBar } from './components/ControlBar';

export function App() {
  const [isPaused, setIsPaused] = useState(false);

  // Synchronize pause state with body class for keyframes
  useEffect(() => {
    document.body.classList.toggle('animation-paused', isPaused);
  }, [isPaused]);

  // Respect user preference for reduced motion
  useEffect(() => {
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (motionQuery.matches) {
      setIsPaused(true);
    }

    const handleChange = (e) => {
      if (e.matches) {
        setIsPaused(true);
      }
    };

    motionQuery.addEventListener('change', handleChange);
    return () => motionQuery.removeEventListener('change', handleChange);
  }, []);

  const handleTogglePause = () => {
    setIsPaused((prev) => !prev);
  };

  return (
    <>
      {/* Soft Ambient Radial Glow */}
      <div className="ambient-glow" aria-hidden="true" />

      {/* Interactive Controls Bar: Pause/Play */}
      <ControlBar
        isPaused={isPaused}
        onTogglePause={handleTogglePause}
      />

      {/* Main 404 Error Container */}
      <main className="error-container">
        {/* Large "404" & Spaced "ERROR" */}
        <Header404 />

        {/* Animated Cartoon Scene (Fox joins wires and electricity passes) */}
        <FoxScene isPaused={isPaused} />

        {/* Headings & Call to Action Button */}
        <MessageSection />
      </main>
    </>
  );
}

export default App;
