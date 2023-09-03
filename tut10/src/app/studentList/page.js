'use client'
import Link from 'next/link'
import React from 'react'

const names = ["Alice", "Bob", "Charlie", "David", "Eva", "Frank", "Grace", "Hannah", "Isaac", "Jasmine"]

const StudentList = () => {
    return (
        <>
            <h1>Student List</h1>
            <ul>
                {names.map((item, idx) => {
                    return <li key={idx}>
                        <Link href={`/studentList/${item}`}>
                            {item}
                        </Link>
                    </li>
                })}
            </ul>
        </>
    )
}

export default StudentList