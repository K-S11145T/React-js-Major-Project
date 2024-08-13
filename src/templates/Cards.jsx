import React from 'react'
import { Link } from 'react-router-dom'
import noimage from '/noimage.jpg'

const Cards = ({ data , title }) => {
  console.log(title)
  return (
    <>

      <div className='text-white w-screen p-[5%] flex flex-wrap justify-evenly gap-10 bg-[#1F1E24]' >
        {data.map((x, i) =>(
          <Link to={`/${data.media_type || title}/details/${x.id}`} className='w-[15%] relative' key={i}>

            <img className='h-[45vh] shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] w-full object-cover' src={x.backdrop_poster || x.backdrop_path || x.profile_path ? `https://image.tmdb.org/t/p/original/${ x.backdrop_poster || x.backdrop_path || x.profile_path}` : noimage} alt="" />
            <h1 className='text-zinc-300 text-2xl font-semibold mt-3'>
              {x.name || x.title || x.original_name || x.original_title}
            </h1>

            {x.vote_average && <div className='flex absolute text-xl font-semibold bottom-[25%] right-[-7%] bg-violet-800 h-12 w-12 items-center justify-center rounded-full text-white'>
              {(x.vote_average*10).toFixed()} <sup>%</sup>
            </div>}

            
          </Link>
        ))}

      </div>
    </>
  )
}

export default Cards
