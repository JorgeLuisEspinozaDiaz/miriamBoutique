import { Picture } from '@/interface/shared'
import React from 'react'
import { Container } from '../globals/Container'
import Image from 'next/image'

interface HomeMidleProps {
   title: string
   subtitle: string
   text: string
   image: Picture
}
const HomeMidle = ({ title, subtitle, text, image }: HomeMidleProps) => {
   return (
      <div className="HomeMidle">
         <div className="HomeMidle-container">
            <h2 className="HomeMidle-subtitle">{subtitle}</h2>
            <h1 className="HomeMidle-title">{title}</h1>
            <div className="HomeMidle-line"></div>
            <p className="HomeMidle-text">{text}</p>
         </div>
         <div className="HomeMidle-image">
            <Image src={image.url} alt="" width={10000} height={10000} className="w-full h-full" />
         </div>
      </div>
   )
}

export default HomeMidle
