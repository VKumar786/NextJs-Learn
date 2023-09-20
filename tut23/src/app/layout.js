import Link from 'next/link'
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
      <head>
      </head>
      <body className={inter.className}>
        <nav>
          <ul>
            <li>
              <Link href={'/'}>Home</Link>
            </li>
            <li>
              <Link href={'/productList'}>Product List</Link>
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