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

export default function App() {

    const [language, setLanguage] = useState('ar')

    return (
        <div dir={language === 'ar' ? 'rtl' : 'ltr'}>

            <Header
                language={language}
                setLanguage={setLanguage}
            />

            <Hero language={language} />
            <About language={language} />
            <Programs language={language} />
            <Trainers language={language} />
            <Membership language={language} />
            <Contact language={language} />

            <Footer
                language={language}
                setLanguage={setLanguage}
            />
            <LanguageButton
                language={language}
                setLanguage={setLanguage}
            />

        </div>
    )
}