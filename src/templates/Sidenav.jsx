import axios from '../utils/axios'
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

function Sidenav() {
  


  return (
    <>
      <div className='w-[20%] h-screen border-r-2 border-zinc-200 p-10 font-bold'>
        <h1 className='text-2xl text-white'>
          <i className="text-sky-800 ri-tv-fill mr-2"></i>
          KROLOADSTER
        </h1>

        <nav className='flex flex-col text-zinc-400 text-xl'>
          <h1 className='text-white font-semibold mt-10 mb-5' >New Feeds</h1>

          <Link to={"/trending"} className='text-xl font-medium rounded-lg hover:bg-blue-500 duration-300 hover:text-white p-4 '><i class="ri-fire-fill mr-2"></i>Trending</Link>
          <Link to={"/popular"} className='text-xl font-medium rounded-lg hover:bg-blue-500 duration-300 hover:text-white p-4 '> <i class="ri-bard-fill mr-2"></i>Popular</Link>
          <Link to={"/movie"} className='text-xl font-medium rounded-lg hover:bg-blue-500 duration-300 hover:text-white p-4 '> <i class="ri-film-fill mr-2"></i>Movies</Link>
          <Link to={"/tv"} className='text-xl font-medium rounded-lg hover:bg-blue-500 duration-300 hover:text-white p-4 '> <i class="ri-tv-2-fill mr-2"></i>TV Shows</Link>
          <Link to={"/person"} className='text-xl font-medium rounded-lg hover:bg-blue-500 duration-300 hover:text-white p-4 '><i class="ri-team-fill mr-2"></i>People</Link>

        </nav>
        <hr className='border-none my-5 h-[1px] bg-zinc-400' />
        <nav className='flex flex-col text-zinc-400 text-xl'>
          <h1 className='text-white font-semibold mt-10 mb-5' >Website Information</h1>

          <Link className='text-xl font-medium rounded-lg hover:bg-blue-500 duration-300 hover:text-white p-4 '><i className="ri-error-warning-fill mr-2"></i>About</Link>
          <Link className='text-xl font-medium rounded-lg hover:bg-blue-500 duration-300 hover:text-white p-4 '> <i className="ri-phone-fill mr-2"></i>Contact</Link>
         

        </nav>



      </div>
    </>
  )
}

export default Sidenav
