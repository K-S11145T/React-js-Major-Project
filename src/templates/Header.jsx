import React from 'react'
import { Link } from 'react-router-dom'

const Header = ({ data }) => {

  return (
    <>
      <div className='w-full  relative bg-gradient-to-b from-zinc-900 to-black h-[50vh]'>

        <img className='object-cover w-full absolute h-full opacity-[50%] object-center' src={`https://image.tmdb.org/t/p/original/${data.backdrop_path || data.profile_path}`} alt="" />

        <h1 className='absolute bont-black font-bold w-[75%] text-5xl flex flex-col items-start justify-center text-white p-10 top-[0%]'>
          {data.name || data.title || data.original_name || data.original_title}
          <p className='text-lg font-normal mt-3'>{ data.overview } <Link to={`/${data.media_type}/details/${data.id}`} className='text-blue-400'>more</Link></p>
          <div className='flex gap-4 mt-3 items-center'>

            <p className='text-white text-lg font-normal'><i class="ri-megaphone-fill"></i> {data.release_date || "no info"}</p>
            <p className='text-white text-lg font-normal uppercase '><i class="ri-album-fill"></i> {data.media_type}</p>
          </div>

          <Link to={`${data.media_type}/details/${data.id}/trailer`} >
            <h1 className='mt-3 font-normal text-lg p-3 rounded-lg hover:bg-blue-800 bg-blue-700'>Watch Trailer</h1>
          </Link>
        </h1>

      </div>

    </>
  )
}

export default Header

