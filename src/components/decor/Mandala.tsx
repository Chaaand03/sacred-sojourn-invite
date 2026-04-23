export function Mandala({ className = "", size = 400 }: { className?: string; size?: number }) {
  return (
    <svg
      viewBox="0 0 200 200"
      width={size}
      height={size}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="mg" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="oklch(0.85 0.14 80)" stopOpacity="0.9" />
          <stop offset="100%" stopColor="oklch(0.55 0.14 60)" stopOpacity="0.6" />
        </radialGradient>
      </defs>
      <g fill="none" stroke="url(#mg)" strokeWidth="0.5">
        <circle cx="100" cy="100" r="90" />
        <circle cx="100" cy="100" r="75" />
        <circle cx="100" cy="100" r="55" />
        <circle cx="100" cy="100" r="35" />
        <circle cx="100" cy="100" r="18" />
        {Array.from({ length: 16 }).map((_, i) => {
          const a = (i * Math.PI * 2) / 16;
          const x1 = 100 + Math.cos(a) * 18;
          const y1 = 100 + Math.sin(a) * 18;
          const x2 = 100 + Math.cos(a) * 90;
          const y2 = 100 + Math.sin(a) * 90;
          return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} />;
        })}
        {Array.from({ length: 12 }).map((_, i) => {
          const a = (i * Math.PI * 2) / 12;
          const cx = 100 + Math.cos(a) * 65;
          const cy = 100 + Math.sin(a) * 65;
          return (
            <g key={i}>
              <ellipse cx={cx} cy={cy} rx="10" ry="5" transform={`rotate(${(a * 180) / Math.PI} ${cx} ${cy})`} />
              <circle cx={cx} cy={cy} r="2" fill="url(#mg)" />
            </g>
          );
        })}
        {Array.from({ length: 8 }).map((_, i) => {
          const a = (i * Math.PI * 2) / 8 + Math.PI / 8;
          const cx = 100 + Math.cos(a) * 45;
          const cy = 100 + Math.sin(a) * 45;
          return <circle key={i} cx={cx} cy={cy} r="4" />;
        })}
      </g>
    </svg>
  );
}