
import React from 'react'
import './App.css'
import { Route,Routes } from 'react-router-dom'
import Home from './components/Contents/Home'
import Movies from './components/Contents/Movies'
import Tvshows from './components/Contents/Tvshows'


function App() {
  return (
    <div className="App">
    <Routes>
      <Route  exact path='/' element={<Home/>} />
      <Route  path='/Movies' element={<Movies/>} />
      <Route  path='/Tv' element={<Tvshows/>} />
    </Routes>
    </div>
  )
}

export default App

