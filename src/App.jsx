import React, { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Programs from './components/Programs'
import Trainers from './components/Trainers'
import Membership from './components/Membership'
import Contact from './components/Contact'
import Footer from './components/Footer'
import LanguageButton from './components/LanguageButton'
import ThemeButton from './components/ThemeButton'

export default function App() {

    const [language, setLanguage] = useState('ar')
    const [theme, setTheme] = useState('dark')

    return (
        <div dir={language === 'ar' ? 'rtl' : 'ltr'}>

            <Header language={language} theme={theme} />
            <Hero language={language} theme={theme} />
            <About language={language} theme={theme} />
            <Programs language={language} theme={theme} />
            <Trainers language={language} theme={theme} />
            <Membership language={language} theme={theme} />
            <Contact language={language} theme={theme} />
            <Footer language={language} theme={theme} />

            <div className='fixed bottom-5 right-5 z-30 flex flex-col gap-3'>
                <LanguageButton
                    language={language}
                    setLanguage={setLanguage}
                />

                <ThemeButton
                    theme={theme}
                    setTheme={setTheme}
                />
            </div>

        </div>
    )
}