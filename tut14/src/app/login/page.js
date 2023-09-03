'use client'
import React from 'react'
import Link from 'next/link'

import { useRouter } from 'next/navigation'

const Login = () => {
  const router = useRouter()
  const navigate = (page) => {
    router.push('/login/' + page)
  }
  return (
    <div>
      <h3>
        Welcome to login page
      </h3>
      <Link href={'/'}>Go Back</Link>
      &nbsp;
      <button onClick={() => router.push('/')}>Go Back</button>
    </div>
  )
}

export default Login