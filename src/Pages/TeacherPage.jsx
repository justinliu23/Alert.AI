import React, {useEffect, useState} from 'react'
import Navbar from "../Components/Navbar/Navbar";
import StudentCard from '../Components/StudentCard/StudentCard'
import "./TeacherPage.css";

export default function TeacherPage(props) {

  const [StudentCards, setStudentCards] = useState([])

  const endClassroom = () => {
    //Call API to end classroom
    //Redirect to home page.
  } 

  useEffect(() => {
    const interval = setInterval(() => {
      // const data = {
      //   'classCode': props.classCode, //props.classCode
      // }

      fetch(`http://127.0.0.1:5000/api/classroomdata?classCode=${encodeURIComponent(
        "ABCDE"
      )}`, {
        method: 'GET',
        mode: 'cors',
        cache: 'no-cache',
      }).then((res) => JSON.parse(res))
      .then((data) => {
        const users = []
        for (let i = 0; i < data.length; i++) {
          if(data['username'] in users) {} else {
            users.push(data['username'])
          }
        }
        //For each unique student in the thing: create an array of all their attention values
        //FOR NOW: Find the one with the highest time value
        //Pass that value to the object.
        const newCards = []

        for (let i = 0; i < users.length; i++) {
          let count = 0;
          let attnSum = 0;
          let justUser = data.filter(function (entry) {
            return entry.username === users[i]
          })
          for (let j = 0; j < justUser.length; j++) {
            attnSum += justUser['attnScore']
          }
          attnSum = attnSum/count
          const newCard = <StudentCard studentName={users[i]} studentScore={attnSum}/>
          newCards.push(newCard)
        }
        
        
        setStudentCards(newCards)
      })
      .then((err) => console.log(err))

    }, 20000);
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
              {/* <StudentCard studentName="student1" studentScore="5%"/>
              <StudentCard studentName="student2" studentScore="15%"/>
              <StudentCard studentName="student3" studentScore="20%"/> */}
              {StudentCards !== [] && StudentCards}
            </div>
          </section>
          <div className="center">
            <button onClick={endClassroom}>End Classroom</button>
          </div>
        </>
    )
}