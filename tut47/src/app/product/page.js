'use client'
import { Calistoga } from 'next/font/google'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const Product = () => {
  const [arr, setArr] = useState({
    results: [],
    success: false
  })
  const [data, setData] = useState({
    name: "",
    price: "",
    company: "",
    color: "",
    category: ""
  })

  const fetchProducts = async () => {
    let res = await fetch('http://localhost:3000/api/products')
    res = await res.json()
    if (res.success) setArr(res)
  }
  useEffect(() => {
    fetchProducts()

    return () => {

    }
  }, [])


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

  console.warn(arr);
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

      <br />
      <h2>Product List</h2>

      <table>
        <tr>
          <th>Name</th>
          <th>Price</th>
          <th>Company</th>
          <th>Color</th>
          <th>Category</th>
        </tr>

        {arr.success && <>
          {arr.results.map((item, idx) => {
            console.log(item);
            return (
              <tr key={idx}>
                <td>
                  {item?.name}
                </td>
                <td>{item?.price}</td>
                <td>{item?.company}</td>
                <td>{item?.color}</td>
                <td>{item?.category}</td>
                <td>
                  <Link href={`/product/${item._id}`}>Edit</Link>
                </td>
              </tr>
            );
          })}
        </>}

      </table>
    </div>
  )
}

export default Product