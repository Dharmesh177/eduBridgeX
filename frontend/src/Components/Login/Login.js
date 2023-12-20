import React, { useEffect, useState } from "react";
import { NavLink,useNavigate } from "react-router-dom";
import './Login.css';
import axios from "axios";
import Cookies from "universal-cookie";
// var inp = {
//   marginTop: "1rem",
//   padding: "0.5rem",
// };

export default function Login(props) {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const cookies = new Cookies();
  const navigate = useNavigate();

  const sendReq = async (e) => {
    e.preventDefault();
    console.log("hello1");
    const res = await axios.post('http://localhost:5000/api/auth/loginmentor', {
      email: email,
      password: pass,
    });
    console.log(res.data);
    if(res.data.success === true) {
      alert("You Have SUccessFully Logged in as Mentor");
      cookies.set("MentorToken", res.data.token, { path: "/" });
      navigate('/mentorresources');
    } else {
      alert("wrong cradentials");
    }
    // console.log(res);
  };

  useEffect(() => {
    const token = cookies.get('MentorToken');
    if(token){
      navigate('/mentorresources')
    }
  },[])
 
  return (
    <>
      {/* <div className="row justify-content-center align-items-center  " style={search}> */}
      <div
        style={{
          fontSize: 36,
          fontWeight: "bold",
          fontFamily: '"Poppins"',
          textAlign: "center",
          marginTop: 38,
        }}
      >
       Mentor Login
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
          <div className="w-100 text-center">
            <form className="form-inline" 
            // onSubmit={loginUser}
            >
              <div className="col m-auto">
                <div
                  className="sign-in-input-field-container"
                  style={{ marginTop: 15 }}
                >
                  <input
                    type="email"
                    className="sign-in-input-fields"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div
                  className="sign-in-input-field-container"
                  style={{ marginTop: 15 }}
                >
                  <input
                    type="password"
                    className="sign-in-input-fields"
                    placeholder="Password"
                    onChange={(e) => setPass(e.target.value)}
                    value={pass}
                  />
                </div>

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
                  <div>Dont Have Account?</div>
                  <NavLink
                    className=""
                    style={{ textDecoration: "none" }}
                    to="/signup"
                  >
                    <div
                      style={{
                        color: "#2C5EFF",
                        fontWeight: "bolder",
                        marginLeft: 5,
                      }}
                    >
                      Sign Up there..
                    </div>
                  </NavLink>
                </div>
                <div style={{ textAlign: "center" }}>
                  <button
                    type="submit"
                    className="sign-in-button"
                    onClick={sendReq}
                    style={{ width: "80%", height: "6vh", marginTop: 17 }}
                  >
                    Login
                  </button>
                </div>

                <div
                  style={{
                    textAlign: "center",
                    marginTop: 25,
                    fontFamily: "poppins",
                    fontWeight: 800,
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                  }}
                >
                  {/* <div>Forgot Password?</div>
                  <div
                    style={{
                      color: "#2C5EFF",
                      fontWeight: "bolder",
                      marginLeft: 5,
                    }}
                  >
                    Click here
                  </div> */}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}