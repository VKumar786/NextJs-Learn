import Image from 'next/image'
import React from 'react'
import Vercel from '../../public/vercel.svg'

const Home = () => {
  return (
    <div>
      <Image src={Vercel} alt='vercel-img' />
      <img src={Vercel.src} alt='vercel-img' />
      <Image src={`https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png`}
        width={200}
        height={200}
        alt='vercel-img' />
    </div>
  )
}

export default Home