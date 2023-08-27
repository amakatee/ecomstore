import Link from "next/link"
import { Container } from "./ui/container"
import { MainNav } from "./main-nav"
import {Category} from '../types'
import NavbarActions from '../components/navbar-actions'

interface NavProps  {
    categories: Category[]
}

export const Navbar =  ({categories} : NavProps) => {
    return (
            <div className="fixed border-b border-t border-[black] mt-[15px] grid place-content-center  py-5 z-20 bg-transparent ">
                <Container>
                    <div className="flex items-center justify-between w-[100vw] px-7 ">
                        <MainNav data={categories} />
                        <Link href="/" className="">
                          <span className="text-xl uppercase ext-black f">Store</span>
                        </Link>
                    <NavbarActions />
                    </div>
                </Container>
            </div>
    
    )

}