import React from 'react'
import { useState, useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
//   const [data, setData] = useState([])

//   useEffect(() => {
//     fetch('https://api.github.com/users/hiteshchoudhary')
//     .then(res => res.json())
//     .then(res => setData(res))
//   }, [])

  return (
    <>
      <div className='text-center bg-gray-500 m-4 p-4 text-white text-3xl'>
        Github followers: {data.followers}
      </div>
      <div className='flex justify-center'>
        <img src={data.avatar_url} alt="" width={300}/>
      </div>
    </>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/codewithharry')
    return response.json()
}