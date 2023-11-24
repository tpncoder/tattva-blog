import type { Metadata } from 'next'
import Link from 'next/link'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Tattva Blog',
  description: 'made by tpncoder',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
          <main className='p-7'>
            <nav className='mb-7'>
              <Link className='mr-4 font-medium' href='/'>Home</Link>
              <Link className='mr-4 font-medium' href='/posts/'>Posts</Link>
              <Link className='mr-4 font-medium' href='/about/'>About</Link>
              <Link href="/auth/register" className='mr-4 float-right font-medium'>Sign Up</Link>
              <Link href="/auth/login" className='mr-4 float-right font-medium'>Login</Link>
            </nav>
            <hr className='mb-3'></hr>
            {children}
          </main>
      </body>
    </html>
  )
}
