import { useState } from 'react'

/** Renders /avatar.webp if you add one to public/; renders nothing until then (no placeholder). */
export function Avatar({ name, src = '/avatar.webp' }: { name: string; src?: string }) {
  const [failed, setFailed] = useState(false)
  if (failed) return null
  return <img className="avatar" src={src} alt={`Portrait of ${name}`} width={112} height={112} onError={() => setFailed(true)} />
}
