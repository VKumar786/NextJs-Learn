'use client'
import React from 'react'

const DeleteUser = () => {
    const handleDeleteUser = async () => {
        let res = await fetch('http://localhost:3000/api/users/2', {
            method: 'DELETE',
        })
        res = await res.json()
        if (res.success) {
            alert('delete successfully')
        } else alert('something went wrong')
    }
    return (
        <div>
            <button onClick={handleDeleteUser}>
                Delete
            </button>
        </div>
    )
}

export default DeleteUser