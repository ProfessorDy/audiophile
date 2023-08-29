import Image from "next/image"
import SummaryMobile from '@/public/shared/mobile/image-best-gear.jpg'
import SummaryTablet from '@/public/shared/tablet/image-best-gear.jpg'
import SummaryDesktop from '@/public/shared/desktop/image-best-gear.jpg'

export default function Summary() {
    return (
        <section className="padding-x py-[7.5rem] sm:py-24 lg:py-[12.5rem]">
            <div className="wrapper flex max-lg:flex-col gap-10 sm:gap-14 lg:gap-0 lg:justify-between lg:flex-row-reverse lg:items-center ">

                {/* Images  */}
                <Image
                    src={SummaryMobile}
                    alt="Man wearing audiophile headphones"
                    className="sm:hidden"
                />
                <Image
                    src={SummaryTablet}
                    alt="Man wearing audiophile headphones"
                    className="max-sm:hidden lg:hidden"
                />
                <Image
                    src={SummaryDesktop}
                    alt="Man wearing audiophile headphones"
                    className="max-lg:hidden"
                />




                <div className="max-lg:text-center space-y-8 max-w-[20.4375rem] sm:max-w-[35.8125rem] lg:max-w-[27.8125rem] max-lg:mx-auto">
                    <h2 className="text-[1.75rem] sm:text-[2.5rem] font-bold sm:leading-[2.75rem]  tracking-[0.0625rem] sm:tracking-[0.08931rem] uppercase ">Bringing you the <span className="text-span">best</span> audio gear</h2>

                    <p className="text-[0.9375rem] font-medium leading-[1.5625rem]  opacity-50 ">Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.
                    </p>
                </div>
            </div>
        </section>
    )
}
