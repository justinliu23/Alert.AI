import React, {useEffect, useState} from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import HomePage from './Pages/Homepage'
import UserPage from './Pages/UserPage'
import SignInPage from './Pages/SignInPage'
import StudentPage from './Pages/StudentPage'
import TeacherPage from './Pages/TeacherPage'
import TeacherHome from './Pages/TeacherHome'
import PrivateRoute from './Components/PrivateRoute/PrivateRoute'

//  import Login from './Components/Login/Login'
// import PrivateRoute from './Components/PrivateRoute/PrivateRoute'

function makeid(length) {
  var result           = '';
  var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
     result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

function App() {
  
  return (
    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/sign-in">
            <SignInPage />
          </Route>
          <Route exact path="/sign-up">
            <UserPage />
          </Route>
          <Route exact path="/student">
            <StudentPage />
          </Route>
          <Route exact path="/teacherhome">
            <TeacherHome />
          </Route>
          <Route
            exact path="/teacher"
            render={(props) => (
              <TeacherPage
                {...props}
                classCode={makeid(6)}
              />
            )}
          />
          <Route exact path="/">
            <HomePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
