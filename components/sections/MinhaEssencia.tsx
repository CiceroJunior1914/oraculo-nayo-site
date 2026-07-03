'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import Button from '../ui/Button'
import SectionLabel from '../ui/SectionLabel'
import BrandDivider from '../brand/BrandDivider'
import { fadeInUp, slideInLeft, staggerContainer } from '@/lib/animations'

export default function MinhaEssencia() {
  return (
    <section className="bg-creme py-24 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Foto */}
        <motion.div
          variants={slideInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative aspect-[3/4] overflow-hidden shadow-warm-md"
        >
          <Image
            src="/identidade-visual/nayo.jpeg"
            alt="Nayô — Taróloga e facilitadora de autoconhecimento"
            fill
            className="object-cover object-top"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
          <div className="absolute inset-0 bg-ameixa/5" />
        </motion.div>

        {/* Texto */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col gap-6"
        >
          <motion.div variants={fadeInUp}>
            <SectionLabel number="02">Minha Essência</SectionLabel>
          </motion.div>

          <motion.h2
            variants={fadeInUp}
            className="font-cormorant font-light text-4xl md:text-5xl text-grafite tracking-wide leading-tight"
          >
            Minha Essência
          </motion.h2>

          <motion.div variants={fadeInUp}>
            <BrandDivider className="max-w-[120px]" />
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="flex flex-col gap-5 font-jost font-light text-[0.95rem] text-taupe leading-[1.9]"
          >
            <p>
              Meu trabalho com o Tarô não é dizer o que vai acontecer na sua
              vida, e sim te mostrar com mais clareza onde você está, quais
              padrões estão se repetindo, quais desafios precisam ser
              enfrentados e quais caminhos podem ser construídos.
            </p>
            <p className="font-cormorant italic text-lg text-ameixa leading-relaxed">
              Eu costumo dizer que o Tarô te entrega um mapa, mas quem escolhe
              caminhar é você.
            </p>
            <p>
              Já acompanhei pessoas que, ao ganharem mais consciência e coragem
              para agir, conseguiram realizar mudanças importantes em suas vidas,
              como sair de uma carreira que não fazia mais sentido e construir um
              novo caminho profissional.
            </p>
            <p>
              O mérito da transformação sempre será de quem teve coragem de
              olhar para si, fazer escolhas diferentes e colocar os aprendizados
              em prática. Meu papel é iluminar o caminho; o seu é dar os passos.
            </p>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <Button href="/sobre" variant="outline">
              ✦ Conhecer mais sobre mim
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
