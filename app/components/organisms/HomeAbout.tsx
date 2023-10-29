import { Picture } from '@/interface/shared'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { Container } from '../globals/Container'
import ButtonContactOne from '../atoms/ButtonContactOne'
import Link from 'next/link'
import ButtonContact from '../atoms/ButtonContact'

interface HomeAboutProps {
   title: string
   text: string
   textone: string
   imageone: Picture
   imagetwo: Picture
   imagemob: Picture
}
const HomeAbout = ({ title, text, textone, imageone, imagetwo, imagemob }: HomeAboutProps) => {
   const [isMobile, setIsMobile] = useState(false)

   const MOBILE_BREAKPOINT = 1200
   const handleResize = () => {
      const windowWidth = window.innerWidth
      setIsMobile(windowWidth < MOBILE_BREAKPOINT)
   }

   useEffect(() => {
      handleResize()
      window.addEventListener('resize', handleResize)
      return () => {
         window.removeEventListener('resize', handleResize)
      }
   }, [])

   let images = ''
   if (isMobile) {
      images = imagemob.url
   } else {
      images = imagetwo.url
   }

   return (
      <div className="HomeAbout">
         <Container>
            <div className="HomeAbout-container ">
               <div className="HomeAbout-contaImage">
                  <div className="HomeAbout-image1">
                     <Image src={imageone.url} alt="" width={10000} height={10000} className="w-full h-full" />
                  </div>
                  <div className="HomeAbout-image2">
                     <Image src={images} alt="" width={10000} height={10000} className="w-full h-full" />
                  </div>
               </div>

               <div className="HomeAbout-contaText">
                  <h1 className="HomeAbout-title">{title}</h1>
                  <div className="HomeAbout-line"></div>
                  <p className="HomeAbout-text1">{text}</p>
                  <p className="HomeAbout-text2">{textone}</p>
                  <div>
                     <ButtonContact href={'/contact'} />
                  </div>
               </div>
            </div>
         </Container>
         <div className="HomeAbout-mar">
            <Image src={'/mar.png'} alt="" width={1000} height={1000} className="w-full h-full object-cover" />
         </div>
         <div className="HomeAbout-abouts">
            <Image src={'/abouts.png'} alt="" width={1000} height={1000} className="w-full h-full object-cover" />
         </div>

         <div className="HomeAbout-aboutani">
            <Image src={'/aboutani.png'} alt="" width={1000} height={1000} className="w-full h-full object-cover" />
         </div>
      </div>
   )
}

export default HomeAbout
