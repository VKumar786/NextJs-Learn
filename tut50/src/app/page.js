'use client'
import React, { useState } from 'react'

const Home = () => {
  const [file, setFile] = useState('')
  const handleSubmit = async (e) => {
    e.preventDefault()

    console.warn(file);

    const data = new FormData()
    data.set('image', file)

    let res = await fetch('api/upload', {
      method: 'POST',
      body: data
    })

    alert(res.message)

  }
  return (
    <div>
      <h2>Upload Image</h2>

      <form onSubmit={handleSubmit}>
        <input type="file" name="image" onChange={(e) => setFile(e.target.files?.[0])} placeholder='Upload Image' />
        <button type="submit">Upload Image</button>
      </form>
    </div>
  )
}

export default Home