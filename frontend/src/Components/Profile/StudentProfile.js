import React, { useEffect, useState } from "react";

import axios from "axios";
// import Cookies from "universal-cookie";
import { Navigate, Link, useParams } from "react-router-dom";
import Header from "../Common/Header";
import "./StudentProfile.css";
import Beginner from "../../Assets/Images/beginner.jpg";
import Intermediate from "../../Assets/Images/intermediate.jpg";
import Master from "../../Assets/Images/master.jpg";
import StarIcon from '@mui/icons-material/Star';
import ProjectCard from "../Profile/ProjectCard";
import Tag from "../Common/Tag";

export default function StudentProfile() {
  const [rating, setRating] = useState();
  const { id } = useParams();
  console.log("Student ID: " + id);
  const [projects, setProjects] = useState();
  const [title, setTitle] = useState("Follow");
  const [icon, setIcon] = useState("person_add");
  const projectStyle = {
    backgroundColor: "#D5E3FE",
    color: "#2C5EFF",
    fontSize: 17,
    fontWeight: "500",
    marginRight: 10,
    marginTop: 8
  };
  
  // const cookies = new Cookies();
  // const UserType = cookies.get("userType");

  // const studentId = cookies.get("uTypeId");

  const sendReq = async () => {
    const res = await axios
      .get(`http://localhost:5000/api/Project/UserId/${id}`)
      .catch((err) => console.log(err));
    const data = await res.data;
    console.log(data);
    return data;
  };

  useEffect(() => {
    sendReq().then((data) => {
      setProjects(data.project);
      console.log(projects);
      console.log(data.project);
    });
  }, []);

  const handleClickEvent = () => {
    if (title == "Follow") {
      setTitle("Unfollow");
      setIcon("person_remove");
    } else {
      setTitle("Follow");
      setIcon("person_add");
    }
  };

  return (
    <>
      <Header index="1"/>
      <div className="parent">
        <div
          className="profile-background-card profile-main-container"
          style={{ marginLeft: 10 }}
        >
          <div>
            <div className="row-container-cust">
              {/* User Photo */}
              <div className="profile w-1 h-5">
                <img
                  src="https://picsum.photos/200"
                  className="w-110 h-110 rounded-circle"
                  style={{ width: 70, height: 70 }}
                  height="100px"
                />
              </div>
              {/* User name */}
              <div className="column-container">
                <div className="name-title-container">Nikunj Patel</div>
                <div className=" button-display" onClick={handleClickEvent}>
                  <i
                    className="material-icons circle"
                    style={{
                      marginTop: 3,
                      fontSize: 28,
                      color: "#fff",
                      fontSize: 23,
                    }}
                  >
                    {icon}
                  </i>
                  <div className="button-title-container">{title}</div>
                </div>
              </div>
            </div>
            <div className="about-us-container">
              Hello everyone, this is Nikunj Patel. I am an Android developer
            </div>
            <hr className="horizontal-line"></hr>
            <div className="college-container" style={{ marginTop: 10 }}>
              <i
                className="material-icons"
                style={{
                  marginTop: 3,
                  fontSize: 28,
                  color: "#000",
                }}
              >
                apartment
              </i>
              <div className="college-text-container">
                Surat, Gujarat
              </div>
            </div>

            <div className="college-container">
              <i
                className="material-icons"
                style={{
                  marginTop: 3,
                  fontSize: 28,
                  color: "#000",
                }}
              >
                email
              </i>
              <div className="college-text-container">
                ndpatel.tech@gmail.com
              </div>
            </div>

            <div className="college-container">
              <i
                className="material-icons"
                style={{
                  marginTop: 3,
                  fontSize: 28,
                  color: "#000",
                }}
              >
                business_center
              </i>
              <div className="college-text-container">253 reviews / 458 sessions</div>
            </div>

         
            
            <hr className="horizontal-line"></hr>
            <div style={{ display: "flex", flexDirection: 'row' }}>
            {rating < 200 ? <img style={{ boxShadow: "0px 0px 40px 10px rgba(199,199,199,1)", backgroundColor: '#2C5EFF', width: 70, borderRadius: '50%' }} src={Beginner} /> : rating > 700 ? <img src={Intermediate} style={{ backgroundColor: '#2C5EFF', width: 70, borderRadius: '50%' }} /> : <img src={Master} style={{ backgroundColor: '#2C5EFF', width: 70, borderRadius: '50%' }} />}
            <div style={{ display: "flex", flexDirection: "column", marginTop: 'auto', marginBottom: 'auto' }}>
              <div style={{ fontFamily: 'poppins', fontWeight: 500, marginTop: "auto", marginBottom: 'auto', marginLeft: 15, fontSize: 22 }}>{rating < 200 ? "Beginner" : rating < 700 ? "Intermediate" : "Master"}</div>

              <div style={{ display: "flex", flexDirection: 'row', marginLeft: 13 }}>
                <StarIcon />
                <div style={{ fontFamily: 'poppins', marginLeft: 5, fontSize: 18, }}>{4.7}</div>
              </div>
            </div>
          </div>

            <hr className="horizontal-line"></hr>
            <div className="skills-container">Laungauges</div>
            <div className="skills-inner-container">
              <Tag title="English" customeStyle={projectStyle} />
              <Tag title="Hindi" customeStyle={projectStyle} />
              <Tag title="Gujarati" customeStyle={projectStyle} />
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginLeft: 20,
            marginRight: 50,
          }}
        >
          <div style={{marginRight: 100, marginTop:"22px", marginLeft:"14px"}}>
          <div className="skills-container" ><span style={{fontSize:"20px"}}>Laungauges</span></div>
          <div className="skills-inner-container">
            <Tag title="English" customeStyle={projectStyle} />
            <Tag title="Hindi" customeStyle={projectStyle} />
            <Tag title="Gujarati" customeStyle={projectStyle} />
          </div>
          </div>

          <div style={{marginRight: 100, marginTop:"22px", marginLeft:"14px"}}>
          <div className="skills-container" ><span style={{fontSize:"20px"}}>Expertise</span></div>
          <div className="skills-inner-container">
            <Tag title="Software" customeStyle={projectStyle} />
            <Tag title="MERN Stack" customeStyle={projectStyle} />
            <Tag title="Counceling" customeStyle={projectStyle} />
            <Tag title="Blockchain" customeStyle={projectStyle} />
            <Tag title="Machine Learning" customeStyle={projectStyle} />
          </div>
          </div>

          <div style={{marginRight: 100, marginTop:"22px", marginLeft:"14px"}}>
          <div className="skills-container" ><span style={{fontSize:"20px"}}>Tools</span></div>
          <div className="skills-inner-container">
            <Tag title="vs code" customeStyle={projectStyle} />
            <Tag title="Subline Text-editor" customeStyle={projectStyle} />
            <Tag title="Pycharm" customeStyle={projectStyle} />
          </div>
          </div>
          <section
          class="food-client-video  home-food-client-video "
        
        >
          <div class="container">
            
            <div class="testi-loding-main">
              <div class="testi-loding-box bgafter1">
                
  
                <p>
                  <span class="quote-sign">
                    <img
                      class=""
                      loading="lazyload"
                      data-src="img/quote-sign.png"
                      src="img/quote-sign.png"
                    />
                  </span>
                  " We have been using Ashish and his team for over 3 years now.
                  We have posted several projects, each worth a few thousand
                  dollars, and they have delivered them punctually every single
                  time!I have a
                  few more projects lined up and will be using them again. Highly
                  recommended! "
                </p>
                <h5 class="testimonial-author">
                  David Koganti - <small>Mentee</small>
                </h5>
              </div>
              
              
              
            </div>
          </div>
        
        </section>
          
        </div>
      </div>
    </>
  );
}
