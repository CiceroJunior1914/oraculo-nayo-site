import Link from 'next/link'
import { Instagram, MessageCircle, Mail } from 'lucide-react'
import BrandLogo from '../brand/BrandLogo'
import BrandSymbol from '../brand/BrandSymbol'
import { contato } from '@/lib/data'

const navLinks = [
  { label: 'Início', href: '/' },
  { label: 'Sobre', href: '/sobre' },
  { label: 'Serviços', href: '/servicos' },
  { label: 'Depoimentos', href: '/depoimentos' },
  { label: 'Contato', href: '/contato' },
]

export default function Footer() {
  return (
    <footer className="relative bg-grafite overflow-hidden">
      {/* Watermark symbol */}
      <div className="absolute right-0 bottom-0 translate-x-1/4 translate-y-1/4 pointer-events-none select-none">
        <BrandSymbol size={280} color="#BF9A52" accentColor="#BF9A52" className="opacity-[0.06]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Col 1 — Brand */}
          <div className="flex flex-col gap-4">
            <BrandLogo variant="dark" size="md" />
            <p className="font-jost font-light text-sm text-taupe leading-relaxed mt-2">
              Tarô terapêutico e autoconhecimento para mulheres que desejam
              compreender seus ciclos e ressignificar padrões.
            </p>
          </div>

          {/* Col 2 — Navigation */}
          <div className="flex flex-col gap-4">
            <h3 className="font-jost font-light text-[0.68rem] tracking-[0.28em] uppercase text-ouro">
              Navegação
            </h3>
            <nav className="flex flex-col gap-3">
              {navLinks.map(({ label, href }) => (
                <Link
                  key={href}
                  href={href}
                  className="font-jost font-light text-sm text-creme/70 hover:text-creme transition-colors duration-200"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Col 3 — Contact */}
          <div className="flex flex-col gap-4">
            <h3 className="font-jost font-light text-[0.68rem] tracking-[0.28em] uppercase text-ouro">
              Conecte-se
            </h3>
            <div className="flex flex-col gap-3">
              <a
                href={contato.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 font-jost font-light text-sm text-creme/70 hover:text-creme transition-colors duration-200"
              >
                <Instagram size={16} strokeWidth={1.3} />
                {contato.instagram}
              </a>
              <a
                href={`https://wa.me/${contato.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 font-jost font-light text-sm text-creme/70 hover:text-creme transition-colors duration-200"
              >
                <MessageCircle size={16} strokeWidth={1.3} />
                {/* TODO: substituir pelo valor real */}
                WhatsApp
              </a>
              <a
                href={`mailto:${contato.email}`}
                className="flex items-center gap-3 font-jost font-light text-sm text-creme/70 hover:text-creme transition-colors duration-200"
              >
                <Mail size={16} strokeWidth={1.3} />
                {/* TODO: substituir pelo valor real */}
                {contato.email}
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-ouro/10 mb-6" />

        {/* Copyright */}
        <p className="font-jost font-light text-xs text-taupe/60 text-center">
          © {new Date().getFullYear()} Oráculo da Nayô. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  )
}
