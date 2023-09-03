'use client'
import React from 'react'
import Link from 'next/link'

//* Styles
import './about.css'

const Layout = ({ children }) => {
    return (
        <>
            <ul>
                <li>
                    <Link href={'/about'}>About</Link>
                </li>
                <li>
                    <Link href={'/about/aboutStudent'}>About Student</Link>
                </li>
                <li>
                    <Link href={'/about/aboutCollege'}>About College</Link>
                </li>
            </ul>
            {children}
        </>
    )
}

export default Layout