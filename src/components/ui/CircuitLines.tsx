interface CircuitLinesProps {
  variant?: 'light' | 'dark'
  className?: string
}

/**
 * Decorative "circuit board" motif echoed from the KDA logo mark.
 */
export default function CircuitLines({ variant = 'light', className = '' }: CircuitLinesProps) {
  const lineColor = variant === 'dark' ? 'rgba(255,255,255,0.45)' : '#c3cee3'
  const [dotFar, dotMid, dotNear] =
    variant === 'dark' ? ['#00c2ff', '#8fa6e0', '#00c2ff'] : ['#009fe3', '#26326b', '#009fe3']

  return (
    <svg viewBox="0 0 360 120" fill="none" className={className} aria-hidden="true">
      <path d="M0 20 H240 L350 20" stroke={lineColor} strokeWidth="2" />
      <path d="M0 60 H150 L180 20" stroke={lineColor} strokeWidth="2" />
      <path d="M0 100 H90 L120 60 L180 20" stroke={lineColor} strokeWidth="2" />
      <circle cx="350" cy="20" r="6" fill={dotFar} />
      <circle cx="240" cy="20" r="6" fill={dotMid} />
      <circle cx="180" cy="20" r="6" fill={dotNear} />
    </svg>
  )
}
