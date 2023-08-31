import ProductDetail from '@/components/ProductDetail'
import productMobile from '@/public/product-xx99-mark-one-headphones/mobile/image-product.jpg'
import productTablet from '@/public/product-xx99-mark-one-headphones/tablet/image-product.jpg'
import productDesktop from '@/public/product-xx99-mark-one-headphones/desktop/image-product.jpg'
import galleryMobile1 from '@/public/product-xx99-mark-one-headphones/mobile/image-gallery-1.jpg'
import galleryMobile2 from '@/public/product-xx99-mark-one-headphones/mobile/image-gallery-2.jpg'
import galleryMobile3 from '@/public/product-xx99-mark-one-headphones/mobile/image-gallery-3.jpg'
import galleryTablet1 from '@/public/product-xx99-mark-one-headphones/tablet/image-gallery-1.jpg'
import galleryTablet2 from '@/public/product-xx99-mark-one-headphones/tablet/image-gallery-2.jpg'
import galleryTablet3 from '@/public/product-xx99-mark-one-headphones/tablet/image-gallery-3.jpg'
import galleryDesktop1 from '@/public/product-xx99-mark-one-headphones/desktop/image-gallery-1.jpg'
import galleryDesktop2 from '@/public/product-xx99-mark-one-headphones/desktop/image-gallery-2.jpg'
import galleryDesktop3 from '@/public/product-xx99-mark-one-headphones/desktop/image-gallery-3.jpg'

import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: "Headphones | xx99 Mark one",
}

export default function Xx99MarkOne() {
    return (
        <>
            <ProductDetail productMobile={productMobile} productTablet={productTablet} productDesktop={productDesktop} newProduct={false} product="xx99 mark i" category='headphones' details='As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.' price={175} featuresp1='As the headphones all others are measured against, the XX99 Mark I demonstrates over five decades of audio expertise, redefining the critical listening experience. This pair of closed-back headphones are made of industrial, aerospace-grade materials to emphasize durability at a relatively light weight of 11 oz.' featuresp2='From the handcrafted microfiber ear cushions to the robust metal headband with inner damping element, the components work together to deliver comfort and uncompromising sound. Its closed-back design delivers up to 27 dB of passive noise cancellation, reducing resonance by reflecting sound to a dedicated absorber. For connectivity, a specially tuned cable is included with a balanced gold connector.'
                galleryMobile1={galleryMobile1} galleryMobile2={galleryMobile2} galleryMobile3={galleryMobile3} galleryTablet1={galleryTablet1} galleryTablet2={galleryTablet2} galleryTablet3={galleryTablet3} galleryDesktop1={galleryDesktop1} galleryDesktop2={galleryDesktop2} galleryDesktop3={galleryDesktop3}
            />
        </>
    )
}
