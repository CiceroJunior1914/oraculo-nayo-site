'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import Button from '../ui/Button'
import BrandDivider from '../brand/BrandDivider'
import { fadeInUp, staggerContainer } from '@/lib/animations'
import { contato } from '@/lib/data'

export default function CTAFinal() {
  const whatsappUrl = `https://wa.me/${contato.whatsapp}?text=${encodeURIComponent(
    'Olá Nayô, gostaria de saber mais sobre as sessões'
  )}`

  return (
    <section className="relative px-6 overflow-hidden flex items-center justify-center" style={{ minHeight: '520px' }}>
      <Image
        src="/images/cta-background.png"
        alt=""
        fill
        className="object-cover object-right"
        aria-hidden="true"
      />

      <div className="absolute inset-0" style={{ background: 'rgba(92, 40, 68, 0.45)' }} />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative z-10 max-w-2xl mx-auto flex flex-col items-center text-center gap-8 py-16"
      >
        <motion.div variants={fadeInUp}>
          <BrandDivider className="w-24" />
        </motion.div>

        <motion.h2
          variants={fadeInUp}
          className="font-cormorant font-light text-4xl md:text-5xl text-white tracking-wide leading-tight"
        >
          Vamos Iniciar seu Processo?
        </motion.h2>

        <motion.p
          variants={fadeInUp}
          className="font-cormorant italic text-xl text-white/90 leading-relaxed"
        >
          &ldquo;Sua transformação começa no momento em que você decide olhar
          para si.&rdquo;
        </motion.p>

        <motion.div variants={fadeInUp}>
          <Button href={whatsappUrl} variant="whatsapp" external>
            <MessageCircle size={16} strokeWidth={1.5} />
            Falar no WhatsApp
          </Button>
        </motion.div>

        <motion.div variants={fadeInUp}>
          <BrandDivider className="w-24" />
        </motion.div>
      </motion.div>
    </section>
  )
}
