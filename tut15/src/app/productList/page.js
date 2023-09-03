'use client'
import React, { useEffect, useState } from 'react'

const ProductList = () => {
    const [products, setProducts] = useState([])

    const fetchData = async () => {
        let res = await fetch('https://dummyjson.com/products')
        let data = await res.json()
        // console.warn(data.products);
        setProducts(data.products)
    }
    useEffect(async () => {
        await fetchData()
        return () => { }
    }, [])

    return (
        <div style={{
            padding: '50px 100px'
        }}>
            <h3>Products List</h3>

            <ul>
                {products.map((item, idx) => {
                    return <li key={idx} style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <div>
                            Name: {item.title}
                        </div>
                        <div>
                            ${item.price}
                        </div>
                    </li>
                })}
            </ul>
        </div>
    )
}

export default ProductList