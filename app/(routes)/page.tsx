import { Navbar } from "../../components/navbar"
import { Footer } from "../../components/footer"
import { Container } from "@/components/ui/container"

import getCategories from "@/actions/get-categories"
import { Billboard } from "@/components/billboard"
import getBillboard from "@/actions/get-billboards"
import getProducts from "@/actions/get-products"
import { ProductList } from "@/components/product-list"
import {Category, BillBoard , Product} from '../../types'



export default async function HomePage() {
  // const categories = await getCategories()

   const billboard: BillBoard = await getBillboard("76f1cd7d-36b3-4967-9235-fda6bbd844d1")
    const products: Product[] = await getProducts({isFeatured: true})
  // console.log(products)
  // console.log(products)
  console.log(billboard)
 
  return (
    <>
    <Navbar categories={[] as Category[]} />
      <main className=" top-0 left-0 w-[100vw] h-[100vh] z-[-1] ">
         <div className="billboard">
            <Billboard data={billboard}/>
          </div>
          
      </main>
      <div className="w-[100vw] h-[100vh] z-100">
            <ProductList title="Featured Products" items={products} />
          </div>
    
    {/* <Footer /> */}
    </>
  )
}


