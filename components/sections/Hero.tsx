'use client'

import { motion } from 'framer-motion'
import BrandLogo from '../brand/BrandLogo'
import BrandSymbol from '../brand/BrandSymbol'
import Button from '../ui/Button'
import { fadeInUp, staggerContainer } from '@/lib/animations'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-creme overflow-hidden pt-16">
      {/* Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <BrandSymbol size={400} color="#5C2844" className="opacity-[0.04] max-w-[90vw]" />
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex flex-col items-center text-center gap-8 px-6 max-w-2xl w-full mx-auto"
      >
        {/* Logo grande */}
        <motion.div variants={fadeInUp}>
          <BrandLogo variant="light" size="lg" />
        </motion.div>

        {/* Tagline */}
        <motion.p
          variants={fadeInUp}
          className="font-jost font-light text-[0.68rem] tracking-[0.28em] uppercase text-ouro flex flex-wrap justify-center gap-x-3 gap-y-1"
        >
          <span>Tarô Terapêutico</span>
          <span className="text-ouro/40">•</span>
          <span>Autoconhecimento</span>
          <span className="text-ouro/40">•</span>
          <span>Transformação</span>
        </motion.p>

        {/* Texto descritivo */}
        <motion.p
          variants={fadeInUp}
          className="font-jost font-light text-base text-taupe leading-[1.9] max-w-[520px] w-full"
        >
          Um espaço de acolhimento para mulheres que desejam compreender seus
          ciclos, ressignificar padrões e construir uma relação mais consciente
          com a própria história.
        </motion.p>

        {/* CTA */}
        <motion.div variants={fadeInUp}>
          <Button href="/contato" variant="primary">
            ✦ Agendar uma Sessão
          </Button>
        </motion.div>
      </motion.div>

      {/* Subtle bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-creme to-transparent pointer-events-none" />
    </section>
  )
}
