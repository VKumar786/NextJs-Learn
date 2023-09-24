'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const Product = (props) => {
  const [data, setData] = useState({
    name: "",
    price: "",
    company: "",
    color: "",
    category: ""
  })

  const fetchProduct = async () => {
    console.warn(props);
    let res = await fetch(`http://localhost:3000/api/products/${props.params.productId}`)
    res = await res.json()
    console.warn(res);
    setData(res.results[0])
    // console.warn(res.results[0]);
  }

  useEffect(() => {
    fetchProduct()

    return () => {

    }
  }, [])


  const handleSubmit = async (e) => {
    e.preventDefault()
    console.warn('we are submitting form', data);

    let res = await fetch(`http://localhost:3000/api/products/${props.params.productId}`, {
      method: 'PUT',
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
      <h1>Edit Products</h1>
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
          Update User
        </button>
      </form>
      <Link href={'/'}>Home</Link>
    </div>
  )
}

export default Product