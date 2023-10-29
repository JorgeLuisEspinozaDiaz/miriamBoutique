import { OutstandingsData } from '@/interface/outstandings'
import React, { useEffect, useRef, useState } from 'react'
import Cardcomments from '../molecules/Cardcomments'
import { Container } from '../globals/Container'
import { Autoplay, Navigation, Pagination, SwiperOptions } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperClass from 'swiper'

interface HomeCommentsProps {
   title: string
   outstanding: OutstandingsData[]
}

const HomeComments = ({ title, outstanding }: HomeCommentsProps) => {
   const [isDesktop, setIsDesktop] = useState<boolean>(false)
   useEffect(() => {
      const handleResize = () => {
         setIsDesktop(window.innerWidth >= 1200)
      }

      setIsDesktop(window.innerWidth >= 1200)

      window.addEventListener('resize', handleResize)

      return () => {
         window.removeEventListener('resize', handleResize)
      }
   }, [])

   const swiperOptions: SwiperOptions = {
      slidesPerView: 'auto',
      centeredSlides: false,
      initialSlide: 1,
      navigation: {
         prevEl: '.HomeGallery-prev',
         nextEl: '.HomeGallery-next',
      },
      autoplay: {
         delay: 7000,
         disableOnInteraction: false,
      },
      loop: true,
      speed: 1000,
      spaceBetween: 15,
      pagination: {
         el: '.HomeComments-pagination',
         clickable: true,
         type: 'bullets',
      },
      breakpoints: {
         768: {
            slidesPerView: 2,
            spaceBetween: 30,
         },
         1200: {
            slidesPerView: 3,
            spaceBetween: 65,
         },
      },
      modules: [Pagination, Autoplay, Navigation],
      effect: 'fade', // Establecer el efecto de transición a 'fade'
      fadeEffect: {
         crossFade: true, // Activar un fundido suave entre las transiciones de diapositivas
      },
   }

   if (isDesktop) {
      swiperOptions.centeredSlides = true
   }

   return (
      <div className="HomeComments">
         <Container>
            <h1 className="HomeComments-title">{title}</h1>
            <div className="flex justify-center items-center">
               <div className="HomeComments-line"></div>
            </div>
            <div className="HomeComments-cardContainer relative">
               <Swiper {...swiperOptions}>
                  {outstanding.map((outstanding, index) => (
                     <SwiperSlide key={outstanding.id}>
                        <Cardcomments key={outstanding.id} outstanding={outstanding} />
                     </SwiperSlide>
                  ))}
               </Swiper>

               <div className="HomeComments-navigation   ">
                  <div className="HomeGallery-arrow HomeGallery-prev">
                     <i className="text-white icon-left"></i>
                  </div>
                  <div className="HomeGallery-arrow HomeGallery-next">
                     <i className="text-white icon-right"></i>
                  </div>
               </div>
               <div className={`HomeComments-pagination`}></div>
            </div>
         </Container>
      </div>
   )
}

export default HomeComments
