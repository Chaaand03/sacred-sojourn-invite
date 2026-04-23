export function Paisley({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 140" className={className} xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <linearGradient id="pg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="oklch(0.85 0.14 80)" />
          <stop offset="100%" stopColor="oklch(0.55 0.14 60)" />
        </linearGradient>
      </defs>
      <g fill="none" stroke="url(#pg)" strokeWidth="1">
        <path d="M50 10 C 90 30, 90 90, 50 130 C 30 110, 20 80, 30 60 C 38 42, 50 38, 50 10 Z" />
        <path d="M50 25 C 78 42, 78 88, 50 118 C 38 102, 32 80, 40 64 C 46 50, 52 48, 50 25 Z" />
        <circle cx="50" cy="60" r="6" />
        <circle cx="50" cy="60" r="2" fill="url(#pg)" />
      </g>
    </svg>
  );
}