import React from 'react'
import notfound from '/404.gif'

const Notfound = () => {
  return (
    <div className='w-screen h-screen bg-[#171717] flex justify-center items-center'>
      <img className='w-[200px] object-cover h-[200px]' src={notfound} alt="" />
    </div>
  )
}

export default Notfound
