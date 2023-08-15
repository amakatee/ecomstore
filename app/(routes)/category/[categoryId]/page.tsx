import getCategories from '@/actions/get-categories'
import { Navbar } from '@/components/navbar'
import ProductNavbar from '@/components/product-nav'
import { Category, Product, Size, Color } from '@/types'
import CategoryFilter from '../components/category-filter'
import React from 'react'
import getProducts from '@/actions/get-products'
import { ProductCard } from '@/components/ui/product-card'
import getSize from '@/actions/get-sizes'
import getColors from '@/actions/get-colors'
import getCategory from '@/actions/get-category'
import { Noresult } from '@/components/no-result'
import getAllProducts from '@/actions/get-all-products'

interface CategoryPageProps {
  params: {
    categoryId: string
  },
  searchParams: {
    colorId: string,
    sizeId: string

  }
}
const CategoryPage= async ({params, searchParams}: CategoryPageProps) => {
    const categories: Category[] = await getCategories() 
    const products: Product[] = await getProducts({
      categoryId: params.categoryId,
      colorId: searchParams.colorId,
      sizeId: searchParams.sizeId
    })
    const allProducts: Product[] = await getAllProducts()
    // const sizes: Size[] = await getSize()
    // const colors: Color[] = await getColors()
    // const category = getCategory(params.categoryId)
  return (
    <>
    <Navbar categories={categories}  />
    <CategoryFilter categories={categories} products={allProducts}  />

     <ProductGrid products={products} />


  
    </>
  )
}

export default CategoryPage

interface GridProps {
  products: Product[]
}

export const ProductGrid = ({products} : GridProps) => {
  return (
    <div className='grid grid-cols-2'>
      {products.length === 0 && <Noresult />}
      {products.map(product => <ProductCard data={product} />)}
    </div>
  )

}