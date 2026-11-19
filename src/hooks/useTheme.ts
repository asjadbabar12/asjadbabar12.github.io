import { useEffect, useState } from 'react'

type Theme = 'light' | 'dark'

const getInitialTheme = (): Theme => {
  const saved = localStorage.getItem('portfolio-theme') as Theme | null
  return saved === 'light' || saved === 'dark' ? saved : 'dark'
}

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme)
  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('portfolio-theme', theme)
  }, [theme])
  return { theme, toggleTheme: () => setTheme((value) => value === 'dark' ? 'light' : 'dark') }
}
