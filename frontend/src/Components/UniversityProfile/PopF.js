import React, { useEffect, useState } from "react";
// import ReactDOM from "react-dom";
import Button from "../Common/Button";
import Modal from "./PopUpFrom/Modal";
import "./PopUpFrom/styles.css";
// import ProfileInputField from "../Profile/ProfileInputField";
import axios from "../../helpers/axios";
// import { useNavigate } from "react-router-dom";
import "./pop.css";
// import Cookies from "universal-cookie";
// import { Navigate } from "react-router-dom";


function PopF() {
  const [name, setName] = useState("");
  const [duration, setDuration] = useState("");
  const [description, setDescription] = useState("");
  const [img, setImg] = useState("");
  const [modal, setModal] = useState(false);
  const speaker = "507f1f77bcf86cd799439011";
  const mentor = "507f1f77bcf86cd799439011";

  const sendRequest = async (e) => {
    e.preventDefault();
    console.log("hhhhhhhhhhhhhhhhhhhhhhh")
    try {
      const res = await axios.post("/events/addevent", {
        name,
        mentor,
        speaker,
        duration,
        description,
        image:img,
      });
      console.log("res.data", res.data);
    } catch (err) {
      console.log("err", err);

    }
    modalClose();
  };

  const handleSubmit = (e) => {
    modalClose();
  };

  const modalOpen = () => {
    // setModal((current) => !current);
    setModal(true);
  };

  const modalClose = () => {
    // setModal((current) => !current);
    setModal(false);
  };
  return (
    <div className="App">
      <a href="javascript:;" onClick={modalOpen}>
        <div
          style={{
            marginTop: 20,
            justifyContent: "end",
            display: "flex",
            marginBottom: "50px",
            marginRight: "20px",
          }}
        >
          <Button title={"+ Add Event"} />
        </div>
      </a>
      <Modal show={modal} handleClose={modalClose}>
        <form onSubmit={sendRequest} >
          <div className="form-group">
            <div className="facultypop">
              Event Name <span style={{ color: "red" }}>*</span>
            </div>
            <div style={{ width: "-webkit-fill-available" }}>
              <input
                className="form-control input-field"
                title={"Event title"}
                onChange={(e) => setName(e.target.value)}
                placeholder={"Ex: Awareness about blood donation"}
                value={name}
              />
            </div>
            <div className="facultypop">
              Tagline <span style={{ color: "red" }}>*</span>
            </div>

            <div className="facultypop">
              Duration <span style={{ color: "red" }}>*</span>
            </div>

            <div style={{ width: "-webkit-fill-available" }}>
              <input
                className="form-control input-field"
                title={"Duration of Event"}
                onChange={(e) => setDuration(e.target.value)}
                placeholder={"Ex: 45min"}
                value={duration}
              />
            </div>

            <div className="facultypop">
              Description <span style={{ color: "red" }}>*</span>
            </div>

            <div style={{ width: "-webkit-fill-available" }}>
              <input
                className="form-control input-field"
                title={"Description of Event"}
                onChange={(e) => setDescription(e.target.value)}
                placeholder={"Ex: Enter Description"}
                value={description}
              />
            </div>

            <div className="facultypop">Poster Link</div>
            <div style={{ width: "-webkit-fill-available" }}>
              <input
                className="form-control input-field"
                title={"Event Photo Link"}
                onChange={(e) => setImg(e.target.value)}
                placeholder={"Ex: Upload link like drive link"}
                value={img}
              />
            </div>
          </div>
          <div className="form-group">
            <div
              style={{
                marginTop: 20,
                justifyContent: "center",
                display: "flex",
                marginRight: "20px",
              }}
            >
              <Button  >
              Submit
              </Button>
            </div>
          </div>
        </form>
      </Modal>
    </div>
  );
}

export default PopF;

