import React from 'react'
import { Link } from 'react-scroll'

export default function Membership({ language }) {

    const content = {
        en: {
            label: 'MEMBERSHIP',
            heading: 'CHOOSE WHAT FITS YOU',

            plans: [
                {
                    title: (
                        <>
                            SINGLE
                            <br />
                            SESSION
                        </>
                    ),
                    description: 'Pay per session and train whenever you need.',
                    type: 'single',
                    price: '30 EGP',
                    note: '35 EGP with Cardio'
                },

                {
                    title: (
                        <>
                            IRON
                            <br />
                            ONLY
                        </>
                    ),
                    description: 'Train with full access to the gym equipment.',
                    type: 'monthly',
                    prices: [
                        {
                            duration: '1 Month',
                            price: '300 EGP'
                        },
                        {
                            duration: '2 Months',
                            price: '550 EGP',
                            saving: 'Save 50 EGP'
                        },
                        {
                            duration: '3 Months',
                            price: '800 EGP',
                            saving: 'Save 100 EGP'
                        }
                    ]
                },

                {
                    title: 'IRON + CARDIO',
                    description: 'Train with gym equipment and cardio access.',
                    type: 'monthly',
                    prices: [
                        {
                            duration: '1 Month',
                            price: '400 EGP'
                        },
                        {
                            duration: '2 Months',
                            price: '700 EGP',
                            saving: 'Save 100 EGP'
                        },
                        {
                            duration: '3 Months',
                            price: '1000 EGP',
                            saving: 'Save 200 EGP'
                        }
                    ]
                },

                {
                    title: (
                        <>
                            BOXING
                            <br />
                            MEMBERSHIP
                        </>
                    ),
                    description: 'Train with Captain Islam and improve your boxing skills and fitness.',
                    type: 'single',
                    price: '300 EGP',
                    note: 'Per Month'
                }
            ],

            button: 'JOIN NOW'
        },

        ar: {
            label: 'العضوية',
            heading: 'اختار اللي يناسبك',

            plans: [
                {
                    title: (
                        <>
                            حصة
                            <br />
                            واحدة
                        </>
                    ),
                    description: 'عايز تتمرن وقت ما تحب؟ ادفع للحصة وابدأ تمرينك.',
                    type: 'single',
                    price: '30 EGP',
                    note: '35 EGP مع الكارديو'
                },

                {
                    title: (
                        <>
                            حديد
                            <br />
                            فقط
                        </>
                    ),
                    description: 'تمرّن براحتك مع دخول كامل على معدات الجيم.',
                    type: 'monthly',
                    prices: [
                        {
                            duration: 'شهر واحد',
                            price: '300 EGP'
                        },
                        {
                            duration: 'شهرين',
                            price: '550 EGP',
                            saving: 'وفر 50 EGP'
                        },
                        {
                            duration: '3 شهور',
                            price: '800 EGP',
                            saving: 'وفر 100 EGP'
                        }
                    ]
                },

                {
                    title: (
                        <>
                            حديد
                            <br />
                            +كارديو
                        </>
                    ),                    description: 'خد تمرين الحديد والكارديو مع بعض وخلّي تمرينك أقوى.',
                    type: 'monthly',
                    prices: [
                        {
                            duration: 'شهر واحد',
                            price: '400 EGP'
                        },
                        {
                            duration: 'شهرين',
                            price: '700 EGP',
                            saving: 'وفر 100 EGP'
                        },
                        {
                            duration: '3 شهور',
                            price: '1000 EGP',
                            saving: 'وفر 200 EGP'
                        }
                    ]
                },

                {
                    title: (
                        <>
                            عضوية
                            <br />
                            الملاكمة
                        </>
                    ),
                    description: 'اتمرن مع كابتن إسلام وطوّر سرعتك ولياقتك ومهاراتك في الملاكمة.',
                    type: 'single',
                    price: '300 EGP',
                    note: 'شهريًا'
                }
            ],

            button: 'اشترك الآن'
        }
    }

    const current = content[language]

    return (
        <section
            id='membership'
            dir='ltr'
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


                {/* Membership Plans */}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 items-stretch'>

                    {current.plans.map((plan, index) => (

                        <div
                            key={index}
                            dir={language === 'ar' ? 'rtl' : 'ltr'}
                            className='bg-[#1A1A1A] rounded-2xl p-6 md:p-7 outfitFont flex flex-col'
                        >

                            {/* Title */}
                            <h3 className='bebasFont text-white text-[28px] md:text-[32px] leading-none'>
                                {plan.title}
                            </h3>


                            {/* Description */}
                            <p className='text-[#BDBDBD] text-[15px] md:text-[16px] mt-3 leading-6'>
                                {plan.description}
                            </p>


                            {/* Single Price */}
                            {plan.type === 'single' && (
                                <div className='mt-6'>

                                    <p className='text-white text-3xl md:text-4xl font-semibold'>
                                        {plan.price}
                                    </p>

                                    <p className='text-[#D41414] text-sm mt-1'>
                                        {plan.note}
                                    </p>

                                </div>
                            )}


                            {/* Monthly Prices */}
                            {plan.type === 'monthly' && (
                                <div className='mt-6 space-y-4'>

                                    {plan.prices.map((item) => (

                                        <div
                                            key={item.duration}
                                            className='flex justify-between items-center'
                                        >

                                            <span className='text-[#BDBDBD] text-sm'>
                                                {item.duration}
                                            </span>

                                            <div
                                                className={
                                                    language === 'ar'
                                                        ? 'text-left'
                                                        : 'text-right'
                                                }
                                            >

                                                <span className='text-white text-2xl font-semibold'>
                                                    {item.price}
                                                </span>

                                                {item.saving && (
                                                    <p className='text-[#D41414] text-xs mt-0.5'>
                                                        {item.saving}
                                                    </p>
                                                )}

                                            </div>

                                        </div>

                                    ))}

                                </div>
                            )}


                            {/* Button */}
                            <Link
                                to='contact'
                                smooth={true}
                                className='w-fit mt-5 md:mt-auto bg-[#D41414] text-white active:bg-white active:text-black transition-colors duration-200 px-5 py-2 rounded-lg text-[13px] md:text-[14px] font-medium cursor-pointer'
                            >
                                {current.button}
                            </Link>

                        </div>

                    ))}

                </div>

            </div>

        </section>
    )
}