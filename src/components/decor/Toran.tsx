export function Toran({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 800 120" className={className} xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" aria-hidden="true">
      <defs>
        <linearGradient id="leaf" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="oklch(0.55 0.15 145)" />
          <stop offset="100%" stopColor="oklch(0.32 0.12 140)" />
        </linearGradient>
        <radialGradient id="bell">
          <stop offset="0%" stopColor="#ffe07a" />
          <stop offset="100%" stopColor="#a16207" />
        </radialGradient>
      </defs>
      {/* String */}
      <path d="M 0 10 Q 400 60 800 10" fill="none" stroke="oklch(0.55 0.14 60)" strokeWidth="1.5" />
      {/* Mango leaves + bells along the curve */}
      {Array.from({ length: 16 }).map((_, i) => {
        const t = i / 15;
        const x = t * 800;
        const y = 10 + Math.sin(t * Math.PI) * 50;
        return (
          <g key={i} transform={`translate(${x} ${y})`}>
            <path d="M 0 0 Q -8 20, 0 38 Q 8 20, 0 0 Z" fill="url(#leaf)" />
            <circle cx="0" cy="44" r="4" fill="url(#bell)" />
            <path d="M -2 48 L 2 48 L 1 52 L -1 52 Z" fill="oklch(0.5 0.13 50)" />
          </g>
        );
      })}
    </svg>
  );
}