import type { Metadata } from 'next'
import './globals.css'

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
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}

