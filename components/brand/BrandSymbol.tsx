'use client'

interface BrandSymbolProps {
  size?: number
  color?: string
  accentColor?: string
  className?: string
}

export default function BrandSymbol({
  size = 48,
  color = '#5C2844',
  accentColor = '#BF9A52',
  className = '',
}: BrandSymbolProps) {
  const cx = size / 2
  const cy = size / 2
  const r = size * 0.42
  const petalRx = size * 0.13
  const petalRy = size * 0.38

  const petals = Array.from({ length: 6 }, (_, i) => ({
    angle: i * 60,
  }))

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Outer circle */}
      <circle cx={cx} cy={cy} r={r} stroke={color} strokeWidth={size * 0.014} opacity={0.6} />

      {/* 6 petals */}
      {petals.map(({ angle }, i) => (
        <ellipse
          key={i}
          cx={cx}
          cy={cy}
          rx={petalRx}
          ry={petalRy}
          fill="none"
          stroke={color}
          strokeWidth={size * 0.016}
          transform={`rotate(${angle} ${cx} ${cy})`}
          opacity={0.85}
        />
      ))}

      {/* Center dot */}
      <circle cx={cx} cy={cy} r={size * 0.042} fill={accentColor} />
    </svg>
  )
}
