
import zx9SpeakerMobile from '@/public/home/mobile/image-speaker-zx9.png'
import zx9SpeakerTablet from '@/public/home/tablet/image-speaker-zx9.png'
import zx9SpeakerDesktop from '@/public/home/desktop/image-speaker-zx9.png'
import yx1EarphonesMobile from '@/public/home/mobile/image-earphones-yx1.jpg'
import yx1EarphonesTablet from '@/public/home/tablet/image-earphones-yx1.jpg'
import yx1EarphonesDesktop from '@/public/home/desktop/image-earphones-yx1.jpg'





import Hero from '@/components/Hero'
import Image from 'next/image'
import Link from 'next/link'
import ImageLinks from '@/components/ImageLinks'



export default function Home() {
  return (
    <main className="">
      <Hero />

      <section className="padding-x lg:pb-[12.5rem]  bg-very-light min-h-screen">
        <ImageLinks />

        <section className="wrapper space-y-4 sm:space-y-8 lg:space-y-16">
          {/* ZX9 SPEAKER */}
          <div className='bg-primary px-6 pt-[3.25rem] pb-[3.25rem] sm:pt-16  sm:pb-16 lg:pb-0 lg:pt-24 bg-pattern bg-no-repeat bg-center rounded-lg lg:flex justify-between lg:px-24'>
            <Image
              src={zx9SpeakerMobile}
              alt='zx9 speaker'
              className='sm:hidden w-[12.32575rem] mx-auto'
            />
            <Image
              src={zx9SpeakerTablet}
              alt='zx9 speaker'
              className='max-sm:hidden lg:hidden w-[12.32575rem] mx-auto '
            />
            <Image
              src={zx9SpeakerDesktop}
              alt='zx9 speaker'
              className='max-lg:hidden w-[25.63963rem]'
            />

            <div className='text-white max-lg:text-center  mt-8 sm:mt-16'>
              <h2 className='text-4xl sm:text-[3.5rem] font-bold sm:leading-[3.625rem] tracking-[0.08038rem] sm:tracking-[0.125rem] uppercase'>zx9<br />speaker</h2>
              <p className='mt-6 text-[0.9375rem] font-medium leading-[1.5625rem] opacity-75 max-w-[21.8125rem] max-lg:mx-auto '>Upgrade to premium speakers that are <br /> phenomenally built to deliver truly remarkable sound.</p>
              <Link href='/speakers/zx9' className="secondary-btn max-lg:mx-auto mt-6 sm:mt-10">see product</Link>
            </div>


          </div>

          {/* ZX7 SPEAKER */}
          <div className='py-[6.31rem] px-6 sm:px-16 lg:px-24 rounded-lg bg-zx7-mobile sm:bg-zx7-tablet lg:bg-zx7-desktop lg:sm:bg-zx7-desktop bg-no-repeat bg-cover'>

            <div className='space-y-8 '>
              <h2 className='uppercase text-black text-[1.75rem] font-bold tracking-[0.125rem]'>zx7 speaker</h2>
              <Link href='/speakers/zx7' className='secondary-btn-inverted'>see product</Link>
            </div>

          </div>

          {/* YX1 EARPHONES */}
          <div className='grid gap-6 sm:grid-cols-2 sm:gap-[0.69rem] lg:gap-[1.88rem]'>
            <Image
              src={yx1EarphonesMobile}
              alt='yx1 Earphone'
              className='sm:hidden rounded-lg'
            />
            <Image
              src={yx1EarphonesTablet}
              alt='yx1 Earphone'
              className='max-sm:hidden lg:hidden'
            />
            <Image
              src={yx1EarphonesDesktop}
              alt='yx1 Earphone'
              className='max-lg:hidden'
            />

            <div className='rounded-lg px-6 lg:px-24  py-[2.56rem]  sm:py-[6.31rem] bg-light space-y-8'>
              <h2 className='uppercase text-black text-[1.75rem] font-bold tracking-[0.125rem]'>yx1 earphones</h2>
              <Link href='/earphones/yx1' className='secondary-btn-inverted'>see product</Link>
            </div>
          </div>
        </section>


      </section>



    </main>
  )
}
