interface BrandDividerProps {
  className?: string
  color?: string
}

export default function BrandDivider({
  className = '',
  color = '#BF9A52',
}: BrandDividerProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="flex-1 h-px opacity-40" style={{ backgroundColor: color }} />
      <span className="font-jost text-xs tracking-widest" style={{ color }}>
        •
      </span>
      <div className="flex-1 h-px opacity-40" style={{ backgroundColor: color }} />
    </div>
  )
}
