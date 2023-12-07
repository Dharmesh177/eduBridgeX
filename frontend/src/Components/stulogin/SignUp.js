import React, { useState, useEffect } from 'react'
import InputField from "../Common/InputField";
import google_logo from "../../Assets/Images/google.svg";
import "./Signup.css";
import { NavLink } from "react-router-dom";

const SignUp = () => {

useEffect(() => {
    
}, [])

    const [email, setEmail] = useState();
    const [pass, setPassword] = useState();
    const [confPass, setConfPass] = useState();

    const handleEmailChange = (event) => {
        const value = event.target.value;
        //console.log(value);
        setEmail(value);
    };
    const [int,setint] = useState("");
    const handleIntChange = (event) => {
        const value = event.target.value;
        //console.log(value);
        setint(value);
    };


    const handlePassChange = (event) => {
        const value = event.target.value;
        //console.log(value);
        setPassword(value);
    };
    
    const [mobile,setmobile] = useState("");


    const handleMobileChange = (event) => {
        const value = event.target.value;
        //console.log(value);
        setmobile(value);
    };

    const handleConfirPass = (event) => {
        const value = event.target.value;
        (value === pass) ? setConfPass(value) : console.log('please enter same password');

        console.log(value);
    };
     const [stu,setstu] = useState([]);
    const handleClick = (e) => {
        e.preventDefault();
        if (email === undefined  || pass === undefined || confPass === undefined) {
            window.alert('Please enter all fields');
        }
        console.log('all fields', email, pass, confPass);

    }

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
                Sign Up
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
                        handleChange={handleEmailChange}
                        type="email"
                        placeholder="Email"
                    />

                     <InputField
                        handleChange={handleIntChange}
                        type="text"
                        placeholder="Intrest"
                    />
                    {/* <span style={{ color: "red", marginLeft: '5px' }}>Please enter your email</span> */}
                    {/* <br /> */}
                    <InputField
                        handleChange={handlePassChange}
                        type="password"
                        placeholder="Password"

                    />
                    {/* <span style={{ color: "red", marginLeft: '5px' }}>Please enter your Password</span> */}
                    <InputField
                        handleChange={handleConfirPass}
                        type="password"
                        placeholder="Confirm Password"
                    />
                    <InputField
                        handleChange={handleMobileChange}
                        type="text"
                        placeholder="mobile no"

                    />

                    <InputField
                        handleChange={handleMobileChange}
                        type="Gender"
                        placeholder="MALE OR FEMALE"

                    />

                    <InputField
                        handleChange={handleMobileChange}
                        type="text"
                        placeholder="Age"

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
                    to="/login"
                  ><div
                  style={{ color: "#2C5EFF", fontWeight: "bolder", marginLeft: 5 }}
              >
                  Login in
              </div>
                  </NavLink>
                        
                    </div>
                    <div style={{ textAlign: "center" }}>
                    <NavLink
                    className=""
                    style={{ textDecoration: "none" }}
                    to="/signup"
                  >
                        <button
                            onClick={handleClick}
                            className="sign-in-button"
                            style={{ width: "80%", height: "6vh", marginTop: 17 }}
                        >
                            Sign In
                        </button>
  
  </NavLink>                      </div>
                    <div style={{ textAlign: "center" }}>
                        <button
                            className="sign-in-with-google-button"
                            style={{ height: "6vh" }}
                        >
                            <div style={{ display: "flex" }}>
                                <div style={{ margin: "auto" }}>
                                    <img src={google_logo} alt="" width="70%" height="70%" />
                                </div>
                                <div
                                    style={{
                                        fontFamily: "poppins",
                                        fontWeight: "bold",
                                        margin: "auto",
                                    }}
                                >
                                    Sign in with Google
                                </div>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignUp
