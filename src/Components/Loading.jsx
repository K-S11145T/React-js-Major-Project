import React from 'react'
import loader from '/giphy.gif'

const Loading = () => {
  return (
    <div className='w-screen h-screen bg-black flex justify-center items-center'>
      <img className='w-[200px] object-cover h-[200px]' src={loader} alt="" />
    </div>
  )
}

export default Loading
