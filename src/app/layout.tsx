import { Providers } from "@/lib/providers";
import Loading from "@/components/loading";
import NavbarComponent from '@/components/navbar';

import { Inter } from 'next/font/google'
import { cookies } from "next/headers";
import { Suspense } from "react";
import type { Metadata } from 'next'
import { Divider } from "@nextui-org/react"

import '@/css/globals.css'
 
export const metadata: Metadata = {
  title: 'Tattva Blog',
  description: 'a medicinal blog'
}

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const cookie = cookies().get('loggedIn');
  const loggedIn = cookie?.value === "true";

  return (
    <html lang="en">
      <body className={inter.className}>
        <NavbarComponent loggedIn={loggedIn}/>
          <main className='p-7'>
            <Providers>
              <Suspense fallback={<Loading />}>
                {children}
              </Suspense>
            </Providers>
          </main>
      </body>
    </html>
  )
}
