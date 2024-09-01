import React from 'react'
import ReactPlayer from 'react-player'
import { useSelector } from 'react-redux'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Notfound from '../Components/Notfound'

const Trailer = () => {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const category = pathname.includes("movie") ? "movie" : "tv"
  const ytvideo = useSelector(state => state[category].info.videos)
  return (
    <div className='absolute top-0 left-0 bg-[rgba(0,0,0,.8)] w-screen h-screen flex justify-center items-center'>
      <Link className='absolute top-[5%] text-zinc-200 text-xl hover:text-red-500 right-[5%] '>
        <i onClick={() => navigate(-1)} class="ri-close-large-line"></i>
      </Link>
      {ytvideo ? <ReactPlayer controls height={500} width={1000} url={`https://www.youtube.com/watch?v=${ytvideo.key}`} /> : <Notfound />}
      
    </div>
  ) 
}

export default Trailer
