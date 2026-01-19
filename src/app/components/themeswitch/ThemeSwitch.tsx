import { useState } from 'react'
import { FaSun, FaMoon } from 'react-icons/fa'
import { getTheme, toggleTheme } from '../../features/theme'

export const ThemeSwitch = () => {
  const [theme, setLocalTheme] = useState(getTheme())
  const isLight = theme === 'light'

  const handleToggle = () => {
    toggleTheme()
    setLocalTheme(getTheme())
  }

  return (<>
      <div className="flex items-center gap-3 mr-6">
      <div
        onClick={handleToggle}
        className={`
          w-[50px] h-[30px] rounded-full p-[3px]
          flex items-center cursor-pointer
          transition-colors duration-300
          ${isLight ? 'bg-[#f1c40f]' : 'bg-[#34495e]'}
        `}
      >
        <div
          className={`
            w-6 h-6 rounded-full bg-white
            flex items-center justify-center
            shadow-md
            transition-transform duration-300
            ${isLight ? 'translate-x-[0px]' : 'translate-x-[20px]'}
          `}
        >
          {isLight ? (
            <FaSun className="text-[#f39c12]" size={14} />
          ) : (
            <FaMoon className="text-[#f1c40f]" size={14} />
          )}
        </div>
      </div>
    </div>
    </>
  )
}
