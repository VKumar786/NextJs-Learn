'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

//* Styles
import './about.css'

const Layout = ({ children }) => {
    const url = usePathname()
    return (
        <>
            <ul>
                {url !== '/about' && <li>
                    <Link href={'/about'}>About</Link>
                </li>}
                {url !== '/about/aboutStudent' && <li>
                    <Link href={'/about/aboutStudent'}>About Student</Link>
                </li>}
                {url !== '/about/aboutCollege' && <li>
                    <Link href={'/about/aboutCollege'}>About College</Link>
                </li>}
            </ul>
            {children}
        </>
    )
}

export default Layout