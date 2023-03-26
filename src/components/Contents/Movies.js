import React from 'react'
import Navbar from '../Navbar/Navbar'
import Rowpost from '../Rowpost/Rowpost'
import { crime,scifi } from '../../urls'

function Movies() {
  return (
    <div>
      <Navbar/>
      <Rowpost url={crime} title='Crime' isSmall />
      <Rowpost url={scifi} title='Scifi' isSmall />
    </div>
  )
}

export default Movies
