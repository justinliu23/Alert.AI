import React, {useEffect} from 'react'
import Navbar from "../Components/Navbar/Navbar";
import StudentCard from '../Components/StudentCard/StudentCard'
import "./TeacherPage.css";

export default function TeacherPage(props) {

  const endClassroom = () => {
    //Call API to end classroom
    //Redirect to home page.
  } 

  useEffect(() => {
    const interval = setInterval(() => {
      const data = {
        'classCode': props.classCode, //props.classCode
      }

      fetch(`http://127.0.0.1:5000/api/classroomdata?classCode=${encodeURIComponent(
        props.classCode
      )}`, {
        method: 'GET',
        mode: 'cors',
        cache: 'no-cache',
      }).then((res) => console.log(JSON.parse(res)))
      .then((err) => console.log(err))

    }, 5000);
    return () => clearInterval(interval);
  });


    return (
      <>
    <Navbar />
        <section class="testimonials" id="testimonials">
            <div class = "title">
              <h2 class ="titleText"> Students - {props.classCode} </h2>
            </div>
            <div class ="content">
              <StudentCard studentName="student1" studentScore="5%"/>
              <StudentCard studentName="student2" studentScore="15%"/>
              <StudentCard studentName="student3" studentScore="20%"/>
            </div>
          </section>
          <div className="center">
            <button onClick={endClassroom}>End Classroom</button>
          </div>
        </>
    )
}