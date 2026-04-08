export default function ExcavatorSVG({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 600 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Excavator body */}
      <rect x="200" y="250" width="180" height="80" fill="#003d7a" opacity="0.35" rx="8" />

      {/* Cabin */}
      <rect x="280" y="200" width="100" height="50" fill="#003d7a" opacity="0.4" rx="6" />
      <rect x="290" y="210" width="30" height="25" fill="#003d7a" opacity="0.45" />

      {/* Boom (arm) */}
      <rect
        x="360"
        y="150"
        width="200"
        height="25"
        fill="#ff8c00"
        opacity="0.4"
        rx="4"
        transform="rotate(-30 360 162)"
      />

      {/* Stick (second arm) */}
      <rect
        x="500"
        y="80"
        width="150"
        height="20"
        fill="#ff8c00"
        opacity="0.4"
        rx="4"
        transform="rotate(-60 500 90)"
      />

      {/* Bucket */}
      <path
        d="M 560 40 L 600 60 L 590 80 L 550 65 Z"
        fill="#003d7a"
        opacity="0.45"
      />

      {/* Tracks */}
      <ellipse cx="240" cy="330" rx="50" ry="25" fill="#003d7a" opacity="0.4" />
      <ellipse cx="340" cy="330" rx="50" ry="25" fill="#003d7a" opacity="0.4" />
      <rect x="190" y="320" width="200" height="20" fill="#003d7a" opacity="0.35" rx="10" />

      {/* Track wheels */}
      <circle cx="220" cy="330" r="15" fill="#ff8c00" opacity="0.35" />
      <circle cx="260" cy="330" r="15" fill="#ff8c00" opacity="0.35" />
      <circle cx="320" cy="330" r="15" fill="#ff8c00" opacity="0.35" />
      <circle cx="360" cy="330" r="15" fill="#ff8c00" opacity="0.35" />

      {/* Counterweight */}
      <rect x="180" y="230" width="40" height="40" fill="#003d7a" opacity="0.4" rx="4" />
    </svg>
  )
}
