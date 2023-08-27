"use client"
import Link from "next/link"
import { Container } from "./ui/container"
import { MainNav } from "./main-nav"
import {Product} from '../types'
import NavbarActions from '../components/navbar-actions'

import {Currency} from '../components/ui/currency'
import useCart from "@/hooks/use-cart"
interface ProductProps  {
    product: Product
}

export const ProductDescription =  ({product} : ProductProps) => {
    const cart = useCart()
    const onAddToCart = () => {
        cart.addItem(product)
        console.log(cart.items)

    }
    return (
        <div className='flex flex-col gap-3 px-5 mt-6 lg:mt-0 '>
        <div className='flex flex-col gap-2'>
          <div className='leading-3 tracking-widest uppercase border-box'>
             <h1>{product.name}</h1>
         </div>
         <div className='mb-3 text-sm tracking-widest'>
            <Currency value={product.price} />
         </div>
        </div>

         <div className='pb-5 text-xs tracking-widest'>
             {product.description}
         </div>


         <div className='flex flex-col gap-8'>
         
         <div className='flex flex-col gap-3 '>
         <p className='text-xs font-bold uppercase '>color:</p>
             <div className='flex flex-col justify-center gap-1' >
                 <span style={{ backgroundColor: product?.color?.value }} className={` w-[20px] h-[20px] rounded-full `}></span>
                 {/* <p className='text-xs font-bold uppercase '>{product.color.name}</p> */}
             </div>
         </div>

         <div className='flex flex-col gap-3'>
             <p className='text-xs font-bold uppercase'>size:</p>
             <div className='flex flex-col justify-center gap-1' >

                 <span className={`bg-[#fafafa] w-[20px] h-[30px] text-center `}> <p className='pt-[2px]'>{product.size.value}</p> </span>
             </div>
         </div>

         </div>
         <div className='flex justify-center w-[100%] my-10 '>
         <button  className='border border-black w-[100%] py-4 cursor-pointers'>
            <p onClick={onAddToCart} className='text-sm tracking-widest uppercase'>Add To Cart</p>
        </button>
         </div>
         
        
     </div>
    
    )

}