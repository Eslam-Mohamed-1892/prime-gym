import React from 'react'
import boxing from '../images/programs/boxing.jpg'
import strength from '../images/programs/strength.jpg'
import { Link } from 'react-scroll'

export default function Programs({ language }) {

    const content = {
        en: {
            label: 'OUR PROGRAMS',
            heading: 'TRAIN FOR MORE THAN JUST LOOKS',
            button: 'LEARN MORE'
        },

        ar: {
            label: 'تماريننا',
            heading: 'اتمرن عشان تبقى أقوى مش بس عشان شكلك',
            button: 'اعرف المزيد'
        }
    }

    const programs = [
        {
            title: {
                en: 'STRENGTH TRAINING',
                ar: 'تمارين الحديد'
            },
            image: strength,
            alt: {
                en: 'Strength Training',
                ar: 'تمارين الحديد'
            },
            description: {
                en: 'Build strength, improve your fitness, and push your body beyond its limits.',
                ar: 'ابني قوتك، حسّن لياقتك، وادفع جسمك لحدوده عشان توصل لأفضل فورمة تقدر عليها.'
            }
        },
        {
            title: {
                en: 'BOXING',
                ar: 'البوكس'
            },
            image: boxing,
            alt: {
                en: 'Boxing Training',
                ar: 'تدريب البوكس'
            },
            description: {
                en: 'Learn proper technique, improve your conditioning, and develop speed and discipline.',
                ar: 'اتعلم صح، زوّد لياقتك، وطوّر سرعتك وتركيزك وانضباطك مع كل تمرينة.'
            }
        }
    ]

    const current = content[language]

    return (
        <section
            id='programs'
            className='w-full bg-[#111111] px-5 md:px-8 lg:px-12 py-16 md:py-20 lg:py-24'
        >

            <div className='max-w-6xl mx-auto'>

                {/* Section Heading */}
                <div
                    className='text-center outfitFont mb-10 md:mb-12'
                    dir={language === 'ar' ? 'rtl' : 'ltr'}
                >

                    <span className='text-[#D41414] text-sm md:text-base font-semibold'>
                        {current.label}
                    </span>

                    <h2 className='bebasFont text-white text-[34px] md:text-[42px] lg:text-[48px] leading-none mt-2'>
                        {current.heading}
                    </h2>

                </div>


                {/* Programs */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8'>

                    {programs.map((program) => (
                        <div
                            key={program.title.en}
                            className='bg-[#1A1A1A] rounded-2xl overflow-hidden'
                            dir={language === 'ar' ? 'rtl' : 'ltr'}
                        >

                            {/* Image */}
                            <img
                                src={program.image}
                                alt={program.alt[language]}
                                className='w-full h-70 md:h-80 object-cover'
                            />


                            {/* Content */}
                            <div className='p-5 md:p-6 outfitFont'>

                                <h3 className='bebasFont text-white text-[28px] md:text-[32px]'>
                                    {program.title[language]}
                                </h3>

                                <p className='text-[#BDBDBD] text-[15px] md:text-[16px] leading-7 mt-2'>
                                    {program.description[language]}
                                </p>

                                <Link
                                    to='membership'
                                    smooth={true}
                                    className='inline-block mt-5 bg-[#D41414] text-white px-5 py-2 rounded-lg text-sm font-medium cursor-pointer active:bg-white active:text-[#111111] transition-colors duration-200'
                                >
                                    {current.button}
                                </Link>

                            </div>

                        </div>
                    ))}

                </div>

            </div>

        </section>
    )
}