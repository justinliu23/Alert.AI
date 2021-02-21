import React from 'react'
import {Link} from 'react-router-dom'
import './navbar.css'

export default function Navbar() {
    return (
        <div className='navbar'>
            <ul>
                <li><Link to="/users" className='navLink'>Users</Link></li>
                <li><Link to="/about" className='navLink'>About</Link></li>
            </ul>
        </div>
    )
}
