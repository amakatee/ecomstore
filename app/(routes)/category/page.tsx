import getCategories from '@/actions/get-categories'
import { Navbar } from '@/components/navbar'
import ProductNavbar from '@/components/product-nav'
import { Category, Product, Size, Color } from '@/types'
// import CategoryFilter from '@/components/category-filter'
import React from 'react'
import CategoryFilter from './components/category-filter'
import getProducts from '@/actions/get-products'
import { ProductCard } from '@/components/ui/product-card'
import getSize from '@/actions/get-sizes'
import getColors from '@/actions/get-colors'
import getCategory from '@/actions/get-category'
import { Noresult } from '@/components/no-result'
import getAllProducts from '@/actions/get-all-products'


const CategoryAll= async () => {
    const categories: Category[] = await getCategories() 
  
    const allProducts: Product[] = await getAllProducts()
    // const sizes: Size[] = await getSize()
    // const colors: Color[] = await getColors()
    // const category = getCategory(params.categoryId)
  return (
    <>
    <Navbar categories={categories}  />
    <CategoryFilter categories={categories} products={allProducts}  />
    <div className='grid grid-cols-2'>
      {allProducts.length === 0 && <Noresult />}
      {allProducts.map(product => <ProductCard key={product.id} data={product} />)}


    </div>
    </>
  )
}

export default CategoryAll