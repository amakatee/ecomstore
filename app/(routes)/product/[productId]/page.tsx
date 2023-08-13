import getProduct from '@/actions/get-product'
import { Container } from '@/components/ui/container'
import getProducts from '../../../../actions/get-products'

import {ProductList} from '../../../../components/product-list'
import {Category} from '../../../../types'
import { ImagesSlider } from '@/components/ui/slider'
import Button from '../../../../components/ui/button'
import {Currency} from '../../../../components/ui/currency'
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
        <Container>
            <div className=' sm:px-6 lg:px-8'>
                <div className='lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8'>
                <div className=' h-[75vh]'>
                    <ImagesSlider  images={product.images}/>
                 </div>
                <div className='flex flex-col gap-3 mt-6 px-7 lg:mt-0'>
                    <div className='block font-semibold leading-3 tracking-wider uppercase border-box'>
                      <h1>{product.name}</h1>
                    </div>
                    <div className='text-sm font-bold tracking-wider'>
                       <Currency value={product.price} />
                    </div>

                    <div className='mb-30'>
                        {product.description}
                    </div>
                    <div className='py-10'>
                    <Button>
                       Add To Cart
                   </Button>
                    </div>
                    
                   
                </div>
               
               
                </div>
               {/* <ProductList title="saf" items={suggestedProducts} /> */}
            </div>

        </Container>
    </div>
}