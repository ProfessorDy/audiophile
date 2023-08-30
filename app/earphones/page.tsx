import yx1Mobile from "@/public/product-yx1-earphones/mobile/image-category-page-preview.jpg"
import yx1Tablet from "@/public/product-yx1-earphones/tablet/image-category-page-preview.jpg"
import yx1Desktop from "@/public/product-yx1-earphones/desktop/image-category-page-preview.jpg"

import ImageLinks from "@/components/ImageLinks";
import SubHero from "@/components/SubHero";
import Product from "@/components/Product";

import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: "Earphones",
}


export default function Earphones() {
    return (
        <>
            <SubHero />
            <main className="padding-x">
                <div className="wrapper space-y-[7.5rem] lg:space-y-40">
                    <Product imageMobile={yx1Mobile} imageTablet={yx1Tablet} imageDesktop={yx1Desktop} name="yx1" details="Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature." route="yx1" invert={false} newProduct={true} />



                </div>
                <ImageLinks />
            </main>
        </>
    )
}
