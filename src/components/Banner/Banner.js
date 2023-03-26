import React, { useEffect, useState } from 'react'
import {API_KEY,imageUrl} from '../../constants/constants'
import axios from '../../axios'
import './Banner.css'

function Banner() {

  const [movie,setMovie] = useState()
  useEffect(()=>{
    const interval = setInterval(() => {
    axios.get(`trending/all/day?api_key=${API_KEY}`).then((response)=>{
      
      setMovie(response.data.results[Math.floor(Math.random() * response.data.results.length)]);
    })
  },7000);
  return () => clearInterval(interval);
  },[])

  return (
   
    <div className='banner' style={{backgroundImage:`url(${movie? imageUrl+ movie.backdrop_path : ""})`}}>
      <div className="fade_top"></div>
      <div className='content'>
         <h1 className='title'>{movie ? movie.name ? movie.name : movie.title : ""}</h1>
         <div className='banner_button'>
            <button className='button'>WATCH</button>
            <button className='button'>ADD LIST</button>
         </div>
         <h1 className='description'>{movie ? movie.overview : ""}</h1>
       </div>
      <div className="fade_bottom"></div>
    </div>
  )
}

export default Banner
