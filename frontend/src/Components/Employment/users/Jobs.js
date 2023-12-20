import Header from "../../Common/Header";
import React, { useEffect, useState } from "react";
import Axios from "axios";
import JobList from "./Joblist";
import "./Home.css";

export default function Jobs() {
  const [tag, setTag] = useState("");
  const [lang, setLang] = useState("");
  const [timeframe, setTimeFrame] = useState("");
  const [university, setUniversity] = useState("");
  const [tagList, setTaglist] = useState([]);
  const setToTaglist = (e, k) => {
    if (e.keyCode == 13) {
      setTaglist([...tagList, k]);
      e.target.value = "";
    }
  };
  return (
    <>
      <Header />
      <div className="flex items-center justify-center bg-gray-100 mt-3">
      <div className="short_filter bg-gray-100 shadow">
        <div className="title">
          <img src={"img/Vector.png"} alt="short icon" />
          <p>Short Filters</p>
        </div>
        <div className="filter_container">
          <div className="filters">
            <div className="tag">
              <label htmlFor="tag">
                <img src={"img/Tags.png"} alt="tag" />
                <p>Tag</p>
              </label>
              <div
                className="sign-in-input-field-container"
                style={{ marginTop: 15 }}
              >
                <input
                  className="sign-in-input-fields"
                  type="text"
                  placeholder="Ex.Web"
                  name="tag"
                  id="tag"
                  onKeyUp={(e) => setToTaglist(e, tag)}
                  onChange={(e) => setTag(e.target.value)}
                />
              </div>
            </div>
            <div className="tag">
              <label htmlFor="language">
                <img src={"img/Code.png"} alt="Code" />
                <p>Language</p>
              </label>
              <div
                className="sign-in-input-field-container"
                style={{ marginTop: 15 }}
              >
                <input
                  className="sign-in-input-fields"
                  type="text"
                  placeholder="Ex.Java"
                  name="language"
                  id="language"
                  onKeyUp={(e) => setToTaglist(e, lang)}
                  onChange={(e) => setLang(e.target.value)}
                />
              </div>
            </div>
            <div className="tag">
              <label htmlFor="timeframe">
                <img src={"img/time.png"} alt="tag" />
                <p>Domain</p>
              </label>
              <div
                className="sign-in-input-field-container"
                style={{ marginTop: 15 }}
              >
                <input
                  className="sign-in-input-fields"
                  type="text"
                  placeholder="Ex.Data Science"
                  name="timeframe"
                  id="timeframe"
                  onKeyUp={(e) => setToTaglist(e, timeframe)}
                  onChange={(e) => setTimeFrame(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      <div className="p-4 m-auto ml-4 mr-4 mb-4 w-[95%] h-screen bg-gray-100">
        <JobList />
      </div>
    </>
  );
}
