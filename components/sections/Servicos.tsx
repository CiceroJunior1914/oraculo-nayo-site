'use client'

import { motion } from 'framer-motion'
import ServiceCard from '../ui/ServiceCard'
import SectionLabel from '../ui/SectionLabel'
import BrandDivider from '../brand/BrandDivider'
import { fadeInUp, staggerContainer } from '@/lib/animations'
import { servicos } from '@/lib/data'

export default function Servicos() {
  return (
    <section id="servicos" className="bg-marfim py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col items-center gap-4 mb-16 text-center"
        >
          <motion.div variants={fadeInUp}>
            <SectionLabel number="03">Serviços</SectionLabel>
          </motion.div>
          <motion.h2
            variants={fadeInUp}
            className="font-cormorant font-light text-4xl md:text-5xl text-grafite tracking-wide"
          >
            Meus Caminhos de Acompanhamento
          </motion.h2>
          <motion.div variants={fadeInUp}>
            <BrandDivider className="w-32" />
          </motion.div>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {servicos.map((servico) => (
            <motion.div key={servico.id} variants={fadeInUp}>
              <ServiceCard
                nome={servico.nome}
                descricaoCard={servico.descricaoCard}
                preco={servico.preco}
                ctaLabel={servico.ctaLabel}
                slug={servico.slug}
                icone={servico.icone}
                destaque={servico.destaque}
                badge={servico.badge}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
