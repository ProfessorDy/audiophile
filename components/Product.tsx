"use client"

import Image, { StaticImageData } from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Product({ imageMobile, imageTablet, imageDesktop, name, details, route, invert, newProduct }: { imageMobile: StaticImageData, imageTablet: StaticImageData, imageDesktop: StaticImageData, name: string, details: string, route: string, invert: boolean, newProduct: boolean }) {

    const currentRoute: string = usePathname()

    return (
        <section className={`flex flex-col gap-8 ${invert ? 'lg:flex-row-reverse' : 'lg:flex-row'} lg:items-center lg:gap-[7.81rem]`}>
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
                className="rounded-lg max-lg:hidden"
            />



            <div className="max-lg:text-center space-y-6">
                <p className="text-primary text-[.875rem] tracking-[.625rem] uppercase font-normal">{newProduct ? 'new product' : ''}</p>
                <h2 className="text-black text-[1.75rem] font-bold tracking-[.0625rem] uppercase  ">{name}<br />{currentRoute.slice(1)}</h2>
                <p className="text-black text-[.9375rem] font-medium leading-[1.5625] opacity-50 ">{details}</p>
                <Link href={`${currentRoute}/${route}`} className='primary-btn max-lg:mx-auto'>see product</Link>
            </div>
        </section>
    )
}
