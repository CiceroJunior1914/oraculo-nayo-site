'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import BrandLogo from '../brand/BrandLogo'
import BrandSymbol from '../brand/BrandSymbol'

const navLinks = [
  { label: 'Início', href: '/' },
  { label: 'Sobre', href: '/sobre' },
  { label: 'Serviços', href: '/servicos' },
  { label: 'Depoimentos', href: '/depoimentos' },
  { label: 'Contato', href: '/contato' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-marfim/93 backdrop-blur-[12px] border-b border-ouro/10 shadow-warm'
          : 'bg-marfim/80 backdrop-blur-[8px]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2" aria-label="Oráculo da Nayô — Início">
          <BrandSymbol size={28} />
          <span className="font-jost font-extralight text-[0.7rem] tracking-[0.28em] uppercase text-ameixa hidden sm:block">
            Oráculo
          </span>
          <span className="font-cormorant italic text-ameixa hidden sm:block">
            da Nayô
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Navegação principal">
          {navLinks.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className="font-jost font-light text-[0.72rem] tracking-[0.18em] uppercase text-grafite hover:text-ouro transition-colors duration-200"
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-ameixa p-1"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
        >
          {open ? <X size={22} strokeWidth={1.5} /> : <Menu size={22} strokeWidth={1.5} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {open && (
        <div className="md:hidden bg-marfim/98 backdrop-blur-[12px] border-t border-ouro/10">
          <nav className="flex flex-col px-6 py-6 gap-6" aria-label="Navegação mobile">
            {navLinks.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className="font-jost font-light text-[0.8rem] tracking-[0.2em] uppercase text-grafite hover:text-ouro transition-colors duration-200"
                onClick={() => setOpen(false)}
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
