'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

//* Styles
import './login.css'

const Layout = ({ children }) => {
    const url = usePathname()
    return (
        <>
            <ul>
                {url !== '/login' && <li>
                    <Link href={'/login'}>Login</Link>
                </li>}
                {url !== '/login/loginStudent' && <li>
                    <Link href={'/login/loginStudent'}>Login Student</Link>
                </li>}
                {url !== '/login/loginCollege' && <li>
                    <Link href={'/login/loginCollege'}>Login College</Link>
                </li>}
            </ul>
            {children}
        </>
    )
}

export default Layout