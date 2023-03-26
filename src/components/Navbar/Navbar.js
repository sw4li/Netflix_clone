import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"


function Navbar() {

  return (
    <div className='navbar'>
      <img className='logo' src="https://imgs.search.brave.com/qeRQHIxunOhuU1Vv66mceQ-Abo5mLixUDoVOXv4qylw/rs:fit:1200:677:1/g:ce/aHR0cHM6Ly9kYXZp/ZGJsYWluZS5jb20v/d3AtY29udGVudC91/cGxvYWRzLzIwMTcv/MDQvbmV0ZmxpeC1s/b2dvLnBuZw" alt="Netflix logo" />
      <img className='avatar' src="https://imgs.search.brave.com/Q6tUlgN7LmigOjS0j4jCiDTVKUGtPn61t4C4apbWApI/rs:fit:320:320:1/g:ce/aHR0cHM6Ly9taXIt/czMtY2RuLWNmLmJl/aGFuY2UubmV0L3By/b2plY3RfbW9kdWxl/cy9kaXNwLzFiZGM5/YTMzODUwNDk4LjU2/YmE2OWFjMmJhNWIu/cG5n" alt="Avatar" />
      <div className="nav-contents"></div>
         <Link to='/' className='nav-link' >Home</Link>
    </div>
  )

}

export default Navbar
