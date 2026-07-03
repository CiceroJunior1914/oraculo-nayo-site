import type { Metadata } from 'next'
import { Cormorant_Garamond, Jost } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

const jost = Jost({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500'],
  variable: '--font-jost',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Oráculo da Nayô — Tarô Terapêutico e Autoconhecimento',
  description:
    'Sessões de Tarô como ferramenta de autoconhecimento e psicologia analítica, para mulheres que buscam clareza emocional e transformação. Atendimento online.',
  keywords: [
    'tarô terapêutico',
    'autoconhecimento',
    'psicologia analítica',
    'Jung',
    'São Vicente SP',
    'online',
    'mulheres',
  ],
  openGraph: {
    title: 'Oráculo da Nayô',
    description:
      'Um espaço de acolhimento para mulheres que desejam compreender seus ciclos e ressignificar padrões.',
    // TODO: substituir pelo valor real
    url: 'https://oraculodanayo.com.br',
    siteName: 'Oráculo da Nayô',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
    locale: 'pt_BR',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${cormorant.variable} ${jost.variable}`}>
      <body className="font-jost">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
