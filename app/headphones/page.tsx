import ImageLinks from "@/components/ImageLinks"
import Product from "@/components/Product"
import SubHero from "@/components/SubHero"
import mark2Mobile from '@/public/product-xx99-mark-two-headphones/mobile/image-category-page-preview.jpg'
import mark2Tablet from '@/public/product-xx99-mark-two-headphones/tablet/image-category-page-preview.jpg'
import mark2Desktop from '@/public/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg'
import mark1Mobile from '@/public/product-xx99-mark-one-headphones/mobile/image-category-page-preview.jpg'
import mark1Tablet from '@/public/product-xx99-mark-one-headphones/tablet/image-category-page-preview.jpg'
import mark1Desktop from '@/public/product-xx99-mark-one-headphones/desktop/image-category-page-preview.jpg'
import xx59Mobile from '@/public/product-xx59-headphones/mobile/image-category-page-preview.jpg'
import xx59Tablet from '@/public/product-xx59-headphones/tablet/image-category-page-preview.jpg'
import xx59Desktop from '@/public/product-xx59-headphones/desktop/image-category-page-preview.jpg'




export default function Headphones() {
    return (
        <>
            <SubHero />
            <main className="padding-x">
                <div className="wrapper space-y-[7.5rem] lg:space-y-40">
                    <Product imageMobile={mark2Mobile} imageTablet={mark2Tablet} imageDesktop={mark2Desktop} name="xx99 mark ii" details="The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound." route="xx99-mark-two" invert={false} newProduct={true} />
                    <Product imageMobile={mark1Mobile} imageTablet={mark1Tablet} imageDesktop={mark1Desktop} name="xx99 mark ii" details="The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound." route="xx99-mark-one" invert={true} newProduct={false} />

                    <Product imageMobile={xx59Mobile} imageTablet={xx59Tablet} imageDesktop={xx59Desktop} name="xx59" details="Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move." route="xx59" invert={false} newProduct={false} />

                </div>
                <ImageLinks />
            </main>
        </>
    )
}
