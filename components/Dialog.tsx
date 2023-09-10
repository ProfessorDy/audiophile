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
            <dialog ref={dialogRef} className=" backdrop:bg-black/40 rounded-lg wrapper max-w-[23.5625rem] sm:ml-auto bg-white py-8 px-7 space-y-8">


                <header>
                    <h1>cart</h1>
                    <button>Remove all</button>
                </header>
                <section>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate nesciunt temporibus possimus asperiores in, repellendus distinctio dicta enim. Labore laborum iusto saepe facilis, earum sed deleniti error fugit illo incidunt.

                </section>
                <footer className="space-y-6">
                    <div>total ()</div>
                    <button className="w-full primary-btn"
                    >Checkout</button>
                </footer>



            </dialog>
        )
        : null

    return dialog
}
