import React, { useEffect, useState } from "react";
import MaterialIcon, { colorPalette } from "material-icons-react";
import Button from "../Common/Button";
import ProfileInputField from "../Profile/ProfileInputField";
import ProfileInputFieldExtended from "../Profile/ProfileInputFieldExtended";
import SideBarOption from "../Profile/SideBarOption";
import axios from "axios";
import "./UniProfile.css";
import { NavLink } from "react-router-dom";
// import Cookies from 'universal-cookie'
import { Navigate } from "react-router-dom";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import EventCard from "../Event/EventCard";
import PopF from "./PopF";

// import Popup from 'reactjs-popup';

function MEvents() {
  const [tagList, setTaglist] = useState([]);
  const [explist, setExplist] = useState([]);

  const [timeframe, setTimeFrame] = useState("");

  const [timeframe2, setTimeFrame2] = useState("");

  //  const cookies = new Cookies();
  //  const UserType = cookies.get('userType');

  //  const CollegeId = cookies.get('uTypeId')


  const [showw, setshoww] = useState("false");

  const Handle_toggle = () => {
    const img = document.getElementById("pop_Container");
    console.log(img);
  };

  const handleeditclick = () => {
    setshoww("true");
    console.log(showw);
  };

  const handlesubmit = (e) => {
    setshoww("false");
  };
  const setToTaglist = (e, k) => {
    if (e.keyCode == 13) {
      setTaglist([...tagList, k]);
      e.target.value = "";
    }
  };
  
  const setToExplist = (e, k) => {
    if (e.keyCode == 13) {
      setExplist([...tagList, k]);
      e.target.value = "";
    }
  };
  // const [user, setUser] = useState();

  // const sendRequest = async () => {
  //   const res = await axios
  //     .get(`http://localhost:5000/api/college/collegeId/${CollegeId}`)
  //     .catch((err) => console.log(err));
  //   const data = await res.data;
  //   console.log(data);
  //   console.log("-----");
  //   return data;
  // };
  // useEffect(() => {
  //   sendRequest().then((data) => setUser(data.college));
  // }, []);

  return (
    <>
      {
        <div
          style={{
            display: "flex",
            textAlign: "center",
            justifyContent: "left",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                position: "sticky",
                top: "0",
                padding: "15px",
              }}
            >
              <div style={{ marginTop: "auto", marginBottom: "auto" }}>
                <div className="profile w-5 h-5">
                  <img
                    src="https://media-exp1.licdn.com/dms/image/C5603AQFjdqTFknnOWw/profile-displayphoto-shrink_800_800/0/1662616747803?e=1670457600&v=beta&t=74tKSSzvo2bryUlYpD5gRLR24FecR6GFT2CcOCuIAc4"
                    className="w-110 h-110 rounded-circle"
                    height="100px"
                  />
                </div>
              </div>
              <div
                style={{
                  marginTop: "auto",
                  marginBottom: "auto",
                }}
              >
                <div
                  style={{
                    // marginTop: 50,
                    marginLeft: 20,
                    fontFamily: "poppins",
                    fontWeight: "bold",
                    fontSize: 22,
                    textAlign: "start",
                  }}
                >
                  Dharmesh Va..
                </div>

                <div
                  style={{
                    marginLeft: 20,
                    fontSize: 16,
                    color: "#9B9B9B",
                    fontWeight: "500",
                  }}
                >
                  Dvala453@gmail.com
                </div>
              </div>
            </div>
            {/* horizontal line */}
            <div style={{ border: "2px solid #F5F7F9", marginTop: 20 }}></div>

            {/* options */}
            <div
            className="editing"
            style={{ position: "sticky", top: "130px", padding: "10px" }}
          >
            <NavLink
              className=""
              style={{ textDecoration: "none", color: "black" }}
              to="/mentorpage"
            >
              <SideBarOption icon="person" title="Profile" />
            </NavLink>

            <NavLink
              className=""
              style={{ textDecoration: "none", color: "black" }}
              to="/dashboard"
            >
              <SideBarOption icon="dashboard" title="Dashboard" />
            </NavLink>

            <NavLink
              className=""
              style={{ textDecoration: "none", color: "black" }}
              to="/mentorevents"
            >
              <SideBarOption icon="event"  title="Events" />
            </NavLink>

            <NavLink
            className=""
            style={{ textDecoration: "none", color: "black" }}
            to="/mentorresources"
          >
            <SideBarOption icon="book" title="resources" />
          </NavLink>

            <NavLink
              className=""
              style={{ textDecoration: "none", color: "black" }}
              to="/mentorhistory"
            >
              <SideBarOption icon="history" title="History" />
            </NavLink>


            

            <NavLink
              className=""
              style={{ textDecoration: "none", color: "black" }}
              to="/Logout"
            >
              <SideBarOption icon="logout" title="Logout" />
            </NavLink>
          </div>
          </div>
          <div
            style={{
              border: "2px solid #F5F7F9",
              // height: "-webkit-fill-available",
              // marginTop: "auto",
              // marginBottom: "auto",
              marginLeft: 20,
            }}
          >
            {/* this is for line */}
          </div>

          {/* profile section */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginRight: "auto",
              marginLeft: "auto",
              textAlign: "start",
              marginLeft: 40,
              width: "-webkit-fill-available",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginTop: 20,
              }}
            >
              <div
                style={{
                  fontFamily: "poppins",
                  fontWeight: "600",
                  fontSize: 26,
                  marginLeft: 30,
                }}
              >
                Your Events
              </div>
              <div
                style={{
                  border: "2px solid #F5F7F9",
                  marginLeft: "auto",
                  marginRight: "auto",
                  height: 1,
                  marginTop: 5,
                  width: "-webkit-fill-available",
                }}
              ></div>
            </div>
   

           

            <div className="container">
            <div className="row">
           events will come here
           
            </div>
            </div>
            
          
                <div
                  style={{
                    marginTop: 20,
                    justifyContent: "end",

                    display: "flex",
                    marginBottom: "50px",
                    marginRight:"55px"
                  }}
                >
                  <Button title={"Request For Edit"} />

                </div>
              </div>
            
            <PopF/>
        </div>
      }
    </>
  );
}

export default MEvents;
