import './globals.css'
import type { Metadata } from 'next'
import { Nav, Footer } from '@/components';

export const metadata: Metadata = {
  title: 'Power Digital Technology',
  description: 'Discover the best website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="relative">
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  )
}
