function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}

Deno.serve(async (req) => {
  try {
    const payload = await req.json()
    const record = payload.record

    const resendApiKey = Deno.env.get('RESEND_API_KEY')
    const notifyEmail = Deno.env.get('NOTIFY_EMAIL') ?? 'kanoutef163@gmail.com'

    if (!resendApiKey) {
      return new Response('Missing RESEND_API_KEY secret', { status: 500 })
    }

    const firstName = escapeHtml(String(record.first_name ?? ''))
    const lastName = escapeHtml(String(record.last_name ?? ''))
    const email = escapeHtml(String(record.email ?? ''))
    const message = escapeHtml(String(record.message ?? '')).replace(/\n/g, '<br/>')

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'KDA Notifications <onboarding@resend.dev>',
        to: notifyEmail,
        reply_to: record.email,
        subject: `Nouvelle demande de devis — ${firstName} ${lastName}`,
        html: `
          <p><strong>Nom :</strong> ${firstName} ${lastName}</p>
          <p><strong>E-mail :</strong> ${email}</p>
          <p><strong>Message :</strong></p>
          <p>${message}</p>
        `,
      }),
    })

    if (!res.ok) {
      const text = await res.text()
      return new Response(`Resend error: ${text}`, { status: 502 })
    }

    return new Response('OK', { status: 200 })
  } catch (err) {
    return new Response(`Error: ${err}`, { status: 500 })
  }
})
