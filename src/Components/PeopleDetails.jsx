import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { asyncloadpeoples, removepeople } from '../stores/actions/peopleActions'
import { Link, Outlet, useLocation, useNavigate, useParams } from 'react-router-dom'
import Loading from './Loading'
import Horizontal from '../templates/Horizontal'

const PeopleDetails = () => {
  const { pathname } = useLocation()
  const [category, setcategory] = useState(`all` && `movie` || 'tv')
  const { id } = useParams()
  const { info } = useSelector(state => state.people)

  const navigate = useNavigate()
  const dispatch = useDispatch()


  useEffect(() => {
    dispatch(asyncloadpeoples(id))

    return () => {
      dispatch(removepeople())
    }

  }, [id])
  return info ? (
    <div className='px-20 w-screen overflow-y-auto'>
      <nav className=' py-5 flex items-center gap-5 text-xl  top-0 left-0 w-full text-zinc-200'>
        <Link>
          <i onClick={() => navigate(-1)} class="ri-arrow-left-line hover:text-blue-700 "></i>
        </Link>

      </nav>
      <div className='w-full flex gap-10 py-10'>
        <div className=' w-[15%]'>

          <img className=' h-[40vh] w-full shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] object-cover' src={`https://image.tmdb.org/t/p/original/${info.detail.profile_path}`} alt="" />
          <hr className='border-none mt-10 h-[1px] bg-zinc-400' />

          <div className='text-2xl text-zinc-200 flex gap-10 mt-5'>
            <a target='_blank' href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`}><i class="ri-earth-fill"></i></a>


            <a target='_blank' href={`https://www.facebook.com/${info.externalid.facebook_id}`}>
              <i class="ri-facebook-circle-fill"></i>
            </a>

            <a target='_blank' href={`https://www.instagram.com/${info.externalid.instagram_id}`}>
              <i class="ri-instagram-fill"></i>
            </a>

            <a target='_blank' href={`https://www.twitter.com/${info.externalid.twitter_id}`}>
              <i class="ri-twitter-x-fill"></i>
            </a>
          </div>
          <h1 className='mt-5 text-2xl text-zinc-400 font-semibold'>
            Person Info
          </h1>
          <h1 className='mt-5 text-lg text-zinc-400 font-semibold'>
            Known for
          </h1>
          <h1 className='text-lg text-zinc-400'>
            {info.detail.known_for_department}
          </h1>
          <h1 className='mt-3 text-lg text-zinc-400 font-semibold'>
            Gender
          </h1>
          <h1 className='text-lg text-zinc-400'>
            {info.detail.gender === 2 ? "Male" : "Female"}
          </h1>
          <h1 className='mt-3 text-lg text-zinc-400 font-semibold'>
            Birthday
          </h1>
          <h1 className='text-lg text-zinc-400'>
            {info.detail.birthday}
          </h1>
          <h1 className='mt-3 text-lg text-zinc-400 font-semibold'>
            Deathday
          </h1>
          <h1 className='text-lg text-zinc-400'>
            {info.detail.deathday ? info.detail.deathday : "Still alive"}
          </h1>
          <h1 className='mt-3 text-lg text-zinc-400 font-semibold'>
            Place of Birth
          </h1>
          <h1 className='text-lg text-zinc-400'>
            {info.detail.place_of_birth}
          </h1>
          <h1 className='mt-3 text-lg text-zinc-400 font-semibold'>
            Also Known As
          </h1>
          <h1 className='text-lg text-zinc-400'>
            {info.detail.also_known_as.join(" , ")}
          </h1>
        </div>

        <div className='w-[80%]'>
          <h1 className='mt-5 text-6xl text-zinc-400 font-black'>
            {info.detail.name}
          </h1>
          <h1 className='mt-5 text-xl text-zinc-400 font-semibold'>
            Biography
          </h1>
          <h1 className='mt-3 text-lg text-zinc-400'>
            {info.detail.biography}
          </h1>
          <h1 className='mt-5 text-xl text-zinc-400 font-semibold'>
            Summary
          </h1>
          <Horizontal data={info.combinedCredits.cast} />
          


          <div>
            <h1 className='mt-10 text-xl text-zinc-400 font-semibold'>
              Acting
            </h1>
            <div className='w-full p-5 list-disc text-zinc-400 mt-5 h-[50vh] overflow-x-auto overflow-y-scroll  shadow-xl border-2 border-zinc-700 shadow-[rgba(255,255,255,.2)]'>

              {info[category + 'Credits'].cast.map((c, i) => <li className='hover:text-white mb-10 duration-300 cursor-pointer'>
                <Link>
                  <span>{c.name || c.title || c.original_name || c.original_title}</span>
                  <span className='block ml-6'>{c.character && `Character Name : ${c.character}`}</span>
                </Link>
              </li>)}

            </div>

          </div>
        </div>



      </div>

    </div>
  ) : <Loading />
}

export default PeopleDetails
