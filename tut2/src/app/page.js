'use client'
import React, { useState } from 'react'

const page = () => {
  const [name, setName] = useState('Vishal')
  const MakeIt = () => {
    console.warn('Make it');
  }
  const MakeItApple = (item) => {
    console.warn(item);
  }

  const Hello = () => {
    return (
      <div>Hello Inner Components</div>
    )
  }
  return (
    <div>
      <p>BOII {name}</p>
      <button onClick={() => alert('Help next.js')}>Click Me</button>
      <button onClick={MakeIt}>Make it</button>
      <button onClick={() => MakeItApple('apple')}>Apple</button>
      <button onClick={() => setName('Paji')}>Change Name</button>

      <Hello />
      {Hello()}
    </div>
  )
}

export default page