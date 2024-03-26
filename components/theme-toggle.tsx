/* eslint-disable max-len */
'use client'

import { Moon, Sun } from 'lucide-react'
import { useEffect, useState } from 'react'

type Theme = 'light' | 'dark'

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>('light')

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark')
      window.localStorage.setItem('theme', 'dark')
      document.documentElement.classList.add('dark')
    } else {
      setTheme('light')
      window.localStorage.setItem('theme', 'light')
      document.documentElement.classList.remove('dark')
    }
  }

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme') as Theme | null

    if (localTheme) {
      setTheme(localTheme)

      if (localTheme === 'dark') {
        document.documentElement.classList.add('dark')
      }
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark')
      document.documentElement.classList.add('dark')
    }
  }, [])

  return (
    <div>
      <button
        className="bg-transparent text-brand-30 w-[3rem] h-[3rem] rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all"
        onClick={toggleTheme}
      >
        {theme === 'light' ? <Sun /> : <Moon />}
      </button>
    </div>
  )
}
