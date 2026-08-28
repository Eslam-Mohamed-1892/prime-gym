import React from 'react'
import { MdDarkMode, MdLightMode } from 'react-icons/md'

export default function ThemeButton({ theme, setTheme }) {

    const changeTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark')
    }

    return (
        <button
            onClick={changeTheme}
            className='bg-[#D41414] text-white p-3 rounded-full flex items-center justify-center cursor-pointer active:bg-white active:text-[#111111] transition-colors duration-200'
        >
            {theme === 'dark'
                ? <MdLightMode className='text-xl' />
                : <MdDarkMode className='text-xl' />
            }
        </button>
    )
}