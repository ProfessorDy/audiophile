import zx9Mobile from "@/public/product-zx9-speaker/mobile/image-category-page-preview.jpg"
import zx9Tablet from "@/public/product-zx9-speaker/tablet/image-category-page-preview.jpg"
import zx9Desktop from "@/public/product-zx9-speaker/desktop/image-category-page-preview.jpg"
import zx7Mobile from "@/public/product-zx7-speaker/mobile/image-category-page-preview.jpg"
import zx7Tablet from "@/public/product-zx7-speaker/tablet/image-category-page-preview.jpg"
import zx7Desktop from "@/public/product-zx7-speaker/desktop/image-category-page-preview.jpg"

import ImageLinks from "@/components/ImageLinks"
import SubHero from "@/components/SubHero"
import Product from "@/components/Product"

export default function Speakers() {
    return (
        <>
            <SubHero />
            <main className="padding-x">
                <div className="wrapper space-y-[7.5rem] lg:space-y-40">
                    <Product imageMobile={zx9Mobile} imageTablet={zx9Tablet} imageDesktop={zx9Desktop} name="zx9" details="Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups." route="zx9" invert={false} newProduct={true} />

                    <Product imageMobile={zx7Mobile} imageTablet={zx7Tablet} imageDesktop={zx7Desktop} name="xx99 mark ii" details="The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound." route="zx7" invert={true} newProduct={false} />

                </div>
                <ImageLinks />
            </main>
        </>
    )
}
