import { ProductsData } from '@/interface/products'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import CardProducts from '../molecules/CardProducts'
import { Container } from '../globals/Container'
import { log } from 'console'
import { CategoriesData } from '@/interface/categories'
import { useRouter } from 'next/router'

interface HomeDestactProps {
   title: string
   product: ProductsData[]
   categories: CategoriesData[]
}

const HomeDestact = ({ title, product, categories }: HomeDestactProps) => {
   const [productos, setProductos] = useState(product)
   const { locale } = useRouter()
   useEffect(() => {
      setProductos(product)
   }, [locale, product])

   return (
      <div className="HomeDestact relative" data-section={'/destact'}>
         <div className=" HomeDestact-conta">
            <h1 className="HomeDestact-title">{title}</h1>

            <div className="HomeDestact-line"></div>
         </div>

         <div className="HomeDestact-container">
            {product
               .filter((producto) => producto.outstanding === true)
               .slice(0, 4)
               .map((producto, index) => (
                  <CardProducts key={index} product={producto} productos={productos} />
               ))}
         </div>

         <div className="HomeDestact-flowersleft">
            <Image src={'/left.png'} alt="" width={10000} height={10000} className="w-full h-full object-contain" />
         </div>
         <div className="HomeDestact-flowersright">
            <Image src={'/right.png'} alt="" width={10000} height={10000} className="w-full h-full object-contain" />
         </div>
      </div>
   )
}

export default HomeDestact
