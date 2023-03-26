import React from 'react'
import Banner from '../Banner/Banner'
import Navbar from '../Navbar/Navbar'
import Rowpost from '../Rowpost/Rowpost'
import { adventure,action,crime,scifi,fantacy,comedy } from '../../urls' 

function Home() {
  return (
    <div>
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

export default Home
