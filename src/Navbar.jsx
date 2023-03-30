import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const Navbar = () => {
  return (
    <nav>
     <NavLink to='/'>Home</NavLink>
     <NavLink to='/blog'>Blog</NavLink>
     <NavLink to='/conatct'>Contact</NavLink>
    </nav>
  )
}
