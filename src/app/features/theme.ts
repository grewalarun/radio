export type Theme = 'light' | 'dark'

const THEME_KEY = 'theme'

export const getTheme = (): Theme => {
  return (localStorage.getItem(THEME_KEY) as Theme) || 'light'
}

export const setTheme = (theme: Theme) => {
  const root = document.documentElement
  root.classList.toggle('dark', theme === 'dark')
  localStorage.setItem(THEME_KEY, theme)
}

export const toggleTheme = () => {
  const current = getTheme()
  setTheme(current === 'light' ? 'dark' : 'light')
}
