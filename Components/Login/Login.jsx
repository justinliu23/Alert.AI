import React from 'react'
import {Redirect} from 'react-router-dom'
import auth from "/auth"

function Login () {
    const [
      redirectToReferrer,
      setRedirectToReferrer
    ] = React.useState(false)
  
    const login = () => auth.authenticate(() => {
      setRedirectToReferrer(true)
    })
  
   if (redirectToReferrer === true) {
     return <Redirect to='/' />
   }
  
   return (
     <div>
       Login
     </div>
   )
  }

export default Login