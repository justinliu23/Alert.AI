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
import StudentClassPage from './Pages/StudentClassPage'

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
  const [username, setUsername] = useState('')

  //Only for students?
  const [classCode, setClassCode] = useState('')
  return (
    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route
            exact path="/sign-in"
            render={(props) => (
              <SignInPage
                {...props}
                setUsername={setUsername}
              />
            )}
          />
          <Route
            exact path="/sign-up"
            render={(props) => (
              <UserPage
                {...props}
                setUsername={setUsername}
              />
            )}
          />
          <Route
            exact path="/student"
            render={(props) => (
              <StudentPage
                {...props}
                username={username}
                setCode={setClassCode}
                classCode={classCode}
              />
            )}
          />
          <Route
            exact path="/studentclass"
            render={(props) => (
              <StudentClassPage
                {...props}
                username={username}
                setCode={setClassCode}
                classCode={classCode}
              />
            )}
          />
          <Route exact path="/teacherhome">
            <TeacherHome />
          </Route>
          <Route
            exact path="/teacher"
            render={(props) => (
              <TeacherPage
                {...props}
                classCode={makeid(6)}
                username={username}
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
