import { useNavigate } from 'react-router-dom'
import Logo from '@/components/ui/Logo'
import Button from '@/components/ui/Button'
import { useAuth } from '@/contexts/AuthContext'

export default function AdminDashboard() {
  const { user, signOut } = useAuth()
  const navigate = useNavigate()

  async function handleSignOut() {
    await signOut()
    navigate('/admin/login', { replace: true })
  }

  return (
    <div className="min-h-screen bg-surface-soft">
      <header className="border-b border-border-soft bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <Logo className="h-8" />
          <div className="flex items-center gap-4">
            <span className="text-sm text-body">{user?.email}</span>
            <Button variant="secondary" size="md" onClick={handleSignOut}>
              Se déconnecter
            </Button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <h1 className="font-heading text-3xl font-bold text-ink">Tableau de bord</h1>
        <p className="mt-3 max-w-xl text-body">
          Connecté en tant que <strong>{user?.email}</strong>. La gestion du portfolio, des
          services, des formations et des demandes de devis arrivera ici prochainement.
        </p>
      </main>
    </div>
  )
}
