import BrandSymbol from './BrandSymbol'

interface BrandLogoProps {
  variant?: 'light' | 'dark'
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

const sizes = {
  sm: { symbol: 32, title: 'text-[0.8rem]', divider: 'text-[0.55rem]', sub: 'text-[0.85rem]' },
  md: { symbol: 48, title: 'text-[1.05rem]', divider: 'text-[0.65rem]', sub: 'text-[1.1rem]' },
  lg: { symbol: 72, title: 'text-[1.5rem]', divider: 'text-[0.85rem]', sub: 'text-[1.6rem]' },
}

export default function BrandLogo({
  variant = 'light',
  size = 'md',
  className = '',
}: BrandLogoProps) {
  const isDark = variant === 'dark'
  const primaryColor = isDark ? '#F7F1E7' : '#5C2844'
  const accentColor = '#BF9A52'
  const s = sizes[size]

  return (
    <div className={`flex flex-col items-center gap-1 ${className}`}>
      <BrandSymbol
        size={s.symbol}
        color={primaryColor}
        accentColor={accentColor}
      />
      <div className="flex flex-col items-center gap-0.5">
        <span
          className={`font-jost font-extralight tracking-[0.32em] uppercase ${s.title}`}
          style={{ color: primaryColor }}
        >
          ORÁCULO
        </span>
        <span
          className={`font-jost font-light tracking-widest ${s.divider}`}
          style={{ color: accentColor }}
        >
          ——•——
        </span>
        <span
          className={`font-cormorant italic font-light ${s.sub}`}
          style={{ color: primaryColor }}
        >
          da Nayô
        </span>
      </div>
    </div>
  )
}
