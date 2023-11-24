import { Providers } from "./providers";
import { Inter } from 'next/font/google'
import { cookies } from "next/headers";
import './globals.css'

import NavbarComponent from '@/components/Navbar';

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
              {children}
            </Providers>
          </main>
      </body>
    </html>
  )
}
