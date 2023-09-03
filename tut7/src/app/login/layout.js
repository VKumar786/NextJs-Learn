'use client'
import Link from 'next/link'
import React from 'react'

//* Styles
import './login.css'

const Layout = ({ children }) => {
    return (
        <>
            <ul>
                <li>
                    <Link href={'/login'}>Login</Link>
                </li>
                <li>
                    <Link href={'/login/loginStudent'}>Login Student</Link>
                </li>
                <li>
                    <Link href={'/login/loginCollege'}>Login College</Link>
                </li>
            </ul>
            {children}
        </>
    )
}

export default Layout