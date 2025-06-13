import React, { useEffect, useRef, useState } from 'react'
import logo from './../assets/logo-2.png'
import ScrollSpy from 'react-scrollspy-navigation'
import { NavLink } from 'react-router-dom'

export default function Navbar({switchTheme ,theme}) {

  console.log(switchTheme);

  return (


<nav id='navId' className={`navbar custom-navbar p-3 fixed-top ${theme=='dark'?'navbar-dark':''}  navbar-expand-lg z-3`} >
  <div className="container position-relative">
    <a className="navbar-brand  fw-bolder" href="#"><span className='font-30'><img className='logo-img' src={logo} alt="Logo image"/></span></a>
    <span className='mode-icon order-0 order-lg-1 fs-3' onClick={switchTheme}>
       {theme=='dark'?<i className="fa-regular fa-sun"/>:<i className="fa-solid fa-moon" />}

        </span>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">

      
 
   <ul className="navbar-nav m-auto text-center fs-5 mb-2 mb-lg-0">
    
    <li className="nav-item ">
      <NavLink className="nav-link"  to="/">Home</NavLink>
    </li>
    <li className="nav-item">
    <NavLink className="nav-link" to="/system">System</NavLink>
    </li>
    <li className="nav-item">
    <NavLink className="nav-link" to="/product">Product</NavLink>

    </li>
    <li className="nav-item">
    <NavLink className="nav-link" to="/ourTeam">Our Team</NavLink>
    </li>
    <li className="nav-item">
    <NavLink className="nav-link" to="/whoWeAre">Who we are?</NavLink>
    </li>
    
    <li className="nav-item">
      <NavLink className="nav-link" to="/vision">Future vision</NavLink>
    </li>
    <li className="nav-item">
      <NavLink className="nav-link" to="/EmailUS">Email Us</NavLink>
    </li>
  

  </ul>


    


      
    </div>
    
  </div>

</nav>



  )
}
