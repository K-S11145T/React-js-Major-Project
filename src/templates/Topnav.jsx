import axios from '../utils/axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import noimage from '/noimage.jpg'

function Topnav() {
  const [query, setquery] = useState("")
  const [searches, setSearches] = useState([])

  const GetSearches = async () => {
    try {
      const { data } = await axios.get(`/search/multi?query=${query}`)
      setSearches(data.results)
    }
    catch (error) {
      console.log("Error : ", error)
    }
  }

  useEffect(() => {
    GetSearches()
  }, [query])


  return (
    <>
      <div className='w-[75%] h-[10vh] text-zinc-200 flex relative mx-[20%] items-center'>
        <i className="ri-search-2-line text-2xl"></i>

        <input
          onChange={(e) => {
            setquery(e.target.value)

          }}
          value={query}
          className="mx-5 w-[50%] p-4 rounded-lg outline-none bg-transparent" type="text" placeholder='Search Anything' />

        {query.length > 0 && (<i onClick={() => { setquery("") }} className="ri-close-large-line text-xl"></i>)}




        <div className='bg-zinc-300 overflow-auto w-[50%] z-[9] left-[5%] top-[100%] max-h-[50vh] absolute'>
          {searches.map((s, i) => (<Link to={`${s.media_type}/details/${s.id}`} key={i} className='w-full text-zinc-600 text-xl hover:text-black duration-300 hover:bg-zinc-400 border-b-2 border-zinc-100 inline-block flex justify-start items-center p-10'>
            <img className='w-[10vh] rounded-xl h-[10vh] object-cover mr-10 shadow-lg'
              src={s.backdrop_path || s.profile_path ?
                `https://image.tmdb.org/t/p/original/${s.backdrop_path || s.profile_path}` : noimage}

              alt="" />
            <span>{s.name || s.title || s.original_name || s.original_title}</span>
          </Link>))}



        </div>

      </div>
    </>
  )
}

export default Topnav
