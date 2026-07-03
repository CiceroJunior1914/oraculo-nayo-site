interface StarRatingProps {
  count?: number
  max?: number
  color?: string
  size?: number
}

export default function StarRating({
  count = 5,
  max = 5,
  color = '#BF9A52',
  size = 14,
}: StarRatingProps) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} de ${max} estrelas`}>
      {Array.from({ length: max }, (_, i) => (
        <svg
          key={i}
          width={size}
          height={size}
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
            fill={i < count ? color : 'none'}
            stroke={color}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ))}
    </div>
  )
}
