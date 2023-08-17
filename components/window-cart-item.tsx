import { Product } from "@/types"
import Image from "next/image"
import { X } from 'lucide-react';
import useCart from "@/hooks/use-cart";


interface WindowCartProps {
    item: Product
} 


export const WindowCartIcon: React.FC<WindowCartProps> = ({item}) => {
    const cart = useCart()

    const onItemDelete: React. MouseEventHandler<SVGSVGElement> = (event) => {
        event.preventDefault()
        cart.removeItem(item.id)

    }
    return  <div key={item.id} className="flex px-3 py-5 text-md">

    <div className="overflow-hidden w-50 h-100"> 
      <Image className="" width={50} height={100} alt="image" src={item.images[0].url} />
    </div>

    <div className="flex flex-col w-full gap-2 px-4">
      <div className="flex justify-between w-full gap-2">
         <h3> {item.name}</h3>
         <X onClick={onItemDelete} size={18} strokeWidth={1.2} />
      </div>
      
      <p>{item.color.name} / {item.size.value}</p>
      <div className="flex justify-between">
        <p>qty 1</p>
        <p>2100 $</p>
      </div>
    </div>
  </div>
}