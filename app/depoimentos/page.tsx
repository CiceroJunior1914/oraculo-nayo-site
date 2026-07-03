'use client'

import { motion } from 'framer-motion'
import TestimonialCard from '@/components/ui/TestimonialCard'
import SectionLabel from '@/components/ui/SectionLabel'
import BrandDivider from '@/components/brand/BrandDivider'
import BrandSymbol from '@/components/brand/BrandSymbol'
import Button from '@/components/ui/Button'
import { fadeInUp, staggerContainer } from '@/lib/animations'
import { depoimentos } from '@/lib/data'

export default function Depoimentos() {
  return (
    <>
      {/* Hero */}
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
          <motion.div variants={fadeInUp}>
            <SectionLabel>Depoimentos</SectionLabel>
          </motion.div>
          <motion.h1
            variants={fadeInUp}
            className="font-cormorant font-light text-5xl md:text-6xl text-creme tracking-wide leading-tight"
          >
            O que dizem as mulheres
          </motion.h1>
          <motion.div variants={fadeInUp}>
            <BrandDivider className="w-28" color="#BF9A52" />
          </motion.div>
          <motion.p
            variants={fadeInUp}
            className="font-cormorant italic text-xl text-creme/70 leading-relaxed"
          >
            Histórias reais de transformação e autoconhecimento
          </motion.p>
        </motion.div>
      </section>

      {/* Depoimentos Grid */}
      <section className="bg-ameixa py-20 px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {depoimentos.map((dep, i) => (
            <motion.div key={i} variants={fadeInUp}>
              <TestimonialCard
                texto={dep.texto}
                nome={dep.nome}
                idade={dep.idade}
                estrelas={dep.estrelas}
              />
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* CTA */}
      <section className="bg-creme py-20 px-6">
        <div className="max-w-xl mx-auto text-center flex flex-col items-center gap-6">
          <BrandDivider className="w-24" />
          <h2 className="font-cormorant font-light text-3xl text-grafite tracking-wide">
            Sua história também pode mudar
          </h2>
          <p className="font-jost font-light text-sm text-taupe leading-[1.9]">
            Agende sua sessão e comece a escrever um novo capítulo.
          </p>
          <Button href="/contato" variant="primary">
            ✦ Agendar uma Sessão
          </Button>
          <BrandDivider className="w-24" />
        </div>
      </section>
    </>
  )
}
