import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Navbar from './Components/Navbar/Navbar'
import HomePage from './Pages/Homepage'
import NewUserPage from './Pages/NewUserPage'
import SignInPage from './Pages/SignInPage'
import StudentPage from './Pages/StudentPage'
import TeacherPage from './Pages/TeacherPage.jsx'

//  import Login from './Components/Login/Login'
// import PrivateRoute from './Components/PrivateRoute/PrivateRoute'

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
            <NewUserPage />
          </Route>
          <Route exact path="/student">
            <StudentPage />
          </Route>
          <Route exact path="/teacher">
            <TeacherPage />
          </Route>
          <Route exact path="/">
            <HomePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
