import React from 'react';

/**
 * Message and Call To Action section
 */
export function MessageSection() {
  return (
    <>
      <section className="text-content">
        <h2 className="error-title">Looks like you're lost</h2>
        <p className="error-subtitle">The page you are looking for is not available!</p>
      </section>

      <nav aria-label="Error page actions">
        <a href="/" className="btn-home" id="btnHome">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" />
          </svg>
          <span>Back to Home</span>
        </a>
      </nav>

      <div className="interactive-hint" aria-hidden="true">
        <span className="dot"></span>
        <span>Click the fox to trigger an electric shock!</span>
      </div>
    </>
  );
}
