import React, {useEffect} from 'react'
import Navbar from "../Components/Navbar/Navbar";
import StudentCard from '../Components/StudentCard/StudentCard'
import "./TeacherPage.css";

export default function TeacherPage(props) {
  useEffect(() => {
    const interval = setInterval(() => {
      const data = {
        'classCode': props.classCode, //props.classCode
      }

      fetch('http://127.0.0.1:5000/api/model', {
        method: 'POST',
        mode: 'no-cors',
        cache: 'no-cache',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      }).then((err) => console.log(err))

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
        </>
    )
}