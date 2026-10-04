import React, { useState } from 'react';

/**
 * Animated SVG Illustration Scene
 * - Fox position is FIXED sitting in the middle of the cable, holding it with its paws.
 * - Shock effect: Electric current surges through the cable and zaps the fox with high-frequency jitter,
 *   electric glow, lightning sparks, frizzed tail, and shocked facial expressions.
 * - Zero sound / audio libraries.
 */
export function FoxScene() {
  const [monitorFlashing, setMonitorFlashing] = useState(false);
  const [serverBurst, setServerBurst] = useState(false);
  const [manualShock, setManualShock] = useState(false);

  // Manual interactive click on fox triggers an instant bonus electric shock
  const handleFoxClick = () => {
    setManualShock(true);
    setTimeout(() => {
      setManualShock(false);
    }, 1200);
  };

  const handleMonitorClick = () => {
    setMonitorFlashing(true);
    setTimeout(() => {
      setMonitorFlashing(false);
    }, 400);
  };

  const handleServerClick = () => {
    setServerBurst(true);
    setTimeout(() => {
      setServerBurst(false);
    }, 500);
  };

  return (
    <div
      className="scene-wrapper"
      role="region"
      aria-label="Animated illustration of a cartoon fox sitting in a fixed position on a computer cable, receiving an electric shock"
    >
      <svg
        className="scene-svg"
        viewBox="0 0 640 380"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          {/* Soft Drop Shadow Filter for Server and Monitor */}
          <filter id="shadow-soft" x="-10%" y="-10%" width="120%" height="130%">
            <feDropShadow dx="0" dy="6" stdDeviation="6" floodColor="#1e293b" floodOpacity="0.12" />
          </filter>

          {/* Electric Cable & Shock Glow Filter */}
          <filter id="glow-electric" x="-20%" y="-40%" width="140%" height="180%">
            <feDropShadow dx="0" dy="0" stdDeviation="5" floodColor="#00f0ff" floodOpacity="0.95" />
            <feDropShadow dx="0" dy="0" stdDeviation="10" floodColor="#facc15" floodOpacity="0.8" />
          </filter>

          {/* Intense Lightning Spark Glow */}
          <filter id="glow-spark" x="-30%" y="-30%" width="160%" height="160%">
            <feDropShadow dx="0" dy="0" stdDeviation="4" floodColor="#facc15" floodOpacity="1" />
            <feDropShadow dx="0" dy="0" stdDeviation="8" floodColor="#00f0ff" floodOpacity="0.9" />
          </filter>

          {/* Monitor Screen Glow Filter */}
          <filter id="glow-screen" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy="0" stdDeviation="3" floodColor="#22d3ee" floodOpacity="0.6" />
          </filter>

          {/* Grass Gradient */}
          <linearGradient id="grassGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#4ade80" />
            <stop offset="25%" stopColor="#22c55e" />
            <stop offset="100%" stopColor="#15803d" />
          </linearGradient>

          {/* Server Purple Gradient */}
          <linearGradient id="serverGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#3d265d" />
            <stop offset="100%" stopColor="#211236" />
          </linearGradient>

          {/* Monitor Screen Dark Gradient */}
          <linearGradient id="screenGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#081424" />
            <stop offset="100%" stopColor="#0e2338" />
          </linearGradient>

          {/* Fox Coat Normal Gradient */}
          <linearGradient id="foxCoat" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#fb923c" />
            <stop offset="50%" stopColor="#f97316" />
            <stop offset="100%" stopColor="#ea580c" />
          </linearGradient>

          {/* Fox Electric Shock Flashing Gradient */}
          <linearGradient id="foxShockCoat" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#fef08a" />
            <stop offset="50%" stopColor="#38bdf8" />
            <stop offset="100%" stopColor="#f97316" />
          </linearGradient>
        </defs>

        {/* ==========================================
             1. CURVED GREEN GRASS STRIP & TUFTS
             ========================================== */}
        <g id="grassGroup" className="grass-group">
          {/* Main Curved Grass Strip with thick dark outline */}
          <path
            className="thick-stroke"
            d="M 15 315 Q 320 285 625 315 L 625 365 Q 320 360 15 365 Z"
            fill="url(#grassGrad)"
          />

          {/* Lush Highlight Curve along the grass rim */}
          <path
            d="M 28 318 Q 320 290 612 318"
            stroke="#86efac"
            strokeWidth="3.5"
            strokeLinecap="round"
            fill="none"
            opacity="0.85"
          />

          {/* Cartoon Grass Tuft Details */}
          <path className="medium-stroke" d="M 68 316 L 64 306 L 73 315 M 72 315 L 77 304 L 81 316" fill="none" />
          <path className="medium-stroke" d="M 195 306 L 191 298 L 198 306 M 198 306 L 203 296 L 207 307" fill="none" />
          <path className="medium-stroke" d="M 432 306 L 428 298 L 435 306 M 435 306 L 440 296 L 444 307" fill="none" />
          <path className="medium-stroke" d="M 575 316 L 571 306 L 579 315 M 578 315 L 583 304 L 587 316" fill="none" />

          {/* Tiny flowers on the grass */}
          <circle cx="215" cy="316" r="3" fill="#ffffff" />
          <circle cx="215" cy="316" r="1.5" fill="#facc15" />
          <circle cx="418" cy="316" r="3" fill="#ffffff" />
          <circle cx="418" cy="316" r="1.5" fill="#facc15" />
        </g>

        {/* ==========================================
             2. RETRO COMPUTER MONITOR (Left Side)
             ========================================== */}
        <g
          id="monitorGroup"
          className="monitor-group"
          style={{ cursor: 'pointer' }}
          onClick={handleMonitorClick}
          role="button"
          tabIndex={0}
          aria-label="Retro Monitor. Click to flash screen."
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') handleMonitorClick();
          }}
        >
          {/* Monitor Stand Base on the grass */}
          <path className="thick-stroke" d="M 85 310 L 145 310 L 140 298 L 90 298 Z" fill="#cbd5e1" />
          {/* Stand Neck */}
          <rect className="thick-stroke" x="108" y="276" width="14" height="23" rx="3" fill="#94a3b8" />

          {/* Main CRT Chassis with thick dark outline */}
          <rect className="thick-stroke" x="60" y="174" width="112" height="104" rx="14" fill="#f8fafc" filter="url(#shadow-soft)" />

          {/* Inner CRT Bezel Step */}
          <rect x="68" y="182" width="96" height="88" rx="10" fill="#e2e8f0" stroke="#1e293b" strokeWidth="2.5" />

          {/* Dark Screen Frame */}
          <rect className="medium-stroke" x="73" y="187" width="86" height="68" rx="7" fill="#1e293b" />

          {/* Glowing Screen Glass */}
          <rect
            className="monitor-screen"
            x="77"
            y="191"
            width="78"
            height="60"
            rx="5"
            fill={monitorFlashing ? '#164e63' : 'url(#screenGrad)'}
            style={{ transition: 'fill 0.2s ease' }}
          />

          {/* Screen CRT Glass Highlight */}
          <path d="M 79 193 L 115 193 L 79 228 Z" fill="#ffffff" opacity="0.07" />

          {/* Animated Squiggly Line Graph (Oscilloscope Heartbeat / Wave) */}
          <g filter="url(#glow-screen)">
            <path
              className="monitor-graph-line"
              d="M 80 223 L 90 223 L 95 210 L 102 236 L 108 214 L 115 228 L 122 218 L 129 224 L 152 223"
              fill="none"
              stroke="#22d3ee"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>

          {/* Monitor Bottom Controls & Details */}
          <circle cx="145" cy="265" r="3" fill="#10b981" />
          <circle cx="145" cy="265" r="1.5" fill="#a7f3d0" />
          <circle cx="131" cy="265" r="3" fill="#94a3b8" stroke="#1e293b" strokeWidth="1.5" />
          <circle cx="120" cy="265" r="3" fill="#94a3b8" stroke="#1e293b" strokeWidth="1.5" />
          <line x1="152" y1="184" x2="164" y2="184" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" />
          <line x1="152" y1="190" x2="164" y2="190" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" />
          <line x1="152" y1="196" x2="164" y2="196" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" />

          {/* Cable Connector Port on right of monitor */}
          <rect className="medium-stroke" x="170" y="258" width="10" height="12" rx="2" fill="#475569" />
        </g>

        {/* ==========================================
             3. TALL DARK-PURPLE SERVER TOWER (Right Side)
             ========================================== */}
        <g
          id="serverGroup"
          className="server-group"
          style={{ cursor: 'pointer' }}
          onClick={handleServerClick}
          role="button"
          tabIndex={0}
          aria-label="Server Tower. Click to pulse LEDs."
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') handleServerClick();
          }}
        >
          {/* Server Feet on the ground */}
          <rect className="thick-stroke" x="473" y="306" width="16" height="7" rx="2" fill="#1e293b" />
          <rect className="thick-stroke" x="541" y="306" width="16" height="7" rx="2" fill="#1e293b" />

          {/* Main Server Chassis with thick dark outline */}
          <rect className="thick-stroke" x="465" y="112" width="102" height="196" rx="12" fill="url(#serverGrad)" filter="url(#shadow-soft)" />

          {/* Top Server Bevel Roof */}
          <path className="medium-stroke" d="M 466 126 L 478 114 L 554 114 L 566 126 Z" fill="#4c3074" />

          {/* SERVER DRAWER 1 (Top Rack Unit) */}
          <rect className="medium-stroke" x="475" y="132" width="82" height="48" rx="6" fill="#3d265d" />
          <line x1="483" y1="142" x2="512" y2="142" stroke="#211236" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="483" y1="148" x2="512" y2="148" stroke="#211236" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="483" y1="154" x2="512" y2="154" stroke="#211236" strokeWidth="2.5" strokeLinecap="round" />
          <rect className="medium-stroke" x="502" y="167" width="28" height="5" rx="2.5" fill="#94a3b8" />
          <circle className="led-blink-1" cx="538" cy="144" r="3.2" fill={serverBurst ? '#ffffff' : '#10b981'} />
          <circle className="led-blink-2" cx="548" cy="144" r="3.2" fill={serverBurst ? '#ffffff' : '#38bdf8'} />
          <circle className="led-blink-3" cx="538" cy="154" r="3.2" fill={serverBurst ? '#ffffff' : '#f59e0b'} />
          <circle className="led-blink-4" cx="548" cy="154" r="3.2" fill={serverBurst ? '#ffffff' : '#a855f7'} />

          {/* SERVER DRAWER 2 (Middle Rack Unit) */}
          <rect className="medium-stroke" x="475" y="188" width="82" height="48" rx="6" fill="#3d265d" />
          <line x1="483" y1="198" x2="512" y2="198" stroke="#211236" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="483" y1="204" x2="512" y2="204" stroke="#211236" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="483" y1="210" x2="512" y2="210" stroke="#211236" strokeWidth="2.5" strokeLinecap="round" />
          <rect className="medium-stroke" x="502" y="223" width="28" height="5" rx="2.5" fill="#94a3b8" />
          <circle className="led-blink-3" cx="538" cy="200" r="3.2" fill={serverBurst ? '#ffffff' : '#38bdf8'} />
          <circle className="led-blink-1" cx="548" cy="200" r="3.2" fill={serverBurst ? '#ffffff' : '#10b981'} />
          <circle className="led-blink-4" cx="538" cy="210" r="3.2" fill={serverBurst ? '#ffffff' : '#ec4899'} />
          <circle className="led-blink-2" cx="548" cy="210" r="3.2" fill={serverBurst ? '#ffffff' : '#facc15'} />

          {/* SERVER DRAWER 3 (Bottom Rack Unit) */}
          <rect className="medium-stroke" x="475" y="244" width="82" height="52" rx="6" fill="#3d265d" />
          <line x1="483" y1="254" x2="512" y2="254" stroke="#211236" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="483" y1="260" x2="512" y2="260" stroke="#211236" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="483" y1="266" x2="512" y2="266" stroke="#211236" strokeWidth="2.5" strokeLinecap="round" />
          <rect className="medium-stroke" x="502" y="282" width="28" height="5" rx="2.5" fill="#94a3b8" />
          <circle className="led-blink-2" cx="538" cy="256" r="3.2" fill={serverBurst ? '#ffffff' : '#10b981'} />
          <circle className="led-blink-4" cx="548" cy="256" r="3.2" fill={serverBurst ? '#ffffff' : '#10b981'} />
          <circle className="led-blink-1" cx="538" cy="266" r="3.2" fill={serverBurst ? '#ffffff' : '#38bdf8'} />
          <circle className="led-blink-3" cx="548" cy="266" r="3.2" fill={serverBurst ? '#ffffff' : '#f59e0b'} />

          {/* Cable Connector Port on left of server */}
          <rect className="medium-stroke" x="455" y="258" width="10" height="12" rx="2" fill="#475569" />
        </g>

        {/* ==========================================
             4. CABLE CONNECTING MONITOR TO SERVER TOWER
             Sagging at rest, lifts taut when fox lifts up
             ========================================== */}
        <g id="cableGroup" className="cable-group">
          {/* Connector Plug Caps */}
          <rect className="medium-stroke" x="178" y="260" width="8" height="8" rx="2" fill="#64748b" />
          <rect className="medium-stroke" x="449" y="260" width="8" height="8" rx="2" fill="#64748b" />

          {/* 4A. Resting Sagging Cable Layer (On the ground) */}
          <g className="cable-sagging-layer">
            <path d="M 180 264 C 235 328, 400 328, 455 264" fill="none" stroke="#1e293b" strokeWidth="11" strokeLinecap="round" />
            <path d="M 180 264 C 235 328, 400 328, 455 264" fill="none" stroke="#475569" strokeWidth="6" strokeLinecap="round" />
            <path d="M 186 264 C 238 325, 397 325, 449 264" fill="none" stroke="#94a3b8" strokeWidth="1.8" strokeLinecap="round" opacity="0.6" />
          </g>

          {/* 4B. Lifted Taut Cable Layer (Lifts up with the fox) */}
          <g className="cable-taut-layer">
            <path d="M 180 264 C 245 200, 390 200, 455 264" fill="none" stroke="#1e293b" strokeWidth="11" strokeLinecap="round" />
            <path d="M 180 264 C 245 200, 390 200, 455 264" fill="none" stroke="#475569" strokeWidth="6" strokeLinecap="round" />
            <path d="M 186 264 C 247 202, 388 202, 449 264" fill="none" stroke="#94a3b8" strokeWidth="1.8" strokeLinecap="round" opacity="0.6" />
          </g>

          {/* 4C. Electric Blue Data Flow Energy Surge (Surges along lifted cable into fox paws) */}
          <g className={`cable-electric-pulse ${manualShock ? 'force-active' : ''}`} filter="url(#glow-electric)">
            <path d="M 180 264 C 245 200, 390 200, 455 264" fill="none" stroke="#00f0ff" strokeWidth="7" strokeLinecap="round" />
            <path d="M 180 264 C 245 200, 390 200, 455 264" fill="none" stroke="#fef08a" strokeWidth="3.5" strokeLinecap="round" />
          </g>
        </g>

        {/* ==========================================
             5. CUTE CARTOON FOX CHARACTER (FIXED POSITION)
             Fixed in the middle of the cable with electric shock effect
             ========================================== */}
        <g
          id="foxCharacter"
          className={`fox-character-fixed ${manualShock ? 'shock-manual-active' : ''}`}
          role="button"
          tabIndex={0}
          aria-label="Cute fox sitting fixed on the cable. Click to trigger an electric shock!"
          onClick={handleFoxClick}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') handleFoxClick();
          }}
        >
          {/* ELECTRIC SHOCK AURA (Flashes during shock) */}
          <g className="fox-shock-aura" filter="url(#glow-electric)">
            <ellipse cx="318" cy="265" rx="55" ry="60" fill="none" stroke="#00f0ff" strokeWidth="3" opacity="0" strokeDasharray="6 6" />
          </g>

          {/* FOX TAIL (Fluffy, curled up with white tip - frizzles during shock) */}
          <g id="foxTail" className="fox-tail-shockable">
            {/* Main Orange Tail Curve */}
            <path
              className="thick-stroke tail-path"
              d="M 292 284 C 275 292, 250 286, 244 262 C 238 238, 252 216, 268 212 C 282 208, 292 222, 288 238 C 284 252, 275 260, 286 272 Z"
              fill="url(#foxCoat)"
            />

            {/* Fluffy White Tail Tip */}
            <path
              d="M 268 212 C 282 208, 292 222, 288 238 C 280 236, 276 240, 271 236 C 267 232, 264 235, 260 230 C 255 224, 258 216, 268 212 Z"
              fill="#ffffff"
              stroke="#1e293b"
              strokeWidth="3.5"
              strokeLinejoin="round"
            />
          </g>

          {/* FOX HIND LEGS & BODY BASE */}
          <ellipse className="thick-stroke" cx="290" cy="298" rx="14" ry="11" fill="#ea580c" transform="rotate(-15 290 298)" />
          <ellipse className="thick-stroke" cx="346" cy="298" rx="14" ry="11" fill="#ea580c" transform="rotate(15 346 298)" />

          {/* FOX MAIN BODY (Plump Pear Shape) */}
          <path
            className="thick-stroke body-path"
            d="M 302 248 C 284 266, 282 304, 304 312 C 320 316, 344 316, 350 296 C 354 274, 338 250, 322 248 Z"
            fill="url(#foxCoat)"
          />

          {/* White Chest & Belly Bib */}
          <path
            d="M 312 254 C 302 270, 304 296, 318 308 C 332 300, 336 274, 326 254 Z"
            fill="#ffffff"
            stroke="#1e293b"
            strokeWidth="3"
            strokeLinejoin="round"
          />

          {/* FRONT PAWS (Fixed firmly on the cable receiving current) */}
          <g id="foxPaws" className="fox-paws">
            <ellipse className="thick-stroke" cx="308" cy="305" rx="7" ry="8" fill="#ffffff" />
            <line x1="305" y1="304" x2="305" y2="310" stroke="#1e293b" strokeWidth="2" strokeLinecap="round" />
            <line x1="309" y1="305" x2="309" y2="311" stroke="#1e293b" strokeWidth="2" strokeLinecap="round" />

            <ellipse className="thick-stroke" cx="328" cy="305" rx="7" ry="8" fill="#ffffff" />
            <line x1="326" y1="305" x2="326" y2="311" stroke="#1e293b" strokeWidth="2" strokeLinecap="round" />
            <line x1="330" y1="304" x2="330" y2="310" stroke="#1e293b" strokeWidth="2" strokeLinecap="round" />
          </g>

          {/* FOX EARS (Ears bristle / vibrate during electric shock) */}
          <g id="foxEars" className="fox-ears-shockable">
            {/* Left Ear */}
            <path className="thick-stroke ear-path" d="M 296 230 L 284 195 C 284 195, 302 198, 310 216 Z" fill="url(#foxCoat)" />
            <path d="M 287 205 L 284 195 C 284 195, 296 197, 299 203 Z" fill="#1e293b" />
            <path d="M 292 222 L 289 207 C 293 207, 301 214, 303 220 Z" fill="#fda4af" />

            {/* Right Ear */}
            <path className="thick-stroke ear-path" d="M 326 216 C 334 198, 352 195, 352 195 L 340 230 Z" fill="url(#foxCoat)" />
            <path d="M 337 203 C 340 197, 352 195, 352 195 L 349 205 Z" fill="#1e293b" />
            <path d="M 333 220 C 335 214, 343 207, 347 207 L 344 222 Z" fill="#fda4af" />
          </g>

          {/* FOX HEAD */}
          <path
            className="thick-stroke head-path"
            d="M 294 234 C 280 240, 276 254, 290 262 C 304 270, 332 270, 346 262 C 360 254, 356 240, 342 234 C 332 228, 304 228, 294 234 Z"
            fill="url(#foxCoat)"
          />

          {/* White Cheek Fur Tufts */}
          <path d="M 284 250 C 274 254, 278 260, 290 262 C 298 264, 304 256, 302 248 Z" fill="#ffffff" stroke="#1e293b" strokeWidth="2.5" strokeLinejoin="round" />
          <path d="M 352 250 C 362 254, 358 260, 346 262 C 338 264, 332 256, 334 248 Z" fill="#ffffff" stroke="#1e293b" strokeWidth="2.5" strokeLinejoin="round" />

          {/* White Snout / Muzzle Area */}
          <path d="M 306 244 C 306 238, 330 238, 330 244 C 332 256, 324 266, 318 266 C 312 266, 304 256, 306 244 Z" fill="#ffffff" stroke="#1e293b" strokeWidth="3" strokeLinejoin="round" />

          {/* Shiny Black Button Nose */}
          <ellipse cx="318" cy="246" rx="4.5" ry="3.5" fill="#0f172a" />
          <ellipse cx="316.5" cy="245" rx="1.5" ry="1" fill="#ffffff" />

          {/* Normal Calm Smile Lines (Hidden during electric shock) */}
          <g className="fox-mouth-normal">
            <path
              d="M 318 249.5 L 318 255 M 318 255 C 315 258, 312 256, 311 254 M 318 255 C 321 258, 324 256, 325 254"
              stroke="#1e293b"
              strokeWidth="2"
              strokeLinecap="round"
              fill="none"
            />
          </g>

          {/* SHOCKED OPEN MOUTH (Gasping with teeth/electricity during shock) */}
          <g className="fox-mouth-shocked">
            <ellipse cx="318" cy="256" rx="4.5" ry="6" fill="#1e293b" />
            <ellipse cx="318" cy="258" rx="3" ry="3.5" fill="#fda4af" />
            {/* Small cartoon teeth */}
            <path d="M 315 252 L 321 252" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" />
          </g>

          {/* Whiskers (bristle/jitter during shock) */}
          <g className="fox-whiskers-shockable">
            <line x1="298" y1="250" x2="284" y2="248" stroke="#1e293b" strokeWidth="1.8" strokeLinecap="round" />
            <line x1="298" y1="255" x2="285" y2="258" stroke="#1e293b" strokeWidth="1.8" strokeLinecap="round" />
            <line x1="338" y1="250" x2="352" y2="248" stroke="#1e293b" strokeWidth="1.8" strokeLinecap="round" />
            <line x1="338" y1="255" x2="351" y2="258" stroke="#1e293b" strokeWidth="1.8" strokeLinecap="round" />
          </g>

          {/* Normal Cute Eyes (Idle Blink Animation) */}
          <g id="foxEyesOpen" className="fox-eyes-normal">
            <ellipse cx="306" cy="235" rx="4.5" ry="6" fill="#0f172a" />
            <circle cx="304.5" cy="233" r="2" fill="#ffffff" />
            <circle cx="307.5" cy="237" r="1" fill="#ffffff" />

            <ellipse cx="330" cy="235" rx="4.5" ry="6" fill="#0f172a" />
            <circle cx="328.5" cy="233" r="2" fill="#ffffff" />
            <circle cx="331.5" cy="237" r="1" fill="#ffffff" />
          </g>

          {/* SHOCKED WIDE-OPEN EYES (Visible only during shock surge) */}
          <g id="foxEyesShocked" className="fox-eyes-shocked">
            {/* Big startled white eyes */}
            <circle cx="305" cy="234" r="7.5" fill="#ffffff" stroke="#1e293b" strokeWidth="2.5" />
            {/* Tiny pinpoint shocked pupils */}
            <circle cx="305" cy="234" r="2.2" fill="#0f172a" />
            <circle cx="304" cy="233" r="0.8" fill="#facc15" />

            <circle cx="331" cy="234" r="7.5" fill="#ffffff" stroke="#1e293b" strokeWidth="2.5" />
            <circle cx="331" cy="234" r="2.2" fill="#0f172a" />
            <circle cx="330" cy="233" r="0.8" fill="#facc15" />
          </g>

          {/* AFTER-SHOCK DAZED / SPIRAL EYES */}
          <g id="foxEyesDazed" className="fox-eyes-dazed">
            <path d="M 301 230 L 309 238 M 309 230 L 301 238" stroke="#1e293b" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M 327 230 L 335 238 M 335 230 L 327 238" stroke="#1e293b" strokeWidth="2.5" strokeLinecap="round" />
          </g>

          {/* ==========================================
               LIGHTNING BOLTS & ELECTRIC SPARKS (Around Fox)
               ========================================== */}
          <g className="fox-shock-bolts" filter="url(#glow-spark)">
            {/* Spark 1: Left Paw & Cable */}
            <path d="M 298 312 L 303 304 L 297 301 L 304 293" fill="none" stroke="#facc15" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="miter" />
            {/* Spark 2: Right Paw & Cable */}
            <path d="M 338 312 L 333 304 L 339 301 L 332 293" fill="none" stroke="#00f0ff" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="miter" />
            {/* Spark 3: Left Ear Tip */}
            <polygon points="280,188 286,192 283,195 290,199 284,196 287,193" fill="#facc15" stroke="#ffffff" strokeWidth="1" />
            {/* Spark 4: Right Ear Tip */}
            <polygon points="356,188 350,192 353,195 346,199 352,196 349,193" fill="#00f0ff" stroke="#ffffff" strokeWidth="1" />
            {/* Spark 5: Fluffy Tail Tip */}
            <path d="M 252 208 L 246 215 L 253 218 L 244 228" fill="none" stroke="#facc15" strokeWidth="2.5" strokeLinecap="round" />
            {/* Spark 6: Belly/Body Spark */}
            <polygon points="318,280 321,286 327,288 322,292 324,298 318,294 312,298 314,292 309,288 315,286" fill="#fef08a" stroke="#00f0ff" strokeWidth="1" />
            {/* Spark 7: Cheek Zap */}
            <path d="M 276 254 L 282 258 L 278 261 L 285 265" fill="none" stroke="#00f0ff" strokeWidth="2.2" strokeLinecap="round" />
            <path d="M 360 254 L 354 258 L 358 261 L 351 265" fill="none" stroke="#facc15" strokeWidth="2.2" strokeLinecap="round" />
          </g>

          {/* ==========================================
               AFTER-SHOCK SMOKE PUFFS (Drifting up after shock)
               ========================================== */}
          <g className="fox-after-smoke" pointerEvents="none">
            <circle cx="282" cy="188" r="4" fill="#94a3b8" opacity="0.6" />
            <circle cx="280" cy="180" r="5" fill="#cbd5e1" opacity="0.5" />
            <circle cx="354" cy="188" r="4" fill="#94a3b8" opacity="0.6" />
            <circle cx="356" cy="180" r="5" fill="#cbd5e1" opacity="0.5" />
          </g>
        </g>
      </svg>
    </div>
  );
}
