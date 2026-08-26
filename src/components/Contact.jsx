import React from 'react'

export default function Contact({ language }) {

    const content = {
        en: {
            label: 'CONTACT US',
            heading: 'COME TRAIN WITH US',

            findUs: 'FIND US',

            contactInfo: [
                {
                    title: 'ADDRESS',
                    type: 'address',
                    value: 'Kobry El-Khawaga Street, after Beit El-Ezz Grill',
                    link: 'https://www.google.com/maps/search/?api=1&query=شارع+كوبري+الخواجه+بعد+مشويات+بيت+العز'
                },
                {
                    title: 'CAPTAIN ISLAM',
                    type: 'phone',
                    value: '011 56309623',
                    link: 'tel:01156309623'
                },
                {
                    title: 'CAPTAIN KYRILLOS',
                    type: 'phone',
                    value: '012 86013541',
                    link: 'tel:01286013541'
                }
            ],

            openingHours: 'OPENING HOURS',
            gym: 'GYM',

            gymHours: [
                {
                    title: 'MEN',
                    hours: [
                        'Saturday, Monday, Tuesday & Thursday: 3:00 PM - 1:00 AM',
                        'Sunday & Wednesday: 7:00 PM - 1:00 AM',
                        'Friday: 5:00 PM - 1:00 AM'
                    ]
                },
                {
                    title: 'WOMEN',
                    hours: [
                        'Saturday, Monday, Tuesday & Thursday: 9:00 AM - 3:00 PM',
                        'Sunday & Wednesday: 10:00 AM - 1:00 PM',
                        'Friday: 10:00 AM - 5:00 PM'
                    ]
                }
            ],

            boxing: 'BOXING',

            boxingHours: {
                days: 'SATURDAY & TUESDAY',
                hours: '4:00 PM - 6:00 PM'
            }
        },

        ar: {
            label: 'تواصل معنا',
            heading: 'مستني إيه؟ تعالى اتمرن معانا',

            findUs: 'مكاننا',

            contactInfo: [
                {
                    title: 'العنوان',
                    type: 'address',
                    value: 'شارع كوبري الخواجة، بعد مشويات بيت العز',
                    link: 'https://www.google.com/maps/search/?api=1&query=شارع+كوبري+الخواجه+بعد+مشويات+بيت+العز'
                },
                {
                    title: 'كابتن إسلام',
                    type: 'phone',
                    value: '011 56309623',
                    link: 'tel:01156309623'
                },
                {
                    title: 'كابتن كيرلس',
                    type: 'phone',
                    value: '012 86013541',
                    link: 'tel:01286013541'
                }
            ],

            openingHours: 'مواعيد العمل',
            gym: 'الجيم',

            gymHours: [
                {
                    title: 'رجال',
                    hours: [
                        'السبت والاثنين والثلاثاء والخميس: 3:00 م - 1:00 ص',
                        'الأحد والأربعاء: 7:00 م - 1:00 ص',
                        'الجمعة: 5:00 م - 1:00 ص'
                    ]
                },
                {
                    title: 'نساء',
                    hours: [
                        'السبت والاثنين والثلاثاء والخميس: 9:00 ص - 3:00 م',
                        'الأحد والأربعاء: 10:00 ص - 1:00 م',
                        'الجمعة: 10:00 ص - 5:00 م'
                    ]
                }
            ],

            boxing: 'الملاكمة',

            boxingHours: {
                days: 'السبت والثلاثاء',
                hours: '4:00 م - 6:00 م'
            }
        }
    }

    const current = content[language]

    return (
        <section
            id='contact'
            dir='ltr'
            className='w-full bg-[#F5F5F5] px-5 md:px-8 lg:px-12 py-16 md:py-20 lg:py-24'
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

                    <h2 className='bebasFont text-[#111111] text-[34px] md:text-[42px] lg:text-[48px] leading-none mt-2'>
                        {current.heading}
                    </h2>

                </div>


                {/* Contact Cards */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto'>


                    {/* Find Us */}
                    <div
                        dir={language === 'ar' ? 'rtl' : 'ltr'}
                        className='bg-white rounded-2xl p-6 md:p-7 outfitFont'
                    >

                        <h3 className='bebasFont text-[#111111] text-[28px] md:text-[32px]'>
                            {current.findUs}
                        </h3>

                        <div className='mt-5 space-y-5'>

                            {current.contactInfo.map((item) => (
                                <div key={item.title}>

                                    <span className='text-[#D41414] text-sm font-semibold'>
                                        {item.title}
                                    </span>

                                    <br />

                                    <a
                                    dir='ltr'
                                        href={item.link}
                                        target={item.type === 'address' ? '_blank' : undefined}
                                        rel={item.type === 'address' ? 'noopener noreferrer' : undefined}
                                        className='text-[#444444] text-[15px] md:text-[16px] leading-7 cursor-pointer active:text-[#D41414] transition-colors duration-200'
                                    >
                                        {item.value}
                                    </a>

                                </div>
                            ))}

                        </div>

                    </div>


                    {/* Opening Hours */}
                    <div
                        dir={language === 'ar' ? 'rtl' : 'ltr'}
                        className='bg-white rounded-2xl p-6 md:p-7 outfitFont'
                    >

                        <h3 className='bebasFont text-[#111111] text-[28px] md:text-[32px]'>
                            {current.openingHours}
                        </h3>

                        <div className='mt-5 space-y-6'>

                            {/* Gym */}
                            <div>

                                <span className='text-[#D41414] text-sm font-semibold'>
                                    {current.gym}
                                </span>

                                <div className='mt-2 space-y-3'>

                                    {current.gymHours.map((group) => (
                                        <div key={group.title}>

                                            <p className='text-[#111111] font-semibold'>
                                                {group.title}
                                            </p>

                                            {group.hours.map((hour) => (
                                                <p
                                                    key={hour}
                                                    className='text-[#444444] text-[15px] md:text-[16px]'
                                                >
                                                    {hour}
                                                </p>
                                            ))}

                                        </div>
                                    ))}

                                </div>

                            </div>


                            {/* Boxing */}
                            <div>

                                <span className='text-[#D41414] text-sm font-semibold'>
                                    {current.boxing}
                                </span>

                                <p className='text-[#111111] font-semibold mt-2'>
                                    {current.boxingHours.days}
                                </p>

                                <p className='text-[#444444] text-[15px] md:text-[16px] mt-1'>
                                    {current.boxingHours.hours}
                                </p>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    )
}