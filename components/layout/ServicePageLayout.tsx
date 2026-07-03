'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'
import BrandSymbol from '../brand/BrandSymbol'
import BrandDivider from '../brand/BrandDivider'
import SectionLabel from '../ui/SectionLabel'
import ServiceCard from '../ui/ServiceCard'
import { fadeInUp, staggerContainer } from '@/lib/animations'
import { servicos } from '@/lib/data'

interface ServicePageLayoutProps {
  id: string
  nome: string
  tagline: string
  badge?: string
  sobreTexto: ReactNode
  detalhes: { label: string; value: string }[]
  paraQuemItems: string[]
  comoFunciona: string[]
  preco: string
  precoDetalhe?: string
  formSection: ReactNode
}

export default function ServicePageLayout({
  id,
  nome,
  tagline,
  badge,
  sobreTexto,
  detalhes,
  paraQuemItems,
  comoFunciona,
  preco,
  precoDetalhe,
  formSection,
}: ServicePageLayoutProps) {
  const outrosServicos = servicos.filter((s) => s.id !== id)

  return (
    <>
      {/* HERO */}
      <section className="relative bg-ameixa pt-28 pb-20 px-6 overflow-hidden">
        <div className="absolute right-0 bottom-0 translate-x-1/3 translate-y-1/3 pointer-events-none select-none">
          <BrandSymbol size={360} color="#F7F1E7" accentColor="#BF9A52" className="opacity-[0.06]" />
        </div>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="relative max-w-3xl mx-auto text-center flex flex-col items-center gap-5"
        >
          {badge && (
            <motion.span
              variants={fadeInUp}
              className="font-jost text-[0.62rem] tracking-[0.28em] uppercase text-ouro"
            >
              {badge}
            </motion.span>
          )}
          <motion.h1
            variants={fadeInUp}
            className="font-cormorant font-light text-5xl md:text-6xl text-creme tracking-wide leading-tight"
          >
            {nome}
          </motion.h1>
          <motion.div variants={fadeInUp}>
            <BrandDivider className="w-28" color="#BF9A52" />
          </motion.div>
          <motion.p
            variants={fadeInUp}
            className="font-cormorant italic text-xl text-creme/80 leading-relaxed"
          >
            &ldquo;{tagline}&rdquo;
          </motion.p>
        </motion.div>
      </section>

      {/* SOBRE */}
      <section className="bg-creme py-20 px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-3xl mx-auto flex flex-col gap-8"
        >
          <motion.div variants={fadeInUp}>
            <SectionLabel>Sobre este serviço</SectionLabel>
          </motion.div>
          <motion.div
            variants={fadeInUp}
            className="font-jost font-light text-[0.95rem] text-taupe leading-[1.9] flex flex-col gap-5"
          >
            {sobreTexto}
          </motion.div>

          {/* Detalhes */}
          <motion.div
            variants={fadeInUp}
            className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-ouro/10 border border-ouro/10 mt-4"
          >
            {detalhes.map(({ label, value }) => (
              <div key={label} className="bg-creme px-5 py-4 flex flex-col gap-1">
                <span className="font-jost text-[0.62rem] tracking-[0.22em] uppercase text-ouro/80">
                  {label}
                </span>
                <span className="font-jost font-light text-sm text-grafite">{value}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* PARA QUEM É */}
      <section className="bg-marfim py-20 px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-3xl mx-auto flex flex-col gap-8"
        >
          <motion.div variants={fadeInUp}>
            <SectionLabel>Para quem é</SectionLabel>
          </motion.div>
          <motion.h2
            variants={fadeInUp}
            className="font-cormorant font-light text-3xl text-grafite tracking-wide"
          >
            Para quem é este serviço?
          </motion.h2>
          <motion.ul variants={staggerContainer} className="flex flex-col gap-3">
            {paraQuemItems.map((item, i) => (
              <motion.li
                key={i}
                variants={fadeInUp}
                className="flex items-start gap-3 font-jost font-light text-sm text-taupe leading-relaxed"
              >
                <span className="text-ouro mt-0.5 shrink-0">✦</span>
                {item}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </section>

      {/* COMO FUNCIONA */}
      <section className="bg-creme py-20 px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-3xl mx-auto flex flex-col gap-8"
        >
          <motion.div variants={fadeInUp}>
            <SectionLabel>Como funciona</SectionLabel>
          </motion.div>
          <motion.h2
            variants={fadeInUp}
            className="font-cormorant font-light text-3xl text-grafite tracking-wide"
          >
            Como funciona?
          </motion.h2>
          <motion.ol variants={staggerContainer} className="flex flex-col gap-5">
            {comoFunciona.map((step, i) => (
              <motion.li
                key={i}
                variants={fadeInUp}
                className="flex items-start gap-5"
              >
                <span className="shrink-0 w-8 h-8 border border-ouro/40 flex items-center justify-center font-cormorant text-lg text-ouro">
                  {i + 1}
                </span>
                <p className="font-jost font-light text-sm text-taupe leading-relaxed pt-1">
                  {step}
                </p>
              </motion.li>
            ))}
          </motion.ol>
        </motion.div>
      </section>

      {/* INVESTIMENTO */}
      <section className="bg-ameixa py-20 px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-xl mx-auto text-center flex flex-col items-center gap-6"
        >
          <motion.div variants={fadeInUp}>
            <SectionLabel>Investimento</SectionLabel>
          </motion.div>
          <motion.p
            variants={fadeInUp}
            className="font-cormorant font-light text-6xl text-creme tracking-wide"
          >
            {preco}
          </motion.p>
          {precoDetalhe && (
            <motion.p
              variants={fadeInUp}
              className="font-jost font-light text-sm text-creme/60"
            >
              {precoDetalhe}
            </motion.p>
          )}
          <motion.div variants={fadeInUp}>
            <BrandDivider className="w-24" color="#BF9A52" />
          </motion.div>
        </motion.div>
      </section>

      {/* FORMULÁRIO */}
      <section className="bg-marfim py-20 px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-2xl mx-auto flex flex-col gap-8"
        >
          <motion.div variants={fadeInUp}>
            <SectionLabel>Agendar</SectionLabel>
          </motion.div>
          <motion.h2
            variants={fadeInUp}
            className="font-cormorant font-light text-3xl text-grafite tracking-wide"
          >
            Vamos começar sua jornada?
          </motion.h2>
          <motion.div variants={fadeInUp}>{formSection}</motion.div>
        </motion.div>
      </section>

      {/* OUTROS SERVIÇOS */}
      <section className="bg-creme py-20 px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-6xl mx-auto flex flex-col gap-10"
        >
          <motion.div variants={fadeInUp} className="text-center flex flex-col items-center gap-3">
            <SectionLabel>Outros serviços</SectionLabel>
            <h2 className="font-cormorant font-light text-3xl text-grafite tracking-wide">
              Outros Caminhos de Acompanhamento
            </h2>
          </motion.div>
          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6"
          >
            {outrosServicos.map((s) => (
              <motion.div key={s.id} variants={fadeInUp}>
                <ServiceCard
                  nome={s.nome}
                  descricaoCard={s.descricaoCard}
                  preco={s.preco}
                  ctaLabel={s.ctaLabel}
                  slug={s.slug}
                  icone={s.icone}
                  destaque={s.destaque}
                  badge={s.badge}
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>
    </>
  )
}
