import { Picture } from '@/interface/shared'
import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, SwiperOptions, Pagination, EffectFade } from 'swiper'
import Image from 'next/image'
import LineEng from '../atoms/LineEng'
import LineSpan from '../atoms/LineSpan'
import ButtonSeProducts from '../atoms/ButtonSeProducts'
import Link from 'next/link'
import { Loader } from '../atoms/Loader'

interface HomeBannerProps {
   image: Picture[]
   image_full: Picture[]
   image_telone: Picture
   image_teltwo: Picture
   image_tablet: Picture[]
}

const swiperOptions: SwiperOptions = {
   slidesPerView: 'auto',

   autoplay: {
      delay: 7000,
      disableOnInteraction: false,
   },

   effect: 'fade',
   fadeEffect: {
      crossFade: true,
   },
   speed: 1000,
   spaceBetween: 0,
   pagination: {
      el: '.HomeCharac-pagination',
      clickable: true,
      type: 'bullets',
   },
   breakpoints: {},
   modules: [Autoplay, Pagination, EffectFade],
}

const HomeBanner = ({ image, image_full, image_telone, image_teltwo, image_tablet }: HomeBannerProps) => {
   const [isMobile, setIsMobile] = useState(false)
   const [isTablet, setIsTablet] = useState(false)
   const [isLoading, setIsLoading] = useState(true)

   const [itemsLoop, setItemsLoop] = useState<boolean>(false)
   useEffect(() => {
      setItemsLoop(true)
   }, [])

   const MOBILE_BREAKPOINT = 768
   const TABLET_BREAKPOINT = 1024
   const handleResize = () => {
      const windowWidth = window.innerWidth
      setIsMobile(windowWidth < MOBILE_BREAKPOINT)
      setIsTablet(windowWidth >= MOBILE_BREAKPOINT && windowWidth < TABLET_BREAKPOINT)
   }

   useEffect(() => {
      handleResize()

      window.addEventListener('resize', handleResize)

      const timer = setTimeout(() => {
         setIsLoading(false)
      }, 500)

      return () => {
         window.removeEventListener('resize', handleResize)
         clearTimeout(timer) // Limpia el temporizador en la limpieza del efecto
      }
   }, [])

   let bannerImages = []

   if (isMobile) {
      bannerImages = image
   } else if (isTablet) {
      bannerImages = image_tablet
   } else {
      bannerImages = image_full
   }

   return (
      <>
         <div className="HomeBanner" id={'/'}>
            {isLoading ? (
               <div className="flex  justify-center items-center HomeBanner-loader">
                  <Loader />
               </div>
            ) : (
               <Swiper {...swiperOptions} loop={itemsLoop} className="w-full h-full">
                  {bannerImages.map((img) => (
                     <SwiperSlide key={img.id}>
                        <div className="HomeBanner-card">
                           {isMobile ? (
                              <Link href={'/product'}>
                                 <div className="HomeBanner-Imagemb">
                                    {img.url && (
                                       <Image
                                          src={img.url}
                                          alt=""
                                          width={100000}
                                          height={100000}
                                          className="w-full h-full images object-cover"
                                       />
                                    )}
                                 </div>
                              </Link>
                           ) : (
                              <div className={`HomeBanner-Imagemb  `}>
                                 {img.url && (
                                    <Image
                                       src={img.url}
                                       alt=""
                                       width={100000}
                                       height={100000}
                                       className="w-full h-full images object-cover"
                                    />
                                 )}
                              </div>
                           )}

                           <LineEng />
                           <LineSpan />

                           <div className="image_tel">
                              <div className="image_telimg">
                                 {img.url && (
                                    <Image
                                       src={image_telone.url}
                                       alt=""
                                       width={100000}
                                       height={100000}
                                       className="
                                 w-full h-full  object-cover"
                                    />
                                 )}
                              </div>
                              <div className="image_telimg">
                                 {img.url && (
                                    <Image
                                       src={image_teltwo.url}
                                       alt=""
                                       width={1000}
                                       height={1000}
                                       className="w-full h-full  object-cover"
                                    />
                                 )}
                              </div>
                           </div>
                        </div>
                     </SwiperSlide>
                  ))}
               </Swiper>
            )}

            <div className={`HomeCharac-pagination`}></div>

            {isLoading ? (
               ''
            ) : (
               <div className="HomeBanner-btn">
                  <ButtonSeProducts href="/product" />
               </div>
            )}

            <div className="HomeBanner-linecontainer">
               <div className="HomeBanner-line1"></div>
               <div className="HomeBanner-line2"></div>
            </div>
         </div>
      </>
   )
}
export default HomeBanner
