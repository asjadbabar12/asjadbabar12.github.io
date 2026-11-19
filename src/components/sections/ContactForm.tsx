import { Check, Send } from 'lucide-react'
import { type FormEvent, useState } from 'react'
import { siteConfig } from '../../data/site'

// Web3Forms access keys are public by design (they only allow sending to the email registered with the key).
const WEB3FORMS_KEY = 'c8bc3068-9709-41b5-bc07-88d2ba809966'

type Status = 'idle' | 'sending' | 'sent' | 'error'

export function ContactForm() {
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [status, setStatus] = useState<Status>('idle')

  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const name = String(data.get('name') ?? '').trim()
    const email = String(data.get('email') ?? '').trim()
    const message = String(data.get('message') ?? '').trim()
    const next: Record<string, string> = {}
    if (name.length < 2) next.name = 'Please enter your name.'
    if (!/^\S+@\S+\.\S+$/.test(email)) next.email = 'Please enter a valid email.'
    if (message.length < 10) next.message = 'Please add a little more detail.'
    setErrors(next)
    if (Object.keys(next).length) return

    // Honeypot: real visitors never fill this hidden field.
    if (String(data.get('botcheck') ?? '')) return

    setStatus('sending')
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `Portfolio enquiry from ${name}`,
          from_name: 'Portfolio contact form',
          name,
          email,
          message,
        }),
      })
      const result = await response.json()
      if (result.success) {
        setStatus('sent')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  if (status === 'sent') {
    return (
      <div className="contact-form form-success" role="status">
        <Check />
        <h3>Message sent</h3>
        <p>Thanks for reaching out. I'll reply to the email you provided as soon as I can.</p>
        <button className="btn secondary" type="button" onClick={() => setStatus('idle')}>
          Send another message
        </button>
      </div>
    )
  }

  return (
    <form className="contact-form" onSubmit={submit} noValidate>
      <label>
        Name
        <input name="name" autoComplete="name" aria-invalid={!!errors.name} />
        {errors.name && <span className="error">{errors.name}</span>}
      </label>
      <label>
        Email
        <input name="email" type="email" autoComplete="email" aria-invalid={!!errors.email} />
        {errors.email && <span className="error">{errors.email}</span>}
      </label>
      <label>
        Message
        <textarea name="message" rows={6} aria-invalid={!!errors.message} />
        {errors.message && <span className="error">{errors.message}</span>}
      </label>
      <input type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" aria-hidden="true" style={{ display: 'none' }} />
      <button className="btn primary" type="submit" disabled={status === 'sending'}>
        {status === 'sending' ? 'Sending…' : 'Send message'} <Send />
      </button>
      {status === 'error' && (
        <p className="error" role="alert">
          Something went wrong sending your message. Please try again, or email me directly at{' '}
          <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
        </p>
      )}
      <p className="form-note">
        Your message is sent securely to my inbox via Web3Forms and is not stored on this site. Prefer email? Write to{' '}
        <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
      </p>
    </form>
  )
}
