import ProductDetail from '@/components/ProductDetail'
import productMobile from '@/public/product-zx7-speaker/mobile/image-product.jpg'
import productTablet from '@/public/product-zx7-speaker/tablet/image-product.jpg'
import productDesktop from '@/public/product-zx7-speaker/desktop/image-product.jpg'
import galleryMobile1 from '@/public/product-zx7-speaker/mobile/image-gallery-1.jpg'
import galleryMobile2 from '@/public/product-zx7-speaker/mobile/image-gallery-2.jpg'
import galleryMobile3 from '@/public/product-zx7-speaker/mobile/image-gallery-3.jpg'
import galleryTablet1 from '@/public/product-zx7-speaker/tablet/image-gallery-1.jpg'
import galleryTablet2 from '@/public/product-zx7-speaker/tablet/image-gallery-2.jpg'
import galleryTablet3 from '@/public/product-zx7-speaker/tablet/image-gallery-3.jpg'
import galleryDesktop1 from '@/public/product-zx7-speaker/desktop/image-gallery-1.jpg'
import galleryDesktop2 from '@/public/product-zx7-speaker/desktop/image-gallery-2.jpg'
import galleryDesktop3 from '@/public/product-zx7-speaker/desktop/image-gallery-3.jpg'

import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: "Speakers | zx7",
}


export default function Zx7() {
    return (
        <>
            <ProductDetail productMobile={productMobile} productTablet={productTablet} productDesktop={productDesktop} newProduct={false} product="zx7" category='speaker' details='Stream high quality sound wirelessly with minimal to no loss. The ZX7 speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.' price={350} featuresp1='Reap the advantages of a flat diaphragm tweeter cone. This provides a fast response rate and excellent high frequencies that lower tiered bookshelf speakers cannot provide. The woofers are made from aluminum that produces a unique and clear sound. XLR inputs allow you to connect to a mixer for more advanced usage.' featuresp2='The ZX7 speaker is the perfect blend of stylish design and high performance. It houses an encased MDF wooden enclosure which minimises acoustic resonance. Dual connectivity allows pairing through bluetooth or traditional optical and RCA input. Switch input sources and control volume at your finger tips with the included wireless remote. This versatile speaker is equipped to deliver an authentic listening experience.'
                galleryMobile1={galleryMobile1} galleryMobile2={galleryMobile2} galleryMobile3={galleryMobile3} galleryTablet1={galleryTablet1} galleryTablet2={galleryTablet2} galleryTablet3={galleryTablet3} galleryDesktop1={galleryDesktop1} galleryDesktop2={galleryDesktop2} galleryDesktop3={galleryDesktop3} />
        </>
    )
}