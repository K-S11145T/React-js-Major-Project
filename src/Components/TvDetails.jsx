import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { asyncloadtvs, removetv } from '../stores/actions/tvActions'
import { Link, Outlet, useLocation, useNavigate, useParams } from 'react-router-dom'
import Loading from './Loading'
import Horizontal from '../templates/Horizontal'


const TvDetails = () => {
  const { pathname } = useLocation()

  const { id } = useParams()
  const { info } = useSelector(state => state.tv)

  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(asyncloadtvs(id))

    return () => {
      dispatch(removetv())
    }

  }, [id])
  return info ? (

    <>
      <div className='w-[100%] min-h-[225vh]'>
        <div className='w-full relative h-full  bg-gradient-to-b from-zinc-900 to-black h-[50vh]'>
          <img className='object-cover w-full  h-full top-0 left-0 opacity-[50%] object-center' src={`https://image.tmdb.org/t/p/original/${info.detail.backdrop_path}`} alt="" />

          <div className='absolute left-0 top-0  px-20' >
            <nav className='absolute py-10 flex items-center px-20 gap-5 text-base  top-0 left-0 w-full text-zinc-200'>
              <Link>
                <i onClick={() => navigate(-1)} class="ri-arrow-left-line hover:text-blue-700 "></i>
              </Link>

              <a href=""><i class="ri-external-link-fill"></i></a>
              <a target='_blank' href={`https://www.wikipedia.org/wiki/${info.externalid.wikidata_id}`}><i class="ri-earth-fill"></i></a>
              <a target='_blank' href={`https://www.imdb.com/title/${info.externalid.imdb_id}`}>imdb</a>

            </nav>


            <div>
              <div className='mt-20 w-full flex gap-12'>
                <div className='h-[50vh] w-[15%]'>

                  <img className=' h-full w-full shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] w-full object-cover' src={`https://image.tmdb.org/t/p/original/${info.detail.poster_path || info.detail.backdrop_path}`} alt="" />
                </div>
                <div className='text-white w-[80%]'>
                  <h1 className='text-4xl font-black text-white'>
                    {info.detail.name || info.detail.title || info.detail.original_name || info.detail.original_title}

                    <small className='font-bold text-zinc-200 text-lg'>({info.detail.first_air_date.split("-")[0]})</small>
                  </h1>
                  <div className='flex mt-2 text-white text-base items-center gap-5'>

                    <span className='flex  text-base font-semibold   bg-violet-800 h-12 w-12 items-center justify-center rounded-full text-white'>
                      {(info.detail.vote_average * 10).toFixed()} <sup>%</sup>
                    </span>
                    <h1 className='text-base font-medium'>User Score</h1>
                    <h1>{info.detail.first_air_date}</h1>
                    <h1>
                      {info.detail.genres.map(g => g.name).join(', ')}
                    </h1>
                    <h1>{info.detail.runtime}min</h1>

                  </div>
                  <h1 className='text-base text-zinc-100 italic font-semibold mt-3'>{info.detail.tagline}</h1>
                  <h1 className='text-base font-semibold mt-5'>Overview</h1>
                  <p className='text-sm mt-2 '>{info.detail.overview}</p>
                  <h1 className='text-base mt-5 font-semibold mt-3'>Movie Translated</h1>
                  <p className='mb-10 mt-2 text-sm'>{info.translations.join(" , ")}</p>

                  <Link className='p-3 bg-blue-700 hover:bg-blue-800 rounded' to={`${pathname}/trailer`}> <i class="ri-play-fill"></i> Play Trailer </Link>
                </div>
              </div>


              <div className='mt-10 flex flex-col gap-5'>


                <div className=' flex gap-5 text-white items-center'>
                  {info.watchproviders &&
                    info.watchproviders.flatrate &&
                    <h1>Available on Platforms</h1>}

                  {info.watchproviders &&
                    info.watchproviders.flatrate &&


                    info.watchproviders.flatrate.map((x, i) => (

                      <img key={i} title={x.provider_name} className='w-[5vh] h-[5vh] shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] object-cover rounded-md' src={`https://image.tmdb.org/t/p/original/${x.logo_path}`} alt="" />
                    ))}
                </div>

                <div className=' flex gap-5 text-white items-center'>
                  {info.watchproviders &&
                    info.watchproviders.rent &&
                    <h1>Available on Rent</h1>}

                  {info.watchproviders &&
                    info.watchproviders.rent &&


                    info.watchproviders.rent.map((x, i) => (

                      <img key={i} title={x.provider_name} className='w-[5vh] h-[5vh] shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] object-cover rounded-md' src={`https://image.tmdb.org/t/p/original/${x.logo_path}`} alt="" />
                    ))}
                </div>
                <div className=' flex gap-5 text-white items-center'>
                  {info.watchproviders &&
                    info.watchproviders.buy &&
                    <h1>Available to Buy</h1>}

                  {info.watchproviders &&
                    info.watchproviders.buy &&


                    info.watchproviders.buy.map((x, i) => (
                      <img key={i} title={x.provider_name} className='w-[5vh] h-[5vh] shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] object-cover rounded-md' src={`https://image.tmdb.org/t/p/original/${x.logo_path}`} alt="" />
                    ))}
                </div>



              </div>

              <div className='w-[90vw] min-h-[50vh] mb-5 mt-5 px-auto overflow-auto '>
                <div className='mb-3 flex justify-between'>
                  <h1 className='text-zinc-200 font-semibold text-lg'>Seasons</h1>

                </div>
                <div className='w-full gap-20 flex '>

                  {info.detail.seasons.length > 0 ? info.detail.seasons.map((e, i) =>

                    <h1 className=' h-[30vh] font-semibold w-[20vh] shrink-0  text-xl gflex flex-col items-start justify-evenly text-white '>

                      <img className=' w-full rounded h-full object-cover' src={`https://image.tmdb.org/t/p/w500${e.poster_path || e.backdrop_path}`} />

                      <div className='px-3 text-base py-1'>

                        {e.name || e.title || e.original_name || e.original_title}

                      </div>

                    </h1>
                  ) : <h1 className='font-black text-center mt-5 text-4xl text-white font-black'>Nothing to Show</h1>}


                </div>

              </div>
              <div className='w-[90vw]  px-auto '>

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

export default TvDetails
