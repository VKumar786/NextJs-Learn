'use client'
import Link from 'next/link'
import './globals.css'
import './main.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav>
          <ul>
            <li>
              <Link href={'/'}>Home</Link>
            </li>
            <li>
              <Link href={'/about'}>About</Link>
            </li>
            <li>
              <Link href={'/login'}>Login</Link>
            </li>
            <li>
              <Link href={'/studentList'}>StudentList</Link>
            </li>
          </ul>
        </nav>
        {children}
        <footer>
          Footer
        </footer>
      </body>
    </html>
  )
}
