import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Topnav from '../templates/Topnav'
import Dropdown from '../templates/Dropdown'
import axios from '../utils/axios'
import Cards from '../templates/Cards'
import Loading from './Loading'
import InfiniteScroll from 'react-infinite-scroll-component'

const People = () => {
  document.title = "KS | Popular"
  const navigate = useNavigate()
  const [category, setcategory] = useState("movie")
  const [person, setperson] = useState([])
  const [page, setpage] = useState(1)
  const [hasMore, sethasMore] = useState(true)

  const Getperson = async () => {
    try {
      const { data } = await axios.get(`person/popular`)

      if (data.results.length > 0) {
        setperson(data.results)
        // setperson((prevState) => [...prevState, data.results])
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
    if (person.length === 0) {

      Getperson()
    }
    else {
      setpage(1)
      setperson([])
      Getperson()
    }
  }

  useEffect(() => {
    refreshHandler()
  }, [category])

  return  person ? (
    <div className=' w-full h-screen overflow-x-hidden overflow-y-auto'>
      <div className=' flex px-[3%] items-center gap-4'>


        <h1 className='text-zinc-300 text-lg flex gap-4 items-center  font-semibold'>
          <i onClick={() => navigate(-1)} class="ri-arrow-left-line hover:text-blue-700 "></i>
          People</h1>
        <Topnav />

       
        
      </div>

      <InfiniteScroll dataLength={person.length} next={Getperson} hasMore={hasMore} loader={<h1>Loading...</h1>}>

        <Cards data={person} title="person" />
      </InfiniteScroll>


    </div>
  ) : <Loading />
}

export default People
