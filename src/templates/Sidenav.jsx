import axios from '../utils/axios'
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

function Sidenav() {
  


  return (
    <>
      <div className='w-[20%] h-screen border-r-2 border-zinc-200 p-10 font-bold'>
        <h1 className='text-lg text-white'>
          <i className="text-sky-800 ri-tv-fill mr-2"></i>
          KROLOADSTER
        </h1>

        <nav className='flex flex-col text-zinc-400 text-lg'>
          <h1 className='text-white font-semibold mt-7 mb-3' >New Feeds</h1>

          <Link to={"/trending"} className='text-base  font-medium rounded-lg hover:bg-blue-500 duration-300 hover:text-white p-3 '><i class="ri-fire-fill mr-2"></i>Trending</Link>
          <Link to={"/popular"} className='text-base font-medium rounded-lg hover:bg-blue-500 duration-300 hover:text-white p-3 '> <i class="ri-bard-fill mr-2"></i>Popular</Link>
          <Link to={"/movie"} className='text-base g font-medium rounded-lg hover:bg-blue-500 duration-300 hover:text-white p-3 '> <i class="ri-film-fill mr-2"></i>Movies</Link>
          <Link to={"/tv"} className='text-base  font-medium rounded-lg hover:bg-blue-500 duration-300 hover:text-white p-4 '> <i class="ri-tv-2-fill mr-2"></i>TV Shows</Link>
          <Link to={"/person"} className='text-base  font-medium rounded-lg hover:bg-blue-500 duration-300 hover:text-white p-3 '><i class="ri-team-fill mr-2"></i>People</Link>

        </nav>
        <hr className='border-none my-5 h-[1px] bg-zinc-400' />
        <nav className='flex flex-col text-zinc-400 text-lg'>
          <h1 className='text-white font-semibold mt-3 mb-3' >Website Information</h1>

          <Link className='text-base font-medium rounded-lg hover:bg-blue-500 duration-300 hover:text-white p-3 '><i className="ri-error-warning-fill mr-2"></i>About</Link>
          <Link className='text-base font-medium rounded-lg hover:bg-blue-500 duration-300 hover:text-white p-3 '> <i className="ri-phone-fill mr-2"></i>Contact</Link>
         

        </nav>



      </div>
    </>
  )
}

export default Sidenav
