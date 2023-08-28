"use client"

import { ShoppingCart } from "@/components/cart-window"
import { useEffect, useState } from "react"
import {NavbarSideMenu} from '@/components/side-menu'



const NavbarModalProvider = () => {
    const [isMounted, setIsMounted] = useState(false)
    useEffect(() => {
        setIsMounted(true)

    }, [])

    if(!isMounted) {
        return null
    }
    return ( 
        <>
         <NavbarSideMenu />
        </>
    )


}

export default NavbarModalProvider