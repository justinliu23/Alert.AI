import React, { useState } from "react";
import Navbar from "../Components/Navbar/Navbar";
import { Link } from "react-router-dom";
import "./signpages.css";

export default function SignUpPage() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isTeacher, setIsTeacher] = useState(false);
  const handleClick = () => setIsTeacher(!isTeacher);

  const handleSignIn = (e) => {
    e.preventDefault();
    fetch("http://127.0.0.1:5000/api/auth", {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      headers: {
        contentType: "application/json",
      },
      body: JSON.stringify({
        Username: userName,
        Password: password,
        isTeacher: isTeacher,
      }),
    }).then((err) => console.log(err));
  };

  return (
    <>
      <Navbar />
      <div className="signin centered">
        <h1>Sign Up</h1>
        <form>
          <input
            type="username"
            placeholder="Username"
            required
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label class="container">
            Are you a teacher?
            <input
              type="checkbox"
              onClick={(e) => handleClick(e)}
              checked={isTeacher}
            />
            <span class="checkmark" />
          </label>
          <div>
            <button onClick={handleSignIn}>Sign In</button>
            <Link to="/sign-up">Sign Up</Link>
          </div>
        </form>
      </div>
    </>
  );
}
