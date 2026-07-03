import type { Metadata } from 'next'
import ServicePageLayout from '@/components/layout/ServicePageLayout'
import FormInteresse from '@/components/forms/FormInteresse'

export const metadata: Metadata = {
  title: 'Oráculo da Consciência — Assinatura Mensal · Oráculo da Nayô',
  description:
    'Assinatura mensal de autoconhecimento com leituras coletivas semanais, reflexões, exercícios e comunidade de acolhimento para mulheres em qualquer etapa da jornada.',
}

export default function OraculoConsciencia() {
  return (
    <ServicePageLayout
      id="oraculo-consciencia"
      nome="Oráculo da Consciência"
      tagline="Porque sempre existe um novo passo, uma nova camada para compreender"
      badge="✦ ASSINATURA MENSAL"
      sobreTexto={
        <>
          <p>
            O Oráculo da Consciência nasceu da certeza de que, independentemente
            do momento em que você está na sua jornada, todos estamos caminhando
            em direção ao mesmo propósito: compreender a nós mesmos, evoluir e
            construir uma vida mais consciente.
          </p>
          <p>
            Cada pessoa carrega suas próprias histórias, medos, bloqueios e
            desafios. Muitas vezes, aquilo que você acredita ser um peso que só
            você carrega também é vivido por outras pessoas de formas diferentes.
            E é justamente nessa troca que percebemos que não estamos sozinhos.
          </p>
          <p>
            O Oráculo da Consciência é uma comunidade de acolhimento, reflexão e
            direcionamento, onde semanalmente você recebe uma leitura coletiva das
            energias e temas de autoconhecimento a serem trabalhados, além de
            reflexões, exercícios, conteúdos em áudio e práticas que te ajudam a
            transformar a consciência em ação.
          </p>
          <p className="font-cormorant italic text-lg text-ameixa leading-relaxed">
            Não importa se você está começando a olhar para si agora ou se já
            percorreu uma longa caminhada de autoconhecimento: sempre existe um
            novo passo, uma nova camada para compreender e uma nova forma de
            florescer.
          </p>
        </>
      }
      detalhes={[
        { label: 'Modalidade', value: 'Assinatura mensal' },
        { label: 'Entrega', value: 'Semanal' },
        { label: 'Formato', value: 'Comunidade online' },
        { label: 'Investimento', value: 'R$ 97/mês' },
      ]}
      paraQuemItems={[
        'Mulheres em qualquer momento da jornada de autoconhecimento.',
        'Quem quer manter um contato contínuo com seus processos internos.',
        'Quem busca comunidade e acompanhamento além das sessões individuais.',
        'Quem deseja integrar reflexão e prática ao ritmo da vida cotidiana.',
      ]}
      comoFunciona={[
        'Preencha o formulário de interesse abaixo.',
        'Aguarde o contato da Nayô com as instruções de acesso à comunidade.',
        'Toda semana você receberá a leitura coletiva, reflexões e exercícios práticos.',
        'Participe dos encontros de alinhamento e troque com outras mulheres na jornada.',
      ]}
      preco="R$ 97,00/mês"
      // TODO: substituir pela plataforma de recorrência definida
      precoDetalhe="Assinatura mensal recorrente · Plataforma de pagamento a definir"
      formSection={<FormInteresse servicoDefault="Oráculo da Consciência" />}
    />
  )
}
