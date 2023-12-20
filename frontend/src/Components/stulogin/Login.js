import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Login.css";
import axios from "../../helpers/axios";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";

// var inp = {
//   marginTop: "1rem",
//   padding: "0.5rem",
// };

export default function Login(props) {
  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState();
  const submitLoginForm = async (e) => {
    e.preventDefault();
    const data = {
      email: email,
      password: pass,
    };
    // console.log("res.data", data);
    try {
      const res = await axios.post("/auth/studentlogin", data);
      if (res.status === 200) {
        console.log("res.data", res.data);
        alert("You are Sign in successfully !!!");
        
        const cookies = new Cookies();

        cookies.set("UserToken", res.data.token, { path: "/" });
        // cookies.set("isAuth", "true", { path: "/" });
        navigate("/");
      } else {
        console.log("res.message", res.message);
        setError(res.message);
      }
    } catch (err) {
      console.log("error", err);
    }
    console.log("res.data", data);
  };
  
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
        Student Login
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
            onSubmit={submitLoginForm}
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
                    to="/ssignup"
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
                  <div>Forgot Password?</div>
                  <div
                    style={{
                      color: "#2C5EFF",
                      fontWeight: "bolder",
                      marginLeft: 5,
                    }}
                  >
                    Click here
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
