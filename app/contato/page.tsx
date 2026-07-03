'use client'

import { motion } from 'framer-motion'
import { Instagram, MessageCircle, Mail, ExternalLink } from 'lucide-react'
import SectionLabel from '@/components/ui/SectionLabel'
import BrandDivider from '@/components/brand/BrandDivider'
import BrandSymbol from '@/components/brand/BrandSymbol'
import FormAgendamento from '@/components/forms/FormAgendamento'
import { fadeInUp, staggerContainer } from '@/lib/animations'
import { contato } from '@/lib/data'

export default function Contato() {
  const whatsappUrl = `https://wa.me/${contato.whatsapp}?text=${encodeURIComponent(
    'Olá Nayô, gostaria de saber mais sobre as sessões'
  )}`

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
            <SectionLabel>Contato</SectionLabel>
          </motion.div>
          <motion.h1
            variants={fadeInUp}
            className="font-cormorant font-light text-5xl md:text-6xl text-creme tracking-wide leading-tight"
          >
            Vamos Conversar?
          </motion.h1>
          <motion.div variants={fadeInUp}>
            <BrandDivider className="w-28" color="#BF9A52" />
          </motion.div>
          <motion.p
            variants={fadeInUp}
            className="font-cormorant italic text-xl text-creme/70 leading-relaxed"
          >
            &ldquo;Sua transformação começa no momento em que você decide olhar para si.&rdquo;
          </motion.p>
        </motion.div>
      </section>

      {/* Contato + Formulário */}
      <section className="bg-creme py-24 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Info */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col gap-8"
          >
            <motion.div variants={fadeInUp} className="flex flex-col gap-3">
              <SectionLabel>Como falar comigo</SectionLabel>
              <h2 className="font-cormorant font-light text-3xl text-grafite tracking-wide">
                Canais de Atendimento
              </h2>
              <BrandDivider className="max-w-[100px]" />
            </motion.div>

            <motion.div variants={fadeInUp} className="flex flex-col gap-5">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 group"
              >
                <div className="w-10 h-10 border border-ouro/30 flex items-center justify-center text-ouro shrink-0 group-hover:bg-ouro group-hover:text-creme transition-all duration-300">
                  <MessageCircle size={18} strokeWidth={1.3} />
                </div>
                <div>
                  <p className="font-jost font-light text-[0.72rem] tracking-[0.2em] uppercase text-ouro mb-1">
                    WhatsApp
                  </p>
                  <p className="font-jost font-light text-sm text-taupe">
                    {/* TODO: substituir pelo valor real */}
                    Fale diretamente pelo WhatsApp
                  </p>
                </div>
              </a>

              <a
                href={contato.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 group"
              >
                <div className="w-10 h-10 border border-ouro/30 flex items-center justify-center text-ouro shrink-0 group-hover:bg-ouro group-hover:text-creme transition-all duration-300">
                  <Instagram size={18} strokeWidth={1.3} />
                </div>
                <div>
                  <p className="font-jost font-light text-[0.72rem] tracking-[0.2em] uppercase text-ouro mb-1">
                    Instagram
                  </p>
                  <p className="font-jost font-light text-sm text-taupe">{contato.instagram}</p>
                </div>
              </a>

              <a
                href={`mailto:${contato.email}`}
                className="flex items-start gap-4 group"
              >
                <div className="w-10 h-10 border border-ouro/30 flex items-center justify-center text-ouro shrink-0 group-hover:bg-ouro group-hover:text-creme transition-all duration-300">
                  <Mail size={18} strokeWidth={1.3} />
                </div>
                <div>
                  <p className="font-jost font-light text-[0.72rem] tracking-[0.2em] uppercase text-ouro mb-1">
                    E-mail
                  </p>
                  {/* TODO: substituir pelo valor real */}
                  <p className="font-jost font-light text-sm text-taupe">{contato.email}</p>
                </div>
              </a>

              <a
                href={contato.agendamento}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 group"
              >
                <div className="w-10 h-10 border border-ouro/30 flex items-center justify-center text-ouro shrink-0 group-hover:bg-ouro group-hover:text-creme transition-all duration-300">
                  <ExternalLink size={18} strokeWidth={1.3} />
                </div>
                <div>
                  <p className="font-jost font-light text-[0.72rem] tracking-[0.2em] uppercase text-ouro mb-1">
                    Agendamento
                  </p>
                  <p className="font-jost font-light text-sm text-taupe">
                    oraculodanayo.keepo.bio
                  </p>
                </div>
              </a>
            </motion.div>
          </motion.div>

          {/* Formulário */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            <motion.div variants={fadeInUp} className="flex flex-col gap-3">
              <SectionLabel>Formulário</SectionLabel>
              <h2 className="font-cormorant font-light text-3xl text-grafite tracking-wide">
                Solicitar Agendamento
              </h2>
              <p className="font-jost font-light text-sm text-taupe leading-[1.9]">
                Preencha o formulário e você será redirecionada para o WhatsApp
                com as informações já preenchidas.
              </p>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <FormAgendamento />
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
