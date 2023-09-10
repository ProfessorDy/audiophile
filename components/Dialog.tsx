"use client"
import { useSearchParams } from "next/navigation"
import { useRef, useEffect } from "react"



export default function Dialog() {

    const searchParams = useSearchParams()
    const dialogRef = useRef<null | HTMLDialogElement>(null)
    const showDialog = searchParams.get("showDialog")

    useEffect(() => {
        showDialog === 'y' ? dialogRef.current?.showModal() : dialogRef.current?.close()
    }, [showDialog])


    const dialog: JSX.Element | null = showDialog === 'y'
        ? (
            <div className="relative">
                <dialog ref={dialogRef} className="backdrop:bg-black/40 rounded-lg wrapper w-full max-w-[23.5625rem] sm:ml-auto bg-white py-8 px-7 space-y-8">
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
            </div>
        )
        : null

    return dialog
}
