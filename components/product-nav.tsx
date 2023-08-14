"use client";


import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import Button from "@/components/ui/button";
// import useCart from "@/hooks/use-cart";

const ProductNavbar = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const router = useRouter();
//   const cart = useCart();

  if (!isMounted) {
    return null;
  }

  return ( 
   
    <div className="flex justify-between content-center px-6 pt-5 w-[100vw] fixed z-10">
         <Button onClick={() => router.push('/categories')}>
         <div className="s w-[1.1rem] h-[1.1rem]">
        <svg viewBox="0 0 19 15" fill="black" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M7.647.146l.707.708L2.207 7H19v1H2.207l6.147 6.146-.707.708L.293 7.5 7.647.146z"></path>
            </svg>

        </div>
         </Button>
        
        <Button onClick={() => router.push('/cart')}>
        <div className="shopping-cart">
            <p className="text-black">0</p>
            <svg viewBox="0 0 18 26" fill="black" xmlns="http://www.w3.org/2000/svg">
                 <path fillRule="evenodd" clipRule="evenodd" d="M9 2a4 4 0 00-4 4v1.752A8.502 8.502 0 000 15.5V25h18v-9.5a8.502 8.502 0 00-5-7.748V6a4 4 0 00-4-4zm3 5.374V6a3 3 0 10-6 0v1.374A8.498 8.498 0 018.5 7h1c.87 0 1.71.13 2.5.374zm5 8.126V24H1v-8.5A7.5 7.5 0 018.5 8h1a7.5 7.5 0 017.5 7.5z"></path>
            </svg>
                </div>
        </Button>
                       
                    </div>
  );
}
 
export default ProductNavbar;