import React from 'react'

const Home = () => {
  console.warn(process.env.NODE_ENV);
  console.warn(process.env);
  console.warn(process.env.SERVER_PWD);
  return (
    <div>
      I am in my home
      {process.env.NODE_ENV === 'development' ? 'you are in development mode' : 'you are in production mode'}
    </div>
  )
}

export default Home