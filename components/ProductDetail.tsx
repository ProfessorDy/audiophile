
import Link from "next/link"
import Image, { StaticImageData } from "next/image"
import ImageLinks from "./ImageLinks"

import Price from "@/app/price"
import ProductInteraction from "./ProductInteraction"
import Recommend from "./Recommend"

export default function ProductDetail({ productMobile, productTablet, productDesktop, newProduct, product, category, details, price, featuresp1, featuresp2, galleryMobile1, galleryMobile2, galleryMobile3, galleryTablet1, galleryTablet2, galleryTablet3, galleryDesktop1, galleryDesktop2, galleryDesktop3 }: { productMobile: StaticImageData, productTablet: StaticImageData, productDesktop: StaticImageData, newProduct: boolean, product: string, category: string, details: string, price: number, featuresp1: string, featuresp2: string, galleryMobile1: StaticImageData, galleryMobile2: StaticImageData, galleryMobile3: StaticImageData, galleryTablet1: StaticImageData, galleryTablet2: StaticImageData, galleryTablet3: StaticImageData, galleryDesktop1: StaticImageData, galleryDesktop2: StaticImageData, galleryDesktop3: StaticImageData }) {



    return (
        <>
            <div className="wrapper padding-x">
                <Link href='./' className="block text-[.9375rem] font-normal leading-[1.5625rem] opacity-50 mt-4 mb-6 sm:mt-8 lg:mt-20 lg:mb-14">Go Back</Link>
                <div className="space-y-[5.5rem] sm:space-y-[7.5rem] lg:space-y-[10rem] ">
                    <section className="flex max-sm:flex-col items-center gap-8 sm:gap-[4.34rem] lg:gap-[7.81rem] w-full">
                        <Image src={productMobile}
                            alt=""
                            className="sm:hidden rounded-lg"
                        />
                        <Image src={productTablet}
                            alt=""
                            className="max-sm:hidden w-1/2 lg:hidden rounded-lg "
                        />
                        <Image src={productDesktop}
                            alt=""
                            className="max-lg:hidden rounded-lg w-1/2"
                        />
                        <div className="space-y-6 sm:space-y-8 sm:w-1/2 lg:w-auto">
                            {newProduct ? (<p className="text-primary text-[.875rem] tracking-[.625rem] uppercase font-normal sm:mb-4">new product</p>) : null}
                            <h1 className="text-black text-[1.75rem] sm:text-[2.5rem] sm:leading-[2.75rem] font-bold tracking-[.0625rem] sm:tracking-[0.08931rem] uppercase">{product}<br />{category}</h1>
                            <p className="text-black text-[.9375rem] font-medium leading-[1.5625rem ] opacity-50 sm:mt-8">{details}</p>
                            <p className="text-black font-bold text-[1.125rem] tracking-[0.08038rem] uppercase ">₦ {Price(price)}</p>
                            <ProductInteraction />
                        </div>
                    </section>

                    <section className="flex max-lg:flex-col gap-[5.5rem] lg:gap-[7.81rem]">
                        <div className="text-black text-[.9375rem] font-medium leading-[1.5625rem]  space-y-6 sm:space-y-8 lg:w-1/2 lg:max-w-[39.6875rem]">
                            <h2 className="text-[1.5rem] sm:text-[2rem] font-bold leading-[2.25rem] tracking-[.05356rem] sm:tracking-[.07144rem] uppercase">features</h2>
                            <p className="opacity-50">{featuresp1}</p>
                            <p className="opacity-50">{featuresp2}</p>
                        </div>
                        <div className="flex max-sm:flex-col lg:flex-col gap-6 sm:gap-[0.69rem] lg:gap-8">
                            <h2 className="text-black text-[1.5rem] font-bold leading-[2.25rem] tracking-[.05356rem] uppercase sm:w-1/2 lg:w-full">in the box</h2>
                            {
                                product === 'xx99 mark ii'
                                    ?
                                    <ul>
                                        <li className="text-primary opacity-100 font-bold leading-[1.5625rem]  text-[.9375rem] ">1x<span className="capitalize ml-6 text-black font-medium opacity-50">Headphone unit</span></li>
                                        <li className="text-primary opacity-100 font-bold leading-[1.5625rem]  text-[.9375rem] ">2x<span className="capitalize  ml-6 text-black font-medium opacity-50">Replacement earcups</span></li>
                                        <li className="text-primary opacity-100 font-bold leading-[1.5625rem]  text-[.9375rem] ">1x<span className="capitalize  ml-6 text-black font-medium opacity-50">User manual</span></li>
                                        <li className="text-primary opacity-100 font-bold leading-[1.5625rem]  text-[.9375rem] ">1x<span className="capitalize  ml-6 text-black font-medium opacity-50">3.5mm 5m audio cable</span></li>
                                        <li className="text-primary opacity-100 font-bold leading-[1.5625rem]  text-[.9375rem] ">1x<span className="capitalize  ml-6 text-black font-medium opacity-50">Travel bag</span></li>
                                    </ul>
                                    : product === 'xx99 mark i'
                                        ?
                                        <ul>
                                            <li className="text-primary opacity-100 font-bold leading-[1.5625rem]  text-[.9375rem] ">1x<span className="capitalize ml-6 text-black font-medium opacity-50">Headphone unit</span></li>
                                            <li className="text-primary opacity-100 font-bold leading-[1.5625rem]  text-[.9375rem] ">2x<span className="capitalize  ml-6 text-black font-medium opacity-50">Replacement earcups</span></li>
                                            <li className="text-primary opacity-100 font-bold leading-[1.5625rem]  text-[.9375rem] ">1x<span className="capitalize  ml-6 text-black font-medium opacity-50">User manual</span></li>
                                            <li className="text-primary opacity-100 font-bold leading-[1.5625rem]  text-[.9375rem] ">1x<span className="capitalize  ml-6 text-black font-medium opacity-50">3.5mm 5m audio cable</span></li>

                                        </ul>
                                        : product === 'xx59'
                                            ?
                                            <ul>
                                                <li className="text-primary opacity-100 font-bold leading-[1.5625rem]  text-[.9375rem] ">1x<span className="capitalize ml-6 text-black font-medium opacity-50">Headphone unit</span></li>
                                                <li className="text-primary opacity-100 font-bold leading-[1.5625rem]  text-[.9375rem] ">2x<span className="capitalize  ml-6 text-black font-medium opacity-50">Replacement earcups</span></li>
                                                <li className="text-primary opacity-100 font-bold leading-[1.5625rem]  text-[.9375rem] ">1x<span className="capitalize  ml-6 text-black font-medium opacity-50">User manual</span></li>
                                                <li className="text-primary opacity-100 font-bold leading-[1.5625rem]  text-[.9375rem] ">1x<span className="capitalize  ml-6 text-black font-medium opacity-50">3.5mm 5m audio cable</span></li>
                                            </ul>
                                            : product == 'zx9'
                                                ?
                                                <ul>
                                                    <li className="text-primary opacity-100 font-bold leading-[1.5625rem]  text-[.9375rem] ">2x<span className="capitalize ml-6 text-black font-medium opacity-50">Speaker unit</span></li>
                                                    <li className="text-primary opacity-100 font-bold leading-[1.5625rem]  text-[.9375rem] ">2x<span className="capitalize  ml-6 text-black font-medium opacity-50">Speaker Cloth Panel</span></li>
                                                    <li className="text-primary opacity-100 font-bold leading-[1.5625rem]  text-[.9375rem] ">1x<span className="capitalize  ml-6 text-black font-medium opacity-50">User manual</span></li>
                                                    <li className="text-primary opacity-100 font-bold leading-[1.5625rem]  text-[.9375rem] ">1x<span className="capitalize  ml-6 text-black font-medium opacity-50">3.10m audio cable</span></li>
                                                    <li className="text-primary opacity-100 font-bold leading-[1.5625rem]  text-[.9375rem] ">1x<span className="capitalize  ml-6 text-black font-medium opacity-50">10m Optical Cable</span></li>
                                                </ul>
                                                : product === 'zx7'
                                                    ? <ul>
                                                        <li className="text-primary opacity-100 font-bold leading-[1.5625rem]  text-[.9375rem] ">2x<span className="capitalize ml-6 text-black font-medium opacity-50">Speaker unit</span></li>
                                                        <li className="text-primary opacity-100 font-bold leading-[1.5625rem]  text-[.9375rem] ">2x<span className="capitalize  ml-6 text-black font-medium opacity-50">Speaker Cloth Panel</span></li>
                                                        <li className="text-primary opacity-100 font-bold leading-[1.5625rem]  text-[.9375rem] ">1x<span className="capitalize  ml-6 text-black font-medium opacity-50">User manual</span></li>
                                                        <li className="text-primary opacity-100 font-bold leading-[1.5625rem]  text-[.9375rem] ">1x<span className="capitalize  ml-6 text-black font-medium opacity-50">3.7m audio cable</span></li>
                                                        <li className="text-primary opacity-100 font-bold leading-[1.5625rem]  text-[.9375rem] ">1x<span className="capitalize  ml-6 text-black font-medium opacity-50">7m Optical Cable</span></li>
                                                    </ul>
                                                    :
                                                    <ul>
                                                        <li className="text-primary opacity-100 font-bold leading-[1.5625rem]  text-[.9375rem] ">2x<span className="capitalize ml-6 text-black font-medium opacity-50">Earphone unit</span></li>
                                                        <li className="text-primary opacity-100 font-bold leading-[1.5625rem]  text-[.9375rem] ">6x<span className="capitalize  ml-6 text-black font-medium opacity-50">Multi-size earplugs</span></li>
                                                        <li className="text-primary opacity-100 font-bold leading-[1.5625rem]  text-[.9375rem] ">1x<span className="capitalize  ml-6 text-black font-medium opacity-50">User manual</span></li>
                                                        <li className="text-primary opacity-100 font-bold leading-[1.5625rem]  text-[.9375rem] ">1x<span className="capitalize  ml-6 text-black font-medium opacity-50">USB-C charging cable</span></li>
                                                        <li className="text-primary opacity-100 font-bold leading-[1.5625rem]  text-[.9375rem] ">1x<span className="capitalize  ml-6 text-black font-medium opacity-50">Travel pouch</span></li>
                                                    </ul>
                            }
                        </div>
                    </section>

                    <section className="flex gap-5 max-sm:flex-col items-center">
                        <div className="flex flex-col gap-5 sm:w-1/2">
                            {/* Image 1 */}
                            <Image
                                src={galleryMobile1}
                                alt=""
                                className="sm:hidden rounded-lg" />
                            <Image
                                src={galleryTablet1}
                                alt=""
                                className="max-sm:hidden lg:hidden rounded-lg" />
                            <Image
                                src={galleryDesktop1}
                                alt=""
                                className="max-lg:hidden rounded-lg" />
                            {/* Image 2 */}
                            <Image
                                src={galleryMobile2}
                                alt=""
                                className="sm:hidden rounded-lg" />
                            <Image
                                src={galleryTablet2}
                                alt=""
                                className="max-sm:hidden lg:hidden rounded-lg" />
                            <Image
                                src={galleryDesktop2}
                                alt=""
                                className="max-lg:hidden rounded-lg" />
                        </div>
                        {/* Image 3 */}
                        <Image
                            src={galleryMobile3}
                            alt=""
                            className="sm:hidden rounded-lg" />
                        <Image
                            src={galleryTablet3}
                            alt=""
                            className="max-sm:hidden lg:hidden rounded-lg w-1/2" />
                        <Image
                            src={galleryDesktop3}
                            alt=""
                            className="max-lg:hidden rounded-lg" />
                    </section>


                </div>

            </div >
            <Recommend />
            <ImageLinks />
        </>
    )
}
