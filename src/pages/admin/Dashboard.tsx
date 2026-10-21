import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Trash2 } from 'lucide-react'
import Logo from '@/components/ui/Logo'
import Button from '@/components/ui/Button'
import { useAuth } from '@/contexts/AuthContext'
import { supabase } from '@/lib/supabase'

interface QuoteRequest {
  id: string
  created_at: string
  first_name: string
  last_name: string
  email: string
  message: string
}

export default function AdminDashboard() {
  const { user, signOut } = useAuth()
  const navigate = useNavigate()
  const [requests, setRequests] = useState<QuoteRequest[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    supabase
      .from('quote_requests')
      .select('*')
      .order('created_at', { ascending: false })
      .then(({ data }) => {
        setRequests(data ?? [])
        setLoading(false)
      })
  }, [])

  async function handleSignOut() {
    await signOut()
    navigate('/admin/login', { replace: true })
  }

  async function handleDelete(id: string) {
    if (!window.confirm('Supprimer définitivement cette demande ?')) return
    const { error } = await supabase.from('quote_requests').delete().eq('id', id)
    if (!error) {
      setRequests((prev) => prev.filter((r) => r.id !== id))
    }
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
        <h1 className="font-heading text-3xl font-bold text-ink">Demandes de devis</h1>
        <p className="mt-3 max-w-xl text-body">
          Connecté en tant que <strong>{user?.email}</strong>.
        </p>

        <div className="mt-10 overflow-x-auto rounded-card border border-border-soft bg-white">
          {loading ? (
            <p className="p-6 text-sm text-muted">Chargement...</p>
          ) : requests.length === 0 ? (
            <p className="p-6 text-sm text-muted">Aucune demande pour le moment.</p>
          ) : (
            <table className="w-full text-left text-sm">
              <thead className="border-b border-border-soft bg-surface-soft text-xs text-muted uppercase">
                <tr>
                  <th className="px-5 py-3">Date</th>
                  <th className="px-5 py-3">Nom</th>
                  <th className="px-5 py-3">E-mail</th>
                  <th className="px-5 py-3">Message</th>
                  <th className="px-5 py-3" />
                </tr>
              </thead>
              <tbody>
                {requests.map((r) => (
                  <tr key={r.id} className="border-b border-border-soft last:border-0">
                    <td className="px-5 py-4 whitespace-nowrap text-muted">
                      {new Date(r.created_at).toLocaleDateString('fr-FR', {
                        day: '2-digit',
                        month: 'short',
                        year: 'numeric',
                      })}
                    </td>
                    <td className="px-5 py-4 whitespace-nowrap font-medium text-ink">
                      {r.first_name} {r.last_name}
                    </td>
                    <td className="px-5 py-4 whitespace-nowrap">
                      <a href={`mailto:${r.email}`} className="text-brand-blue hover:underline">
                        {r.email}
                      </a>
                    </td>
                    <td className="max-w-sm px-5 py-4 text-body">{r.message}</td>
                    <td className="px-5 py-4 text-right">
                      <button
                        type="button"
                        onClick={() => handleDelete(r.id)}
                        aria-label="Supprimer cette demande"
                        className="inline-flex items-center gap-1.5 text-xs font-medium text-error hover:underline"
                      >
                        <Trash2 size={14} />
                        Supprimer
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </main>
    </div>
  )
}
