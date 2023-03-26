
import React from 'react'
import './App.css'
import { Route,Routes } from 'react-router-dom'
import Home from './components/Contents/Home'
import Movies from './components/Contents/Movies'


function App() {
  return (
    <div className="App">
    <Routes>
      <Route  exact path='/' element={<Home/>} />
      <Route  exact path='Movies' element={<Movies/>} />
    </Routes>
    </div>
  )
}

export default App

