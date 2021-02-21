import React, {useState, useEffect} from 'react'
import WebcamComponent from '../Components/Webcam/WebcamComponent'
import LoggedNavbar from '../Components/LoggedNavbar/LoggedNavbar'
import StudentReminder from '../Components/StudentReminder/StudentReminder'

export default function StudentPage() {
    return (
        <>
            <LoggedNavbar />
        <div style={{display: 'flex'}}>
            <WebcamComponent />
            <StudentReminder />
        </div>
        </>
    )
}
