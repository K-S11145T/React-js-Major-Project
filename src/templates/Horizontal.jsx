import React from 'react'
import { Link } from 'react-router-dom'
import Dropdown from './Dropdown'
import noimage from '/noimage.jpg'

const Horizontal = ({ data , heading}) => {
  return (
    <>
      <div className='w-full h-[50vh] p-5 '>
        <div className='mb-5 flex justify-between'>
          <h1 className='text-zinc-200 font-semibold text-2xl'>{heading}</h1>

          {/* <Dropdown title="Filter" options = {["TV" , "Movie" , "All"]} /> */}
        </div>
        <div className='w-full h-full flex gap-5 shrink-0 overflow-x-auto '>
          {data.length > 0 ? data.map((e, i) => <Link to={`/${e.media_type}/details/${e.id}`}  key={i} className={`min-w-[15%] bg-gradient-to-b from-black to-zinc-900 rounded-lg overflow-hidden h-[40vh] `}>

            <h1 className=' h-full font-semibold w-full  text-xl gflex flex-col items-start justify-evenly text-white '>

              <img className=' opacity-[70%] w-full h-[50%] object-cover' src={e.poster_path || e.backdrop_path ? `https://image.tmdb.org/t/p/w500${e.poster_path || e.backdrop_path}` : noimage} />

              <div className='px-3 py-1'>

                {e.name || e.title || e.original_name || e.original_title}
                <p className='text-lg font-normal tracking-tight mt-3'>{e.overview.slice(0, 70)}... <Link className='text-gray-700'>more</Link></p>
              </div>

            </h1>
          </Link> )  : <h1 className='font-black text-center mt-5 text-4xl text-white font-black'>Nothing to Show</h1> }
        </div>








      </div>
    </>
  )
}

export default Horizontal
