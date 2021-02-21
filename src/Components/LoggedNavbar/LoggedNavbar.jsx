import React from 'react'
import {Link} from 'react-router-dom'
import './navbar.css'

export default function LoggedNavbar() {
    return (
        <div className='navbar'>
            <ul>
                <li><Link to="/" className='navLink'>Home</Link></li>
                <li><Link to="/student" className='navLink'>Classes</Link></li>
                <li><button>Log Out</button></li>
            </ul>
        </div>
    )
}
