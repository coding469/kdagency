import { useState, type FormEvent } from 'react'
import { Navigate, useLocation, useNavigate } from 'react-router-dom'
import Logo from '@/components/ui/Logo'
import Button from '@/components/ui/Button'
import TextField from '@/components/ui/TextField'
import { useAuth } from '@/contexts/AuthContext'
import { isSupabaseConfigured } from '@/lib/supabase'

export default function AdminLogin() {
  const { user, loading, signIn } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [submitting, setSubmitting] = useState(false)

  if (!loading && user) {
    const redirectTo = (location.state as { from?: string } | null)?.from ?? '/admin'
    return <Navigate to={redirectTo} replace />
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitting(true)
    setError(null)

    const { error: signInError } = await signIn(email, password)

    if (signInError) {
      setError("Identifiants invalides. Vérifiez votre e-mail et votre mot de passe.")
      setSubmitting(false)
      return
    }

    navigate('/admin', { replace: true })
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-surface-soft px-6 py-12">
      <div className="w-full max-w-md rounded-panel border border-border-soft bg-white p-8 shadow-card sm:p-10">
        <Logo className="h-8" />

        <h1 className="mt-8 font-heading text-2xl font-bold text-ink">Espace admin</h1>
        <p className="mt-2 text-sm text-body">
          Connectez-vous pour gérer le contenu du site.
        </p>

        {!isSupabaseConfigured && (
          <p className="mt-6 rounded-field bg-icon-bg px-4 py-3 text-sm text-brand-blue">
            Information. Connexion non configurée : Supabase n'est pas encore relié.
          </p>
        )}

        <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-6" noValidate>
          <TextField
            name="email"
            type="email"
            label="E-mail"
            placeholder="admin@kanoute-digital.sn"
            autoComplete="email"
            required
            disabled={submitting}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <TextField
            name="password"
            type="password"
            label="Mot de passe"
            autoComplete="current-password"
            required
            disabled={submitting}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={error ?? undefined}
          />

          <Button type="submit" disabled={submitting} className="w-full">
            {submitting ? 'Envoi…' : 'Se connecter'}
          </Button>
        </form>
      </div>
    </div>
  )
}
