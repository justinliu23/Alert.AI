import React from 'react'
import {Link} from 'react-router-dom'
import './navbar.css'

export default function Navbar() {
    return (
        <div className='navbar'>
            <ul>
                <li><Link to="/" className='navLink'>Home</Link></li>
                <li><Link to="/sign-in" className='navLink'>Sign In</Link></li>
                <li><Link to="/sign-up" className='navLink'>Sign Up</Link></li>
            </ul>
        </div>
    )
}
