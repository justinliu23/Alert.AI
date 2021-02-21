import React from 'react'
import Navbar from "../Components/Navbar/Navbar";
import "./TeacherPage.css";

export default function TeacherPage() {
    return (
    <>
    <Navbar />
        <section class="testimonials" id="testimonials">
            <div class = "title">
              <h2 class ="titleText"> Students </h2>
            </div>
            <div class ="content">
              <div class="box">
                <div class = "imgBx">
                  <img src="https://images.edrawmax.com/images/knowledge/line-graph-1-what-is.jpg">
                </div>
                <div class = "text">
                  <p>Bob</p>
                  <h3>75%</h3>
                </div>
              </div>
              <div class="box">
                <div class = "imgBx">
                  <img src="https://images.edrawmax.com/images/knowledge/line-graph-1-what-is.jpg">
                </div>
                <div class = "text">
                  <p>Joe</p>
                  <h3>90%</h3>
                </div>
              </div>
              <div class="box">
                <div class = "imgBx">
                  <img src="https://images.edrawmax.com/images/knowledge/line-graph-1-what-is.jpg">
                </div>
                <div class = "text">
                  <p>Sarah</p>
                  <h3>20%</h3>
                </div>
              </div>
            </div>
          </section>
    )
}