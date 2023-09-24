'use client'
import React, { useState } from 'react'

const Product = () => {
  const [data, setData] = useState({
    name: "",
    price: "",
    company: "",
    color: "",
    category: ""
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.warn('we are submitting form', data);

    let res = await fetch('http://localhost:3000/api/products', {
      method: 'POST',
      body: JSON.stringify(data)
    });

    res = await res.json();

    if (res.success) {
      alert('created successfully')
    } else {
      alert('some error occurred')
    }

    setData({
      name: "",
      price: "",
      company: "",
      color: "",
      category: ""
    })
  }

  const handleChange = (e) => {
    setData(prev => {
      return {
        ...prev,
        [e.target.name]: e.target.value
      }
    })
  }
  return (
    <div>
      <h1>Add Products</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <input onChange={handleChange} type="text" name="name" value={data.name} placeholder='Enter Name' />
        </div>
        <div>
          <input onChange={handleChange} type="text" name="price" value={data.price} placeholder='Enter Price' />
        </div>
        <div>
          <input onChange={handleChange} type="text" name="company" value={data.company} placeholder='Enter Company Name' />
        </div>
        <div>
          <input onChange={handleChange} type="text" name="color" value={data.color} placeholder='Enter Color' />
        </div>
        <div>
          <input onChange={handleChange} type="text" name="category" value={data.category} placeholder='Enter Category' />
        </div>
        <button type="submit">
          Add User
        </button>
      </form>
    </div>
  )
}

export default Product