import React, { useState } from "react";
import Navbar from "../Components/Navbar/Navbar";
import "./signpages.css";

export default function SignInPage() {
  return (
    <>
      <Navbar />
      <div className="signin centered">
        <h1>Sign Up</h1>
        <form>
          <input type="username" placeholder="Username" required />
          <input type="password" placeholder="Password" required />
          <label class="container">
            Are you a teacher?
            <input type="checkbox" checked="checked" />
            <span class="checkmark" />
          </label>
          <div>
            <button>Sign up</button>
            <a href="/sign-in">Login.</a>
          </div>
        </form>
      </div>
    </>
  );
}
