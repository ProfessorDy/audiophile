'use client'

import MobileLink from './MobileLink'

import Hamburger from '@/public/shared/mobile/icon-hamburger.svg'
import Logo from '@/public/shared/desktop/logo.svg'
import Cart from '@/public/shared/desktop/icon-cart.svg'

import headphoneThumbnail from '@/public/shared/desktop/image-category-thumbnail-headphones.png'
import speakerThumbnail from '@/public/shared/desktop/image-category-thumbnail-speakers.png'
import earphoneThumbnail from '@/public/shared/desktop/image-category-thumbnail-earphones.png'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Navbar() {
    const currentRoute: string = usePathname();
    const [menuState, setMenuState] = useState<boolean>(false)

    const handleClick = () => {
        setMenuState(prev => !prev)
    }

    return (
        <header className='z-10  padding-x pt-8 lg:pt-9 text-white uppercase'>


            <div className="wrapper">
                <div className="flex max-sm:justify-between items-center">

                    <motion.button animate={{ rotate: menuState ? 90 : 0 }} className='lg:hidden flex items-center sm:mr-10' onClick={handleClick}>
                        <Image
                            src={Hamburger}
                            alt='menu icon '
                        />
                    </motion.button>
                    <Link href='/' className='max-sm:ml-auto' onClick={menuState ? handleClick : undefined}>
                        <Image src={Logo} alt='audiophile' />
                    </Link>

                    {/* Mobile  Navigation */}
                    <nav className='z-20' aria-hidden={menuState ? 'false' : 'true'}>
                        <motion.ul animate={{ x: menuState ? 1025 : 0 }} className={`fixed left-[-1025px] top-[90px] bg-white h-screen px-6 pt-[84px] pb-[35px] w-full lg:hidden space-y-[68px]`} >
                            <MobileLink src={headphoneThumbnail} category='headphones' width={119.874} height={156} handleClick={handleClick} />
                            <MobileLink src={speakerThumbnail} category='speakers' width={126.006} height={151.5} handleClick={handleClick} />
                            <MobileLink src={earphoneThumbnail} category='earphones' width={147} height={133} handleClick={handleClick} />
                        </motion.ul>
                    </nav>
                    {/* Desktop Navigation */}
                    <nav className='max-lg:hidden flex ml-auto' aria-label='main'>
                        <ul className='flex gap-[2.12rem] text-[0.8125rem] font-bold  leading-[1.5625rem]'>
                            <li>
                                <Link href='/' className={`${currentRoute === '/' ? 'text-primary active_underline' : ''} hover:text-primary hover:active_underline relative`}>home</Link>
                            </li>
                            <li>
                                <Link href='/headphones' className={`${currentRoute === '/headphones' ? 'text-primary active_underline' : ''} hover:text-primary hover:active_underline relative`}>headphones</Link>
                            </li>
                            <li>
                                <Link href='/speakers' className={`${currentRoute === '/speakers' ? 'text-primary active_underline' : ''} hover:text-primary hover:active_underline relative`}>speakers</Link>
                            </li>
                            <li>
                                <Link href='/earphones' className={`${currentRoute === '/earphones' ? 'text-primary active_underline' : ''} hover:text-primary hover:active_underline relative`}>earphones</Link>
                            </li>
                        </ul>
                    </nav>
                    <motion.button whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 1.1 }} className='ml-auto'>
                        <Image src={Cart} alt='cart' />
                    </motion.button>
                </div >
                <hr className='h-px bg-white opacity-10 mt-8 lg:mt-9' />
            </div>
        </header >
    )
}
