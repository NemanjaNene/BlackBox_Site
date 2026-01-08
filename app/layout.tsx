import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Black Box Testing - Professional Web Development & Testing',
  description: 'Professional web development and testing services. We create modern, functional websites and applications.',
  keywords: 'web development, testing, black box testing, website development, QA',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="sr">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  )
}

