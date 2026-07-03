'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import Button from '@/components/ui/Button'
import SectionLabel from '@/components/ui/SectionLabel'
import BrandDivider from '@/components/brand/BrandDivider'
import BrandSymbol from '@/components/brand/BrandSymbol'
import { fadeInUp, slideInLeft, slideInRight, staggerContainer } from '@/lib/animations'
import { basePath } from '@/lib/basePath'

export default function Sobre() {
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
            <SectionLabel>Sobre</SectionLabel>
          </motion.div>
          <motion.h1
            variants={fadeInUp}
            className="font-cormorant font-light text-5xl md:text-6xl text-creme tracking-wide leading-tight"
          >
            Sobre a Nayô
          </motion.h1>
          <motion.div variants={fadeInUp}>
            <BrandDivider className="w-28" color="#BF9A52" />
          </motion.div>
        </motion.div>
      </section>

      {/* Bio section */}
      <section className="bg-creme py-24 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative aspect-[3/4] overflow-hidden shadow-warm-md"
          >
            <Image
              src={`${basePath}/identidade-visual/nayo.jpeg`}
              alt="Nayô — Taróloga e facilitadora de autoconhecimento"
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
            <div className="absolute inset-0 bg-ameixa/5" />
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            <motion.div variants={fadeInUp}>
              <SectionLabel>Minha Essência</SectionLabel>
            </motion.div>
            <motion.h2
              variants={fadeInUp}
              className="font-cormorant font-light text-4xl text-grafite tracking-wide leading-tight"
            >
              Tarô como ferramenta de autoconhecimento
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
                O mérito da transformação sempre será de quem teve coragem de olhar
                para si, fazer escolhas diferentes e colocar os aprendizados em
                prática. Meu papel é iluminar o caminho; o seu é dar os passos.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Valores */}
      <section className="bg-marfim py-24 px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto flex flex-col gap-12 items-center text-center"
        >
          <motion.div variants={fadeInUp} className="flex flex-col items-center gap-4">
            <SectionLabel>Como trabalho</SectionLabel>
            <h2 className="font-cormorant font-light text-4xl text-grafite tracking-wide">
              Minha Abordagem
            </h2>
            <BrandDivider className="w-24" />
          </motion.div>

          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                titulo: 'Acolhimento',
                texto:
                  'Cada sessão é um espaço seguro, sem julgamentos. Você pode trazer suas questões mais profundas com tranquilidade.',
              },
              {
                titulo: 'Clareza',
                texto:
                  'O Tarô como espelho — para ver com mais nitidez o que está acontecendo dentro de você e ao seu redor.',
              },
              {
                titulo: 'Transformação',
                texto:
                  'O objetivo não é apenas compreender, mas criar movimento real. Consciência que se transforma em ação.',
              },
            ].map(({ titulo, texto }) => (
              <motion.div
                key={titulo}
                variants={fadeInUp}
                className="flex flex-col gap-4 p-8 border border-ouro/15 shadow-warm"
              >
                <span className="font-jost text-[0.62rem] tracking-[0.28em] uppercase text-ouro">
                  ✦
                </span>
                <h3 className="font-cormorant font-light text-2xl text-grafite">{titulo}</h3>
                <p className="font-jost font-light text-sm text-taupe leading-[1.9]">{texto}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="bg-creme py-20 px-6">
        <div className="max-w-xl mx-auto text-center flex flex-col items-center gap-6">
          <BrandDivider className="w-24" />
          <h2 className="font-cormorant font-light text-3xl text-grafite tracking-wide">
            Pronta para dar o primeiro passo?
          </h2>
          <Button href="/contato" variant="primary">
            ✦ Entrar em Contato
          </Button>
          <BrandDivider className="w-24" />
        </div>
      </section>
    </>
  )
}
