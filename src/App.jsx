import React from 'react';
import { Header404 } from './components/Header404';
import { FoxScene } from './components/FoxScene';
import { MessageSection } from './components/MessageSection';

export function App() {
  return (
    <>
      {/* Soft Ambient Radial Glow */}
      <div className="ambient-glow" aria-hidden="true" />

      {/* Main 404 Error Container */}
      <main className="error-container">
        {/* Large "404" & Spaced "ERROR" */}
        <Header404 />

        {/* Animated Cartoon Scene (Fox joins wires, lifts up into mid-air, gets shocked with skeleton view) */}
        <FoxScene />

        {/* Headings */}
        <MessageSection />
      </main>
    </>
  );
}

export default App;

