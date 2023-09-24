import Link from 'next/link'
import React from 'react'

const Home = () => {
  return (
    <div>
      <Link href={'/product'}>Product</Link>
    </div>
  )
}

export default Home