import React from 'react'

export default function StudentCard(props) {
    //studentName in props
    //data in props
    return (
        <div>
            <div class="box">
                <div class = "imgBx">
                  <img src="https://images.edrawmax.com/images/knowledge/line-graph-1-what-is.jpg"/>
                </div>
                <div class = "text">
                  <p>{props.studentName}</p>
                  <h3>{props.studentScore}</h3>
                </div>
              </div>
        </div>
    )
}
