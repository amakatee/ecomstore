import { Navbar } from "../../components/navbar"
import { Footer } from "../../components/footer"
import { Container } from "@/components/ui/container"

import getCategories from "@/actions/get-categories"
import { Billboard } from "@/components/billboard"
// import getBillboard from "@/actions/get-billboards"
import getProducts from "@/actions/get-products"
import { ProductList } from "@/components/product-list"
import {Category, BillBoard, Product} from '../../types'

 //
const URL=`${process.env.NEXT_PUBLIC_API_URL}/billboards`;

const getBillboard = async (id: string): Promise<BillBoard> => {
  const res = await fetch(`${URL}/${id}`);
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  return res.json();
};


//

export default async function HomePage() {
  // const categories = await getCategories()

  // const billboard = await getBillboard("d8af523f-6696-4357-9fd4-52ee9946e190")
  // const products = await getProducts({isFeatured: true})
  // console.log(products)
 
  return (
    <>
    <Navbar categories={[] as Category[]} />
      <main className=" top-0 left-0 w-[100vw] h-[100vh] z-[-1] ">
         <div className="billboard">
            <Billboard data={{ id: "231",label: "newew", imageUrl: "sjcdjsha"} }/>
          </div>
          
      </main>
      <div className="w-[100vw] h-[100vh] z-100">
            <ProductList title="Featured Products" items={[] as Product[]} />
          </div>
    
    {/* <Footer /> */}
    </>
  )
}


