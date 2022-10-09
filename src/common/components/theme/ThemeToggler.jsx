import React from 'react'
import { themes } from './ThemeContext'
import useTheme from './useTheme'

export const ThemeToggler = () => {
    const {theme, setTheme} = useTheme()
    
    let onClick = () => { 
        setTheme((theme === themes.vi) ? themes.classic : themes.vi)
    }
  
    return (
        <button className='themeToggler' onClick={onClick} >
            Включить {theme === themes.vi ? 'стандартную версию сайта' : 'версию сайта для слабовидящих' }
        </button>
    )
}
