import type { ComponentPropsWithoutRef, ReactNode } from 'react'
import { Link } from 'react-router-dom'

type Variant = 'primary' | 'secondary' | 'white' | 'ghost'
type Size = 'md' | 'lg'

interface BaseProps {
  variant?: Variant
  size?: Size
  icon?: ReactNode
  iconPosition?: 'left' | 'right'
  className?: string
  children: ReactNode
}

type ButtonAsLink = BaseProps & { to: string; href?: never } & Omit<
    ComponentPropsWithoutRef<typeof Link>,
    'to' | 'className' | 'children'
  >
type ButtonAsAnchor = BaseProps & { href: string; to?: never } & Omit<
    ComponentPropsWithoutRef<'a'>,
    'href' | 'className' | 'children'
  >
type ButtonAsButton = BaseProps & { to?: never; href?: never } & Omit<
    ComponentPropsWithoutRef<'button'>,
    'className' | 'children'
  >

type ButtonProps = ButtonAsLink | ButtonAsAnchor | ButtonAsButton

const variantClasses: Record<Variant, string> = {
  primary: 'bg-brand-blue text-white hover:bg-brand-blue-dark',
  secondary:
    'bg-white text-brand-blue border border-brand-blue/30 hover:border-brand-blue hover:bg-brand-blue/5',
  white: 'bg-white text-brand-blue hover:bg-white/90',
  ghost: 'bg-transparent text-white border border-white/40 hover:bg-white/10',
}

const sizeClasses: Record<Size, string> = {
  md: 'px-6 py-3 text-sm',
  lg: 'px-7 py-3.5 text-base',
}

export default function Button({
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'right',
  className = '',
  children,
  ...props
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-colors focus-visible:outline focus-visible:outline-3 focus-visible:outline-brand-cyan focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:opacity-60 ${variantClasses[variant]} ${sizeClasses[size]} ${className}`
  const content =
    iconPosition === 'left' ? (
      <>
        {icon}
        {children}
      </>
    ) : (
      <>
        {children}
        {icon}
      </>
    )

  if ('to' in props && props.to) {
    const { to, ...rest } = props as ButtonAsLink
    return (
      <Link to={to} className={classes} {...rest}>
        {content}
      </Link>
    )
  }

  if ('href' in props && props.href) {
    const { href, ...rest } = props as ButtonAsAnchor
    return (
      <a href={href} className={classes} {...rest}>
        {content}
      </a>
    )
  }

  const rest = props as ButtonAsButton
  return (
    <button className={classes} {...rest}>
      {content}
    </button>
  )
}
