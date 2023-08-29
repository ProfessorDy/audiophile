import Logo from "@/public/shared/desktop/logo.svg"
import Image from "next/image";
import { FaFacebookSquare, FaTwitter, FaInstagram } from 'react-icons/fa'

import Link from "next/link";


export default function Footer() {
    const date = new Date()
    const year = date.getFullYear()

    return (
        <footer className="z-10 bg-dark padding-x  pt-[3.25rem]  pb-[38px] sm:pt-14 sm:pb-[46px] lg:pt-[75px] lg:pb-12 text-white w-full max-sm:text-center">

            <div className="wrapper relative space-y-12 sm:space-y-8 lg:space-y-9 flex flex-col">
                <Link href='/' className="max-sm:mx-auto mr-auto ">
                    <Image
                        src={Logo}
                        alt='audiophile' />
                </Link>

                <nav className="">
                    <ul className="lg:absolute top-0 right-0 text-[0.8125rem] font-bold leading-[1.5625rem] tracking-[0.125rem] uppercase flex gap-4 max-sm:flex-col sm:gap-[2.12rem] ">
                        <li className="sm:hover:text-primary">
                            <Link href='/'>home</Link>
                        </li>
                        <li className="sm:hover:text-primary">
                            <Link href='/headphones'>headphones</Link>
                        </li>
                        <li className="sm:hover:text-primary">
                            <Link href='/speakers'>speakers</Link>
                        </li>
                        <li className="sm:hover:text-primary">
                            <Link href='/earphones'>earphones</Link>
                        </li>
                    </ul>
                </nav>

                <p className="opacity-50 text-[0.9375rem] font-medium leading-[1.5625rem] max-w-[33.75rem]">Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.</p>

                <p className="opacity-50 text-[0.9375rem] font-bold leading-[1.5625rem] mt-5 ">Copyright {year}. All Rights Reserved</p>

                <div className="flex gap-4 max-sm:mx-auto sm:absolute bottom-0 right-0 lg:bottom-[8.5rem]">
                    <FaFacebookSquare size="1.5rem" />
                    <FaTwitter size="1.5rem" />
                    <FaInstagram size='1.5rem' />
                </div>
            </div>

        </footer>
    )
}
