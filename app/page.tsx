

import HeroText from '@/components/HeroText'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="">
      <HeroText />

      <section className="padding-x bg-very-light min-h-screen">
        <div className="wrapper">3 categories</div>
        <div className="wrapper">3 products</div>
        <div className="wrapper">summary card</div>
      </section>

    </main>
  )
}
