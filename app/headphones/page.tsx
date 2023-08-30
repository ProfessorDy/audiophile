import ImageLinks from "@/components/ImageLinks"
import Product from "@/components/Product"
import SubHero from "@/components/SubHero"
import imgMobile from '@/public/product-xx99-mark-two-headphones/mobile/image-category-page-preview.jpg'
import imgTablet from '@/public/product-xx99-mark-two-headphones/tablet/image-category-page-preview.jpg'
import imgDesktop from '@/public/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg'




export default function Headphones() {
    return (
        <>
            <SubHero />
            <main className="padding-x">
                <div className="wrapper">
                    <Product imageMobile={imgMobile} imageTablet={imgTablet} imageDesktop={imgDesktop} name="xx99 mark ii" details="The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound." route="" invert={false} newProduct={true} />
                </div>
                <ImageLinks />
            </main>
        </>
    )
}
