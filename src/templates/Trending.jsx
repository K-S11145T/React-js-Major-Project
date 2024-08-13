import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Topnav from './Topnav'
import Dropdown from './Dropdown'
import axios from '../utils/axios'
import Cards from './Cards'
import Loading from '../Components/Loading'
import InfiniteScroll from 'react-infinite-scroll-component'

const Trending = () => {
  document.title = "KS | Trending"
  const navigate = useNavigate()
  const [category, setcategory] = useState(`all` && `movie` || 'tv')
  const [duration, setduration] = useState("day")
  const [trending, settrending] = useState([])
  const [page, setpage] = useState(1)
  const [hasMore, sethasMore] = useState(true)
  const Gettrending = async () => {
    try {
      const { data } = await axios.get(`/trending/${category}/${duration}?${page}`)
      if (data.results.length > 0) {
        settrending(data.results)
        // settrending((prevState) => [...prevState, data.results])
        // setpage(page + 1)
        console.log(data.results)
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
    if (trending.length === 0) {

      Gettrending()
    }
    else {
      setpage(1)
      settrending([])
      Gettrending()
    }
  }

  useEffect(() => {
    refreshHandler()
  }, [category, duration])




  return trending ? (
    <div className=' w-full h-screen overflow-x-hidden overflow-y-auto'>
      <div className=' flex px-[3%] items-center gap-4'>


        <h1 className='text-zinc-300 text-2xl flex gap-4 items-center  font-semibold'>
          <i onClick={() => navigate(-1)} class="ri-arrow-left-line hover:text-blue-700 "></i>
          Trending</h1>
        <Topnav />

        {/* <Dropdown title="Category" options={["TV", "Movie", "All"]} />
        <Dropdown title="Duration" options={["Week", "Day"]} /> */}
      </div>

      <InfiniteScroll dataLength={trending.length} next={Gettrending} hasMore={hasMore} loader={<h1>Loading...</h1>}>

        <Cards data={trending} title={category} />
      </InfiniteScroll>


    </div>
  ) : <Loading />
}

export default Trending
