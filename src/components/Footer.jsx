import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
    return (
        <div className='bg-slate-900 text-gray-400 pt-10 px-6 md:px-16 lg:px-24 xl:px-32'>
            <div className='flex flex-wrap justify-between gap-12 md:gap-6'>
                
                {/* Logo & Description */}
                <div className='max-w-80'>
                    <img src={assets.logo} alt="logo" className='mb-4 h-8 md:h-9' />
                    <p className='text-sm'>
                        Discover the best stays around the world with Staybnb.
                        Book unique homes, experiences, and places to stay.
                    </p>

                    <div className='flex items-center gap-4 mt-5'>
                        <img src={assets.instagramIcon} className='w-6 opacity-70 hover:opacity-100 cursor-pointer' />
                        <img src={assets.facebookIcon} className='w-6 opacity-70 hover:opacity-100 cursor-pointer' />
                        <img src={assets.twitterIcon} className='w-6 opacity-70 hover:opacity-100 cursor-pointer' />
                        <img src={assets.linkendinIcon} className='w-6 opacity-70 hover:opacity-100 cursor-pointer' />
                    </div>
                </div>

                {/* Company */}
                <div>
                    <p className='font-playfair text-lg text-gray-200'>COMPANY</p>
                    <ul className='mt-3 flex flex-col gap-2 text-sm'>
                        {['About', 'Careers', 'Press', 'Blog', 'Partners'].map(item => (
                            <li key={item}>
                                <a href="#" className='hover:text-white transition'>
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Support */}
                <div>
                    <p className='font-playfair text-lg text-gray-200'>SUPPORT</p>
                    <ul className='mt-3 flex flex-col gap-2 text-sm'>
                        {['Help Center', 'Safety Information', 'Cancellation Options', 'Contact Us', 'Accessibility'].map(item => (
                            <li key={item}>
                                <a href="#" className='hover:text-white transition'>
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Newsletter */}
                <div className='max-w-80'>
                    <p className='font-playfair text-lg text-gray-200'>STAY UPDATED</p>
                    <p className='mt-3 text-sm'>
                        Subscribe to our newsletter for inspiration and special offers.
                    </p>

                    <div className='flex items-center mt-4'>
                        <input
                            type="text"
                            placeholder="Your email"
                            className='bg-slate-800 text-gray-200 rounded-l h-9 px-3 outline-none border border-slate-700'
                        />
                        <button className='flex items-center justify-center bg-white h-9 w-9 rounded-r'>
                            <img src={assets.arrowIcon} alt="arrow" className='w-4' />
                        </button>
                    </div>
                </div>
            </div>

            <hr className='border-slate-700 mt-10' />

            <div className='flex flex-col md:flex-row gap-2 items-center justify-between py-5 text-sm'>
                <p>© {new Date().getFullYear()} Prasad. All rights reserved.</p>
                <ul className='flex items-center gap-4'>
                    {['Privacy', 'Terms', 'Sitemap'].map(item => (
                        <li key={item}>
                            <a href="#" className='hover:text-white transition'>
                                {item}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Footer
