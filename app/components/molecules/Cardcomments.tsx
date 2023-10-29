import { OutstandingsData } from '@/interface/outstandings'
import Image from 'next/image'
import React from 'react'

interface CardcommentsProps {
   outstanding: OutstandingsData
   className?: string
}

const Cardcomments = ({ outstanding, className }: CardcommentsProps) => {
   return (
      <div className={`Cardcomments ${className}`}>
         <div className="Cardcomments-image">
            <Image
               src={outstanding.image.url}
               alt={outstanding.title}
               width={1000}
               height={1000}
               className="w-full h-full object-cover rounded-full "
            />
         </div>
         <p className="Cardcomments-text">{outstanding.text}</p>
         <h2 className="Cardcomments-title">{outstanding.title}</h2>
      </div>
   )
}

export default Cardcomments
