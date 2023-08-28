"use client"

import { cn } from '@/utils/lib'
import {usePathname} from 'next/navigation'
import { Category } from '../types'
import Link from 'next/link'
import useNavbarMenu from '../hooks/use-navbar-menu'
import Button from '@/components/ui/button'
import { useState, useEffect } from 'react'





interface MainNavProps  {
    data: Category[]
}


export const MainNav: React.FC<MainNavProps> = ({ data }) => {
    const pathname = usePathname()
    const routes = [{
        href:`/category`,
        label: "About",
    
    }]
    const navbarMenu = useNavbarMenu()
    const [isMounted, setIsMounted] = useState(false);
    

    useEffect(() => {
      setIsMounted(true);
    }, []);
  
  if (!isMounted) {
      return null;
    }

    // const routes1 = data.map((route) => ({
    //     href:`/category/${route.id}`,
    //     label: route.name,
    //     active: pathname === `/category/${route.id}`
    // }))

 

    const onPreview:React.MouseEventHandler<HTMLButtonElement>  = (e) => {
        e.preventDefault()
        
        navbarMenu.onOpen(routes)
        console.log("n",routes)

    }
    return <div className='flex justify-between'>
        <Button onClick={onPreview}>
        <div className='flex flex-col gap-1 burger-menu'>
            <span className='w-[35px] h-[1.5px] bg-[black]'></span>
            <span className='w-[35px] h-[1.5px] bg-[black]'></span>
        </div>
        </Button>
        {/* {routes.map(route => (
    
            <Link 
            key={route.href}
            href={route.href}
            className={cn(
                "text-sm font-medium transition-colors hover:text-black", 
                route.active ? "text-black": "text-neutral-500"
            )}
            >
                {route.label}
            </Link>
        ))} */}
    </div>

}