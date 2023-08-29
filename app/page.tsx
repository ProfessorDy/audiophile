
import HeroMobile from "@/public/home/mobile/image-header.jpg"
import HeroTab from "@/public/home/tablet/image-header.jpg"
import HeroDesk from "@/public/home/desktop/image-hero.jpg"

import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="absolute bg-hero top-0 min-h-screen  w-full -z-50"></div>
      <Image
        src={HeroMobile}
        alt="background image"
        className="absolute top-0 -z-40 sm:hidden" />
      <Image
        src={HeroTab}
        alt="background image"
        className="absolute top-0 -z-40 max-sm:hidden lg:hidden" />
      <Image
        src={HeroDesk}
        alt="background image"
        className="absolute top-0 -z-40 max-lg:hidden" />

      <div className="padding-x py-32 ">

      </div>
    </main>
  )
}
