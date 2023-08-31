"use client"

import Image, { StaticImageData } from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Product({ imageMobile, imageTablet, imageDesktop, name, details, route, invert, newProduct }: { imageMobile: StaticImageData, imageTablet: StaticImageData, imageDesktop: StaticImageData, name: string, details: string, route: string, invert: boolean, newProduct: boolean }) {

    const currentRoute: string = usePathname()

    return (
        <section className={`flex flex-col gap-8 sm:gap-[3.25rem] ${invert ? 'lg:flex-row-reverse' : 'lg:flex-row'} lg:items-center lg:gap-[7.81rem]`}>
            <Image
                src={imageMobile}
                alt={`${name} ${currentRoute.slice(1)}`}
                className="rounded-lg sm:hidden"
            />
            <Image
                src={imageTablet}
                alt={`${name} ${currentRoute.slice(1)}`}
                className="rounded-lg max-sm:hidden lg:hidden"
            />
            <Image
                src={imageDesktop}
                alt={`${name} ${currentRoute.slice(1)}`}
                className="rounded-lg max-lg:hidden w-1/2"
            />



            <div className="max-lg:text-center max-sm:space-y-6 sm:max-w-[35.75rem] mx-auto">
                {newProduct ? (<p className="text-primary text-[.875rem] tracking-[.625rem] uppercase font-normal sm:mb-4">new product</p>) : null}

                <h2 className="text-black text-[1.75rem] sm:text-[2.5rem] sm:leading-[2.75rem] font-bold tracking-[.0625rem] sm:tracking-[0.08931rem] uppercase">{name}<br />{currentRoute.slice(1)}</h2>
                <p className="text-black text-[.9375rem] font-medium leading-[1.5625rem ] opacity-50 sm:mt-8">{details}</p>
                <Link href={`${currentRoute}/${route}`} className='primary-btn max-lg:mx-auto sm:mt-8 lg:mt-10'>see product</Link>
            </div>
        </section>
    )
}
