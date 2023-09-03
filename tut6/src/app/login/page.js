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
        login page
      </h3>

      <Link href={'/'}>Go Back</Link>
      &nbsp;

      <button onClick={() => router.push('/')}>Go Back</button>

      <br />
      <button onClick={() => navigate('loginCollege')}>Login College</button>
      <button onClick={() => navigate('loginStudent')}>Login Student</button>
    </div>
  )
}

export default Login