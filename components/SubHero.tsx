"use client"

import { usePathname } from "next/navigation"

export default function SubHero() {
    const currentRoute: string = usePathname()

    return (

        <section className="py-8 bg-hero text-center text-white text-[1.75rem] font-bold tracking-[0.125rem] uppercase w-full ">
            <h1>{currentRoute.slice(1)}</h1>
        </section>
    )
}
