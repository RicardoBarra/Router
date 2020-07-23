import React from 'react'
import { Link, NavLink } from "react-router-dom"

export default function NavBar() {
    return (
        <div className='nav-links'>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/about'>About</NavLink>
            <NavLink to='/discovermoviespage'>Discover Movies</NavLink>
        </div>
    )
}
