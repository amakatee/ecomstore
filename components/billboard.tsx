import { BillBoard as BillboardType } from "@/types";
import Link from 'next/link'
interface BillboardProps {
    data: BillboardType
}

export const Billboard: React.FC<BillboardProps> = ({data}) => {
    return (
        <div className="">
            <div
             className="h-[100vh] w-[100vw]"
             style={{backgroundImage: `url(${data?.imageUrl})`}}
              >
                <div className="relative flex flex-col items-start justify-center w-full h-full gap-3 p-10 ">
                <Link href='/category'>
                <span className="absolute  bottom-[20%] text-2xl font-bold text-black uppercase ">
                  {data.label}
                </span>

                </Link>
                   <div className="w-[4rem] absolute bottom-[17%]">
                    <svg viewBox="0 0 44 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M0 5.5H43V6.5H0V5.5Z" fill="black"></path>
                        <path fill="black" d="M43.9447 5.90506L35.167 0.914272C35.051 0.848274 34.9381 1.00447 35.0394 1.09088L40.6984 5.91727C40.75 5.96124 40.7492 6.04024 40.6968 6.08323L35.0655 10.7047C34.9624 10.7893 35.0727 10.9477 35.19 10.8835L43.9431 6.09454C44.0182 6.05345 44.0191 5.94737 43.9447 5.90506Z"></path>
                    </svg>
                    </div>
                    
                </div>
  
             </div>
        </div>
    )
}