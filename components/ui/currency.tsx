"use client"
import { useState, useEffect } from "react"
export const formatter = new Intl.NumberFormat("en-US", {
    style: 'currency',
    currency: 'USD'
  })

interface CurrencyProps {
    value: string
}  

export const Currency: React.FC<CurrencyProps> = ({ value }) => {
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)

    },[])

    if(!isMounted) {
        return null
    }
    return (
        <div className="">
            {formatter.format(Number(value))}

        </div>
    )

}