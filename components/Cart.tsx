"use client"

import { useSearchParams } from "next/navigation"
import { useRef, useEffect } from "react"

export default function Cart() {
    return (
        <dialog className="px-7 sm:px-8 py-8 :backdrop">
            <div>
                <div>
                    <h1>cart {3}</h1>
                    <button>Remove all</button>
                </div>
                <div>products</div>
                <div>
                    <h2>TOTAL</h2>
                    <p>₦ {453150}</p>
                </div>
            </div>

        </dialog>
    )
}
