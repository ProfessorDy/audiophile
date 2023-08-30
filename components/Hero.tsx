



import Link from 'next/link'

export default function Hero() {
    return (
        <>
            <div className="bg-hero w-full">
                <section className="bg-hero-mobile sm:bg-hero-tablet lg:bg-hero-desktop bg-left-top bg-no-repeat  bg-contain padding-x py-[6.75rem] sm:py-[7.88rem]  lg:pt-24 lg:pb-[9.88rem]   wrapper max-lg:text-center text-white uppercase">
                    <p className="text-[0.875rem] font-normal tracking-[0.625rem] opacity-[0.4964] ">new product</p>
                    <h1 className="text-4xl sm:text-[3.5rem] sm:leading-[3.625rem] font-bold tracking-[0.08038rem] sm:tracking-[0.125rem] mt-4 sm:mt-6 mx-auto lg:mx-0">xx99 mark ii<br />headphones</h1>
                    <p className="normal-case text-[0.9375rem] font-medium leading-[1.5625rem] opacity-75 mt-6  sm:mx-auto lg:mx-0">
                        Experience natural, lifelike audio and exceptional <br className='max-sm:hidden' />  quality made for the passionate music <br className='max-sm:hidden' /> enthusiast.
                    </p>
                    <Link href='./headphones/xx99-mark-two' className="primary-btn mx-auto lg:mx-0 mt-7 sm:mt-10 ">see products</Link>
                </section>
            </div>

        </>
    )
}
