import React from 'react'
import {BrowserRouter as Router, Link} from 'react-router-dom'
import Navbar from '../Components/Navbar/Navbar'
import './TeacherHome.css'


export default function TeacherHome() {

    return (
        <>
        <Navbar/>
        <div className='container'>
            <Link className="navlink" to="/teacher">Create a New Classroom</Link>
        </div>
        </>
    )
}
