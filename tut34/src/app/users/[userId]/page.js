import React from 'react'

async function getUsers(idx) {
    let data = await fetch(`http://localhost:3000/api/users/${idx}`)
    return await data.json()
}

const Page = async (props) => {
    let users = await getUsers(props.params.userId)
    // console.warn(props, users);
    return (
        <div>
            {users.Result.map((user, idx) => {
                return <div key={idx} style={{
                    border: '1px solid #000',
                    margin: '5px',
                    padding: '7px 10px'
                }}>
                    id: {user.id},
                    a
                    Name: {user.name},
                    Age: {user.age},
                    Email: {user.email}
                </div>
            })}
        </div>
    )
}

export default Page