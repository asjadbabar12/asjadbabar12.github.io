import { ArrowUpRight } from 'lucide-react'
import { siteConfig } from '../../data/site'
import { GitHubIcon, LinkedInIcon } from '../common/BrandIcons'
export function Footer(){return <footer><div className="container footer-inner"><div><a className="brand" href="#home"><span>&lt;</span>AB<span>/&gt;</span></a><p>Engineering thoughtful software from interface to infrastructure.</p></div><div className="footer-links"><a href={siteConfig.github}>GitHub <GitHubIcon/></a><a href={siteConfig.linkedin}>LinkedIn <LinkedInIcon/></a><a href={`mailto:${siteConfig.email}`}>Email <ArrowUpRight/></a></div><p className="copyright">© {new Date().getFullYear()} {siteConfig.name}. Built with React & TypeScript.</p></div></footer>}
