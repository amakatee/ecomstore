import Modal from '../components/ui/modal'
import useNavbarMenu from "@/hooks/use-navbar-menu";
import Link from 'next/link'


export const NavbarSideMenu = () => {
    const previewModal = useNavbarMenu();

    const routes = [
        {href: "/categories",
         label: "All Products"
         },
        {
        href:"/about",
        label:"About"
        }]


    return  <Modal 
    open={previewModal.isOpen} 
    onClose={previewModal.onClose}
  >
    <div className=" absolute top-10  max-h-[100vh] grid items-start w-full grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8">
      <div className="flex justify-center w-full py-3 text-sm uppercase border-b" >
  
      </div>
      {routes.map(route => (
          <div key={route.href}>
              <Link href={`${route.href}`}> <span className='uppercase'>{route.label}</span></Link>
          </div>
      ))}

    </div>
  </Modal>
}
