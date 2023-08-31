import ProductDetail from '@/components/ProductDetail'
import productMobile from '@/public/product-zx9-speaker/mobile/image-product.jpg'
import productTablet from '@/public/product-zx9-speaker/tablet/image-product.jpg'
import productDesktop from '@/public/product-zx9-speaker/desktop/image-product.jpg'
import galleryMobile1 from '@/public/product-zx9-speaker/mobile/image-gallery-1.jpg'
import galleryMobile2 from '@/public/product-zx9-speaker/mobile/image-gallery-2.jpg'
import galleryMobile3 from '@/public/product-zx9-speaker/mobile/image-gallery-3.jpg'
import galleryTablet1 from '@/public/product-zx9-speaker/tablet/image-gallery-1.jpg'
import galleryTablet2 from '@/public/product-zx9-speaker/tablet/image-gallery-2.jpg'
import galleryTablet3 from '@/public/product-zx9-speaker/tablet/image-gallery-3.jpg'
import galleryDesktop1 from '@/public/product-zx9-speaker/desktop/image-gallery-1.jpg'
import galleryDesktop2 from '@/public/product-zx9-speaker/desktop/image-gallery-2.jpg'
import galleryDesktop3 from '@/public/product-zx9-speaker/desktop/image-gallery-3.jpg'


import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: "Speakers | zx9 ",
}


export default function Zx9() {
    return (
        <>
            <ProductDetail productMobile={productMobile} productTablet={productTablet} productDesktop={productDesktop} newProduct={true} product="zx9" category='speaker' details='Upgrade your sound system with the all new ZX9 active speaker. It&apos;
s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.' price={450} featuresp1='Connect via Bluetooth or nearly any wired source. This speaker features optical, digital coaxial, USB Type-B, stereo RCA, and stereo XLR inputs, allowing you to have up to five wired source devices connected for easy switching. Improved bluetooth technology offers near lossless audio quality at up to 328ft (100m).' featuresp2='Discover clear, more natural sounding highs than the competition with ZX9&apos;
s signature planar diaphragm tweeter. Equally important is its powerful room-shaking bass courtesy of a 6.5” aluminum alloy bass unit. You&apos;
ll be able to enjoy equal sound quality whether in a large room or small den. Furthermore, you will experience new sensations from old songs since it can respond to even the subtle waveforms.'
                galleryMobile1={galleryMobile1} galleryMobile2={galleryMobile2} galleryMobile3={galleryMobile3} galleryTablet1={galleryTablet1} galleryTablet2={galleryTablet2} galleryTablet3={galleryTablet3} galleryDesktop1={galleryDesktop1} galleryDesktop2={galleryDesktop2} galleryDesktop3={galleryDesktop3} />
        </>
    )
}