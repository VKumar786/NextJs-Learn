'use client'
import Script from 'next/script'
import React from 'react'

const UserDetails = () => {
  return (
    <div>
      <Script
        src='/location.js'
        onLoad={() => {
          console.log('location file ended')
        }}
      />
      UserDetails</div>
  )
}

export default UserDetails