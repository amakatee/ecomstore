"use client"

import { cn } from '@/utils/lib'
import {usePathname} from 'next/navigation'
import { Category } from '../types'
import Link from 'next/link'

interface MainNavProps  {
    data: Category[]
}

export const MainNav: React.FC<MainNavProps> = ({ data }) => {
    const pathname = usePathname()

    const routes = data.map((route) => ({
        href:`/category/${route.id}`,
        label: route.name,
        active: pathname === `/category/${route.id}`
    }))
    return <div className='flex justify-between'>
        <div className='flex flex-col gap-1 burger-menu'>
            <span className='w-[35px] h-[1.5px] bg-[white]'></span>
            <span className='w-[35px] h-[1.5px] bg-[white]'></span>
        </div>
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