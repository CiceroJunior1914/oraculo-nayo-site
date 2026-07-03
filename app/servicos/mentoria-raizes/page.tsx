import type { Metadata } from 'next'
import ServicePageLayout from '@/components/layout/ServicePageLayout'
import FormInteresse from '@/components/forms/FormInteresse'

export const metadata: Metadata = {
  title: 'Mentoria Raízes — Oráculo da Nayô',
  description:
    'Um processo de acompanhamento semanal para mulheres que desejam criar novas bases, ressignificar padrões e construir uma relação mais consciente consigo mesmas.',
}

export default function MentoriaRaizes() {
  return (
    <ServicePageLayout
      id="mentoria-raizes"
      nome="Mentoria Raízes"
      tagline="Uma semente só floresce quando é cuidada"
      sobreTexto={
        <>
          <p>
            A Mentoria Raízes nasceu de uma percepção dentro dos meus próprios
            atendimentos de Tarô: muitas vezes, enxergar um padrão é apenas o
            primeiro passo. A verdadeira transformação acontece quando existe tempo,
            acompanhamento e disposição para colocar novos movimentos em prática.
          </p>
          <p>
            Foi assim que nasceu um espaço de acolhimento, consciência e
            transformação. Um processo com começo, meio e fim, criado para te
            ajudar a olhar para suas sombras, reconhecer padrões que se repetem e
            desenvolver novas formas de se relacionar consigo mesma e com a sua vida.
          </p>
          <p>
            Na Mentoria Raízes, eu caminho ao seu lado semanalmente, propondo
            reflexões, direcionamentos e desafios práticos para que o
            autoconhecimento saia apenas da compreensão e se transforme em ação.
          </p>
          <p className="font-cormorant italic text-lg text-ameixa leading-relaxed">
            Porque uma semente só floresce quando é cuidada. A Mentoria Raízes é
            esse primeiro plantio: um convite para criar raízes mais fortes,
            reconhecer o seu próprio valor e construir uma relação mais consciente
            consigo mesma.
          </p>
        </>
      }
      detalhes={[
        { label: 'Formato', value: 'Semanal online' },
        { label: 'Duração', value: 'Processo contínuo' },
        { label: 'Investimento', value: 'Sob consulta' },
        { label: 'Início', value: 'A combinar' },
      ]}
      paraQuemItems={[
        'Mulheres que já reconhecem seus padrões mas precisam de acompanhamento para transformá-los em ação.',
        'Quem está em um momento de transição significativa e quer um processo estruturado.',
        'Quem sente que precisa de mais do que uma sessão — de um espaço contínuo de reflexão.',
        'Quem deseja criar novas bases emocionais e uma relação mais consciente consigo mesma.',
      ]}
      comoFunciona={[
        'Preencha o formulário de interesse contando um pouco sobre você e o que te trouxe até aqui.',
        'Aguarde o contato da Nayô para uma conversa inicial de alinhamento.',
        'Juntas, vocês definirão o processo, duração e investimento adequados ao seu momento.',
        'O acompanhamento semanal começa na data combinada, com reuniões regulares e exercícios práticos.',
      ]}
      preco="Sob consulta"
      precoDetalhe="O investimento é definido na conversa inicial, de acordo com a duração e formato do processo"
      formSection={<FormInteresse servicoDefault="Mentoria Raízes" />}
    />
  )
}
