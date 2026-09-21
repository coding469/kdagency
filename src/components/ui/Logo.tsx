import logoSrc from '@/assets/logo/kda-logo.png'

interface LogoProps {
  variant?: 'color' | 'white'
  className?: string
}

export default function Logo({ variant = 'color', className = 'h-9' }: LogoProps) {
  return (
    <img
      src={logoSrc}
      alt="Kanoute Digital Agency"
      className={`${className} w-auto object-contain ${
        variant === 'white' ? 'brightness-0 invert' : ''
      }`}
    />
  )
}
