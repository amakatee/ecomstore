"use client"
import { Noresult } from '@/components/no-result'
import { Category, Product } from '@/types'
import {useRouter} from 'next/navigation'
import { ProductCard } from '@/components/ui/product-card'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { cn } from '@/utils/lib'
import React from 'react'
interface FilterProps {
    categories: Category[],
     products: Product[]
}
const CategoryFilter: React.FC<FilterProps> = ({categories, products}) => {
    const router = useRouter()
    const pathname = usePathname()
    const routes = categories.map((route) => ({
      href:`/category/${route.id}`,
      label: route.name,
      active: pathname === `/category/${route.id}`
  }))
  return (
    <>
    <div className='flex justify-around pb-10 pt-28'>
    <Link
    href={'/category'}
    className={cn(
      "text-xs font-bold uppercase transition-colors hover:text-black", 
      pathname === '/category' ? "text-black": "text-neutral-500"
   )}
    >
      All
    </Link>
    {routes.map(route => (
    
            <Link 
            key={route.href}
            href={route.href}
            className={cn(
                "text-xs font-bold uppercase transition-colors hover:text-black", 
                route.active ? "text-black": "text-neutral-500"
            )}
            >
                {route.label}
            </Link>
        ))}
    
     </div>
    
</>

  )
}

export default CategoryFilter