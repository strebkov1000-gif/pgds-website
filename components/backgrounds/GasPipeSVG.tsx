export default function GasPipeSVG({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Main vertical pipe */}
      <rect x="150" y="50" width="60" height="400" fill="#003d7a" opacity="0.35" rx="8" />
      <rect x="155" y="50" width="50" height="400" fill="#003d7a" opacity="0.25" rx="6" />

      {/* Pipe segments (rings) */}
      <rect x="145" y="80" width="70" height="8" fill="#ff8c00" opacity="0.4" rx="2" />
      <rect x="145" y="150" width="70" height="8" fill="#ff8c00" opacity="0.4" rx="2" />
      <rect x="145" y="220" width="70" height="8" fill="#ff8c00" opacity="0.4" rx="2" />
      <rect x="145" y="290" width="70" height="8" fill="#ff8c00" opacity="0.4" rx="2" />
      <rect x="145" y="360" width="70" height="8" fill="#ff8c00" opacity="0.4" rx="2" />

      {/* Horizontal branch pipe */}
      <rect x="210" y="180" width="140" height="40" fill="#003d7a" opacity="0.35" rx="6" />
      <rect x="215" y="185" width="130" height="30" fill="#003d7a" opacity="0.25" rx="4" />

      {/* Branch pipe rings */}
      <rect x="240" y="178" width="6" height="44" fill="#ff8c00" opacity="0.4" rx="1" />
      <rect x="290" y="178" width="6" height="44" fill="#ff8c00" opacity="0.4" rx="1" />

      {/* Valve on branch */}
      <circle cx="320" cy="200" r="25" fill="#ff8c00" opacity="0.4" />
      <rect x="310" y="190" width="20" height="20" fill="#003d7a" opacity="0.45" />
      <line x1="320" y1="175" x2="320" y2="195" stroke="#003d7a" strokeWidth="4" opacity="0.5" />

      {/* Flange connections */}
      <ellipse cx="180" cy="110" rx="45" ry="12" fill="#ff8c00" opacity="0.35" />
      <ellipse cx="180" cy="250" rx="45" ry="12" fill="#ff8c00" opacity="0.35" />

      {/* Support brackets */}
      <path d="M 140 130 L 120 150 L 120 160 L 140 140 Z" fill="#003d7a" opacity="0.4" />
      <path d="M 220 130 L 240 150 L 240 160 L 220 140 Z" fill="#003d7a" opacity="0.4" />
      <path d="M 140 320 L 120 340 L 120 350 L 140 330 Z" fill="#003d7a" opacity="0.4" />
      <path d="M 220 320 L 240 340 L 240 350 L 220 330 Z" fill="#003d7a" opacity="0.4" />

      {/* Gas flow indicator (subtle dots) */}
      <circle cx="180" cy="100" r="3" fill="#ff8c00" opacity="0.5" />
      <circle cx="180" cy="170" r="3" fill="#ff8c00" opacity="0.5" />
      <circle cx="180" cy="240" r="3" fill="#ff8c00" opacity="0.5" />
      <circle cx="180" cy="310" r="3" fill="#ff8c00" opacity="0.5" />
      <circle cx="180" cy="380" r="3" fill="#ff8c00" opacity="0.5" />
    </svg>
  )
}
