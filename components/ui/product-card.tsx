'use client'
import { Product } from "@/types"

import Image from 'next/image'

interface ProductCardProps {
    data: Product
}

export const ProductCard: React.FC<ProductCardProps> = ({ data}) => {
    console.log(data)
    return <div className="mb-6">
        <div className=" aspect-[3/4.5] ">
        <Image
        className="w-[100%] h-[100%] object-cover" src={data.images[0].url}

      width={500}
      height={500}
      alt="Picture of the author"
    />
            {/* <img className="w-[100%] h-[100%] object-cover" src={data.images[0].url} alt="image" /> */}
        </div>
        <h1>{data.name}</h1>
     
       
    </div>
}