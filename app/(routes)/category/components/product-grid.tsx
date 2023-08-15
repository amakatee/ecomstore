import { Noresult } from '@/components/no-result'
import { ProductCard } from '@/components/ui/product-card'
import {Product} from '@/types'


interface GridProps {
    products: Product[]
  }
  
  export const ProductGrid = ({products} : GridProps) => {
    return (
      <div className='grid grid-cols-2'>
        {products.length === 0 && <Noresult />}
        {products.map(product => <ProductCard key={product.id} data={product} />)}
      </div>
    )
  
  }