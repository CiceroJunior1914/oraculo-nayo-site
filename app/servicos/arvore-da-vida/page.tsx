import type { Metadata } from 'next'
import ServicePageLayout from '@/components/layout/ServicePageLayout'
import FormAgendamento from '@/components/forms/FormAgendamento'

export const metadata: Metadata = {
  title: 'Leitura Árvore da Vida — Oráculo da Nayô',
  description:
    'Uma leitura ampla das áreas mais importantes da sua vida, trazendo clareza sobre o momento presente e os caminhos de desenvolvimento pessoal.',
}

export default function ArvoreDeVida() {
  return (
    <ServicePageLayout
      id="arvore-da-vida"
      nome="Leitura Árvore da Vida"
      tagline="Uma visão completa do seu momento"
      sobreTexto={
        <>
          <p>
            A Leitura Árvore da Vida nasceu da busca por respostas mais profundas
            e pela necessidade de compreender um momento da vida de forma completa.
          </p>
          <p>
            Através da estrutura da Árvore da Vida e do Tarô, essa leitura oferece
            uma visão ampla sobre os seus desafios, padrões, bloqueios e potenciais,
            trazendo clareza sobre o momento que você está vivendo e quais caminhos
            podem ser explorados com mais consciência.
          </p>
          <p>
            É uma leitura para quem deseja olhar além da superfície: compreender
            suas questões emocionais, pessoais, profissionais, financeiras e
            espirituais, reconhecendo o que precisa ser transformado e quais novos
            posicionamentos podem ser construídos.
          </p>
          <p className="font-cormorant italic text-lg text-ameixa leading-relaxed">
            Muitas vezes, aquilo que parece um grande obstáculo se torna mais simples
            quando conseguimos enxergá-lo por uma nova perspectiva. A Árvore da Vida
            te convida exatamente a isso: sair da confusão, compreender seus
            processos internos e encontrar mais clareza para tomar suas próprias
            decisões.
          </p>
        </>
      }
      detalhes={[
        { label: 'Duração', value: '1h30 por sessão' },
        { label: 'Encontros', value: '2 encontros' },
        { label: 'Formato', value: 'Chamada de vídeo' },
        { label: 'Investimento', value: 'R$ 380,00' },
      ]}
      paraQuemItems={[
        'Mulheres que buscam uma visão ampla e profunda do momento atual da vida.',
        'Quem está em um ponto de inflexão e quer clareza em múltiplas áreas (emocional, profissional, financeira, espiritual).',
        'Quem sente que as coisas estão confusas e quer encontrar um fio condutor.',
        'Quem deseja ir além de uma leitura pontual e explorar camadas mais profundas da sua jornada.',
      ]}
      comoFunciona={[
        'Preencha o formulário de agendamento abaixo com seus dados e disponibilidade.',
        'Aguarde o contato da Nayô para confirmar datas para os dois encontros.',
        'No 1º encontro (1h30), faça a leitura completa da Árvore da Vida.',
        'No 2º encontro, aprofunde os temas que mais se destacaram e alinhe os próximos passos.',
      ]}
      preco="R$ 380,00"
      precoDetalhe="Inclui 2 encontros de 1h30 · Pagamento via Pix"
      formSection={<FormAgendamento servicoDefault="Leitura Árvore da Vida (R$ 380)" />}
    />
  )
}
