'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { interesseSchema, InteresseData, buildWhatsAppUrl } from '@/lib/forms'
import Button from '../ui/Button'
import { ReactElement } from 'react'

const servicoOptions = ['Mentoria Raízes', 'Oráculo da Consciência']

const fieldCls =
  'w-full font-jost font-light text-sm text-grafite bg-marfim border border-ouro/20 px-4 py-3 outline-none focus:border-ouro/60 transition-colors duration-200 placeholder:text-taupe/50'

interface FormInteresseProps {
  servicoDefault?: string
}

export default function FormInteresse({ servicoDefault }: FormInteresseProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<InteresseData>({
    resolver: zodResolver(interesseSchema),
    defaultValues: { servico: servicoDefault || '' },
  })

  function onSubmit(data: InteresseData) {
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

      <Field label="Conte um pouco sobre você" error={errors.mensagem?.message}>
        <textarea
          {...register('mensagem')}
          rows={5}
          className={fieldCls}
          placeholder="O que te trouxe até aqui? O que você está buscando?"
        />
      </Field>

      <Button
        type="submit"
        variant="primary"
        disabled={isSubmitting}
        className="self-start mt-2"
      >
        ✦ Quero Fazer Parte
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
