import ImageLink from "./ImageLink"


import headphoneThumbnail from '@/public/shared/desktop/image-category-thumbnail-headphones.png'
import speakerThumbnail from '@/public/shared/desktop/image-category-thumbnail-speakers.png'
import earphoneThumbnail from '@/public/shared/desktop/image-category-thumbnail-earphones.png'

export default function ImageLinks() {
    return (
        <nav className="wrapper grid max-sm:gap-[4.25rem] sm:gap-[0.62rem] lg:gap-[1.87rem] sm:grid-cols-3 pt-[5.5rem] pb-[7.38rem] sm:pt-24 sm:pb-24">
            <ImageLink src={headphoneThumbnail} category='headphones' width={119.874} height={156} handleClick={null} />
            <ImageLink src={speakerThumbnail} category='speakers' width={126.006} height={151.5} handleClick={null} />
            <ImageLink src={earphoneThumbnail} category='earphones' width={147} height={133} handleClick={null} />
        </nav>
    )
}
