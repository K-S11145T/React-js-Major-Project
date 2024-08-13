import React, { useEffect, useState } from 'react'
import Sidenav from '../templates/Sidenav'
import Topnav from '../templates/Topnav'
import axios from '../utils/axios'
import Header from '../templates/Header'
import Horizontal from '../templates/Horizontal'
import Loading from './Loading'

function Home() {

  const [wallpaper, setwallpaper] = useState([])
  const [trending , settrending] = useState([])
  const [cate , setcate] = useState([])
  const GetWallpaper = async () => {
    try {
      const { data } = await axios.get(`/trending/all/day`)
      setwallpaper(data.results[(Math.random()*data.results.length).toFixed()])
    }
    catch (error) {
      console.log("Error : ", error)
    }
  }
  const Gettrending = async () => {
    try {
      const { data } = await axios.get(`/trending/all/day`)
      settrending(data.results)
    
    }
    catch (error) {
      console.log("Error : ", error)
    }
  }

  useEffect(() => {
    trending ? Gettrending() :<h1>no trending videos</h1>
   wallpaper ? GetWallpaper() :<h1>no image</h1>
  }, [cate])


  return wallpaper && trending ? (
    <>
      <Sidenav />
      <div className='w-[80%] h-screen overflow-auto overflow-x-hidden '>
        <Topnav />
        <Header data = {wallpaper} />
        <Horizontal heading={"Trending"} data={trending} />
      </div>
    </>
  ) : <Loading />
}

export default Home
