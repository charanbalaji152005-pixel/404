import React from 'react';

/**
 * Animated SVG Cartoon Scene
 * Narrative sequence:
 * 1. Cable is severed/disconnected on the grass between monitor and server.
 * 2. Fox reaches down with its hands/paws and takes hold of both wire ends.
 * 3. Fox brings its hands together, joining the wires at the center.
 * 4. AFTER the wire is joined, the fox LIFTS UP into mid-air holding the joined wire!
 * 5. In mid-air, THE ELECTRIC SHOCK APPEARS:
 *    - Current surges through the lifted taut wire.
 *    - Fox gets electrocuted in mid-air with high-frequency tremor.
 *    - TRANSPARENT SKELETON VIEW EFFECT: The fox turns into a transparent X-ray silhouette
 *      revealing a glowing cartoon skeleton inside (skull, spine, ribs, pelvis, limb bones, tail vertebrae).
 *    - No background glowing halo effects; focus is cleanly on the transparent skeleton view.
 * 6. Fox descends back to the grass, dazed with comical spiral eyes and rising smoke puffs, then resets.
 *
 * All actions execute automatically in a continuous, seamless flow without pause buttons or click triggers.
 */
export function FoxScene() {
  return (
    <div
      className="scene-wrapper"
      role="region"
      aria-label="Animated cartoon illustration of a fox joining severed power wires with its hands, lifting up into mid-air, and getting an electric shock with a transparent cartoon skeleton X-ray effect"
    >
      <svg
        className="scene-svg"
        viewBox="0 0 640 380"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          {/* Drop Shadows */}
          <filter id="shadow-soft" x="-10%" y="-10%" width="120%" height="130%">
            <feDropShadow dx="0" dy="6" stdDeviation="6" floodColor="#1e293b" floodOpacity="0.14" />
          </filter>

          {/* Electric Cable Surge Glow */}
          <filter id="glow-electric" x="-30%" y="-50%" width="160%" height="200%">
            <feDropShadow dx="0" dy="0" stdDeviation="3" floodColor="#00f0ff" floodOpacity="1" />
            <feDropShadow dx="0" dy="0" stdDeviation="7" floodColor="#facc15" floodOpacity="0.8" />
          </filter>

          {/* Skeleton Bone Glow */}
          <filter id="glow-bone" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="0" stdDeviation="2.5" floodColor="#38bdf8" floodOpacity="1" />
            <feDropShadow dx="0" dy="0" stdDeviation="5" floodColor="#00f0ff" floodOpacity="0.85" />
          </filter>

          {/* Wire Joint Contact Flash Glow */}
          <filter id="glow-contact" x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow dx="0" dy="0" stdDeviation="5" floodColor="#ffffff" floodOpacity="1" />
            <feDropShadow dx="0" dy="0" stdDeviation="10" floodColor="#00f0ff" floodOpacity="1" />
          </filter>

          {/* Monitor Screen Glow */}
          <filter id="glow-screen" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="0" stdDeviation="4" floodColor="#22d3ee" floodOpacity="0.75" />
          </filter>

          {/* Grass Landscape Gradient */}
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

          {/* Monitor Screen Gradients */}
          <linearGradient id="screenGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#081424" />
            <stop offset="100%" stopColor="#0e2338" />
          </linearGradient>

          <linearGradient id="screenActiveGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#083344" />
            <stop offset="50%" stopColor="#0e7490" />
            <stop offset="100%" stopColor="#082f49" />
          </linearGradient>

          {/* Fox Coat Normal Gradient */}
          <linearGradient id="foxCoat" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#fb923c" />
            <stop offset="50%" stopColor="#f97316" />
            <stop offset="100%" stopColor="#ea580c" />
          </linearGradient>

          {/* Metallic Exposed Copper Wire Gradient */}
          <linearGradient id="copperGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#fde047" />
            <stop offset="50%" stopColor="#f59e0b" />
            <stop offset="100%" stopColor="#b45309" />
          </linearGradient>
        </defs>

        {/* ==========================================
             1. CURVED GREEN GRASS HILL & TUFTS
             ========================================== */}
        <g id="grassGroup" className="grass-group">
          {/* Main Curved Grass Strip */}
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

          {/* Cartoon Grass Tufts */}
          <path className="medium-stroke" d="M 68 316 L 64 306 L 73 315 M 72 315 L 77 304 L 81 316" fill="none" />
          <path className="medium-stroke" d="M 195 306 L 191 298 L 198 306 M 198 306 L 203 296 L 207 307" fill="none" />
          <path className="medium-stroke" d="M 432 306 L 428 298 L 435 306 M 435 306 L 440 296 L 444 307" fill="none" />
          <path className="medium-stroke" d="M 575 316 L 571 306 L 579 315 M 578 315 L 583 304 L 587 316" fill="none" />

          {/* Tiny flowers */}
          <circle cx="215" cy="316" r="3" fill="#ffffff" />
          <circle cx="215" cy="316" r="1.5" fill="#facc15" />
          <circle cx="418" cy="316" r="3" fill="#ffffff" />
          <circle cx="418" cy="316" r="1.5" fill="#facc15" />
        </g>

        {/* ==========================================
             2. RETRO COMPUTER MONITOR (Left Side)
             ========================================== */}
        <g id="monitorGroup" className="monitor-group">
          {/* Monitor Stand Base */}
          <path className="thick-stroke" d="M 85 310 L 145 310 L 140 298 L 90 298 Z" fill="#cbd5e1" />
          <rect className="thick-stroke" x="108" y="276" width="14" height="23" rx="3" fill="#94a3b8" />

          {/* CRT Chassis */}
          <rect className="thick-stroke" x="60" y="174" width="112" height="104" rx="14" fill="#f8fafc" filter="url(#shadow-soft)" />

          {/* CRT Bezel */}
          <rect x="68" y="182" width="96" height="88" rx="10" fill="#e2e8f0" stroke="#1e293b" strokeWidth="2.5" />

          {/* Dark Screen Frame */}
          <rect className="medium-stroke" x="73" y="187" width="86" height="68" rx="7" fill="#1e293b" />

          {/* Screen Glass */}
          <rect
            className="monitor-screen-glass"
            x="77"
            y="191"
            width="78"
            height="60"
            rx="5"
            fill="url(#screenGrad)"
          />

          {/* CRT Glare */}
          <path d="M 79 193 L 115 193 L 79 228 Z" fill="#ffffff" opacity="0.08" />

          {/* Oscilloscope Wave */}
          <g filter="url(#glow-screen)">
            <path
              className="monitor-wave-offline"
              d="M 80 223 L 102 223 L 105 220 L 109 225 L 113 223 L 152 223"
              fill="none"
              stroke="#0891b2"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              className="monitor-wave-online"
              d="M 80 223 L 88 223 L 94 204 L 100 240 L 106 208 L 114 236 L 122 210 L 130 230 L 138 223 L 152 223"
              fill="none"
              stroke="#22d3ee"
              strokeWidth="3.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>

          {/* Controls & Power LED */}
          <circle className="monitor-led" cx="145" cy="265" r="3" fill="#10b981" />
          <circle cx="145" cy="265" r="1.5" fill="#a7f3d0" />
          <circle cx="131" cy="265" r="3" fill="#94a3b8" stroke="#1e293b" strokeWidth="1.5" />
          <circle cx="120" cy="265" r="3" fill="#94a3b8" stroke="#1e293b" strokeWidth="1.5" />

          {/* Cable Port */}
          <rect className="medium-stroke" x="170" y="258" width="10" height="12" rx="2" fill="#475569" />
        </g>

        {/* ==========================================
             3. SERVER TOWER (Right Side)
             ========================================== */}
        <g id="serverGroup" className="server-group">
          <rect className="thick-stroke" x="473" y="306" width="16" height="7" rx="2" fill="#1e293b" />
          <rect className="thick-stroke" x="541" y="306" width="16" height="7" rx="2" fill="#1e293b" />

          <rect className="thick-stroke" x="465" y="112" width="102" height="196" rx="12" fill="url(#serverGrad)" filter="url(#shadow-soft)" />
          <path className="medium-stroke" d="M 466 126 L 478 114 L 554 114 L 566 126 Z" fill="#4c3074" />

          {/* Rack Drawer 1 */}
          <rect className="medium-stroke" x="475" y="132" width="82" height="48" rx="6" fill="#3d265d" />
          <line x1="483" y1="142" x2="512" y2="142" stroke="#211236" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="483" y1="148" x2="512" y2="148" stroke="#211236" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="483" y1="154" x2="512" y2="154" stroke="#211236" strokeWidth="2.5" strokeLinecap="round" />
          <rect className="medium-stroke" x="502" y="167" width="28" height="5" rx="2.5" fill="#94a3b8" />
          <circle className="led-blink-1" cx="538" cy="144" r="3.2" fill="#10b981" />
          <circle className="led-blink-2" cx="548" cy="144" r="3.2" fill="#38bdf8" />
          <circle className="led-blink-3" cx="538" cy="154" r="3.2" fill="#f59e0b" />
          <circle className="led-blink-4" cx="548" cy="154" r="3.2" fill="#a855f7" />

          {/* Rack Drawer 2 */}
          <rect className="medium-stroke" x="475" y="188" width="82" height="48" rx="6" fill="#3d265d" />
          <line x1="483" y1="198" x2="512" y2="198" stroke="#211236" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="483" y1="204" x2="512" y2="204" stroke="#211236" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="483" y1="210" x2="512" y2="210" stroke="#211236" strokeWidth="2.5" strokeLinecap="round" />
          <rect className="medium-stroke" x="502" y="223" width="28" height="5" rx="2.5" fill="#94a3b8" />
          <circle className="led-blink-3" cx="538" cy="200" r="3.2" fill="#38bdf8" />
          <circle className="led-blink-1" cx="548" cy="200" r="3.2" fill="#10b981" />
          <circle className="led-blink-4" cx="538" cy="210" r="3.2" fill="#ec4899" />
          <circle className="led-blink-2" cx="548" cy="210" r="3.2" fill="#facc15" />

          {/* Rack Drawer 3 */}
          <rect className="medium-stroke" x="475" y="244" width="82" height="52" rx="6" fill="#3d265d" />
          <line x1="483" y1="254" x2="512" y2="254" stroke="#211236" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="483" y1="260" x2="512" y2="260" stroke="#211236" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="483" y1="266" x2="512" y2="266" stroke="#211236" strokeWidth="2.5" strokeLinecap="round" />
          <rect className="medium-stroke" x="502" y="282" width="28" height="5" rx="2.5" fill="#94a3b8" />
          <circle className="led-blink-2" cx="538" cy="256" r="3.2" fill="#10b981" />
          <circle className="led-blink-4" cx="548" cy="256" r="3.2" fill="#10b981" />
          <circle className="led-blink-1" cx="538" cy="266" r="3.2" fill="#38bdf8" />
          <circle className="led-blink-3" cx="548" cy="266" r="3.2" fill="#f59e0b" />

          {/* Port */}
          <rect className="medium-stroke" x="455" y="258" width="10" height="12" rx="2" fill="#475569" />
        </g>

        {/* ==========================================
             4. DYNAMIC CABLES SYSTEM
             - Separated on ground -> Taken by fox -> Joined
             - Lifts up into mid-air with fox
             - Carries high-voltage electricity during mid-air shock
             ========================================== */}
        <g id="dynamicCablesGroup" className="cables-system">
          {/* Base connector port caps */}
          <rect className="medium-stroke" x="178" y="260" width="8" height="8" rx="2" fill="#64748b" />
          <rect className="medium-stroke" x="449" y="260" width="8" height="8" rx="2" fill="#64748b" />

          {/* 4A. LEFT WIRE (From Monitor to Fox's Left Hand) */}
          <g id="leftCablePiece" className="cable-piece-left">
            <path
              id="leftCableSheath"
              className="left-wire-path-sheath"
              d="M 178 264 C 215 320, 245 322, 276 310"
              fill="none"
              stroke="#1e293b"
              strokeWidth="11"
              strokeLinecap="round"
            >
              <animate
                attributeName="d"
                dur="7s"
                repeatCount="indefinite"
                keyTimes="0; 0.15; 0.28; 0.38; 0.46; 0.71; 0.80; 0.88; 1"
                values="
                  M 178 264 C 215 320, 245 322, 276 310;
                  M 178 264 C 215 320, 245 322, 276 310;
                  M 178 264 C 215 320, 245 322, 276 310;
                  M 178 264 C 220 288, 265 288, 314 288;
                  M 178 264 C 230 220, 275 220, 314 223;
                  M 178 264 C 230 220, 275 220, 314 223;
                  M 178 264 C 215 320, 245 322, 276 310;
                  M 178 264 C 215 320, 245 322, 276 310;
                  M 178 264 C 215 320, 245 322, 276 310
                "
              />
            </path>

            <path
              id="leftCableCore"
              className="left-wire-path-core"
              d="M 178 264 C 215 320, 245 322, 276 310"
              fill="none"
              stroke="#475569"
              strokeWidth="6"
              strokeLinecap="round"
            >
              <animate
                attributeName="d"
                dur="7s"
                repeatCount="indefinite"
                keyTimes="0; 0.15; 0.28; 0.38; 0.46; 0.71; 0.80; 0.88; 1"
                values="
                  M 178 264 C 215 320, 245 322, 276 310;
                  M 178 264 C 215 320, 245 322, 276 310;
                  M 178 264 C 215 320, 245 322, 276 310;
                  M 178 264 C 220 288, 265 288, 314 288;
                  M 178 264 C 230 220, 275 220, 314 223;
                  M 178 264 C 230 220, 275 220, 314 223;
                  M 178 264 C 215 320, 245 322, 276 310;
                  M 178 264 C 215 320, 245 322, 276 310;
                  M 178 264 C 215 320, 245 322, 276 310
                "
              />
            </path>

            <path
              id="leftCableHighlight"
              className="left-wire-path-highlight"
              d="M 184 264 C 218 317, 244 319, 272 309"
              fill="none"
              stroke="#94a3b8"
              strokeWidth="1.8"
              strokeLinecap="round"
              opacity="0.65"
            >
              <animate
                attributeName="d"
                dur="7s"
                repeatCount="indefinite"
                keyTimes="0; 0.15; 0.28; 0.38; 0.46; 0.71; 0.80; 0.88; 1"
                values="
                  M 184 264 C 218 317, 244 319, 272 309;
                  M 184 264 C 218 317, 244 319, 272 309;
                  M 184 264 C 218 317, 244 319, 272 309;
                  M 184 264 C 222 286, 263 286, 310 287;
                  M 184 264 C 232 218, 273 218, 310 222;
                  M 184 264 C 232 218, 273 218, 310 222;
                  M 184 264 C 218 317, 244 319, 272 309;
                  M 184 264 C 218 317, 244 319, 272 309;
                  M 184 264 C 218 317, 244 319, 272 309
                "
              />
            </path>

            {/* Left Cable Terminal Head & Pin */}
            <g id="leftTerminalTip" className="left-terminal-tip">
              <circle cx="276" cy="310" r="5.5" fill="#334155" stroke="#1e293b" strokeWidth="2.5">
                <animate
                  attributeName="cx"
                  dur="7s"
                  repeatCount="indefinite"
                  keyTimes="0; 0.15; 0.28; 0.38; 0.46; 0.71; 0.80; 0.88; 1"
                  values="276; 276; 276; 313; 313; 313; 276; 276; 276"
                />
                <animate
                  attributeName="cy"
                  dur="7s"
                  repeatCount="indefinite"
                  keyTimes="0; 0.15; 0.28; 0.38; 0.46; 0.71; 0.80; 0.88; 1"
                  values="310; 310; 310; 288; 223; 223; 310; 310; 310"
                />
              </circle>
              <rect x="278" y="308" width="6" height="4" rx="1.5" fill="url(#copperGrad)" stroke="#1e293b" strokeWidth="1.2">
                <animate
                  attributeName="x"
                  dur="7s"
                  repeatCount="indefinite"
                  keyTimes="0; 0.15; 0.28; 0.38; 0.46; 0.71; 0.80; 0.88; 1"
                  values="278; 278; 278; 314; 314; 314; 278; 278; 278"
                />
                <animate
                  attributeName="y"
                  dur="7s"
                  repeatCount="indefinite"
                  keyTimes="0; 0.15; 0.28; 0.38; 0.46; 0.71; 0.80; 0.88; 1"
                  values="308; 308; 308; 286; 221; 221; 308; 308; 308"
                />
              </rect>
            </g>
          </g>

          {/* 4B. RIGHT WIRE (From Server to Fox's Right Hand) */}
          <g id="rightCablePiece" className="cable-piece-right">
            <path
              id="rightCableSheath"
              className="right-wire-path-sheath"
              d="M 455 264 C 418 320, 388 322, 360 310"
              fill="none"
              stroke="#1e293b"
              strokeWidth="11"
              strokeLinecap="round"
            >
              <animate
                attributeName="d"
                dur="7s"
                repeatCount="indefinite"
                keyTimes="0; 0.15; 0.28; 0.38; 0.46; 0.71; 0.80; 0.88; 1"
                values="
                  M 455 264 C 418 320, 388 322, 360 310;
                  M 455 264 C 418 320, 388 322, 360 310;
                  M 455 264 C 418 320, 388 322, 360 310;
                  M 455 264 C 412 288, 368 288, 322 288;
                  M 455 264 C 402 220, 360 220, 322 223;
                  M 455 264 C 402 220, 360 220, 322 223;
                  M 455 264 C 418 320, 388 322, 360 310;
                  M 455 264 C 418 320, 388 322, 360 310;
                  M 455 264 C 418 320, 388 322, 360 310
                "
              />
            </path>

            <path
              id="rightCableCore"
              className="right-wire-path-core"
              d="M 455 264 C 418 320, 388 322, 360 310"
              fill="none"
              stroke="#475569"
              strokeWidth="6"
              strokeLinecap="round"
            >
              <animate
                attributeName="d"
                dur="7s"
                repeatCount="indefinite"
                keyTimes="0; 0.15; 0.28; 0.38; 0.46; 0.71; 0.80; 0.88; 1"
                values="
                  M 455 264 C 418 320, 388 322, 360 310;
                  M 455 264 C 418 320, 388 322, 360 310;
                  M 455 264 C 418 320, 388 322, 360 310;
                  M 455 264 C 412 288, 368 288, 322 288;
                  M 455 264 C 402 220, 360 220, 322 223;
                  M 455 264 C 402 220, 360 220, 322 223;
                  M 455 264 C 418 320, 388 322, 360 310;
                  M 455 264 C 418 320, 388 322, 360 310;
                  M 455 264 C 418 320, 388 322, 360 310
                "
              />
            </path>

            <path
              id="rightCableHighlight"
              className="right-wire-path-highlight"
              d="M 449 264 C 414 317, 390 319, 364 309"
              fill="none"
              stroke="#94a3b8"
              strokeWidth="1.8"
              strokeLinecap="round"
              opacity="0.65"
            >
              <animate
                attributeName="d"
                dur="7s"
                repeatCount="indefinite"
                keyTimes="0; 0.15; 0.28; 0.38; 0.46; 0.71; 0.80; 0.88; 1"
                values="
                  M 449 264 C 414 317, 390 319, 364 309;
                  M 449 264 C 414 317, 390 319, 364 309;
                  M 449 264 C 414 317, 390 319, 364 309;
                  M 449 264 C 410 286, 370 286, 326 287;
                  M 449 264 C 400 218, 362 218, 326 222;
                  M 449 264 C 400 218, 362 218, 326 222;
                  M 449 264 C 414 317, 390 319, 364 309;
                  M 449 264 C 414 317, 390 319, 364 309;
                  M 449 264 C 414 317, 390 319, 364 309
                "
              />
            </path>

            {/* Right Cable Terminal Head & Socket */}
            <g id="rightTerminalTip" className="right-terminal-tip">
              <circle cx="360" cy="310" r="5.5" fill="#334155" stroke="#1e293b" strokeWidth="2.5">
                <animate
                  attributeName="cx"
                  dur="7s"
                  repeatCount="indefinite"
                  keyTimes="0; 0.15; 0.28; 0.38; 0.46; 0.71; 0.80; 0.88; 1"
                  values="360; 360; 360; 323; 323; 323; 360; 360; 360"
                />
                <animate
                  attributeName="cy"
                  dur="7s"
                  repeatCount="indefinite"
                  keyTimes="0; 0.15; 0.28; 0.38; 0.46; 0.71; 0.80; 0.88; 1"
                  values="310; 310; 310; 288; 223; 223; 310; 310; 310"
                />
              </circle>
              <rect x="352" y="308" width="6" height="4" rx="1.5" fill="url(#copperGrad)" stroke="#1e293b" strokeWidth="1.2">
                <animate
                  attributeName="x"
                  dur="7s"
                  repeatCount="indefinite"
                  keyTimes="0; 0.15; 0.28; 0.38; 0.46; 0.71; 0.80; 0.88; 1"
                  values="352; 352; 352; 318; 318; 318; 352; 352; 352"
                />
                <animate
                  attributeName="y"
                  dur="7s"
                  repeatCount="indefinite"
                  keyTimes="0; 0.15; 0.28; 0.38; 0.46; 0.71; 0.80; 0.88; 1"
                  values="308; 308; 308; 286; 221; 221; 308; 308; 308"
                />
              </rect>
            </g>
          </g>

          {/* 4C. HIGH-VOLTAGE ELECTRIC CURRENT STREAM THROUGH LIFTED WIRE
               Active in mid-air during the shock (47% - 71%) */}
          <g id="electricSurgeLayer" className="cable-electric-flow" filter="url(#glow-electric)">
            <path
              className="electric-surge-cyan"
              d="M 178 264 C 235 210, 400 210, 455 264"
              fill="none"
              stroke="#00f0ff"
              strokeWidth="7"
              strokeLinecap="round"
            />
            <path
              className="electric-surge-yellow"
              d="M 178 264 C 235 210, 400 210, 455 264"
              fill="none"
              stroke="#fef08a"
              strokeWidth="3.5"
              strokeLinecap="round"
            />
          </g>

          {/* 4D. CONTACT FLASH SPARK AT JOINED JUNCTION IN MID-AIR (318, 223) */}
          <g id="contactSparkJoint" className="wire-contact-spark" filter="url(#glow-contact)">
            <polygon
              points="318,207 321,219 334,223 321,227 318,239 315,227 302,223 315,219"
              fill="#ffffff"
            />
            <polygon
              points="318,211 320,220 329,223 320,226 318,234 316,226 307,223 316,220"
              fill="#facc15"
            />
            <circle cx="318" cy="223" r="4.5" fill="#ffffff" />
            <circle cx="318" cy="223" r="7" fill="none" stroke="#00f0ff" strokeWidth="2.5" />
          </g>
        </g>

        {/* ==========================================
             5. CUTE CARTOON FOX CHARACTER
             - Takes wires with hands
             - Joins them together
             - LIFTS UP into mid-air
             - Electric shock appears with TRANSPARENT SKELETON X-RAY VIEW!
             ========================================== */}
        <g id="foxCharacter" className="fox-character-actor">
          
          {/* ==========================================
               5A. NORMAL FOX FUR BODY (Dims during shock)
               ========================================== */}
          <g id="foxNormalBody" className="fox-body-normal">
            {/* TAIL */}
            <g id="foxTail" className="fox-tail-actor">
              <path
                className="thick-stroke tail-path"
                d="M 292 284 C 275 292, 250 286, 244 262 C 238 238, 252 216, 268 212 C 282 208, 292 222, 288 238 C 284 252, 275 260, 286 272 Z"
                fill="url(#foxCoat)"
              />
              <path
                d="M 268 212 C 282 208, 292 222, 288 238 C 280 236, 276 240, 271 236 C 267 232, 264 235, 260 230 C 255 224, 258 216, 268 212 Z"
                fill="#ffffff"
                stroke="#1e293b"
                strokeWidth="3.5"
                strokeLinejoin="round"
              />
            </g>

            {/* HIND LEGS */}
            <ellipse className="thick-stroke" cx="290" cy="298" rx="14" ry="11" fill="#ea580c" transform="rotate(-15 290 298)" />
            <ellipse className="thick-stroke" cx="346" cy="298" rx="14" ry="11" fill="#ea580c" transform="rotate(15 346 298)" />

            {/* TORSO */}
            <path
              className="thick-stroke body-path"
              d="M 302 248 C 284 266, 282 304, 304 312 C 320 316, 344 316, 350 296 C 354 274, 338 250, 322 248 Z"
              fill="url(#foxCoat)"
            />

            {/* WHITE CHEST BIB */}
            <path
              d="M 312 254 C 302 270, 304 296, 318 308 C 332 300, 336 274, 326 254 Z"
              fill="#ffffff"
              stroke="#1e293b"
              strokeWidth="3"
              strokeLinejoin="round"
            />

            {/* HEAD */}
            <path
              className="thick-stroke head-path"
              d="M 294 234 C 280 240, 276 254, 290 262 C 304 270, 332 270, 346 262 C 360 254, 356 240, 342 234 C 332 228, 304 228, 294 234 Z"
              fill="url(#foxCoat)"
            />

            {/* CHEEK TUFTS */}
            <path d="M 284 250 C 274 254, 278 260, 290 262 C 298 264, 304 256, 302 248 Z" fill="#ffffff" stroke="#1e293b" strokeWidth="2.5" strokeLinejoin="round" />
            <path d="M 352 250 C 362 254, 358 260, 346 262 C 338 264, 332 256, 334 248 Z" fill="#ffffff" stroke="#1e293b" strokeWidth="2.5" strokeLinejoin="round" />

            {/* SNOUT & NOSE */}
            <path d="M 306 244 C 306 238, 330 238, 330 244 C 332 256, 324 266, 318 266 C 312 266, 304 256, 306 244 Z" fill="#ffffff" stroke="#1e293b" strokeWidth="3" strokeLinejoin="round" />
            <ellipse cx="318" cy="246" rx="4.5" ry="3.5" fill="#0f172a" />
            <ellipse cx="316.5" cy="245" rx="1.5" ry="1" fill="#ffffff" />

            {/* EARS */}
            <g id="foxEars" className="fox-ears-actor">
              <path className="thick-stroke ear-path" d="M 296 230 L 284 195 C 284 195, 302 198, 310 216 Z" fill="url(#foxCoat)" />
              <path d="M 287 205 L 284 195 C 284 195, 296 197, 299 203 Z" fill="#1e293b" />
              <path d="M 292 222 L 289 207 C 293 207, 301 214, 303 220 Z" fill="#fda4af" />

              <path className="thick-stroke ear-path" d="M 326 216 C 334 198, 352 195, 352 195 L 340 230 Z" fill="url(#foxCoat)" />
              <path d="M 337 203 C 340 197, 352 195, 352 195 L 349 205 Z" fill="#1e293b" />
              <path d="M 333 220 C 335 214, 343 207, 347 207 L 344 222 Z" fill="#fda4af" />
            </g>

            {/* WHISKERS */}
            <g className="fox-whiskers-actor">
              <line x1="298" y1="250" x2="284" y2="248" stroke="#1e293b" strokeWidth="1.8" strokeLinecap="round" />
              <line x1="298" y1="255" x2="285" y2="258" stroke="#1e293b" strokeWidth="1.8" strokeLinecap="round" />
              <line x1="338" y1="250" x2="352" y2="248" stroke="#1e293b" strokeWidth="1.8" strokeLinecap="round" />
              <line x1="338" y1="255" x2="351" y2="258" stroke="#1e293b" strokeWidth="1.8" strokeLinecap="round" />
            </g>

            {/* NORMAL EYES */}
            <g id="foxEyesNormal" className="fox-eyes-normal">
              <ellipse cx="306" cy="235" rx="4.5" ry="6" fill="#0f172a" />
              <circle cx="304.5" cy="233" r="2" fill="#ffffff" />
              <circle cx="307.5" cy="237" r="1" fill="#ffffff" />

              <ellipse cx="330" cy="235" rx="4.5" ry="6" fill="#0f172a" />
              <circle cx="328.5" cy="233" r="2" fill="#ffffff" />
              <circle cx="331.5" cy="237" r="1" fill="#ffffff" />
            </g>

            {/* FOCUSED EYES */}
            <g id="foxEyesFocused" className="fox-eyes-focused">
              <ellipse cx="306" cy="237" rx="4.5" ry="5.2" fill="#0f172a" />
              <circle cx="305" cy="236" r="1.8" fill="#ffffff" />
              <line x1="300" y1="229" x2="311" y2="231" stroke="#1e293b" strokeWidth="2.2" strokeLinecap="round" />

              <ellipse cx="330" cy="237" rx="4.5" ry="5.2" fill="#0f172a" />
              <circle cx="329" cy="236" r="1.8" fill="#ffffff" />
              <line x1="336" y1="229" x2="325" y2="231" stroke="#1e293b" strokeWidth="2.2" strokeLinecap="round" />
            </g>

            {/* DAZED SPIRAL EYES */}
            <g id="foxEyesDazed" className="fox-eyes-dazed">
              <path d="M 301 230 L 309 238 M 309 230 L 301 238" stroke="#1e293b" strokeWidth="2.5" strokeLinecap="round" />
              <path d="M 327 230 L 335 238 M 335 230 L 327 238" stroke="#1e293b" strokeWidth="2.5" strokeLinecap="round" />
            </g>

            {/* MOUTH NORMAL */}
            <g className="fox-mouth-normal">
              <path
                d="M 318 249.5 L 318 255 M 318 255 C 315 258, 312 256, 311 254 M 318 255 C 321 258, 324 256, 325 254"
                stroke="#1e293b"
                strokeWidth="2"
                strokeLinecap="round"
                fill="none"
              />
            </g>

            {/* ARMS & PAWS */}
            <g id="foxLeftArm" className="fox-arm-left-group">
              <path
                id="foxLeftArmLimb"
                d="M 296 268 C 294 280, 292 292, 296 300"
                fill="none"
                stroke="#1e293b"
                strokeWidth="14"
                strokeLinecap="round"
              >
                <animate
                  attributeName="d"
                  dur="7s"
                  repeatCount="indefinite"
                  keyTimes="0; 0.15; 0.28; 0.38; 0.71; 0.80; 0.88; 1"
                  values="
                    M 296 268 C 294 280, 292 292, 296 300;
                    M 296 268 C 294 280, 292 292, 296 300;
                    M 296 268 C 286 280, 278 296, 276 310;
                    M 296 268 C 300 276, 308 284, 314 288;
                    M 296 268 C 300 276, 308 284, 314 288;
                    M 296 268 C 288 278, 284 290, 288 298;
                    M 296 268 C 294 280, 292 292, 296 300;
                    M 296 268 C 294 280, 292 292, 296 300
                  "
                />
              </path>
              <path
                id="foxLeftArmFur"
                d="M 296 268 C 294 280, 292 292, 296 300"
                fill="none"
                stroke="#f97316"
                strokeWidth="8"
                strokeLinecap="round"
              >
                <animate
                  attributeName="d"
                  dur="7s"
                  repeatCount="indefinite"
                  keyTimes="0; 0.15; 0.28; 0.38; 0.71; 0.80; 0.88; 1"
                  values="
                    M 296 268 C 294 280, 292 292, 296 300;
                    M 296 268 C 294 280, 292 292, 296 300;
                    M 296 268 C 286 280, 278 296, 276 310;
                    M 296 268 C 300 276, 308 284, 314 288;
                    M 296 268 C 300 276, 308 284, 314 288;
                    M 296 268 C 288 278, 284 290, 288 298;
                    M 296 268 C 294 280, 292 292, 296 300;
                    M 296 268 C 294 280, 292 292, 296 300
                  "
                />
              </path>
              <circle cx="296" cy="300" r="7.5" fill="#ffffff" stroke="#1e293b" strokeWidth="2.5">
                <animate
                  attributeName="cx"
                  dur="7s"
                  repeatCount="indefinite"
                  keyTimes="0; 0.15; 0.28; 0.38; 0.71; 0.80; 0.88; 1"
                  values="296; 296; 276; 313; 313; 288; 296; 296"
                />
                <animate
                  attributeName="cy"
                  dur="7s"
                  repeatCount="indefinite"
                  keyTimes="0; 0.15; 0.28; 0.38; 0.71; 0.80; 0.88; 1"
                  values="300; 300; 310; 288; 288; 298; 300; 300"
                />
              </circle>
            </g>

            <g id="foxRightArm" className="fox-arm-right-group">
              <path
                id="foxRightArmLimb"
                d="M 340 268 C 342 280, 344 292, 340 300"
                fill="none"
                stroke="#1e293b"
                strokeWidth="14"
                strokeLinecap="round"
              >
                <animate
                  attributeName="d"
                  dur="7s"
                  repeatCount="indefinite"
                  keyTimes="0; 0.15; 0.28; 0.38; 0.71; 0.80; 0.88; 1"
                  values="
                    M 340 268 C 342 280, 344 292, 340 300;
                    M 340 268 C 342 280, 344 292, 340 300;
                    M 340 268 C 350 280, 358 296, 360 310;
                    M 340 268 C 336 276, 328 284, 322 288;
                    M 340 268 C 336 276, 328 284, 322 288;
                    M 340 268 C 348 278, 352 290, 348 298;
                    M 340 268 C 342 280, 344 292, 340 300;
                    M 340 268 C 342 280, 344 292, 340 300
                  "
                />
              </path>
              <path
                id="foxRightArmFur"
                d="M 340 268 C 342 280, 344 292, 340 300"
                fill="none"
                stroke="#f97316"
                strokeWidth="8"
                strokeLinecap="round"
              >
                <animate
                  attributeName="d"
                  dur="7s"
                  repeatCount="indefinite"
                  keyTimes="0; 0.15; 0.28; 0.38; 0.71; 0.80; 0.88; 1"
                  values="
                    M 340 268 C 342 280, 344 292, 340 300;
                    M 340 268 C 342 280, 344 292, 340 300;
                    M 340 268 C 350 280, 358 296, 360 310;
                    M 340 268 C 336 276, 328 284, 322 288;
                    M 340 268 C 336 276, 328 284, 322 288;
                    M 340 268 C 348 278, 352 290, 348 298;
                    M 340 268 C 342 280, 344 292, 340 300;
                    M 340 268 C 342 280, 344 292, 340 300
                  "
                />
              </path>
              <circle cx="340" cy="300" r="7.5" fill="#ffffff" stroke="#1e293b" strokeWidth="2.5">
                <animate
                  attributeName="cx"
                  dur="7s"
                  repeatCount="indefinite"
                  keyTimes="0; 0.15; 0.28; 0.38; 0.71; 0.80; 0.88; 1"
                  values="340; 340; 360; 323; 323; 348; 340; 340"
                />
                <animate
                  attributeName="cy"
                  dur="7s"
                  repeatCount="indefinite"
                  keyTimes="0; 0.15; 0.28; 0.38; 0.71; 0.80; 0.88; 1"
                  values="300; 300; 310; 288; 288; 298; 300; 300"
                />
              </circle>
            </g>
          </g>

          {/* ==========================================
               5B. TRANSPARENT SKELETON / X-RAY VIEW EFFECT
               Replaces background effect during electric shock (47% - 71%)!
               The fox body becomes translucent X-ray silhouette and the
               glowing cartoon skeleton illuminates!
               ========================================== */}
          <g id="foxSkeletonView" className="fox-skeleton-view">
            {/* Dark Translucent X-Ray Body Silhouette */}
            <path
              className="xray-body-silhouette"
              d="M 302 248 C 284 266, 282 304, 304 312 C 320 316, 344 316, 350 296 C 354 274, 338 250, 322 248 Z"
              fill="#091428"
              fillOpacity="0.82"
              stroke="#38bdf8"
              strokeWidth="2.5"
            />
            {/* X-Ray Head Silhouette */}
            <path
              className="xray-head-silhouette"
              d="M 294 234 C 280 240, 276 254, 290 262 C 304 270, 332 270, 346 262 C 360 254, 356 240, 342 234 C 332 228, 304 228, 294 234 Z"
              fill="#091428"
              fillOpacity="0.82"
              stroke="#38bdf8"
              strokeWidth="2.5"
            />
            {/* X-Ray Tail Silhouette */}
            <path
              className="xray-tail-silhouette"
              d="M 292 284 C 275 292, 250 286, 244 262 C 238 238, 252 216, 268 212 C 282 208, 292 222, 288 238 C 284 252, 275 260, 286 272 Z"
              fill="#091428"
              fillOpacity="0.82"
              stroke="#38bdf8"
              strokeWidth="2.5"
            />

            {/* --- GLOWING CARTOON BONES LAYER --- */}
            <g className="skeleton-bones" filter="url(#glow-bone)">
              {/* SKULL */}
              <ellipse cx="318" cy="242" rx="19" ry="14" fill="#f0f9ff" stroke="#38bdf8" strokeWidth="2" />
              {/* Hollow Eye Sockets */}
              <ellipse cx="308" cy="239" rx="5" ry="6" fill="#091428" stroke="#38bdf8" strokeWidth="1.5" />
              <ellipse cx="328" cy="239" rx="5" ry="6" fill="#091428" stroke="#38bdf8" strokeWidth="1.5" />
              {/* Electric shock dots inside eye sockets */}
              <circle cx="308" cy="239" r="1.5" fill="#facc15" />
              <circle cx="328" cy="239" r="1.5" fill="#facc15" />
              {/* Nasal Cavity */}
              <polygon points="318,244 316.5,248 319.5,248" fill="#091428" />
              {/* Skeleton Teeth */}
              <path
                d="M 311 251 L 313 254 L 315 251 L 317 254 L 319 251 L 321 254 L 323 251 L 325 254"
                stroke="#ffffff"
                strokeWidth="1.5"
                strokeLinecap="round"
                fill="none"
              />

              {/* EAR CARTILAGE STRUTS */}
              <line x1="302" y1="230" x2="288" y2="200" stroke="#bae6fd" strokeWidth="2.4" strokeLinecap="round" />
              <line x1="334" y1="230" x2="348" y2="200" stroke="#bae6fd" strokeWidth="2.4" strokeLinecap="round" />
              <circle cx="288" cy="200" r="2" fill="#ffffff" />
              <circle cx="348" cy="200" r="2" fill="#ffffff" />

              {/* SPINAL COLUMN */}
              <line x1="318" y1="256" x2="318" y2="295" stroke="#bae6fd" strokeWidth="3" strokeLinecap="round" />
              <rect x="314" y="258" width="8" height="3" rx="1" fill="#ffffff" />
              <rect x="314" y="265" width="8" height="3" rx="1" fill="#ffffff" />
              <rect x="314" y="272" width="8" height="3" rx="1" fill="#ffffff" />
              <rect x="314" y="279" width="8" height="3" rx="1" fill="#ffffff" />
              <rect x="314" y="286" width="8" height="3" rx="1" fill="#ffffff" />

              {/* 4 PAIRS OF RIBS */}
              <path d="M 314 265 C 304 266, 301 271, 306 275 M 322 265 C 332 266, 335 271, 330 275" stroke="#f0f9ff" strokeWidth="2.2" strokeLinecap="round" fill="none" />
              <path d="M 314 272 C 302 274, 298 279, 305 283 M 322 272 C 334 274, 338 279, 331 283" stroke="#f0f9ff" strokeWidth="2.2" strokeLinecap="round" fill="none" />
              <path d="M 314 279 C 303 281, 300 286, 307 290 M 322 279 C 333 281, 336 286, 329 290" stroke="#f0f9ff" strokeWidth="2.2" strokeLinecap="round" fill="none" />
              <path d="M 314 286 C 306 288, 304 292, 310 295 M 322 286 C 330 288, 332 292, 326 295" stroke="#f0f9ff" strokeWidth="2.2" strokeLinecap="round" fill="none" />

              {/* PELVIS / HIP BONE */}
              <path d="M 308 295 C 310 292, 326 292, 328 295 C 324 300, 312 300, 308 295 Z" fill="#bae6fd" stroke="#38bdf8" strokeWidth="1.5" />

              {/* ARM BONES (Holding the wire in center) */}
              {/* Left Arm: Clavicle -> Elbow -> Wrist -> Hand Claws */}
              <circle cx="300" cy="268" r="3" fill="#ffffff" />
              <line x1="300" y1="268" x2="305" y2="278" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" />
              <circle cx="305" cy="278" r="2.5" fill="#ffffff" />
              <line x1="305" y1="278" x2="312" y2="287" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" />
              <circle cx="312" cy="287" r="2.5" fill="#ffffff" />
              <path d="M 311 285 L 314 288 M 313 286 L 315 289" stroke="#38bdf8" strokeWidth="1.8" strokeLinecap="round" />

              {/* Right Arm: Clavicle -> Elbow -> Wrist -> Hand Claws */}
              <circle cx="336" cy="268" r="3" fill="#ffffff" />
              <line x1="336" y1="268" x2="331" y2="278" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" />
              <circle cx="331" cy="278" r="2.5" fill="#ffffff" />
              <line x1="331" y1="278" x2="324" y2="287" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" />
              <circle cx="324" cy="287" r="2.5" fill="#ffffff" />
              <path d="M 325 285 L 322 288 M 323 286 L 321 289" stroke="#38bdf8" strokeWidth="1.8" strokeLinecap="round" />

              {/* LEG BONES */}
              <path d="M 310 296 L 298 302 L 292 306" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" fill="none" />
              <circle cx="298" cy="302" r="2" fill="#ffffff" />
              <path d="M 326 296 L 338 302 L 344 306" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" fill="none" />
              <circle cx="338" cy="302" r="2" fill="#ffffff" />

              {/* TAIL VERTEBRAE (Curved beaded chain inside the tail) */}
              <path
                d="M 292 284 C 275 292, 252 284, 248 262 C 244 242, 256 222, 268 216"
                stroke="#38bdf8"
                strokeWidth="2"
                strokeDasharray="4 4"
                fill="none"
              />
              <circle cx="288" cy="286" r="3" fill="#ffffff" />
              <circle cx="276" cy="288" r="3" fill="#ffffff" />
              <circle cx="262" cy="282" r="3" fill="#ffffff" />
              <circle cx="252" cy="270" r="3" fill="#ffffff" />
              <circle cx="249" cy="254" r="3" fill="#ffffff" />
              <circle cx="254" cy="238" r="3" fill="#ffffff" />
              <circle cx="262" cy="226" r="3" fill="#ffffff" />
              <circle cx="268" cy="216" r="3" fill="#ffffff" />
            </g>
          </g>

          {/* ==========================================
               AFTER-SHOCK SMOKE PUFFS (72% - 82%)
               Drifting up from ears and wire tips
               ========================================== */}
          <g className="fox-after-smoke" pointerEvents="none">
            <circle cx="282" cy="188" r="4" fill="#94a3b8" opacity="0.6" />
            <circle cx="280" cy="180" r="5" fill="#cbd5e1" opacity="0.5" />
            <circle cx="354" cy="188" r="4" fill="#94a3b8" opacity="0.6" />
            <circle cx="356" cy="180" r="5" fill="#cbd5e1" opacity="0.5" />
            <circle cx="318" cy="285" r="4" fill="#94a3b8" opacity="0.6" />
            <circle cx="318" cy="276" r="6" fill="#cbd5e1" opacity="0.4" />
          </g>
        </g>
      </svg>
    </div>
  );
}

export default FoxScene;
