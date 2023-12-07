import React, { useEffect, useState } from "react";
import "./dash.css";
import { useParams } from "react-router-dom";

import Avatar from "@mui/material/Avatar";
import { deepOrange, deepPurple } from "@mui/material/colors";
import Button from "@mui/material/Button";


import {
  collection,
  query,
  orderBy,
  onSnapshot,
  doc,
} from "firebase/firestore";
import { async } from "@firebase/util";

function dash() {
  

  return (
    <>
      <body>
        <nav>
          <div class="logo-name" id="dashh">
            <div class="logo-image">
              <Avatar sx={{ bgcolor: deepOrange[500] }}></Avatar>
            </div>
            <span class="logo_name">{"Dharmesh Vala"}</span>
          </div>

          <div class="menu-items">
            <ul class="nav-links">
              <li>
                <a href="#">
                  <i class="uil uil-estate"></i>
                  <a href="#dashh">
                    <span class="link-name">Dashboard </span>
                  </a>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="uil uil-files-landscapes"></i>
                  <a href="#statistics">
                    <span class="link-name">Statics</span>
                  </a>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="uil uil-chart"></i>
                  <span class="link-name">Analytics</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="uil uil-thumbs-up"></i>
                  <span class="link-name">Scholarships</span>
                </a>
              </li>
            </ul>

            <ul class="logout-mode">
              <li>
                <a href="#">
                  <i class="uil uil-signout"></i>
                  <span class="link-name">Logout</span>
                </a>
              </li>

              <li class="mode">
                <a href="#">
                  <i class="uil uil-moon"></i>
                  <span class="link-name">Dark Mode</span>
                </a>

                <div
                  class="mode-toggle"
                  onClick={() => {
                    const body = document.querySelector("body");
                    const modeToggle = body.querySelector(".mode-toggle");
                    const sidebar = body.querySelector("nav");
                    const sidebarToggle = body.querySelector(".sidebar-toggle");

                    body.classList.toggle("dark");
                    if (body.classList.contains("dark")) {
                      localStorage.setItem("mode", "dark");
                    } else {
                      localStorage.setItem("mode", "light");
                    }
                  }}
                >
                  <span class="switch"></span>
                </div>
              </li>
            </ul>
          </div>
        </nav>

        <section class="dashboard" id="statistics">
          <div class="top">
            <i
              class="uil uil-bars sidebar-toggle"
              onClick={() => {
                const body = document.querySelector("body");
                const modeToggle = body.querySelector(".mode-toggle");
                const sidebar = body.querySelector("nav");
                const sidebarToggle = body.querySelector(".sidebar-toggle");

                sidebar.classList.toggle("close");
                if (sidebar.classList.contains("close")) {
                  localStorage.setItem("status", "close");
                } else {
                  localStorage.setItem("status", "open");
                }
              }}
            ></i>

            <div class="search-box">
              <i class="uil uil-search"></i>
              <input
                type="text"
                placeholder="Search Posted Scholarship Name here..."
       
                
              />
            </div>
            {/* <div className="btnsearch">
              <Button variant="contained" href="#contained-buttons">
                Link
              </Button>
            </div> */}
            {/* <img
              src="http://raw.githubusercontent.com/tanktejas/hackathon/master/src/Components/dash/Images/profile.jpg"
              alt=""
            /> */}
            <Avatar sx={{ bgcolor: deepOrange[500] }}></Avatar>
          </div>

          <div class="dash-content">
            <div class="overview">
              <div class="title">
                <i class="uil uil-tachometer-fast-alt"></i>
                <span class="text">Dashboard</span>
              </div>

              <div class="boxes">
                <div class="box box1">
                  <i class="uil uil-thumbs-up"></i>
                  <span class="text">Total Mentee's benefited</span>
                  <span class="number">{1510}</span>
                </div>
                <div class="box box2">
                  <i class="uil uil-comments"></i>
                  <span class="text">Total Active Mentors </span>
                  <span class="number">{121}</span>
                </div>
                <div class="box box3">
                  <i class="uil uil-share"></i>
                  <span class="text">Average Result</span>
                  <span class="number">85%</span>
                </div>
              </div>
            </div>

            <div class="activity">
              <div class="title">
                <i class="uil uil-clock-three"></i>
                <span class="text">Analytics of Mentors Profile</span>
              </div>

              <div class="activity-data">
                <div class="data names">
                  <span class="data-title">Name</span>
                  
                        <span class="data-list">Dharmesh</span>
                        <span class="data-list">Yash</span>
                        <span class="data-list">Kavya</span>
                        <span class="data-list">Honey</span>
                        <span class="data-list">Jay</span>
                   
                </div>

                <div class="data email">
                  <span class="data-title">Email</span>
                  
                        <span class="data-list">dvala453@gmail.com</span>

                        <span class="data-list">yash153@gmail.com</span>

                        <span class="data-list">kdave11@gmail.com</span>

                        <span class="data-list">honey14@gmail.com</span>

                        <span class="data-list">jayt44@gmail.com</span>

                </div>
                <div class="data joined">
                  <span class="data-title">Date</span>
                 
                        <span class="data-list">
                          23rd November, 2023
                        </span>
                     
                        <span class="data-list">
                          12nd December, 2023
                        </span>

                        <span class="data-list">
                          3rd April, 2023
                        </span>

                        <span class="data-list">
                          2nd December, 2023
                        </span>

                        <span class="data-list">
                          23rd November, 2023
                        </span>
                </div>

                <div class="data status">
                  <span class="data-title">Rating</span>
                
                        <span class="data-list">
                          {4.9 + " "}{" "}
                        </span>

                        <span class="data-list">
                          {4.4 + " "}{" "}
                        </span>

                        <span class="data-list">
                          {3.9 + " "}{" "}
                        </span>

                        <span class="data-list">
                        {3.9 + " "}{" "}
                      </span>

                      <span class="data-list">
                      {3.9 + " "}{" "}
                    </span>
                </div>

                <div class="data Remove">
                  <span class="data-title">Remove</span>
                        <span class="data-list">
                          <Button
                            variant="outlined"
                            color="error"
                            className="deletebut"   
                          >
                            Delete
                          </Button>
                        </span>
                        <span class="data-list">
                        <Button
                          variant="outlined"
                          color="error"
                          className="deletebut"   
                        >
                          Delete
                        </Button>
                      </span>
                      <span class="data-list">
                          <Button
                            variant="outlined"
                            color="error"
                            className="deletebut"   
                          >
                            Delete
                          </Button>
                        </span>
                        <span class="data-list">
                          <Button
                            variant="outlined"
                            color="error"
                            className="deletebut"   
                          >
                            Delete
                          </Button>
                        </span>
                        <span class="data-list">
                          <Button
                            variant="outlined"
                            color="error"
                            className="deletebut"   
                          >
                            Delete
                          </Button>
                        </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </body>
    </>
  );
}

export default dash;
