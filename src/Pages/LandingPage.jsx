import React from 'react'
import Navbar from "../Components/Navbar/Navbar";
import "./LandingPage.css";

export default function LandingPage() {
    return (
    <>
    <Navbar />
       <section class = "banner" id = "banner">
           <div class = "content">
             <h2> Helping kids focus in online school</h2>
             <a href = "/sign-in" class = "btn">Log in</a>
           </div>
         </section>
      </>
    )
}