import { ReactNode } from 'react'

interface CornerFrameProps {
  children: ReactNode
  className?: string
  color?: string
  size?: number
}

export default function CornerFrame({
  children,
  className = '',
  color = '#BF9A52',
  size = 16,
}: CornerFrameProps) {
  const corner = `${size}px`
  const thickness = '1px'

  const cornerStyle = (
    top: boolean,
    left: boolean
  ): React.CSSProperties => ({
    position: 'absolute',
    width: corner,
    height: corner,
    borderColor: color,
    borderStyle: 'solid',
    opacity: 0.4,
    ...(top ? { top: 0 } : { bottom: 0 }),
    ...(left ? { left: 0 } : { right: 0 }),
    borderTopWidth: top ? thickness : '0',
    borderBottomWidth: top ? '0' : thickness,
    borderLeftWidth: left ? thickness : '0',
    borderRightWidth: left ? '0' : thickness,
  })

  return (
    <div className={`relative p-6 ${className}`}>
      <div style={cornerStyle(true, true)} />
      <div style={cornerStyle(true, false)} />
      <div style={cornerStyle(false, true)} />
      <div style={cornerStyle(false, false)} />
      {children}
    </div>
  )
}
