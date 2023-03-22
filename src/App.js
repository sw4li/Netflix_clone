
import React from 'react'
import Navbar from './components/Navbar/Navbar'
import './App.css'
import {adventure,action,crime,scifi,fantacy,comedy} from './urls'
import Banner from './components/Banner/Banner'
import Rowpost from './components/Rowpost/Rowpost'

function App() {
  return (
    <div className="App">
    <Navbar/>
    <Banner/>
    <Rowpost url={adventure} title='Trending Now' />
    <Rowpost url={action} title='Action' isSmall />
    <Rowpost url={crime} title='Crime' isSmall />
    <Rowpost url={comedy} title='Comedy' isSmall />
    <Rowpost url={scifi} title='scie-fi' isSmall />
    <Rowpost url={fantacy} title='fantacy' isSmall />
    </div>
  )
}

export default App

