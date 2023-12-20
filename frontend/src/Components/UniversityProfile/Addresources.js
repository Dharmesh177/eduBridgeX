import React, { useEffect, useState } from "react";
// import ReactDOM from "react-dom";
import "./PopUpFrom/styles.css";
// import ProfileInputField from "../Profile/ProfileInputField";
import axios from "../../helpers/axios";
// import { useNavigate } from "react-router-dom";
import "./pop.css";
// import Cookies from "universal-cookie";
// import { Navigate } from "react-router-dom";


function Addresources({ fun, prov }) {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [inpTag, setInpTag] = useState({});
    // const [pdfLink, setpdfLink] = useState("");
    // const provider = "633ff4fefae1ced4ba7082c6";
    const [tags, setTags] = useState([]);
    const [certificate, setCertificate] = useState();

    const handleFileChangeCerti = (e) => {
        if (!e.target.files) {
          return;
        }
        setCertificate(e.target.files[0]);
      };
   
    // const { name, provider, tags, description, pdfLink } = req.body
    // let newresource = new resources();
    // newresource.name = name
    // newresource.provider = provider
    // newresource.description = description
    // newresource.tags = tags
    // newresource.pdfLink = pdfLink


    const sendRequest = async (e) => {
        e.preventDefault();
        console.log({
            name: name,
            description: description,
            pdfLink: certificate,
            provider: prov,
            tags: tags,
        });

        try {
            const res = await axios.post("/resources/add", {
                name: name,
                description: description,
                pdfLink: certificate,
                provider: prov,
                tags: tags,
            });
            console.log(res.data);
        } catch (err) {
            console.log("err", err);

        }
    };

    return (
        <div className="App mt-28 border bg-gray-100 rounded-lg pb-4">
            {/* <a href="javascript:;" onClick={modalOpen}>
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
            </a> */}
            <div className="w-[90%] m-auto">
            <div className="form-group">
                    <div className="facultypop">
                            Resource Name <span style={{ color: "red" }}>*</span>
                        </div>
                        <div style={{ width: "-webkit-fill-available" }}>
                            <input
                                className="form-control input-field w-[50%]"
                                title={"Resource title"}
                                onChange={(e) => setName(e.target.value)}
                                placeholder={""}
                                value={inpTag.name}
                            />
                        </div>
                        <div className="facultypop">
                            Pdf-File <span style={{ color: "red" }}>*</span>
                        </div>

                        <div style={{ width: "-webkit-fill-available" }}>
                            <input
                                type="file"
                                className="form-control input-field w-[50%]"
                                title={"Resource File"}
                                onChange={handleFileChangeCerti}
                                placeholder={""}
                                value={inpTag.certificate}
                            />
                        </div>

                        

                        {/* <div style={{ width: "-webkit-fill-available" }}>
                            <input
                                className="form-control input-field"
                                title={"add the pdf link"}
                                onChange={(e) => setpdfLink(e.target.value)}
                                placeholder={""}
                                value={pdfLink}
                            />
                        </div> */}

                        <div className="facultypop">
                            Description <span style={{ color: "red" }}>*</span>
                        </div>

                        <div style={{ width: "-webkit-fill-available" }}>
                            <input
                                className="form-control input-field"
                                title={"Description of Event"}
                                onChange={(e) => setDescription(e.target.value)}
                                placeholder={"Ex: Enter Description"}
                                value={inpTag.description}
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
                                value={inpTag.tags}
                            />
                        </div>

                    </div>
                    <div className="form-group flex justify-center">
                        <div
                            style={{
                                marginTop: 20,
                                justifyContent: "center",
                                display: "flex",
                                flexDirection:"column",
                                // marginRight: "20px",
                            }}
                        >
                            <button className="bg-blue-600 px-5 py-2 rounded-lg text-white text-xl mb-4"
                                onClick={sendRequest}
                            >
                                Submit
                            </button>
                            <button className="bg-blue-600 px-5 py-2 rounded-lg text-white text-xl"
                                onClick={()=>fun(false)}
                            >
                                Close
                            </button>
                        </div>
                    </div>
            </div>
            {/* <Modal show={modal} handleClose={modalClose}>
                <form className="mt-24" >
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
                    <div className="form-group flex justify-center">
                        <div
                            style={{
                                marginTop: 20,
                                justifyContent: "center",
                                display: "flex",
                                flexDirection:"column",
                                // marginRight: "20px",
                            }}
                        >
                            <button className="bg-blue-600 px-5 py-2 rounded-lg text-white text-xl mb-4"
                                onClick={handleUpload}
                            >
                                Submit
                            </button>
                            <button className="bg-blue-600 px-5 py-2 rounded-lg text-white text-xl"
                                onClick={()=>setModal(false)}
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </form>
            </Modal> */}
        </div>
    );
}

export default Addresources


