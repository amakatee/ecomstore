import { Navbar } from "../../components/navbar"
import { Footer } from "../../components/footer"
import { Container } from "@/components/ui/container"
import { ToastProvider } from "@/providers/toast-provider"
import getCategories from "@/actions/get-categories"
import { Billboard } from "@/components/billboard"
import getBillboard from "@/actions/get-billboards"
import getProducts from "@/actions/get-products"
import { ProductList } from "@/components/product-list"
import {Category, BillBoard , Product} from '../../types'
import ModalProvider from "@/providers/modal-provider"



export default async function HomePage() {
  const categories: Category[] = await getCategories()
  const billboard: BillBoard = await getBillboard("7e2d47a1-e60b-46c7-86ec-c6ce154edc76")
  const products: Product[] = await getProducts({isFeatured:true})

  console.log(billboard)
  
 
  return (
    <>
    <ModalProvider />
    <ToastProvider />
    <Navbar categories={categories} />
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


