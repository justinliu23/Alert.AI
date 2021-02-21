import React, {useState} from "react";
import Navbar from "../Components/Navbar/Navbar";
import {Link} from 'react-router-dom'
import "./StudentPage.css";
import "./Modal.js";

export default function StudentPage(props) {
  return (
    <>
      <Navbar />
      <section class="testimonials" id="testimonials">
        <div class="title">
          <h2 class="titleText"> Classes </h2>
          <label>
            <Link id="myBtn" to="/studentclass">Join Class</Link>
            <input value={props.classCode} type="text" placeholder="Class Code" onChange={(e) => props.setCode(e.target.value)}></input>
          </label>

          <div id="myModal" class="modal">
            <div class="modal-content">
              <span class="close">&times;</span>
              <p>Enter Code:</p>
              <input type="text" />
              <br />
              <input type="submit" placeholder="Submit" class="submitButton" />
            </div>
          </div>
        </div>
        <div class="content">
          <div class="box">
            <div class="imgBx">
              <img src="https://friendlystock.com/wp-content/uploads/2020/06/9-old-calculator-cartoon-clipart.jpg" />
            </div>
            <div class="text">
              <p>Math</p>
              <h3>Teacher</h3>
            </div>
          </div>
          <div class="box">
            <div class="imgBx">
              <img src="https://i.pinimg.com/736x/1b/4c/60/1b4c60f47895a0928f2567dec949d4a3.jpg" />
            </div>
            <div class="text">
              <p>English</p>
              <h3>Teacher</h3>
            </div>
          </div>
          <div class="box">
            <div class="imgBx">
              <img src="https://rlv.zcache.com/weird_science_jug_cutout-r9aa46d96d3f84559bdf351370b98ecea_x7saw_8byvr_307.jpg" />
            </div>
            <div class="text">
              <p>Science</p>
              <h3>Teacher</h3>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
