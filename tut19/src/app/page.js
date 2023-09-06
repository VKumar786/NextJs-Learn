'use client'
import React from 'react'

import custom1 from './custom1.module.css'
import custom2 from './custom2.module.css'
import custom3 from '@/styles/outside.module.css'

const Home = () => {
  return (
    <div>
      <h3 style={{
        textDecoration: 'underline'
      }}>Home page</h3>
      <h6>Making Something new</h6>

      <div>
        <h6 className={custom1.main}>Module 1</h6>
        <h6 className={custom2.main}>Module 2</h6>
        <h6 className={custom3.main}>Outside Module 2</h6>
      </div>
    </div>
  )
}

export default Home