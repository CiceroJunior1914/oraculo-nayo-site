import { z } from 'zod'
import { contato } from './data'

export const agendamentoSchema = z.object({
  nome: z.string().min(2, 'Informe seu nome'),
  email: z.string().email('E-mail inválido'),
  whatsapp: z.string().min(10, 'Informe seu WhatsApp'),
  servico: z.string().min(1, 'Selecione um serviço'),
  disponibilidade: z.string().min(5, 'Informe sua disponibilidade'),
  mensagem: z.string().optional(),
})

export const interesseSchema = z.object({
  nome: z.string().min(2, 'Informe seu nome'),
  email: z.string().email('E-mail inválido'),
  whatsapp: z.string().min(10, 'Informe seu WhatsApp'),
  servico: z.string().min(1, 'Selecione um serviço'),
  mensagem: z.string().min(10, 'Conte um pouco sobre você'),
})

export type AgendamentoData = z.infer<typeof agendamentoSchema>
export type InteresseData = z.infer<typeof interesseSchema>

export function buildWhatsAppUrl(data: AgendamentoData | InteresseData): string {
  const isAgendamento = 'disponibilidade' in data

  const lines = [
    `*Nome:* ${data.nome}`,
    `*E-mail:* ${data.email}`,
    `*WhatsApp:* ${data.whatsapp}`,
    `*Serviço:* ${data.servico}`,
  ]

  if (isAgendamento && (data as AgendamentoData).disponibilidade) {
    lines.push(`*Disponibilidade:* ${(data as AgendamentoData).disponibilidade}`)
  }

  if (data.mensagem) {
    lines.push(`*Mensagem:* ${data.mensagem}`)
  }

  const msg = encodeURIComponent(lines.join('\n'))
  return `https://wa.me/${contato.whatsapp}?text=${msg}`
}
