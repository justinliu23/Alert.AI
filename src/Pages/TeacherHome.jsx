import React from 'react'
import {BrowserRouter as Router, Link} from 'react-router-dom'
import './TeacherHome.css'


export default function TeacherHome() {

    return (
        <div className='container'>
            <Link to="/teacher">Create a New Classroom</Link>
        </div>
    )
}
