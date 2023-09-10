"use client"
import { useSearchParams, usePathname } from "next/navigation"
import { useRouter } from "next/navigation"
import { useRef, useEffect } from "react"




export default function Dialog() {

    const router = useRouter()
    const currentRoute = usePathname()
    const searchParams = useSearchParams()
    const dialogRef = useRef<null | HTMLDialogElement>(null)
    const showDialog = searchParams.get("showDialog")

    const handleClick = (event: any) => {
        event.preventDefault();
        if (event.target.nodeName === 'DIALOG') {
            dialogRef.current?.close()
            router.replace(currentRoute, { scroll: false });


        }
    }

    useEffect(() => {
        showDialog === 'y' ? dialogRef.current?.showModal() : dialogRef.current?.close()
    }, [showDialog])


    const dialog: JSX.Element | null = showDialog === 'y'
        ? (

            <dialog onClick={handleClick} ref={dialogRef} className="backdrop:bg-black/40 rounded-lg sm:wrapper w-full max-w-[23.5625rem] sm:w-[23.5625rem] sm:translate-x-[50] bg-white py-8 px-7 space-y-8 ">
                <header className="flex justify-between items-center">
                    <h1 className="uppercase text-[1.125rem] font-bold tracking-[0.08038rem] ">cart (3)</h1>
                    <button className="text-[.9375rem] font-medium leading-[1.5625rem] underline opacity-50">Remove all</button>
                </header>
                <section className="space-y-6">
                </section>
                <footer className="space-y-6">
                    <div className="flex justify-between items-center">
                        <p className="text-[.9375rem] font-medium leading-[1.5625rem] opacity-50 uppercase">total </p>
                        <p className="text-[1.125rem] font-bold">price</p>
                    </div>
                    <button className="w-full primary-btn"
                    >Checkout</button>
                </footer>
            </dialog>

        )
        : null

    return dialog
}
