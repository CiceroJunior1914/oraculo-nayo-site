import Link from 'next/link'
import { ReactNode } from 'react'

interface ButtonProps {
  variant?: 'primary' | 'outline' | 'ghost' | 'whatsapp'
  href?: string
  onClick?: () => void
  children: ReactNode
  className?: string
  external?: boolean
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
}

const variantClasses = {
  primary:
    'bg-ameixa text-creme hover:bg-ameixa-lt border border-ameixa hover:border-ameixa-lt',
  outline:
    'bg-transparent text-ameixa border border-ameixa hover:bg-ameixa hover:text-creme',
  ghost:
    'bg-transparent text-ouro border border-ouro hover:bg-ouro hover:text-grafite',
  whatsapp:
    'bg-[#25D366] text-white border border-[#25D366] hover:bg-[#1ebe5d]',
}

export default function Button({
  variant = 'primary',
  href,
  onClick,
  children,
  className = '',
  external = false,
  type = 'button',
  disabled = false,
}: ButtonProps) {
  const base = `inline-flex items-center justify-center gap-2 font-jost text-[0.72rem] tracking-[0.22em] uppercase px-8 py-4 transition-all duration-300 cursor-pointer ${variantClasses[variant]} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`

  if (href) {
    return external ? (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={base}
      >
        {children}
      </a>
    ) : (
      <Link href={href} className={base}>
        {children}
      </Link>
    )
  }

  return (
    <button type={type} onClick={onClick} className={base} disabled={disabled}>
      {children}
    </button>
  )
}
