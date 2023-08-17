"use client"

import { ShoppingCart } from "@/components/cart-window"
import { useEffect, useState } from "react"



const ModalProvider = () => {
    const [isMounted, setIsMounted] = useState(false)
    useEffect(() => {
        setIsMounted(true)

    }, [])

    if(!isMounted) {
        return null
    }
    return ( 
        <>
         <ShoppingCart />
        </>
    )


}

export default ModalProvider