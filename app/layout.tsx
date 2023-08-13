import './globals.css'
import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'
import { Navbar } from '../components/navbar'
import { Footer } from '../components/footer'

const inter = Open_Sans({ subsets: ['latin'] ,  weight: '300',})

export const metadata: Metadata = {
  title: 'Store',
  description: 'Shop now',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/* <Navbar /> */}
     
      <body className={inter.className}>{children}</body>
      {/* <Footer /> */}
    </html>
  )
}
