
import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Topnav from '../templates/Topnav'
import Dropdown from '../templates/Dropdown'
import axios from '../utils/axios'
import Cards from '../templates/Cards'
import Loading from './Loading'
import InfiniteScroll from 'react-infinite-scroll-component'

const Movie = () => {
  document.title = "KS | Movies"
  const navigate = useNavigate()
  const [category, setcategory] = useState("now_playing")
  const [movie, setmovie] = useState([])
  const [page, setpage] = useState(1)
  const [hasMore, sethasMore] = useState(true)


  const Getmovie = async () => {
    try {
      const { data } = await axios.get(`/movie/${category}?${page}`)
 
      if (data.results.length > 0) {
        setmovie(data.results)
        // setmovie((prevState) => [...prevState, data.results])
        // setpage(page + 1)
      }
      else {
        sethasMore(false)
      }


    }
    catch (error) {
      console.log("Error : ", error)
    }
  }

  const refreshHandler = () => { 
    if (movie.length === 0) {

      Getmovie()
    }
    else {
      setpage(1)
      setmovie([])
      Getmovie()
    }
  }

  useEffect(() => {
    refreshHandler()
  }, [category])

  return movie ? (
    <div className=' w-full h-screen overflow-x-hidden overflow-y-auto'>
      <div className=' flex px-[3%] items-center gap-4'>


        <h1 className='text-zinc-300 text-lg flex gap-4 items-center  font-semibold'>
          <i onClick={() => navigate(-1)} class="ri-arrow-left-line hover:text-blue-700 "></i>
          Movie</h1>
        <Topnav />

        {/* <Dropdown title="Category" options={["TV", "Movie", "All"]} /> */}
        
      </div>

      <InfiniteScroll dataLength={movie.length} next={Getmovie} hasMore={hasMore} loader={<h1>Loading...</h1>}>

        <Cards data={movie} title="movie" />
      </InfiniteScroll>


    </div>
  ) : <Loading />
}

export default Movie
