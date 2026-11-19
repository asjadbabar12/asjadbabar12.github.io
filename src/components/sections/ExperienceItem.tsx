import { useState } from 'react'
import type { Experience } from '../../types'
import { Tags } from '../common/Section'

const VISIBLE = 2

export function ExperienceItem({ exp }: { exp: Experience }) {
  const [expanded, setExpanded] = useState(false)
  const total = exp.groups.reduce((n, g) => n + g.items.length, 0)
  return (
    <article className="timeline-item">
      <div className="timeline-dot" />
      <div className="timeline-date">{exp.startDate} — {exp.endDate}</div>
      <div className="timeline-card">
        <p className="company">{exp.company}</p>
        <h3>{exp.role}</h3>
        <ol className="career-path" aria-label="Promotion history">
          {exp.progression.map((step) => (
            <li key={step.title}><b>{step.title}</b><span>{step.date}</span></li>
          ))}
        </ol>
        <p>{exp.description}</p>
        <div className="exp-metrics">
          {exp.metrics.map((m) => (
            <div key={m.label}><strong>{m.value}</strong><span>{m.label}</span></div>
          ))}
        </div>
        <div className="exp-groups">
          {exp.groups.map((group) => (
            <section className="exp-group" key={group.title}>
              <h4>{group.title}</h4>
              <ul>
                {(expanded ? group.items : group.items.slice(0, VISIBLE)).map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          ))}
        </div>
        <button className="text-link exp-toggle" onClick={() => setExpanded((v) => !v)} aria-expanded={expanded}>
          {expanded ? 'Show fewer highlights' : `Show all ${total} highlights`}
        </button>
        <Tags items={exp.technologies} />
      </div>
    </article>
  )
}
