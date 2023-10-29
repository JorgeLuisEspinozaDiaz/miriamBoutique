import { Picture } from '@/interface/shared'
import Image from 'next/image'
import React from 'react'
import ReactMarkdown from 'react-markdown'

interface HomeMapsProps {
   url_map: string
   title: string
   text: string
   icon: Picture
}

const HomeMaps = ({ url_map, title, text, icon }: HomeMapsProps) => {
   return (
      <section className="HomeMaps" data-section={'/maps'}>
         <div className="HomeMaps-bloq">
            <div className="HomeMaps-icon">
               <Image src={icon.url} alt={title} width={10000} height={10000} className="w-full h-full" />
            </div>
            <h1 className="HomeMaps-title">{title}</h1>
            <div className="HomeMaps-lines"></div>
            <div className="HomeMaps-text">
               <ReactMarkdown>{text}</ReactMarkdown>
            </div>
         </div>
         <div className="HomeMaps-maps">
            <iframe className="map-iframe w-full h-full" src={url_map} loading="lazy"></iframe>
         </div>
      </section>
   )
}

export default HomeMaps
