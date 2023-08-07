"use client";


import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import Button from "@/components/ui/button";
// import useCart from "@/hooks/use-cart";

const NavbarActions = () => {
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
    // <div className="flex items-center ml-auto gap-x-4">
    //   <Button onClick={() => router.push('/cart')} className="flex items-center px-4 py-2 bg-black rounded-full">
    //     <ShoppingBag
    //       size={20}
    //       color="white"
    //     />
    //     <span className="ml-2 text-sm font-medium text-white">
    //       {cart.items.length}
    //     </span>
    //   </Button>
    // </div>
    <div className="flex justify-around gap-[1.5rem]">
        
        <div className="search-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M15.36,9.38a6,6,0,1,1-6-6A6,6,0,0,1,15.36,9.38Z" fill="none" stroke="currentColor" vectorEffect="non-scaling-stroke" strokeLinejoin="round"></path><line x1="13.61" y1="13.61" x2="20.6" y2="20.6" fill="none" stroke="currentColor" vectorEffect="non-scaling-stroke" strokeLinecap="round" strokeLinejoin="round"></line></svg>
        </div>
        <Button onClick={() => router.push('/cart')}>
        <div className="shopping-cart">
            <p>0</p>
            <svg viewBox="0 0 18 26" fill="white" xmlns="http://www.w3.org/2000/svg">
                 <path fillRule="evenodd" clipRule="evenodd" d="M9 2a4 4 0 00-4 4v1.752A8.502 8.502 0 000 15.5V25h18v-9.5a8.502 8.502 0 00-5-7.748V6a4 4 0 00-4-4zm3 5.374V6a3 3 0 10-6 0v1.374A8.498 8.498 0 018.5 7h1c.87 0 1.71.13 2.5.374zm5 8.126V24H1v-8.5A7.5 7.5 0 018.5 8h1a7.5 7.5 0 017.5 7.5z"></path>
            </svg>
                </div>
        </Button>
                       
                    </div>
  );
}
 
export default NavbarActions;