import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { asyncloadmovies, removemovie } from '../stores/actions/movieActions'
import { Link, Outlet, useLocation, useNavigate, useParams } from 'react-router-dom'
import Loading from './Loading'
import Horizontal from '../templates/Horizontal'

const MovieDetails = () => {
  const { pathname } = useLocation()

  const { id } = useParams()
  const { info } = useSelector(state => state.movie)

  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(asyncloadmovies(id))

    return () => {
      dispatch(removemovie())
    }

  }, [id])
  return info ? (

    <>
      <div className='w-[100%] min-h-[165vh]'>
        <div className='w-full relative h-full  bg-gradient-to-b from-zinc-900 to-black h-[50vh]'>
          <img className='object-cover w-full  h-full top-0 left-0 opacity-[50%] object-center' src={`https://image.tmdb.org/t/p/original/${info.detail.backdrop_path}`} alt="" />

          <div className='absolute left-0 top-0  px-20' >
            <nav className='absolute py-10 flex items-center px-20 gap-5 text-xl  top-0 left-0 w-full text-zinc-200'>
              <Link>
                <i onClick={() => navigate(-1)} class="ri-arrow-left-line hover:text-blue-700 "></i>
              </Link>

              <a href=""><i class="ri-external-link-fill"></i></a>
              <a target='_blank' href={`https://www.wikipedia.org/wiki/${info.externalid.wikidata_id}`}><i class="ri-earth-fill"></i></a>
              <a target='_blank' href={`https://www.imdb.com/title/${info.externalid.imdb_id}`}>imdb</a>

            </nav>


            <div>
              <div className='mt-32 w-full flex gap-12'>
                <div className='h-[55vh] w-[20%]'>

                  <img className=' h-full w-full shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] w-full object-cover' src={`https://image.tmdb.org/t/p/original/${info.detail.poster_path || info.detail.backdrop_path}`} alt="" />
                </div>
                <div className='text-white w-[80%]'>
                  <h1 className='text-5xl font-black text-white'>
                    {info.detail.name || info.detail.title || info.detail.original_name || info.detail.original_title}

                    <small className='font-bold text-zinc-200 text-2xl'>({info.detail.release_date.split("-")[0]})</small>
                  </h1>
                  <div className='flex mt-2 text-white text-lg items-center gap-5'>

                    <span className='flex  text-xl font-semibold   bg-violet-800 h-12 w-12 items-center justify-center rounded-full text-white'>
                      {(info.detail.vote_average * 10).toFixed()} <sup>%</sup>
                    </span>
                    <h1 className='text-2xl font-medium'>User Score</h1>
                    <h1>{info.detail.release_date}</h1>
                    <h1>
                      {info.detail.genres.map(g => g.name).join(', ')}
                    </h1>
                    <h1>{info.detail.runtime}min</h1>

                  </div>
                  <h1 className='text-xl text-zinc-100 italic font-semibold mt-3'>{info.detail.tagline}</h1>
                  <h1 className='text-xl mt-5'>Overview</h1>
                  <p>{info.detail.overview}</p>
                  <h1 className='text-xl mt-5'>Movie Translated</h1>
                  <p className='mb-10'>{info.translations.join(" , ")}</p>

                  <Link className='p-4 bg-blue-700 hover:bg-blue-800 rounded' to={`${pathname}/trailer`}> <i class="ri-play-fill"></i> Play Trailer </Link>
                </div>
              </div>


              <div className='mt-10 flex flex-col gap-5'>


                <div className=' flex gap-5 text-white items-center'>
                  {info.watchproviders &&
                    info.watchproviders.flatrate &&
                    <h1>Available on Platforms</h1>}

                  {info.watchproviders &&
                    info.watchproviders.flatrate &&


                    info.watchproviders.flatrate.map((x,i) => (

                      <img  key={i}title={x.provider_name} className='w-[5vh] h-[5vh] shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] object-cover rounded-md' src={`https://image.tmdb.org/t/p/original/${x.logo_path}`} alt="" />
                    ))}
                </div>

                <div className=' flex gap-5 text-white items-center'>
                  {info.watchproviders &&
                    info.watchproviders.rent &&
                    <h1>Available on Rent</h1>}

                  {info.watchproviders &&
                    info.watchproviders.rent &&


                    info.watchproviders.rent.map((x,i) => (

                      <img key={i} title={x.provider_name} className='w-[5vh] h-[5vh] shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] object-cover rounded-md' src={`https://image.tmdb.org/t/p/original/${x.logo_path}`} alt="" />
                    ))}
                </div>
                <div className=' flex gap-5 text-white items-center'>
                  {info.watchproviders &&
                    info.watchproviders.buy &&
                    <h1>Available to Buy</h1>}

                  {info.watchproviders &&
                    info.watchproviders.buy &&


                    info.watchproviders.buy.map((x,i) => (
                      <img  key={i} title={x.provider_name} className='w-[5vh] h-[5vh] shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] object-cover rounded-md' src={`https://image.tmdb.org/t/p/original/${x.logo_path}`} alt="" />
                    ))}
                </div>



              </div>

              <div className='w-[90vw] mt-16 px-auto '>

                <hr className='border-none mb-4 h-[1px] bg-zinc-400' />

                <Horizontal heading={"Recommendations & Similar stuff"} data={info.recommendations.length > 0 ? info.recommendations : info.similar} />
              </div>


            </div>

          </div>
          <Outlet ></Outlet>

        </div>

      </div>

    </>
  ) : <Loading />
}

export default MovieDetails





