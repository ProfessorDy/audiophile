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
import { EventHandler, useState } from 'react'

export default function Navbar() {
    const currentRoute: string = usePathname();
    const [menuState, setMenuState] = useState<boolean>(true)

    const handleClick = () => {
        setMenuState(prev => !prev)
    }

    return (
        <header className='sticky top-0 bg-dark padding-x pt-8 lg:pt-9 text-white uppercase'>


            <div className="wrapper">
                <div className="flex max-sm:justify-between items-center">

                    <button className='lg:hidden flex items-center sm:mr-10' onClick={handleClick}>
                        <Image
                            src={Hamburger}
                            alt='menu icon '
                        />
                    </button>
                    <Link href='/' className='max-sm:ml-auto' onClick={menuState ? handleClick : undefined}>
                        <Image src={Logo} alt='audiophile' />
                    </Link>

                    {/* Mobile  Navigation */}
                    <nav className={``}>
                        <ul className={`${menuState ? 'left-0' : 'left-[-9999px]'} fixed top-[90px] bg-white z-10 h-screen px-6 pt-[84px] pb-[35px] w-full lg:hidden space-y-[68px] `} >
                            <MobileLink src={headphoneThumbnail} category='headphones' width={119.874} height={156} handleClick={handleClick} />
                            <MobileLink src={speakerThumbnail} category='speakers' width={126.006} height={151.5} handleClick={handleClick} />
                            <MobileLink src={earphoneThumbnail} category='earphones' width={147} height={133} handleClick={handleClick} />
                        </ul>
                    </nav>
                    {/* Desktop Navigation */}
                    <nav className='max-lg:hidden flex ml-auto'>
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
                    <button className='ml-auto'>
                        <Image src={Cart} alt='cart' />
                    </button>
                </div >
                <hr className='h-px bg-white opacity-10 mt-8 lg:mt-9' />
            </div>
        </header >
    )
}
