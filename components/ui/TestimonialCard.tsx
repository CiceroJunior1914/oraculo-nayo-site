import CornerFrame from './CornerFrame'
import StarRating from './StarRating'

interface TestimonialCardProps {
  texto: string
  nome: string
  idade: number
  estrelas: number
}

export default function TestimonialCard({
  texto,
  nome,
  idade,
  estrelas,
}: TestimonialCardProps) {
  return (
    <CornerFrame color="#BF9A52" size={20} className="flex flex-col gap-5">
      <StarRating count={estrelas} color="#BF9A52" />
      <blockquote className="font-cormorant italic font-light text-lg text-creme leading-[1.8]">
        &ldquo;{texto}&rdquo;
      </blockquote>
      <p className="font-jost font-light text-[0.72rem] tracking-wider text-creme/60">
        — {nome}, {idade} anos
      </p>
    </CornerFrame>
  )
}
