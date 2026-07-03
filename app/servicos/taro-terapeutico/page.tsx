import type { Metadata } from 'next'
import ServicePageLayout from '@/components/layout/ServicePageLayout'
import FormAgendamento from '@/components/forms/FormAgendamento'

export const metadata: Metadata = {
  title: 'Tarô Terapêutico — Oráculo da Nayô',
  description:
    'Uma leitura profunda voltada para compreender os padrões inconscientes, os desafios atuais e os possíveis caminhos de transformação. Atendimento individual online.',
}

export default function TaroTerapeutico() {
  return (
    <ServicePageLayout
      id="taro-terapeutico"
      nome="Tarô Terapêutico"
      tagline="Um encontro consigo mesma"
      sobreTexto={
        <>
          <p>
            Uma leitura profunda voltada para compreender os padrões inconscientes,
            os desafios atuais, as emoções envolvidas e os possíveis caminhos de
            transformação. Cada sessão é um convite para olhar além da superfície e
            compreender o que está movendo sua vida neste momento.
          </p>
          <p>
            O Tarô, como ferramenta terapêutica, não prevê o futuro — ele ilumina
            o presente. Ele mostra onde você está, quais forças estão atuando na
            sua vida e quais padrões precisam de atenção e cuidado.
          </p>
        </>
      }
      detalhes={[
        { label: 'Duração', value: 'Aprox. 1h30' },
        { label: 'Formato', value: 'Chamada de vídeo' },
        { label: 'Investimento', value: 'R$ 180,00' },
        { label: 'Pagamento', value: 'Pix' },
      ]}
      paraQuemItems={[
        'Mulheres que buscam clareza emocional e direção em um momento específico da vida.',
        'Quem está passando por uma transição e precisa de apoio para enxergar os caminhos.',
        'Quem quer compreender padrões de relacionamento que se repetem.',
        'Quem sente que está presa em ciclos de autossabotagem e quer romper com eles.',
      ]}
      comoFunciona={[
        'Preencha o formulário de agendamento abaixo.',
        'Aguarde o contato da Nayô para confirmar data e horário disponível.',
        'Receba o link da chamada de vídeo no dia agendado.',
        'Após a sessão, receba um resumo por escrito com os principais pontos (quando aplicável).',
      ]}
      preco="R$ 180,00"
      precoDetalhe="Pagamento via Pix · Valor integral no ato do agendamento"
      formSection={<FormAgendamento servicoDefault="Tarô Terapêutico (R$ 180)" />}
    />
  )
}
