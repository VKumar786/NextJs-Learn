import Image from 'next/image'
import Script from 'next/script'
import React from 'react'

const Home = () => {
  return (
    <div>
      <h1>Making something new</h1>
      <Script src='/common.js' />
      <Image src={'/vercel.svg'} width={200} height={100} />
    </div>
  )
}

export default Home