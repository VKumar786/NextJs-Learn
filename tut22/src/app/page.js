import { Poppins } from 'next/font/google'
import React from 'react'

const poppins = Poppins({
  weight: '100',
  subsets: ['latin'],
  display: 'swap'
})

const Home = () => {
  return (
    <div>
      {/* Links in header of layout */}
      <h3 style={{
        fontFamily: 'Poppins'
      }}>This is Heading</h3>
      {/* Import next/font/google */}
      <h1 className={poppins.className}>
        This is new
      </h1>
    </div>
  )
}

export default Home