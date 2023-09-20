import React from 'react'
import ProductBtn from './productBtn'
import User from '@/components/User'

async function fetchData() {
    let res = await fetch('https://dummyjson.com/products')
    let data = await res.json()
    return data.products
}

const ProductList = async () => {
    let products = await fetchData()
    console.warn(products);
    return (
        <div style={{
            padding: '50px 100px'
        }}>
            <h3>Products List <User /></h3>

            <ul id='productsList'>
                {products ? products.map((item, idx) => {
                    return <li key={idx} style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <div>
                            Name: {item.title}
                        </div>
                        <div>
                            ${item.price}
                        </div>

                        <div>
                            {/* <button onClick={() => alert("hi")}>
                                click me
                            </button> */}
                            <ProductBtn price={item.price} />
                        </div>
                    </li>
                }) : <div>Loading...</div>}
            </ul>
        </div>
    )
}

export default ProductList

export function generateMetadata({ params }) {
    return {
        title: 'Products Page',
        description: 'description of products page'
    }
}