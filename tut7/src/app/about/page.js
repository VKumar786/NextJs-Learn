'use client'
import React from 'react'
import Link from 'next/link'

import { useRouter } from 'next/navigation'

const About = () => {
    const router = useRouter()
    return (
        <div>
            <h3>About</h3>

            <Link href={'/'}>Go Back</Link>
            &nbsp;

            <button onClick={() => router.push('/')}>Go Back</button>
        </div>
    )
}

export default About