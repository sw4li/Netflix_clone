import React from 'react'
import Navbar from '../Navbar/Navbar'
import Rowpost from '../Rowpost/Rowpost'
import { Tvpopular,Toprated } from '../../urls'

function Tvshows() {
  return (
    <div>
      <Navbar/>
      <Rowpost url={Tvpopular} title='Tv popular' isSmall />
      <Rowpost url={Toprated} title='Top rated' isSmall />
    </div>
  )
}

export default Tvshows
