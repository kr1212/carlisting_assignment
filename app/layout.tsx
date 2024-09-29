import { relative } from 'path'
import './globals.css'
import {Navbar, Footer} from '@/components'

export const metadata = {
  title: 'Car Listing',
  description: 'List of popular cars and details',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
