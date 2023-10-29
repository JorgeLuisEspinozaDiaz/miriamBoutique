import { Alegreya, Fira_Sans, Montserrat, Roboto, Source_Code_Pro } from 'next/font/google'
import { FC, PropsWithChildren } from 'react'
import Footer from '../ui/Footer'
import { CustomHead } from '../globals/CustomHead'
import Header from '../ui/Header'
import InfoHeader from '../molecules/InfoHeader'

const roboto = Roboto({
   subsets: ['latin'],
   weight: ['100', '300', '400', '500', '700', '900'],
   variable: '--font-roboto',
})
const alegreya = Alegreya({
   subsets: ['latin'],
   weight: ['400', '500', '600', '700', '800', '900'],
   variable: '--font-alegreya',
})

const FiraSans = Fira_Sans({
   subsets: ['latin'],
   weight: ['400', '500', '600', '700', '800', '900'],
   variable: '--font-FiraSans',
})

export const Layout: FC<PropsWithChildren> = ({ children }) => {
   return (
      <div className={` ${roboto.variable} ${alegreya.variable}  ${FiraSans.variable} relative`}>
         <CustomHead />
         <InfoHeader />
         <Header />
         {children}
         <Footer />
      </div>
   )
}
