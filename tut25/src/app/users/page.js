import React from 'react'

async function userList() {
    let data = await fetch('https://dummyjson.com/users')
    data = await data.json()
    return data.users
}

const Users = async () => {
    let users = await userList()
    return (
        <>
            {users.map((user, idx) => {
                return <div key={idx}>
                    {user.firstName} {user.lastName}
                </div>
            })}
        </>
    )
}

export default Users