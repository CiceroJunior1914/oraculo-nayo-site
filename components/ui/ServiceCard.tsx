'use client'

import { Sun, Sprout, Sparkles, TreePine } from 'lucide-react'
import Link from 'next/link'

const icons = { Sun, Sprout, Sparkles, TreePine }

interface ServiceCardProps {
  nome: string
  descricaoCard: string
  preco: string
  ctaLabel: string
  slug: string
  icone: string
  destaque?: boolean
  badge?: string | null
}

export default function ServiceCard({
  nome,
  descricaoCard,
  preco,
  ctaLabel,
  slug,
  icone,
  destaque = false,
  badge,
}: ServiceCardProps) {
  const Icon = icons[icone as keyof typeof icons] || Sun

  return (
    <div
      className={`
        group relative flex flex-col gap-5 p-8 transition-all duration-300
        ${destaque
          ? 'bg-blush/30 border border-ouro/40 shadow-warm-md'
          : 'bg-marfim border border-ouro/10 hover:border-ouro/30 shadow-warm hover:shadow-warm-md'
        }
      `}
    >
      {/* Gold top accent on hover */}
      <div
        className={`absolute top-0 left-0 right-0 h-0.5 bg-ouro transition-opacity duration-300 ${
          destaque ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
        }`}
      />

      {badge && (
        <span className="font-jost text-[0.6rem] tracking-[0.28em] uppercase text-ouro">
          {badge}
        </span>
      )}

      <div className={destaque ? 'text-ouro' : 'text-ameixa'}>
        <Icon size={28} strokeWidth={1.2} />
      </div>

      <div className="flex flex-col gap-3 flex-1">
        <h3 className="font-cormorant font-light text-xl text-grafite leading-tight">
          {nome}
        </h3>
        <p className="font-jost font-light text-sm text-taupe leading-relaxed">
          {descricaoCard}
        </p>
      </div>

      <div className="flex flex-col gap-4 pt-2 border-t border-ouro/10">
        <span className="font-jost font-medium text-sm text-ameixa">{preco}</span>
        <Link
          href={slug}
          className="font-jost text-[0.68rem] tracking-[0.2em] uppercase text-ameixa border border-ameixa px-5 py-3 text-center transition-all duration-300 hover:bg-ameixa hover:text-creme"
        >
          {ctaLabel}
        </Link>
      </div>
    </div>
  )
}
