import React, {useState, useEffect} from 'react'

export default function StudentCard(props) {
  

    const [cnam, setCnam] = useState('box')

    // useEffect(() => {
    //   if (props.studentScore >= 40) {
    //     setCnam('box redbox')
    //   }
    // }, [cnam, setCnam, props.studentScore])

    // if (props.studentScore > 40) {
    //   setCnam('redbox')
    // }
    //studentName in props
    //data in props
    return (
        <div className={props.studentScore < 40 ? "box" : "box redbox"}>
            <div className = "imgBx">
              <img src="https://images.edrawmax.com/images/knowledge/line-graph-1-what-is.jpg" alt="failed to load"/>
            </div>
            <div className = "text">
              <p>{props.studentName}</p>
              <h3>{props.studentScore}</h3>
            </div>
          </div>
    )
}
