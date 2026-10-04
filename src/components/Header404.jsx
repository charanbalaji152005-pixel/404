import React from 'react';

/**
 * Large "404" with soft ambient glow and spaced-out "ERROR" label
 */
export function Header404() {
  return (
    <header className="header-group">
      <h1 className="error-code" aria-label="404 Error">
        404
      </h1>
      <span className="error-label" aria-hidden="true">
        ERROR
      </span>
    </header>
  );
}
