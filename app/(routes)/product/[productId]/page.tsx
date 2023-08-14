import getProduct from '@/actions/get-product'
import { Container } from '@/components/ui/container'
import getProducts from '../../../../actions/get-products'

import {ProductList} from '../../../../components/product-list'
import {Category} from '../../../../types'
import { ImagesSlider } from '@/components/ui/slider'
import Button from '../../../../components/ui/button'
import {Currency} from '../../../../components/ui/currency'
import ProductNavbar from '../../../../components/product-nav'
import { ProductDescription } from '@/components/product-description'
interface ProductPageProps {
    params: {
        productId: string
    }
}

export default async function ProductPage ({params} : ProductPageProps) {

    const product  = await getProduct(params.productId)
    // const suggestedProducts = await getProducts({
    //     categoryId: product.category.id
    // })

    // const suggestedProducts = await getProducts({ 
    //     categoryId: product.category.id 
    //   });
    
    
    return <div className='min-h-[100vh]'>
        <ProductNavbar />
        <Container>
            <div className=' sm:px-6 lg:px-8'>
                <div className='lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8'>
                <div className=' h-[75vh]'>
                    <ImagesSlider  images={product.images}/>
                 </div>
                 <ProductDescription product={product} />
                {/* <div className='flex flex-col gap-3 px-5 mt-6 lg:mt-0'>
                   <div className='flex flex-col gap-2'>
                     <div className='block font-semibold leading-3 tracking-wider uppercase border-box'>
                        <h1>{product.name}</h1>
                    </div>
                    <div className='mb-3 text-sm font-bold tracking-wider'>
                       <Currency value={product.price} />
                    </div>
                   </div>

                    <div className='pb-5 text-xs font-bold tracking-wide'>
                        {product.description}
                    </div>


                    <div className='flex flex-col gap-8'>
                    
                    <div className='flex flex-col gap-3 '>
                    <p className='text-xs font-bold uppercase '>color:</p>
                        <div className='flex flex-col justify-center gap-1' >
                            <span style={{ backgroundColor: product?.color?.value }} className={` w-[20px] h-[20px] rounded-full `}></span>
                        </div>
                    </div>

                    <div className='flex flex-col gap-3'>
                        <p className='text-xs font-bold uppercase'>size:</p>
                        <div className='flex flex-col justify-center gap-1' >

                            <span className={`bg-[#fafafa] w-[20px] h-[30px] text-center `}> <p className='pt-[2px]'>{product.size.value}</p> </span>
                        </div>
                    </div>

                    </div>
                    <div className='flex justify-center w-[100%] my-10 '>
                    <button className='border border-black w-[100%] py-3 cursor-pointers'>
                       <p className='text-xs font-bold uppercase'>Add To Cart</p>
                   </button>
                    </div>
                    
                   
                </div> */}
               
               
                </div>
               {/* <ProductList title="saf" items={suggestedProducts} /> */}
            </div>

        </Container>
    </div>
}