import './globals.css'
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import { Navbar } from './components'
import Footer from './components/shared/Footer'





const montserrat = Montserrat({
  subsets: ['latin'],
  display: "swap",
  weight: '400'
})

export const metadata: Metadata = {
  title: 'Dramatic | Home',
  description: 'World best Movie Website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} relative`}>
        
        <Navbar/>
        {children}
        <Footer/>
        
        </body>
    </html>
  )
}
