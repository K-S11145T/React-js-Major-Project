import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import Loading from './Components/Loading'
import Trending from './templates/Trending'
import Popular from './Components/Popular'
import Movie from './Components/Movie'
import Tv from './Components/Tv'
import People from './Components/People'
import MovieDetails from './Components/MovieDetails'
import TvDetails from './Components/TvDetails'
import PeopleDetails from './Components/PeopleDetails'
import Trailer from './templates/Trailer'
import Notfound from './Components/Notfound'


function App() {
  return (
    <div className='overflow-x-hidden overflow-y-auto'>

      <div className='bg-[#1F1E24] w-screen h-screen flex'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/trending' element={<Trending />} />
          <Route path='/popular' element={<Popular />} />
          <Route path='/movie' element={<Movie />} />
          <Route path='/movie/details/:id' element={<MovieDetails />}>
            <Route path='/movie/details/:id/trailer' element={<Trailer />} />
          </Route>
          <Route path='/tv' element={<Tv />} />
          <Route path='/tv/details/:id' element={<TvDetails />} >
            <Route path='/tv/details/:id/trailer' element={<Trailer />} />
          </Route>
          <Route path='/person' element={<People />} />
          <Route path='/person/details/:id' element={<PeopleDetails />} />
          <Route path='*' element={<Notfound />} />

        </Routes>
      </div>
    </div>
  )
}

export default App
