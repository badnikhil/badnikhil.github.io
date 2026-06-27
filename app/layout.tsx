import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'Nikhil Ludder — @badnikhil',
  description:
    'i count bits to save a clock. Full Stack Developer, Systems Programmer & GSoC 2026 Contributor. Building scalable web platforms, CUDA kernels, and operating systems from scratch.',
  keywords: [
    'Nikhil Ludder',
    'badnikhil',
    'Full Stack Developer',
    'CUDA',
    'Systems Programming',
    'GSoC 2026',
    'API Dash',
    'Full Stack Engineer',
    'Open Source',
    'bindbc-cuda',
    'MyOS',
  ],
  authors: [{ name: 'Nikhil Ludder', url: 'https://github.com/badnikhil' }],
  openGraph: {
    title: 'Nikhil Ludder — @badnikhil',
    description: 'i count bits to save a clock. Full Stack Developer & Systems Programmer.',
    url: 'https://badnikhil.github.io',
    siteName: 'badnikhil',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nikhil Ludder — @badnikhil',
    description: 'i count bits to save a clock.',
    creator: '@badnikhil',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} scroll-smooth`}>
      <body className="font-sans bg-bg-deep text-text-primary antialiased">
        {children}
      </body>
    </html>
  )
}
