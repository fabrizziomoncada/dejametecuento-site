import { CSSProperties } from 'react'
import cn from 'classnames'

type Props = {
  children: React.ReactNode
  to: string
  newTab?: boolean
  style?: CSSProperties
  className?: string
  ariaLabel: string
}

function ExternalLink({
  children,
  to,
  newTab = true,
  style,
  className,
  ariaLabel,
}: Props) {
  return (
    <a
      href={to}
      // Change target and rel attributes is newTab is true
      target={newTab ? '_blank' : '_self'}
      rel={newTab ? 'noopener noreferrer' : ''}
      style={style}
      aria-label={ariaLabel}
      className={cn('hover:opacity-50', className)}
    >
      {children}
    </a>
  )
}

export default ExternalLink
