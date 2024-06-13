"use client"
import { useTheme } from 'next-themes'
import React from 'react'
import { MoonFilledIcon, SunFilledIcon } from './icons'

const SwitchTheme = () => {
  const { theme, setTheme } = useTheme()

  const onChangeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  };

  return (
    <div className='flex items-center'>
      <button onClick={onChangeTheme}>
        {theme === 'light' ? <SunFilledIcon size={22} /> : <MoonFilledIcon size={22} />}
      </button>
    </div>
  )
}

export default SwitchTheme

