'use client'
import './globals.css'
import { Montserrat } from 'next/font/google'
import { Playfair_Display } from 'next/font/google'
import Navigation from './components/shared/Navigation'
import Footer from './components/shared/Footer'
import { ThemeProvider } from "@material-tailwind/react";

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300','500', '700', '900']})
const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400','500', '700', '900']})

export const metadata = {
  title: 'Ashikuzzaman | Web Developer & IT Student',
  description: 'Let us collaborate to build a better world.',
}

export default function RootLayout({ children }) {
  return (
    <ThemeProvider>
      <html lang="en">
      <body  className={`container ${montserrat.className}`}>
        <Navigation/>
        <main >
        {children}
        </main>
        <Footer/>
      </body>
    </html>
    </ThemeProvider>
  )
}
