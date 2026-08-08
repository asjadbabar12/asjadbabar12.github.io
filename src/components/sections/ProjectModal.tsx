import { ExternalLink, X } from 'lucide-react'
import { useEffect } from 'react'
import type { Project } from '../../types'
import { Tags } from '../common/Section'
import { GitHubIcon } from '../common/BrandIcons'

export function ProjectModal({project,onClose}:{project:Project|null;onClose:()=>void}) {
  useEffect(()=>{if(!project)return; const close=(e:KeyboardEvent)=>{if(e.key==='Escape')onClose()}; document.body.style.overflow='hidden'; window.addEventListener('keydown',close); return()=>{document.body.style.overflow='';window.removeEventListener('keydown',close)}},[project,onClose])
  if(!project)return null
  return <div className="modal-backdrop" onMouseDown={(e)=>{if(e.currentTarget===e.target)onClose()}}><article className="project-modal" role="dialog" aria-modal="true" aria-labelledby="project-title"><button className="modal-close icon-btn" onClick={onClose} aria-label="Close project details"><X/></button><p className="eyebrow"><span>//</span> {project.eyebrow}</p><h2 id="project-title">{project.title}</h2><p className="modal-lead">{project.description}</p>{project.images&&<div className="project-gallery">{project.images.map((source,index)=><img src={source} alt={`${project.title} ${project.imageLabels?.[index]??'application'} view`} key={source}/>)}</div>}<div className="case-grid"><div><h3>Problem</h3><p>{project.problem}</p></div><div><h3>My role</h3><p>{project.role}</p></div><div><h3>Solution</h3><p>{project.solution}</p></div><div><h3>Outcome</h3><p>{project.outcome}</p></div></div><div className="modal-list"><h3>Architecture</h3><ul>{project.architecture.map(x=><li key={x}>{x}</li>)}</ul></div><div className="modal-list"><h3>Key technical challenges</h3><ul>{project.challenges.map(x=><li key={x}>{x}</li>)}</ul></div><Tags items={project.technologies}/><div className="modal-actions">{project.github&&<a className="btn secondary" href={project.github} target="_blank" rel="noreferrer"><GitHubIcon/> View source</a>}{project.demo&&project.demo!=='#'&&<a className="btn primary" href={project.demo} target="_blank" rel="noreferrer"><ExternalLink/> Live demo</a>}</div></article></div>
}
