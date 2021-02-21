import React, {useState} from 'react'

export default function StudentCard(props) {

    const [cnam, setCnam] = useState('box')

    // if (props.studentScore > 40) {
    //   setCnam('redbox')
    // }
    //studentName in props
    //data in props
    return (
        <div>
            <div className={cnam}>
                <div className = "imgBx">
                  <img src="https://images.edrawmax.com/images/knowledge/line-graph-1-what-is.jpg" alt="failed to load"/>
                </div>
                <div className = "text">
                  <p>{props.studentName}</p>
                  <h3>{props.studentScore}</h3>
                </div>
              </div>
        </div>
    )
}
