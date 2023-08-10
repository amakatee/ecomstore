import { BillBoard as BillboardType } from "@/types";

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
                <div className="flex flex-col items-start justify-center w-full h-full gap-3 p-10 ">
                    <div className="text-2xl font-bold text-white uppercase pt-60 ">
                        {data.label}
                    </div>
                    <div className="w-[4rem]">
                    <svg viewBox="0 0 44 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0 5.5H43V6.5H0V5.5Z" fill="#ffffff"></path>
                        <path fill="#ffffff" d="M43.9447 5.90506L35.167 0.914272C35.051 0.848274 34.9381 1.00447 35.0394 1.09088L40.6984 5.91727C40.75 5.96124 40.7492 6.04024 40.6968 6.08323L35.0655 10.7047C34.9624 10.7893 35.0727 10.9477 35.19 10.8835L43.9431 6.09454C44.0182 6.05345 44.0191 5.94737 43.9447 5.90506Z"></path>
                    </svg>
                    </div>
                    
                </div>
  
             </div>
        </div>
    )
}