import React, { useState, useEffect } from "react";
import InputField from "../Common/InputField";
import google_logo from "../../Assets/Images/google.svg";
import "./Signup.css";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "../../helpers/axios";

const InstructorSignUp = () => {
  let navigate = useNavigate();
  const [email, setEmail] = useState();
  const [pass, setPassword] = useState();
  const [confPass, setConfPass] = useState();
  const [error, setError] = useState();
  const handleEmailChange = (event) => {
    const value = event.target.value;
    //console.log(value);
    setEmail(value);
  };
  const [int, setint] = useState([]);
  const handleIntChange = (event) => {
    const value = event.target.value;
    setint((prev) => [
        ...prev,
        value,
    ]);
  };

  const handlePassChange = (event) => {
    const value = event.target.value;
    setPassword(value);
  };
  const [mobile, setmobile] = useState("");
  const handleMobileChange = (event) => {
    const value = event.target.value;
    setmobile(value);
  };
 
  const [name, setName] = useState("");
  const handleNameChange = (event) => {
    const value = event.target.value;
    setName(value);
  };

  
  const submitSignUpForm = async () => {
    const data = {
      email: email,
      password: pass,
      interest: int,
      mobile: mobile,
      name: name,
    };
    const res = await axios.post("http://localhost:5000/api/instructor/InstructorSignUp", data);
    if (res.status === 200) {
      console.log("res.data", res.data);
      alert("You're SIgnup successfully, now Please Login !!!")
      navigate("/InstructorSignUp");
    } else {
      console.log("res.message", res.message);
      setError(res.message);
    }
  };
  return (
    <>
      <div
        style={{
          fontSize: 36,
          fontWeight: "bold",
          fontFamily: '"Poppins"',
          textAlign: "center",
          marginTop: 38,
        }}
      >
        Instructor Sign Up
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div
          style={{
            background: "#F6F7FB",
            borderRadius: 10,
            paddingLeft: 68,
            paddingRight: 68,
            paddingTop: 61,
            paddingBottom: 61,
            width: "fit-content",
            marginTop: 25,
          }}
        >
        <InputField
            handleChange={handleNameChange}
            type="text"
            placeholder="Enter Your Name"
          />
          <InputField
            handleChange={handleEmailChange}
            type="email"
            placeholder="Email"
          />

          <InputField
            handleChange={handleIntChange}
            type="text"
            placeholder="Contact number"
          />

          <InputField
            handleChange={handleIntChange}
            type="text"
            placeholder="Institute Name"
          />
          <InputField
            handleChange={handleIntChange}
            type="text"
            placeholder="Year of Experience"
          />
        
          <InputField
            handleChange={handlePassChange}
            type="password"
            placeholder="Password"
          />
          
          <InputField
            // handleChange={handleConfirPass}
            type="password"
            placeholder="Confirm Password"
          />
         

          
          
          {/* <span style={{ color: "red", marginLeft: '5px' }}>Please enter same password</span> */}
          <div
            style={{
              textAlign: "center",
              marginTop: 25,
              fontFamily: "poppins",
              fontWeight: 800,
              display: "flex",
              flexDirection: "row",
            }}
          >
            <div>Already have an accounttt ?</div>
            <NavLink
              className=""
              style={{ textDecoration: "none" }}
              to="/InstructorLogin"
            >
              <div
                style={{
                  color: "#2C5EFF",
                  fontWeight: "bolder",
                  marginLeft: 5,
                }}
              >
                Login in
              </div>
            </NavLink>
          </div>
          <div style={{ textAlign: "center" }}>
          <NavLink
              className=""
              style={{ textDecoration: "none" }}
          >
              <button
                  onClick={submitSignUpForm}
                  className="sign-in-button"
                  style={{ width: "100%", height: "6vh", marginTop: 17 }}
              >
                  Sign Up
              </button>
          </NavLink>  
          </div>
        </div>
      </div>
    </>
  );
};

export default InstructorSignUp;
