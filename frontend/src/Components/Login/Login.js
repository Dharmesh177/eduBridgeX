import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import './Login.css';
// import axios from "axios";
// import Cookies from "universal-cookie";

// var inp = {
//   marginTop: "1rem",
//   padding: "0.5rem",
// };

export default function Login(props) {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  // const cookies = new Cookies();
  // const sendReq = async () => {
  //   const res = await axios
  //     .post(`http://localhost:5000/api/user/login`, {
  //       Email: email,
  //       Password: pass,
  //     })
  //     .catch((err) => console.log(err));
  //   const data = await res.data;
  //   return data;
  // };

  // const loginUser = (event) => {
  //   event.preventDefault();
  //   console.log(email, pass);
  //   sendReq().then((data) => {
  //     const cookies = new Cookies();

  //     cookies.set("authToken", data.authToken, { path: "/" });
  //     cookies.set("userId", data.userId, { path: "/" });
  //     cookies.set("userType", data.userType, { path: "/" });
  //     cookies.set("uTypeId", data.uTypeId, { path: "/" });
  //     console.log(data);

  //     if (data.userType == "College-admin")
  //       window.location.href = "/collegeprofile";
  //     else if (data.userType == "Student") window.location.href = "/myProfile";
  //     else if (data.userType == "Professor") window.location.href = "/faculty";
  //     else window.location.href = "/";
  //   });
  // };
  return (
    <>
     
     <section>
  <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-2 sm:py-12 lg:px-8 h-[400px] w-2/4">
    <header>
      <h2 class="text-xl font-bold text-gray-900 sm:text-3xl">Who you are</h2>
    </header>

    <ul class="mt-8 flex flex-row justify-between p-2">
      <li>
        <a href="#" class="group block overflow-hidden">
          <img
            src="./img/icons8-user-64.png"
            alt=""
            class="h-[120px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[150px]"
          />

          <p>User</p>
        </a>
      </li>

      <li>
        <a href="#" class="group block overflow-hidden">
          <img
            src="./img/icons8-mentor-64.png"
            alt=""
            class="h-[120px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[150px]"
          />

          <div class="relative bg-white pt-3">
            
          </div>
        </a>
      </li>

      <li>
        <a href="#" class="group block overflow-hidden">
          <img
            src="./img/icons8-recruitment-60.png"
            alt=""
            class="h-[100px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[150px]"
          />

          <div class="relative bg-white pt-3">
            
          </div>
        </a>
      </li>

      
    </ul>
  </div>
</section>
    </>
  );
}
