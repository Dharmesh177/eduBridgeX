// Dropdown.js
import React, { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="dropdown" ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className="login-button"
        style={{ marginLeft: "7px" }}
      >
        <div className="innerLoginButton">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="16"
            width="12"
            viewBox="0 0 384 512"
          >
            <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
          </svg>
        </div>
      </button>
      {isOpen && (
        <div className="dropdown-content">
          {/* Dropdown Content */}
          <p>
            <NavLink to="/login">Mentor</NavLink>
          </p>
          <p>
            <a href="/RecruiterLogin">Recruiter</a>
          </p>
          <p>
            <a href="/UserLogin">Student</a>
          </p>
          {/* Add more dropdown content here */}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
