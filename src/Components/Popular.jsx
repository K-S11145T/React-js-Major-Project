
import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Topnav from '../templates/Topnav'
import Dropdown from '../templates/Dropdown'
import axios from '../utils/axios'
import Cards from '../templates/Cards'
import Loading from './Loading'
import InfiniteScroll from 'react-infinite-scroll-component'


const Popular = () => {
  document.title = "KS | Popular"
  const navigate = useNavigate()
  const [category, setcategory] = useState("movie")
  const [popular, setpopular] = useState([])
  const [page, setpage] = useState(1)
  const [hasMore, sethasMore] = useState(true)

  const Getpopular = async () => {
    try {
      const { data } = await axios.get(`${category}/popular?${page}`)
      console.log(data)
      if (data.results.length > 0) {
        setpopular(data.results)
        // setpopular((prevState) => [...prevState, data.results])
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
    if (popular.length === 0) {

      Getpopular()
    }
    else {
      setpage(1)
      setpopular([])
      Getpopular()
    }
  }

  useEffect(() => {
    refreshHandler()
  }, [category])


  return popular ? (
    <div className=' w-full h-screen overflow-x-hidden overflow-y-auto'>
      <div className=' flex px-[3%] items-center gap-4'>


        <h1 className='text-zinc-300 text-xl flex gap-4 items-center  font-semibold'>
          <i onClick={() => navigate(-1)} class="ri-arrow-left-line hover:text-blue-700 "></i>
          Popular</h1>
        <Topnav />

        {/* <Dropdown title="Category" options={["TV", "Movie", "All"]} /> */}
        
      </div>

      <InfiniteScroll dataLength={popular.length} next={Getpopular} hasMore={hasMore} loader={<h1>Loading...</h1>}>

        <Cards data={popular} title={category} />
      </InfiniteScroll>


    </div>
  ) : <Loading />
}

export default Popular
