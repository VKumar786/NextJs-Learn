'use client'
import React from 'react'

const ProductBtn = ({ price }) => {
    return (
        <div>
            <button onClick={() => alert(price)}>
                click me
            </button>
        </div>
    )
}

export default ProductBtn