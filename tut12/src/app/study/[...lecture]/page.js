'use client'
import React from 'react'

const Lecture = ({ params }) => {
    return (
        <div>
            <p>Lecture 007</p>
            <ul>
                {params.lecture.map((item, idx) => {
                    return <li key={idx}>
                        {item}
                    </li>
                })}
            </ul>
        </div>
    )
}

export default Lecture