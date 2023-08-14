import getProducts from '../../../../actions/get-products'

import { ImagesSlider } from '@/components/ui/slider'
import {Container} from '../../../../components/ui/container'
import getSize from '@/actions/get-sizes'
import getColors from '@/actions/get-colors'
import getCategory from '@/actions/get-category'
import { ProductCard } from '@/components/ui/product-card'
import { Noresult } from '@/components/no-result'
import {Size, Color, Category} from '@/types'
interface CategoryPageProps {
    params: {
        categoryId: string
    },
    searchParams: {
        colorId: string,
        sizeId: string
    }
}

export default async function CategoryPage ({params, searchParams} : CategoryPageProps) {

    const products  = await getProducts({
        categoryId: params.categoryId,
        colorId: searchParams.colorId,
        sizeId: searchParams.sizeId
        
    })
    // const sizes: Size[] = await getSize()
    // const colors: Color[] = await getColors()
    // const category: Category = await getCategory(params.categoryId)
    
    
    
    return <div className='min-h-[100vh]'>
     
        <Container>
            <div>{products.length === 0 && <Noresult />}</div>
            <div>
                {products.map(product => <ProductCard key={product.id} data={product} />)}
            </div>

        </Container>
    </div>
}