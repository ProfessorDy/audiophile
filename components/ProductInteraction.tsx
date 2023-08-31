"use client"

import { useState } from "react"

export default function ProductInteraction() {

    const [count, setCount] = useState<number>(1)

    const add = () => {
        setCount(prev => prev + 1)
    }

    const subtract = () => {
        setCount(prev => prev > 1 ? prev - 1 : prev)
    }

    return (
        <div className="flex gap-4">
            <div className="flex gap-5 p-[0.94rem] bg-light text-black uppercase font-bold text-[0.8125rem] tracking-[.0625rem]">
                <button className="opacity-25" onClick={add}>+</button>
                <p>{count}</p>
                <button className="opacity-25" onClick={subtract}>-</button>
            </div>
            <button className="primary-btn">add to cart</button>
        </div>
    )
}
