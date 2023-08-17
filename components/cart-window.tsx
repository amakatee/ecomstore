import Modal from '../components/ui/modal'
import usePreviewModal from "@/hooks/use-preview-modal";
import Image from "next/image";
import { X } from 'lucide-react';
import { WindowCartIcon } from "./window-cart-item";


export const ShoppingCart = () => {
    const previewModal = usePreviewModal();
     

    return  <Modal 
    open={previewModal.isOpen} 
    onClose={previewModal.onClose}
  >
    <div className="grid items-start w-full grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8">
      <div className="flex justify-center w-full py-3 text-sm uppercase border-b" >
      <h2> In the cart </h2> 
      </div>

      <div className="flex flex-col gap-5 overflow-scroll">
      {previewModal.data?.map(item => (
       <WindowCartIcon key={item.id} item={item} />
      ))}
      </div>

      <div className="px-4 border-t">
        <div className="flex justify-between py-2 "> 
           <h4>summ</h4>
           <p>2000$</p>
         </div>
         <div className="flex flex-col gap-2 py-3">
           <button className="block py-2 text-sm uppercase border border-black cursor-pointer ">CheckOut</button>
           <button className="block py-2 text-sm uppercase border border-black bg-[black] text-[white] cursor-pointer ">To cart</button>
         </div>

      </div>
     
      
    </div>
  </Modal>
}
