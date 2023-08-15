import { Product } from "@/types";
import qs from "query-string";

const URL=`${process.env.NEXT_PUBLIC_API_URL}/products`;
// const URL = 'https://adminst.vercel.app/api/fd3e8d1b-3d1b-4b31-b43b-852be3a1b511/products'

const getAllProducts = async (): Promise<Product[]> => {
  
  const res = await fetch(URL);


  return res.json();
};

export default getAllProducts;