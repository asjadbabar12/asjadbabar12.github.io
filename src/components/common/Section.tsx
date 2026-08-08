import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

interface SectionProps { id: string; eyebrow: string; title: string; intro?: string; children: ReactNode; className?: string }
export function Section({ id, eyebrow, title, intro, children, className='' }: SectionProps) {
  return <section id={id} className={`section ${className}`}><motion.div className="container" initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.1}} transition={{duration:.55,ease:'easeOut'}}><div className="section-head"><p className="eyebrow"><span>//</span> {eyebrow}</p><h2>{title}</h2>{intro && <p className="section-intro">{intro}</p>}</div>{children}</motion.div></section>
}

export function Tags({ items }: { items: string[] }) { return <div className="tags">{items.map((item) => <span className="tag" key={item}>{item}</span>)}</div> }
