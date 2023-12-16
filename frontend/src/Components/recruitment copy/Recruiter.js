import React from "react";
import "./Recruiter.css";


function Recruiter() {
  return (
    <div>
      <form className="login-form" >
        <h1>Login</h1>
        <div className="form-input-material">
          <input
            type="text"
            name="username"
            id="username"
            placeholder=" "
            autocomplete="off"
            className="form-control-material"
            required
          />
          <label for="username">Username</label>
        </div>
        <div className="form-input-material">
          <input
            type="password"
            name="password"
            id="password"
            placeholder=" "
            autocomplete="off"
            className="form-control-material"
            required
          />
          <label for="password">Password</label>
        </div>
        <button type="submit" className="btn btn-primary btn-ghost">
          Login
        </button>
      </form>
    </div>
  );
}

export default Recruiter;
