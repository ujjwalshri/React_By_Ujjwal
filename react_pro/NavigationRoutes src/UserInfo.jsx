import React from 'react'
import { useParams } from 'react-router-dom'

function UserInfo() {
    const {User} = useParams()
  return (
    <div className='bg-gray-600 text-white text-3xl p-4'>{User}</div>
  )
}

export default UserInfo;