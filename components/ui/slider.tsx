"use client"

import { useRef, useState, useEffect } from 'react'
import  {Swiper, SwiperSlide, } from 'swiper/react'
import {  SwiperRef, SwiperClass, SwiperProps } from "swiper/react"
import SwiperCore from "swiper"

import Image from 'next/image'
import { Image as ImageType } from '@/types'

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



interface SliderProps  {
    images: ImageType[]

}
type Loop ={
    loop: boolean
    
}


export const ImagesSlider: React.FC<SliderProps> = ({images}) => {
    const [instance, setInstance] = useState<SwiperClass | null>(null);
     const swiperElRef = useRef<SwiperRef>(null);

     
     useEffect(() => {
        instance?.slideTo(2)
        // ref usage
     
        console.log(swiperElRef.current?.swiper.activeIndex);
      }, [])

    return <div className=''>
        <Swiper ref={swiperElRef} 
       
        onSwiper={setInstance}
        loop={true} 
        // effect
        //  slidesPerView={1}
        //speed={800}
        //direction="vertical"
        onSlideChange={() => console.log("slide chnaged")}
         >{images.map(img =>  <SwiperSlide key={img.id}>
            <Image width={400} height={550}   src={img.url} alt="img" className="object-cover overflow-hidden h-[75vh] w-[100vw]" />)
          </SwiperSlide> )}
        </Swiper>;
           
        {/* <Swiper
            className='gallery'
     
            // modules={[Navigation]}
        
          //  effect
            // slidesPerView={1}
            // pagination={{
            //   el: '.swatch',
            //   clickable:true,
            //   renderBullet:(index,className ) => {
            //     return  
            //      `<span className="`+ className + ">" +(index+1)+`</span>`
            //   }
            // }}
             loop
            speed={800}
            direction="vertical"
            // onSlideChange={() => console.log("slide chane")}
            // onSwiper={(swiper) => console.log(swiper)}
            

            >
                 {images.map(img =>  <SwiperSlide>
                     <div  key={img.url}>
                      <img src={img.url} alt="img" className="object-cover overflow-hidden h-[75vh] w-[100vw]" />)
                     </div>

                 </SwiperSlide> )}
           

            </Swiper> */}

    </div>
}