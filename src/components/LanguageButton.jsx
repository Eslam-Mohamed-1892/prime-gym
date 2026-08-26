import React from 'react'

export default function LanguageButton({ language, setLanguage }) {

    const changeLanguage = () => {
        setLanguage(language === 'en' ? 'ar' : 'en')
    }

    return (
        <button
            onClick={changeLanguage}
            className='fixed bottom-5 right-5 z-30 bg-[#D41414] text-white px-4 py-2 rounded-lg outfitFont text-sm font-medium cursor-pointer active:bg-white active:text-black transition-colors duration-200'
        >
            {language === 'en' ? 'AR' : 'EN'}
        </button>
    )
}