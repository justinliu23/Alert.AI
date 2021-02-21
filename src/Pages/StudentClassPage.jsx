import React, {useState, useEffect} from 'react'
import WebcamComponent from '../Components/Webcam/WebcamComponent'
import LoggedNavbar from '../Components/LoggedNavbar/LoggedNavbar'
import StudentReminder from '../Components/StudentReminder/StudentReminder'
import './StudentClassPage.css'

export default function StudentPage(props) {
    return (
        <>
            <LoggedNavbar />
            <h1>{props.classCode} - {props.username}</h1>
        <div style={{display: 'flex'}}>
            <WebcamComponent classCode={props.classCode} username={props.username} />
            <StudentReminder />
        </div>
        </>
    )
}
