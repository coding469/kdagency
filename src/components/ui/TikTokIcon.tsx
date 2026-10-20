export default function TikTokIcon({ size = 16, className }: { size?: number; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M16.6 5.82a4.28 4.28 0 0 1-2.9-3.54h-3.1v13.84a2.6 2.6 0 1 1-1.8-2.48V10.6a5.8 5.8 0 1 0 4.9 5.73v-6.9a7.26 7.26 0 0 0 4.3 1.39V7.7a4.28 4.28 0 0 1-1.4-1.88z" />
    </svg>
  )
}
