import React, {useEffect, useState} from 'react'
import './StudentReminder.css'

export default function StudentReminder() {
    const [reminder, setReminder] = useState('OK')
    let notAttention = 10;

    useEffect(() => {
        const interval = setInterval(() => {
          //updates queries DB every ten seconds to check if score over a certain level
          //Fetch
          /*
          fetch('http://127.0.0.1:5000/api/')
          */
          const data = 11
          if(data > notAttention) {
              setReminder("BAD")
          } else {
              setReminder('OK')
          }
    
        }, 1000);
        return () => clearInterval(interval);
    })

    return (
        <div className={`container ${ reminder }`}>
            {reminder === "OK" && <h1>Keep it Up!!!</h1>}
            {reminder === "BAD" && <h1>!Pay Attention!</h1>}
        </div>
    )
}
