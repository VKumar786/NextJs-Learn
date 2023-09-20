import Link from 'next/link'
import React from 'react'

async function getUsers() {
    let data = await fetch(`http://localhost:3000/api/users`)
    return await data.json()
}

const User = async () => {
    let users = await getUsers()
    return (
        <div>
            {/* {users.map((user, idx) => {
                return <div key={idx} style={{
                    border: '1px solid #000',
                    margin: '5px',
                    padding: '7px 10px'
                }}>
                    id: {user.id},
                    Name: {user.name},
                    Age: {user.age},
                    Email: {user.email}
                </div>
            })} */}
            {users.map((user, idx) => {
                return <div key={idx} style={{
                    border: '1px solid #000',
                    margin: '5px',
                    padding: '7px 10px'
                }}>
                    <Link href={`http://localhost:3000/users/${user.id}`}>
                        Name: {user.name},
                    </Link>
                </div>
            })}
        </div>
    )
}

export default User