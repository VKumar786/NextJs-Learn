'use client'
import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const Home = () => {
  const router = useRouter()
  return (
    <div>

      <h3>Home page</h3>

      <Link href={'/login'}>Login</Link>
      &nbsp;

      <Link href={'/about'}>About</Link>
      &nbsp;
      &nbsp;

      <button onClick={() => router.push('/login')}>Login</button>
      &nbsp;
      <button onClick={() => router.push('/about')}>About</button>

    </div>
  )
}

export default Home