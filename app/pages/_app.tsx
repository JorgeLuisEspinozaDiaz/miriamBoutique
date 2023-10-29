import { Favicon } from '@/components/globals/Favicon'
import { Layout } from '@/components/layouts/Layout'
import { NavbarProvider } from '@/context/navbar.context'
import { useGeneralStore } from '@/store'

import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

import 'swiper/css'
import 'swiper/css/effect-fade'

export default function App({ Component, pageProps }: AppProps) {
   const { getGenerals, multilanguage, generals } = useGeneralStore()
   const { locale } = useRouter()
   const [loading, setLoading] = useState(true)
   useEffect(() => {
      getGenerals(locale)
   }, [getGenerals, locale])

   useEffect(() => {
      // Simular una carga de datos o una operación asíncrona
      setTimeout(() => {
         setLoading(false) // Ocultar el loader después de un tiempo determinado (puedes ajustar el tiempo según tus necesidades)
      }, 500)
   }, [])

   return (
      <>
         <Head>
            <title>Miriam</title>
            <Favicon />
         </Head>
         <NavbarProvider>
            <Layout>
               <Component {...pageProps} />
            </Layout>
         </NavbarProvider>
      </>
   )
}
