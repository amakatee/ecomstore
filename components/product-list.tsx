import { Product } from "@/types";
import { Noresult } from "./no-result";
import { ProductCard } from "./ui/product-card";

interface ProductProps {
    title: string,
    items: Product[]
}

export const ProductList: React.FC<ProductProps> = ({title, items}) => {
    console.log(items)
    return (
        <div className="min-h-[80vh] py-10 flex flex-col items-center gap-4">
            <h1>{title}</h1>
            <div>{items.length === 0 && <Noresult />}</div>
            <div className="grid grid-cols-2 gap-4">
            {items.map(item => <ProductCard key={item.id} data={item}  />)}
            </div>
            
        </div>
    )
}