import Image from 'next/image'
import { Inter } from 'next/font/google'
import { GetServerSideProps, GetStaticProps } from 'next'
import { baseApi } from '@/lib/baseApi'
import { Home, HomeData } from '@/interface/home'
import HomeBanner from '@/components/organisms/HomeBanner'

import HomeDestact from '@/components/organisms/HomeDestact'
import { Products, ProductsData } from '@/interface/products'

import HomeCategorie from '@/components/organisms/HomeCategorie'
import { Categories, CategoriesData } from '@/interface/categories'
import HomeMidle from '@/components/organisms/HomeMidle'
import HomeAbout from '@/components/organisms/HomeAbout'
import HomeComments from '@/components/organisms/HomeComments'
import { Outstanding, OutstandingsData } from '@/interface/outstandings'
import HomeMaps from '@/components/organisms/HomeMaps'
import { useEffect, useState } from 'react'
import { useNavbarContext } from '@/context/navbar.context'
import { goToSection } from '@/lib/utils'
import { SeoEngine } from '@/components/atoms/SeoEngine'
import { motion } from 'framer-motion'
import { useRouter } from 'next/router'
import { Loader } from '@/components/atoms/Loader'
const inter = Inter({ subsets: ['latin'] })

interface HomeProps {
   home: HomeData
   product: ProductsData[]
   categories: CategoriesData[]
   outstanding: OutstandingsData[]
}

export default function Home({ home, product, categories, outstanding }: HomeProps) {
   const { scrolltoSectionFromOtherPage } = useNavbarContext()

   useEffect(() => {
      if (scrolltoSectionFromOtherPage !== '/contact') {
         goToSection(scrolltoSectionFromOtherPage)
      }
   }, [scrolltoSectionFromOtherPage])

   return (
      <>
         <div className="main-page">
            <HomeBanner
               image={home.Home_banner.image}
               image_full={home.Home_banner.image_full}
               image_telone={home.Home_banner.image_telone}
               image_teltwo={home.Home_banner.image_teltwo}
               image_tablet={home.Home_banner.image_tablet}
            />

            <HomeDestact title={home.Home_outstanding.title} product={product} categories={categories} />

            <HomeCategorie title={home.Home_products.title} categories={categories} product={product} />

            <HomeMidle
               title={home.Home_midle.title}
               subtitle={home.Home_midle.subtitle}
               text={home.Home_midle.text}
               image={home.Home_midle.image}
            />
            <HomeAbout
               title={home.Home_about.title}
               text={home.Home_about.text}
               textone={home.Home_about.textone}
               imageone={home.Home_about.imageone}
               imagetwo={home.Home_about.imagetwo}
               imagemob={home.Home_about.imagemob}
            />
            <HomeComments title={home.Home_comments.title} outstanding={outstanding} />
            <HomeMaps
               url_map={home.Home_map.url_map}
               icon={home.Home_map.icon}
               title={home.Home_map.title}
               text={home.Home_map.text}
            />
            <SeoEngine seo={home.seo} />
         </div>
      </>
   )
}

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
   const [{ data: home }, { data: product }, { data: categories }, { data: outstanding }] = await Promise.all([
      baseApi.get<Home>(`/home?locale=${locale}&populate=deep,3`),
      baseApi.get<Products>(`/products?locale=${locale}&populate=deep,3`),
      baseApi.get<Categories>(`/categories?locale=${locale}&populate=deep,3`),
      baseApi.get<Outstanding>(`/outstandings?locale=${locale}&populate=deep,3`),
   ])
   return {
      props: {
         home: home.data,
         product: product.data,
         categories: categories.data,
         outstanding: outstanding.data,
      },
   }
}
