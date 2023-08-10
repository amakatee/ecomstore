import getProduct from '@/actions/get-product'
import { Container } from '@/components/ui/container'
import getProducts from '../../../../actions/get-products'

import {ProductList} from '../../../../components/product-list'
import {Category} from '../../../../types'

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
    //     categoryId: product.category?.id 
    //   });

    
    return <div className='bg-[green] min-h-[100vh]'>
        <Container>
            <div className=' sm:px-6 lg:px-8'>
                <div className='lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8'>
                <div className=' bg-[blue] h-[75vh]'>
                    
                    {product.images.map(img => <img key={img.url} src={img.url} alt="img" className="object-cover overflow-hidden h-[75vh] w-[100vw]" />)}
                    
                </div>
                <div className=' sm:mt-16 sm:px-0 lg:mt-0 bg-[pink]'>
                    <h1>{product.name}</h1>
                </div>
               
                </div>
               {/* <ProductList title="saf" items={suggestedProducts} /> */}
            </div>

        </Container>
    </div>
}