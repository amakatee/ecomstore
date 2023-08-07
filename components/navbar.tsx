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
            <div className="fixed border-b border-t border-[white] mt-[15px] grid place-content-center  py-5 z-20 bg-transparent ">
                <Container>
                    {/* <div className="relative flex items-center h-16 px-4 sm:px-6 lg:px-8 "> */}
                    <div className="flex items-center justify-between w-[100vw] px-7 ">
                        <MainNav data={categories} />
                        <Link href="/" className="">
                          <p className="text-xl tracking-wider text-white uppercase">Store</p>
                        </Link>
                    <NavbarActions />
                    </div>
                </Container>
            </div>
    
    )

}