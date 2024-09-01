import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Topnav from '../templates/Topnav'
import Dropdown from '../templates/Dropdown'
import axios from '../utils/axios'
import Cards from '../templates/Cards'
import Loading from './Loading'
import InfiniteScroll from 'react-infinite-scroll-component'

const Tv = () => {
  document.title = "KS | Popular"
  const navigate = useNavigate()
  const [category, setcategory] = useState("movie")
  const [tv, settv] = useState([])
  const [page, setpage] = useState(1)
  const [hasMore, sethasMore] = useState(true)

  const Gettv = async () => {
    try {
      const { data } = await axios.get(`tv/airing_today`)

      if (data.results.length > 0) {
        settv(data.results)
        // settv((prevState) => [...prevState, data.results])
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
    if (tv.length === 0) {

      Gettv()
    }
    else {
      setpage(1)
      settv([])
      Gettv()
    }
  }

  useEffect(() => {
    refreshHandler()
  }, [category])

  return tv ? (
    <div className=' w-full h-screen overflow-x-hidden overflow-y-auto'>
      <div className=' flex px-[3%] items-center gap-4'>


        <h1 className='text-zinc-300 text-lg flex gap-4 items-center w-[20%] font-semibold'>
          <i onClick={() => navigate(-1)} class="ri-arrow-left-line hover:text-blue-700 "></i>
          TV Shows</h1>
        <Topnav />

        {/* <Dropdown title="Category" options={["TV", "Movie", "All"]} /> */}
        
      </div>

      <InfiniteScroll dataLength={tv.length} next={Gettv} hasMore={hasMore} loader={<h1>Loading...</h1>}>

        <Cards data={tv} title="tv" />
      </InfiniteScroll>


    </div>
  ) : <Loading />
}

export default Tv
