'use client'
import { Product } from "@/types"
import { Currency } from "./currency"

import Image from 'next/image'
import { useRouter } from 'next/navigation'

interface ProductCardProps {
    data: Product
}

export const ProductCard: React.FC<ProductCardProps> = ({ data}) => {
  const router = useRouter()
  const handleRedirect = () => {
    router.push(`/product/${data.id}`)
  }
    console.log(data)
    return <div onClick={handleRedirect} className="mb-6">
        <div className=" aspect-[3/4.5] ">
        <Image
        className="w-[100%] h-[100%] object-cover" src={data.images[0].url}

      width={500}
      height={500}
      alt="Picture of the author"
    />
            {/* <img className="w-[100%] h-[100%] object-cover" src={data.images[0].url} alt="image" /> */}
        </div>
        <div className="flex justify-between gap-4 px-2 py-1 text-sm">
          <h1 className="uppercase ">{data.name}</h1>
          <Currency value={data.price} />
        </div>
     
       
    </div>
}