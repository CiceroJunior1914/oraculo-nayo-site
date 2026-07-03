import type { Metadata } from 'next'
import ServiceCard from '@/components/ui/ServiceCard'
import SectionLabel from '@/components/ui/SectionLabel'
import BrandDivider from '@/components/brand/BrandDivider'
import BrandSymbol from '@/components/brand/BrandSymbol'
import { servicos } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Serviços — Oráculo da Nayô',
  description:
    'Conheça todos os serviços de tarô terapêutico e autoconhecimento oferecidos pela Nayô: sessões individuais, mentoria e assinatura mensal.',
}

export default function Servicos() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-ameixa pt-28 pb-20 px-6 overflow-hidden">
        <div className="absolute right-0 bottom-0 translate-x-1/3 translate-y-1/3 pointer-events-none select-none">
          <BrandSymbol
            size={360}
            color="#F7F1E7"
            accentColor="#BF9A52"
            className="opacity-[0.06]"
          />
        </div>
        <div className="relative max-w-3xl mx-auto text-center flex flex-col items-center gap-5">
          <SectionLabel>Serviços</SectionLabel>
          <h1 className="font-cormorant font-light text-5xl md:text-6xl text-creme tracking-wide leading-tight">
            Caminhos de Acompanhamento
          </h1>
          <BrandDivider className="w-28" color="#BF9A52" />
          <p className="font-jost font-light text-sm text-creme/70 leading-[1.9] max-w-lg">
            Cada serviço é um convite para olhar para si com mais profundidade.
            Escolha o caminho que mais ressoa com o seu momento.
          </p>
        </div>
      </section>

      {/* Cards */}
      <section className="bg-marfim py-24 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicos.map((s) => (
            <ServiceCard
              key={s.id}
              nome={s.nome}
              descricaoCard={s.descricaoCard}
              preco={s.preco}
              ctaLabel={s.ctaLabel}
              slug={s.slug}
              icone={s.icone}
              destaque={s.destaque}
              badge={s.badge}
            />
          ))}
        </div>
      </section>
    </>
  )
}
