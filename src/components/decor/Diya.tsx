export function Diya({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 120" className={className} xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <radialGradient id="flame" cx="50%" cy="60%" r="50%">
          <stop offset="0%" stopColor="#fff5d6" />
          <stop offset="40%" stopColor="#ffd166" />
          <stop offset="80%" stopColor="#ff7b00" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#ff7b00" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="flame-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ffcf66" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#ffcf66" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="bowl" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="oklch(0.65 0.15 55)" />
          <stop offset="100%" stopColor="oklch(0.38 0.12 35)" />
        </linearGradient>
        <linearGradient id="bowl-rim" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="oklch(0.5 0.13 45)" />
          <stop offset="50%" stopColor="oklch(0.85 0.14 80)" />
          <stop offset="100%" stopColor="oklch(0.5 0.13 45)" />
        </linearGradient>
      </defs>
      {/* Halo glow */}
      <circle cx="50" cy="55" r="40" fill="url(#flame-glow)" />
      {/* Flame */}
      <g className="animate-flicker" style={{ transformOrigin: "50px 78px" }}>
        <path d="M50 30 C 42 50, 42 65, 50 78 C 58 65, 58 50, 50 30 Z" fill="url(#flame)" />
        <ellipse cx="50" cy="68" rx="3" ry="8" fill="#ffe39a" opacity="0.9" />
      </g>
      {/* Wick */}
      <rect x="48" y="76" width="4" height="6" fill="oklch(0.3 0.05 30)" />
      {/* Bowl */}
      <path d="M15 82 Q 50 120, 85 82 L 80 88 Q 50 110, 20 88 Z" fill="url(#bowl)" />
      <ellipse cx="50" cy="82" rx="35" ry="6" fill="url(#bowl-rim)" />
      <ellipse cx="50" cy="82" rx="30" ry="4" fill="oklch(0.25 0.05 30)" opacity="0.6" />
    </svg>
  );
}