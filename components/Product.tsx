import Image, { StaticImageData } from "next/image"

export default function Product({ image, name, category, details, route }: { image: StaticImageData, name: string, category: string, details: string, route: string }) {
    return (
        <section>
            <Image
                src={image}
                alt={`${name} ${category}`} />
        </section>
    )
}
