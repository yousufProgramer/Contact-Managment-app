import React from 'react'
import { FcBusinessContact } from 'react-icons/fc';
import "./Navbar.css"
export const NavBar = () => {
  return (
    <div>
        <div className='header d-flex p-3'>
       <FcBusinessContact className='header-icon'/>
        <h1>Contact <span>Manager</span></h1> 
        </div>
    </div>
  )
}
