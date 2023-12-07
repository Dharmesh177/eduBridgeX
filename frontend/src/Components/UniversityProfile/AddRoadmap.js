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


function AddRoadmap() {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [pdfLink, setpdfLink] = useState("");
    const [modal, setModal] = useState(false);
    const provider = "633ff4fefae1ced4ba7082c6";
    const [tags, setTags] = useState([]);
   
    // const { name, provider, tags, description, pdfLink } = req.body
    // let newresource = new resources();
    // newresource.name = name
    // newresource.provider = provider
    // newresource.description = description
    // newresource.tags = tags
    // newresource.pdfLink = pdfLink

    const sendRequest = async (e) => {
        e.preventDefault();
        console.log("hhhhhhhhhhhhhhhhhhhhhhh")
        try {
            
            const res = await axios.post("/resources/add", {
                name,
                description,
                pdfLink,
                provider,
                tags
                
            });
            console.log("res.data", res.data);
        } catch (err) {
            console.log("err", err);

        }
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
                    <Button title={"+ Add Resources"} />
                </div>
            </a>
            <Modal show={modal} handleClose={modalClose}>
                <form onSubmit={sendRequest} >
                    <div className="form-group">
                        <div className="facultypop">
                            Resource Name <span style={{ color: "red" }}>*</span>
                        </div>
                        <div style={{ width: "-webkit-fill-available" }}>
                            <input
                                className="form-control input-field"
                                title={"Resource title"}
                                onChange={(e) => setName(e.target.value)}
                                placeholder={""}
                                value={name}
                            />
                        </div>
                        <div className="facultypop">
                            Pdf-Link <span style={{ color: "red" }}>*</span>
                        </div>

                        <div style={{ width: "-webkit-fill-available" }}>
                            <input
                                className="form-control input-field"
                                title={"add the pdf link"}
                                onChange={(e) => setpdfLink(e.target.value)}
                                placeholder={""}
                                value={pdfLink}
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

                        <div className="facultypop">
                            Tags <span style={{ color: "red" }}>*</span>
                        </div>

                        <div style={{ width: "-webkit-fill-available" }}>
                            <input
                                className="form-control input-field"
                                title={"Description of Event"}
                                onChange={(e) => setTags(e.target.value)}
                                placeholder={""}
                                value={tags}
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

export default AddRoadmap


