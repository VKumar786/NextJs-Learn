'use client'
import React, { useState } from 'react'

const Page = () => {
    const [data, setData] = useState({
        id: 0,
        name: '',
        age: 0,
        email: ''
    })

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.warn('we are submitting form', data);

        let res = await fetch('http://localhost:3000/api/users', {
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
            id: 0,
            name: '',
            age: 0,
            email: ''
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
            <form onSubmit={handleSubmit}>
                <div>
                    <input onChange={handleChange} type="number" name="id" value={data.id} placeholder='Enter Id' />
                </div>
                <div>
                    <input onChange={handleChange} type="text" name="name" value={data.name} placeholder='Enter Name' />
                </div>
                <div>
                    <input onChange={handleChange} type="number" name="age" value={data.age} placeholder='Enter Age' />
                </div>
                <div>
                    <input onChange={handleChange} type="email" name="email" value={data.email} placeholder='Enter Email' />
                </div>

                <button type="submit" onClick={() => {
                    setData({
                        id: 11,
                        name: 'vishal 2.0',
                        age: 23,
                        email: 'yadav11adu@gmail.com'
                    })
                }}>
                    Fill1
                </button>
                <button type="submit">
                    Add User
                </button>
            </form>
        </div>
    )
}

export default Page