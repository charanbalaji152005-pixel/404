import React from 'react';

/**
 * Control bar with animation pause/play control
 */
export function ControlBar({ isPaused, onTogglePause }) {
  return (
    <aside className="control-bar" aria-label="Page controls">
      <button
        id="pauseToggle"
        className={`control-btn ${isPaused ? 'active' : ''}`}
        onClick={onTogglePause}
        title={isPaused ? 'Animation paused (click to play)' : 'Animation playing (click to pause)'}
        aria-label={isPaused ? 'Animation paused. Click to play.' : 'Animation playing. Click to pause.'}
      >
        {isPaused ? (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="5 3 19 12 5 21 5 3"></polygon>
          </svg>
        ) : (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="6" y="4" width="4" height="16"></rect>
            <rect x="14" y="4" width="4" height="16"></rect>
          </svg>
        )}
      </button>
    </aside>
  );
}
