import { Navbar } from "../../components/navbar"
import { Footer } from "../../components/footer"
import { Container } from "@/components/ui/container"

import getCategories from "@/actions/get-categories"
import { Billboard } from "@/components/billboard"
import getBillboard from "@/actions/get-billboards"
import getProducts from "@/actions/get-products"
import { ProductList } from "@/components/product-list"



export default async function HomePage() {
  const categories = await getCategories()

  const billboard =await getBillboard("d8af523f-6696-4357-9fd4-52ee9946e190")
  const products = await getProducts({isFeatured: true})
  console.log(products)

  return (
    <>
    <Navbar categories={categories} />
      <main className=" top-0 left-0 w-[100vw] h-[100vh] z-[-1] ">
         <div className="billboard">
            <Billboard data={billboard} />
          </div>
          
      </main>
      <div className="w-[100vw] h-[100vh] z-100">
            <ProductList title="Featured Products" items={products} />
          </div>
    
    {/* <Footer /> */}
    </>
  )
}
