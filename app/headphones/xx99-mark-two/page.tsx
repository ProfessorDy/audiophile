import ProductDetail from '@/components/ProductDetail'
import productMobile from '@/public/product-xx99-mark-two-headphones/mobile/image-product.jpg'
import productTablet from '@/public/product-xx99-mark-two-headphones/tablet/image-product.jpg'
import productDesktop from '@/public/product-xx99-mark-two-headphones/desktop/image-product.jpg'
import galleryMobile1 from '@/public/product-xx99-mark-two-headphones/mobile/image-gallery-1.jpg'
import galleryMobile2 from '@/public/product-xx99-mark-two-headphones/mobile/image-gallery-2.jpg'
import galleryMobile3 from '@/public/product-xx99-mark-two-headphones/mobile/image-gallery-3.jpg'
import galleryTablet1 from '@/public/product-xx99-mark-two-headphones/tablet/image-gallery-1.jpg'
import galleryTablet2 from '@/public/product-xx99-mark-two-headphones/tablet/image-gallery-2.jpg'
import galleryTablet3 from '@/public/product-xx99-mark-two-headphones/tablet/image-gallery-3.jpg'
import galleryDesktop1 from '@/public/product-xx99-mark-two-headphones/desktop/image-gallery-1.jpg'
import galleryDesktop2 from '@/public/product-xx99-mark-two-headphones/desktop/image-gallery-2.jpg'
import galleryDesktop3 from '@/public/product-xx99-mark-two-headphones/desktop/image-gallery-3.jpg'


import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: "Headphones | xx99 Mark two",
}

export default function Xx99MarkTwo() {
    return (
        <>
            <ProductDetail productMobile={productMobile} productTablet={productTablet} productDesktop={productDesktop} newProduct={true} product="xx99 mark ii" category='headphones' details='The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.' price={299} featuresp1='Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for any situation. Whether you’re taking a business call or just in your own personal space, the auto on/off and pause features ensure that you’ll never miss a beat.' featuresp2='The advanced Active Noise Cancellation with built-in equalizer allow you to experience your audio world on your terms. It lets you enjoy your audio in peace, but quickly interact with your surroundings when you need to. Combined with Bluetooth 5. 0 compliant connectivity and 17 hour battery life, the XX99 Mark II headphones gives you superior sound, cutting-edge technology, and a modern design aesthetic.'
                galleryMobile1={galleryMobile1} galleryMobile2={galleryMobile2} galleryMobile3={galleryMobile3} galleryTablet1={galleryTablet1} galleryTablet2={galleryTablet2} galleryTablet3={galleryTablet3} galleryDesktop1={galleryDesktop1} galleryDesktop2={galleryDesktop2} galleryDesktop3={galleryDesktop3}
            />
        </>
    )
}
