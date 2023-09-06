'use client'
import React, { useState } from 'react'

import style from './style.module.css'

const Home = () => {
  const [color, setColor] = useState('red')
  const { sample } = style
  return (
    <div>
      <h3 style={{
        textDecoration: 'underline'
      }}>Home page</h3>
      <h6>Making Something new</h6>

      <div>
        <h1 id={style.mainHeading}>Main Heading</h1>
        <h1 color={sample}>Style something</h1>
        <p className={color === 'red' ? style.mainRed : style.mainGreen} onClick={() => {
          if (color === 'red') setColor('green')
          else setColor('red')
        }}>
          Making something new
        </p>
      </div>

    </div>
  )
}

export default Home