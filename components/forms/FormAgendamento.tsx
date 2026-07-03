'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { agendamentoSchema, AgendamentoData, buildWhatsAppUrl } from '@/lib/forms'
import Button from '../ui/Button'
import { ReactElement } from 'react'

const servicoOptions = [
  'Tarô Terapêutico (R$ 180)',
  'Leitura Árvore da Vida (R$ 380)',
]

const fieldCls =
  'w-full font-jost font-light text-sm text-grafite bg-marfim border border-ouro/20 px-4 py-3 outline-none focus:border-ouro/60 transition-colors duration-200 placeholder:text-taupe/50'

interface FormAgendamentoProps {
  servicoDefault?: string
}

export default function FormAgendamento({ servicoDefault }: FormAgendamentoProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<AgendamentoData>({
    resolver: zodResolver(agendamentoSchema),
    defaultValues: { servico: servicoDefault || '' },
  })

  function onSubmit(data: AgendamentoData) {
    const url = buildWhatsAppUrl(data)
    window.open(url, '_blank')
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field label="Nome" error={errors.nome?.message}>
          <input
            {...register('nome')}
            className={fieldCls}
            placeholder="Seu nome completo"
          />
        </Field>
        <Field label="E-mail" error={errors.email?.message}>
          <input
            {...register('email')}
            type="email"
            className={fieldCls}
            placeholder="seu@email.com"
          />
        </Field>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field label="WhatsApp" error={errors.whatsapp?.message}>
          <input
            {...register('whatsapp')}
            className={fieldCls}
            placeholder="(11) 99999-9999"
          />
        </Field>
        <Field label="Serviço" error={errors.servico?.message}>
          <select {...register('servico')} className={fieldCls}>
            <option value="">Selecione...</option>
            {servicoOptions.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <Field label="Disponibilidade" error={errors.disponibilidade?.message}>
        <textarea
          {...register('disponibilidade')}
          rows={3}
          className={fieldCls}
          placeholder="Quais dias e horários funcionam melhor para você?"
        />
      </Field>

      <Field label="O que você está buscando? (opcional)" error={errors.mensagem?.message}>
        <textarea
          {...register('mensagem')}
          rows={4}
          className={fieldCls}
          placeholder="Conte um pouco sobre o que te trouxe até aqui..."
        />
      </Field>

      <Button
        type="submit"
        variant="primary"
        disabled={isSubmitting}
        className="self-start mt-2"
      >
        ✦ Solicitar Agendamento
      </Button>
    </form>
  )
}

function Field({
  label,
  error,
  children,
}: {
  label: string
  error?: string
  children: ReactElement
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="font-jost font-light text-[0.72rem] tracking-[0.16em] uppercase text-taupe">
        {label}
      </label>
      {children}
      {error && <span className="font-jost text-xs text-red-500">{error}</span>}
    </div>
  )
}
