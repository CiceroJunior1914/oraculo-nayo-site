'use client'

import { motion } from 'framer-motion'
import TestimonialCard from '../ui/TestimonialCard'
import SectionLabel from '../ui/SectionLabel'
import BrandDivider from '../brand/BrandDivider'
import BrandSymbol from '../brand/BrandSymbol'
import { fadeInUp, staggerContainer } from '@/lib/animations'
import { depoimentos } from '@/lib/data'

export default function Depoimentos() {
  return (
    <section className="relative bg-ameixa py-24 px-6 overflow-hidden">
      {/* Watermark */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/3 pointer-events-none select-none">
        <BrandSymbol size={400} color="#F7F1E7" accentColor="#BF9A52" className="opacity-[0.06]" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col items-center gap-4 mb-16 text-center"
        >
          <motion.div variants={fadeInUp}>
            <SectionLabel number="04">Depoimentos</SectionLabel>
          </motion.div>
          <motion.h2
            variants={fadeInUp}
            className="font-cormorant font-light text-4xl md:text-5xl text-creme tracking-wide"
          >
            Depoimentos
          </motion.h2>
          <motion.div variants={fadeInUp}>
            <BrandDivider className="w-32" color="#BF9A52" />
          </motion.div>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
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
      </div>
    </section>
  )
}
