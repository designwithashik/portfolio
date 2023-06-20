import './globals.css'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300','500', '700', '900']})

export const metadata = {
  title: 'Ashikuzzaman | Web Developer & IT Student',
  description: 'Let us collaborate to build a better world.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>{children}</body>
    </html>
  )
}
