import React from 'react'
import fetchData from '../../../services/getUsers'
import Link from 'next/link'

const Users = async () => {
    let users = await fetchData()
    return (
        <div>
            {users.map((user, idx) => {
                return <div key={idx}>
                    <Link href={`users/${user.id}`}>{user.username}</Link>
                </div>
            })}
        </div>
    )
}

export default Users