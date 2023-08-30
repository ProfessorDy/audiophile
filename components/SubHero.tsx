"use client"

import { usePathname } from "next/navigation"

export default function SubHero() {
    const currentRoute: string = usePathname()

    return (

        <section className="py-8 sm:py-[6.3rem] bg-hero mb-16 sm:mb-[7.5rem] lg:mb-40  text-center text-white text-[1.75rem] font-bold tracking-[0.125rem] uppercase w-full  sm:text-[2.5rem] sm:leading-[2.75rem] sm:tracking-[0.08931rem]">
            <h1>{currentRoute.slice(1)}</h1>
        </section>
    )
}
