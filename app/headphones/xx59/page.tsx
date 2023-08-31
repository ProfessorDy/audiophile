import ProductDetail from '@/components/ProductDetail'
import productMobile from '@/public/product-xx59-headphones/mobile/image-product.jpg'
import productTablet from '@/public/product-xx59-headphones/tablet/image-product.jpg'
import productDesktop from '@/public/product-xx59-headphones/desktop/image-product.jpg'
import galleryMobile1 from '@/public/product-xx59-headphones/mobile/image-gallery-1.jpg'
import galleryMobile2 from '@/public/product-xx59-headphones/mobile/image-gallery-2.jpg'
import galleryMobile3 from '@/public/product-xx59-headphones/mobile/image-gallery-3.jpg'
import galleryTablet1 from '@/public/product-xx59-headphones/tablet/image-gallery-1.jpg'
import galleryTablet2 from '@/public/product-xx59-headphones/tablet/image-gallery-2.jpg'
import galleryTablet3 from '@/public/product-xx59-headphones/tablet/image-gallery-3.jpg'
import galleryDesktop1 from '@/public/product-xx59-headphones/desktop/image-gallery-1.jpg'
import galleryDesktop2 from '@/public/product-xx59-headphones/desktop/image-gallery-2.jpg'
import galleryDesktop3 from '@/public/product-xx59-headphones/desktop/image-gallery-3.jpg'

import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: "Headphones | xx59 ",
}

export default function Xx59() {
    return (
        <>
            <ProductDetail productMobile={productMobile} productTablet={productTablet} productDesktop={productDesktop} newProduct={false} product="xx59" category='headphones' details='Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.' price={89} featuresp1='These headphones have been created from durable, high-quality materials tough enough to take anywhere. Its compact folding design fuses comfort and minimalist style making it perfect for travel. Flawless transmission is assured by the latest wireless technology engineered for audio synchronization with videos.' featuresp2='More than a simple pair of headphones, this headset features a pair of built-in microphones for clear, hands-free calling when paired with a compatible smartphone. Controlling music and calls is also intuitive thanks to easy-access touch buttons on the earcups. Regardless of how you use the XX59 headphones, you can do so all day thanks to an impressive 30-hour battery life that can be rapidly recharged via USB-C.'
                galleryMobile1={galleryMobile1} galleryMobile2={galleryMobile2} galleryMobile3={galleryMobile3} galleryTablet1={galleryTablet1} galleryTablet2={galleryTablet2} galleryTablet3={galleryTablet3} galleryDesktop1={galleryDesktop1} galleryDesktop2={galleryDesktop2} galleryDesktop3={galleryDesktop3}
            />
        </>
    )
}
