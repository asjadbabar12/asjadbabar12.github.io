import { Menu, Moon, Sun, X } from 'lucide-react'
import { useState } from 'react'
import { navItems, siteConfig } from '../../data/site'
import { useActiveSection } from '../../hooks/useActiveSection'
import { GitHubIcon, LinkedInIcon } from '../common/BrandIcons'

interface NavbarProps { theme: 'light' | 'dark'; toggleTheme: () => void }
export function Navbar({theme,toggleTheme}:NavbarProps) {
  const [open,setOpen]=useState(false)
  const ids=navItems.map((item)=>item.toLowerCase())
  const active=useActiveSection(ids)
  return <header className="navbar"><div className="nav-inner"><a href="#home" className="brand" aria-label="Go to home"><span>&lt;</span>AB<span>/&gt;</span></a><nav className={`nav-links ${open?'open':''}`} aria-label="Primary navigation">{navItems.map((item)=><a key={item} className={active===item.toLowerCase()?'active':''} href={`#${item.toLowerCase()}`} onClick={()=>setOpen(false)}>{item}</a>)}<div className="mobile-social"><a href={siteConfig.github} aria-label="GitHub"><GitHubIcon/></a><a href={siteConfig.linkedin} aria-label="LinkedIn"><LinkedInIcon/></a></div></nav><div className="nav-actions"><button className="icon-btn" onClick={toggleTheme} aria-label={`Switch to ${theme==='dark'?'light':'dark'} theme`}>{theme==='dark'?<Sun/>:<Moon/>}</button><button className="icon-btn menu-btn" onClick={()=>setOpen(!open)} aria-expanded={open} aria-label="Toggle menu">{open?<X/>:<Menu/>}</button></div></div></header>
}
