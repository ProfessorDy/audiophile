import ImageLinks from "@/components/ImageLinks"
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: "Earphones | yx1",
}


export default function yx1() {
    return (
        <>
            <main className="padding-x">
                <ImageLinks />
            </main>
        </>

    )
}
