import ProductDetail from '@/components/ProductDetail'
import productMobile from '@/public/product-yx1-earphones/mobile/image-product.jpg'
import productTablet from '@/public/product-yx1-earphones/tablet/image-product.jpg'
import productDesktop from '@/public/product-yx1-earphones/desktop/image-product.jpg'
import galleryMobile1 from '@/public/product-yx1-earphones/mobile/image-gallery-1.jpg'
import galleryMobile2 from '@/public/product-yx1-earphones/mobile/image-gallery-2.jpg'
import galleryMobile3 from '@/public/product-yx1-earphones/mobile/image-gallery-3.jpg'
import galleryTablet1 from '@/public/product-yx1-earphones/tablet/image-gallery-1.jpg'
import galleryTablet2 from '@/public/product-yx1-earphones/tablet/image-gallery-2.jpg'
import galleryTablet3 from '@/public/product-yx1-earphones/tablet/image-gallery-3.jpg'
import galleryDesktop1 from '@/public/product-yx1-earphones/desktop/image-gallery-1.jpg'
import galleryDesktop2 from '@/public/product-yx1-earphones/desktop/image-gallery-2.jpg'
import galleryDesktop3 from '@/public/product-yx1-earphones/desktop/image-gallery-3.jpg'

import ImageLinks from "@/components/ImageLinks"
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: "Earphones | yx1",
}


export default function yx1() {
    return (
        <>
            <ProductDetail productMobile={productMobile} productTablet={productTablet} productDesktop={productDesktop} newProduct={true} product="yx1" category='earphones' details='Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.' price={59} featuresp1='Experience unrivalled stereo sound thanks to innovative acoustic technology. With improved ergonomics designed for full day wearing, these revolutionary earphones have been finely crafted to provide you with the perfect fit, delivering complete comfort all day long while enjoying exceptional noise isolation and truly immersive sound.' featuresp2='TThe YX1 Wireless Earphones features customizable controls for volume, music, calls, and voice assistants built into both earbuds. The new 7-hour battery life can be extended up to 28 hours with the charging case, giving you uninterrupted play time. Exquisite craftsmanship with a splash resistant design now available in an all new white and grey color scheme as well as the popular classic black.'
                galleryMobile1={galleryMobile1} galleryMobile2={galleryMobile2} galleryMobile3={galleryMobile3} galleryTablet1={galleryTablet1} galleryTablet2={galleryTablet2} galleryTablet3={galleryTablet3} galleryDesktop1={galleryDesktop1} galleryDesktop2={galleryDesktop2} galleryDesktop3={galleryDesktop3} />
        </>

    )
}
