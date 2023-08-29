
import headphoneThumbnail from '@/public/shared/desktop/image-category-thumbnail-headphones.png'
import speakerThumbnail from '@/public/shared/desktop/image-category-thumbnail-speakers.png'
import earphoneThumbnail from '@/public/shared/desktop/image-category-thumbnail-earphones.png'
import zx9SpeakerMobile from '@/public/home/mobile/image-speaker-zx9.png'
import zx9SpeakerTablet from '@/public/home/tablet/image-speaker-zx9.png'
import zx9SpeakerDesktop from '@/public/home/desktop/image-speaker-zx9.png'
import zx7SpeakerMobile from '@/public/home/mobile/image-speaker-zx7.jpg'
import zx7SpeakerTablet from '@/public/home/tablet/image-speaker-zx9.png'
import zx7SpeakerDesktop from '@/public/home/desktop/image-speaker-zx7.jpg'
import yx1EarphonesMobile from '@/public/home/mobile/image-earphones-yx1.jpg'
import yx1EarphonesTablet from '@/public/home/tablet/image-earphones-yx1.jpg'
import yx1EarphonesDesktop from '@/public/home/desktop/image-earphones-yx1.jpg'





import ImageLink from '@/components/ImageLink'
import HeroText from '@/components/HeroText'
import Image from 'next/image'
import Link from 'next/link'


export default function Home() {
  return (
    <main className="">
      <HeroText />

      <section className="padding-x  bg-very-light min-h-screen">
        <nav className="wrapper grid max-sm:gap-[4.25rem] sm:gap-[0.62rem] lg:gap-[1.87rem] sm:grid-cols-3 pt-[5.5rem] pb-[7.38rem] sm:pt-24 sm:pb-24">
          <ImageLink src={headphoneThumbnail} category='headphones' width={119.874} height={156} handleClick={null} />
          <ImageLink src={speakerThumbnail} category='speakers' width={126.006} height={151.5} handleClick={null} />
          <ImageLink src={earphoneThumbnail} category='earphones' width={147} height={133} handleClick={null} />
        </nav>
        <section className="wrapper gap-y-4 sm:gap-y-8 lg:gap-y-16">
          {/* ZX9 SPEAKER */}
          <div className='bg-primary px-6 py-14 sm:py-16  bg-pattern bg-no-repeat bg-center rounded-lg'>
            <Image
              src={zx9SpeakerMobile}
              alt='zx9 speaker'
              className='sm:hidden w-[12.32575rem] mx-auto'
            />
            <Image
              src={zx9SpeakerTablet}
              alt='zx9 speaker'
              className='max-sm:hidden lg:hidden'
            />
            <Image
              src={zx9SpeakerDesktop}
              alt='zx9 speaker'
              className='max-lg:hidden'
            />

            <div className='text-white text-center space-y-6 mt-8'>
              <h2 className='text-4xl sm:text-[3.5rem] font-bold sm:leading-[3.625rem] tracking-[0.08038rem] sm:tracking-[0.125rem] uppercase'>zx9 speaker</h2>
              <p className='text-[0.9375rem] font-medium leading-[1.5625rem] opacity-75 '>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
              <Link href='/speakers#zx9' className="secondary-btn mx-auto">see product</Link>
            </div>


          </div>

          {/* ZX7 SPEAKER */}
          <div >
            <Image
              src={zx7SpeakerMobile}
              alt='zx7 speaker'
              className='sm:hidden'
            />
            <Image
              src={zx7SpeakerTablet}
              alt='zx7 speaker'
              className='max-sm:hidden lg:hidden'
            />
            <Image
              src={zx7SpeakerDesktop}
              alt='zx7 speaker'
              className='max-lg:hidden'
            />

          </div>

          {/* YX1 EARPHONES */}
          <div>
            <Image
              src={yx1EarphonesMobile}
              alt='yx1 Earphone'
              className='sm:hidden'
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
          </div>
        </section>


      </section>



    </main>
  )
}
