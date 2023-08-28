

import arrowRight from '@/public/shared/desktop/icon-arrow-right.svg'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'

export default function MobileLink({ src, category, width, height, handleClick }: { src: StaticImageData, category: string, width: number, height: number, handleClick: any }) {
    return (
        <li className='bg-light text-black text-center uppercase rounded-lg relative py-[22px] font-bold max-w-md mx-auto'>

            <Image className='absolute top-[-42px] left-[-10px] mx-auto'
                src={src}
                alt={`${category}`}
                width={width}
                height={height} />
            <h2 className='mb-4 text-[15px] tracking-[1.071px]'>{category}</h2>
            <div className='flex items-center gap-3 justify-center'>

                <Link href={`/${category}`} className=' opacity-50' onClick={handleClick}>
                    shop
                </Link>
                <Image
                    src={arrowRight}
                    alt='' />
            </div>


        </li>
    )
}
