export function Marigold({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <radialGradient id="petal" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ffe07a" />
          <stop offset="60%" stopColor="#f5a524" />
          <stop offset="100%" stopColor="#b45309" />
        </radialGradient>
        <radialGradient id="center" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#fff3b0" />
          <stop offset="100%" stopColor="#c2410c" />
        </radialGradient>
      </defs>
      <g transform="translate(50 50)">
        {Array.from({ length: 12 }).map((_, i) => (
          <ellipse
            key={`o-${i}`}
            cx="0"
            cy="-30"
            rx="9"
            ry="14"
            fill="url(#petal)"
            transform={`rotate(${i * 30})`}
            opacity="0.95"
          />
        ))}
        {Array.from({ length: 10 }).map((_, i) => (
          <ellipse
            key={`m-${i}`}
            cx="0"
            cy="-20"
            rx="7"
            ry="11"
            fill="url(#petal)"
            transform={`rotate(${i * 36 + 18})`}
          />
        ))}
        {Array.from({ length: 8 }).map((_, i) => (
          <ellipse
            key={`i-${i}`}
            cx="0"
            cy="-12"
            rx="5"
            ry="8"
            fill="url(#petal)"
            transform={`rotate(${i * 45})`}
          />
        ))}
        <circle r="8" fill="url(#center)" />
        <circle r="3" fill="#7c2d12" />
      </g>
    </svg>
  );
}