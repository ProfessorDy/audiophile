import Header from '@/components/Header'
import './globals.css'
import type { Metadata } from 'next'
import { Manrope } from 'next/font/google'
import Footer from '@/components/Footer'
import Summary from '@/components/Summary'
import ScrollToTopButton from '@/components/ScrollToTopButton'

const manrope = Manrope({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Audiophile',
  description: 'Immerse yourself in the world of high-fidelity audio with our Audiophile Ecommerce Website Challenge! This challenge, brought to you by FrontendMentor, invites web developers to showcase their design and coding skills by creating an exquisite online shopping experience tailored for audio enthusiasts.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={manrope.className}>
        <Header />
        {children}
        { }
        <Summary />
        <Footer />
        <ScrollToTopButton />
      </body>
    </html>
  )
}
