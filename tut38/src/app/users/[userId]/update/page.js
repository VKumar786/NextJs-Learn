'use client'
import React, { useState, useEffect } from 'react'

const Page = (props) => {
    console.warn(props);

    const [data, setData] = useState({
        id: 0,
        name: '',
        age: 0,
        email: ''
    })

    let fetchData = async () => {
        let res = await fetch(`/api/users/${props.params.userId}`)
        res = await res.json()
        setData(res.Result[0])
        console.warn(res);
    }
    useEffect(() => {
        fetchData()

    }, [])


    const handleSubmit = async (e) => {
        e.preventDefault()
        console.warn('we are submitting form', data);

        let res = await fetch(`/api/users/${props.params.userId}`, {
            method: 'PUT',
            body: JSON.stringify(data)
        });

        res = await res.json();
        console.warn(res);

        if (res.success) {
            alert('updated successfully')
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
                    Update User
                </button>
            </form>
        </div>
    )
}

export default Page