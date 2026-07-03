interface SectionLabelProps {
  children: string
  number?: string
  className?: string
}

export default function SectionLabel({ children, number, className = '' }: SectionLabelProps) {
  return (
    <p
      className={`font-jost font-light text-[0.68rem] tracking-[0.28em] uppercase text-ouro ${className}`}
    >
      {number && <span className="mr-3 opacity-60">{number}</span>}
      {children}
    </p>
  )
}
