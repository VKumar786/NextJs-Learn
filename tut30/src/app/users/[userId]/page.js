import React from 'react'
import fetchData from '../../../../services/getUsers'

const Page = async (props) => {
    let users = await fetchData()
    console.warn(props);
    return (
        <>
            <div>Id: {users[props.params.userId - 1].id}</div>
            <div>Name: {users[props.params.userId - 1].name}</div>
            <div>UserName: {users[props.params.userId - 1].username}</div>
            <div>Email: {users[props.params.userId - 1].email}</div>
            <div>Address: {users[props.params.userId - 1].address.street}</div>
            <div>Phone: {users[props.params.userId - 1].phone}</div>
            <div>Website: {users[props.params.userId - 1].website}</div>
            <div>Company: {users[props.params.userId - 1].company.name}</div>
        </>
    )
}

export default Page

export async function generateStaticParams() {
    let data = fetchData()
    let users = await data
    return users.map((user) => {
        userId: user.id.toString()
    })
}