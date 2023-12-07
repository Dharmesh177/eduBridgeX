import React, { useDebugValue, useEffect } from "react";
import { useState } from "react";
import Header from "../Common/Header";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

export default function BecomeMenter() {

  var [tags, setTags] = useState("");
  const [tagList, setTaglist] = useState([]);


  const navigate = useNavigate();

  const [timeframe, setTimeFrame] = useState("");
  const [timeframe2, setTimeFrame2] = useState("");
  const [timeframe3, setTimeFrame3] = useState("");
  const [tagList2, setTaglist2] = useState([]);

  const [tagList3, setTaglist3] = useState([]);

  const [certificate, setCertificate] = useState();
  const [other, setOther] = useState();

  const queryParams = new URLSearchParams(window.location.search);

  const email = queryParams.get("email");
  const pass = queryParams.get("pass");

  useEffect(() => {
    console.log(email + " " + pass);
  }, []);

  const handleFileChangeCerti = (e) => {
    if (!e.target.files) {
      return;
    }

    setCertificate(e.target.files[0]);
  };

  const handleFileChangeOther = (e) => {
    if (!e.target.files) {
      return;
    }

    setOther(e.target.files[0]);
  };


  var [inputTag, setInputTag] = useState({});
  let projId;
  const subId = useParams().SubId;
  const Tags = (event) => {
    var str = event.target.value;
    setTags(str);
  };

  const handleClick = async (e) => {
    e.preventDefault();
    console.log(inputTag);
    if (inputTag.FullName === undefined || inputTag.Desc === undefined ||
      inputTag.mobile === undefined || inputTag.dist === undefined || inputTag.state === undefined || inputTag.ProfilePhoto === undefined
      || inputTag.qualifications === undefined || inputTag.institution === undefined || setTaglist2.length === 0 || setTaglist3.length === 0) {
      window.alert("please enter all the info...");
    } else {

      const formdata = new FormData();
      formdata.append("name", inputTag.FullName);
      formdata.append("email", email);
      formdata.append("password", pass);
      formdata.append("mobile", inputTag.mobile);
      formdata.append("intro", inputTag.Desc);
      formdata.append("qualification", inputTag.qualifications);
      formdata.append("institute", inputTag.institution);
      formdata.append("expertise", setTaglist3);
      formdata.append("language", setTaglist2);
      formdata.append("district", inputTag.dist);
      formdata.append("state", inputTag.state);
      formdata.append("photo", "");
      formdata.append("docLink", certificate);

      const result = await axios.post("http://localhost:5000/api/auth/savementor", formdata);
      if (result.data.sucess) {
        alert("Details Saved....");
        navigate("/login");
      } else {
        console.log(result.data);
        alert(result.data.message);
      }
    }

  }

  const handleChange = (e) => {
    console.log(e.target.name);

    setInputTag((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  }


  const sendReq = async () => {
    let Rtype = document.getElementsByName("Rtype");
    console.log(inputTag.PName);

    Array.from(Rtype).forEach(element => {
      if (element.checked)
        inputTag.PType = element.value;
    });

    inputTag.UserId = "62f9142c5cf6d43a8bbcc544"

    const ele = document.getElementsByName("isPrivete");

    inputTag.isPrivete = ele[0].checked;
    inputTag.Tags = tagList
    inputTag.SubjectId = subId

    console.log(inputTag);
  }


  const setToTaglist = (e, k) => {
    if (e.keyCode == 13) {
      setTaglist([...tagList, k]);
      e.target.value = "";
    }
  };

  const setToTaglist2 = (e, k) => {
    if (e.keyCode == 13) {
      setTaglist2([...tagList, k]);
      e.target.value = "";
    }
  };
  const setToTaglist3 = (e, k) => {
    if (e.keyCode == 13) {
      setTaglist3([...tagList, k]);
      e.target.value = "";
    }
  };
  return (
    <>
      <Header index="2" />
      <div className="container " style={{ fontFamily: 'poppins', marginTop: -30 }}>
        <div className=" p-3 ">
          <form  >
            <div className="form-group row">
              <label
                for="name"
                style={{ textAlign: 'left', }}
                className="col-sm-2 col-form-label downn font-weight-bold"
              >
                <strong>Name:</strong>
              </label>
              <div className="col-sm-10">
                <input
                  style={{ paddingLeft: 15, paddingRight: 15 }}
                  type="text"
                  className="form-control form-input"
                  name="FullName"
                  placeholder="Enter Your Full Name.."
                  onChange={handleChange}
                  value={inputTag.FullName}
                  required
                />
              </div>
            </div>
            <div className="form-group row" style={{ marginTop: -10 }}>
              <label style={{ textAlign: 'left', }} for="desc" className="col-sm-2 downn col-form-label">
                <strong>Introduce Yourself to Mentee's:</strong>
              </label>
              <div className="col-sm-10">
                <textarea className="form-control f-textarea" id="Desc"
                  placeholder="Introduce Yourself to Mentee's"
                  rows="3"
                  name="Desc"
                  style={{ paddingLeft: 15, paddingRight: 15 }}
                  onChange={handleChange}
                  value={inputTag.Desc}
                  required></textarea>
              </div>
            </div>

            <div className="form-group row">
              <label
                for="name"
                style={{ textAlign: 'left', }}
                className="col-sm-2 col-form-label downn font-weight-bold"
              >
                <strong>Mobile No:</strong>
              </label>
              <div className="col-sm-10">
                <input
                  style={{ paddingLeft: 15, paddingRight: 15 }}
                  type="text"
                  className="form-control form-input"
                  name="mobile"
                  placeholder="Enter Your Mobile No"
                  onChange={handleChange}
                  value={inputTag.mobile}
                  required
                />
              </div>
            </div>


            <div className="form-group row">
              <label
                for="name"
                style={{ textAlign: 'left', }}
                className="col-sm-2 col-form-label downn font-weight-bold"
              >
                <strong>District:</strong>
              </label>
              <div className="col-sm-10">
                <input
                  style={{ paddingLeft: 15, paddingRight: 15 }}
                  type="text"
                  className="form-control form-input"
                  name="dist"
                  placeholder="Enter Your Distric Name"
                  onChange={handleChange}
                  value={inputTag.dist}
                  required
                />
              </div>
            </div>

            <div className="form-group row">
              <label
                for="name"
                style={{ textAlign: 'left', }}
                className="col-sm-2 col-form-label downn font-weight-bold"
              >
                <strong>State:</strong>
              </label>
              <div className="col-sm-10">
                <input
                  style={{ paddingLeft: 15, paddingRight: 15 }}
                  type="text"
                  className="form-control form-input"
                  name="state"
                  placeholder="Enter Your State Name"
                  onChange={handleChange}
                  value={inputTag.state}
                  required
                />
              </div>
            </div>

            <div className="form-group row">
              <label
                for="name"
                style={{ textAlign: 'left', }}
                className="col-sm-2 col-form-label downn font-weight-bold"
              >
                <strong>Highest Education Qualifications:</strong>
              </label>
              <div className="col-sm-10">
                <input
                  style={{ paddingLeft: 15, paddingRight: 15 }}
                  type="text"
                  className="form-control form-input"
                  name="qualifications"
                  placeholder="Enter Your Qulalification"
                  onChange={handleChange}
                  value={inputTag.qualifications}
                  required
                />
              </div>
            </div>



            <div className="form-group row">
              <label
                for="name"
                style={{ textAlign: 'left', }}
                className="col-sm-2 col-form-label downn font-weight-bold"
              >
                <strong>Institute Name:</strong>
              </label>
              <div className="col-sm-10">
                <input
                  style={{ paddingLeft: 15, paddingRight: 15 }}
                  type="text"
                  className="form-control form-input"
                  name="institution"
                  placeholder="Enter Your Institute Name"
                  onChange={handleChange}
                  value={inputTag.institution}
                  required
                />
              </div>
            </div>



            <div class="form-group row" style={{ marginTop: -10 }}>
              <label style={{ textAlign: 'left', }} for="inputPassword" class="col-sm-2 downn col-form-label">
                <strong>Photo Link</strong>
              </label>
              <div class="col-sm-10">
                <input
                  style={{ paddingLeft: 15, paddingRight: 15 }}
                  type="text"
                  class="form-control form-input"
                  id="ProjectLink"
                  name="ProfilePhoto"
                  value={inputTag.ProfilePhoto}
                  onChange={handleChange}
                  placeholder="Paste your profile photo link"
                  required
                />
              </div>
            </div>



            <div className="a_fillter">

              <div className="tags">
                {tagList.map((ele) => {
                  return (
                    <div className="tag">
                      <p>{ele}</p>
                      {/* <img src={('img/close.png')} alt="cross" className='close' onClick={}/> */}
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="form-group row" style={{ marginTop: -10 }}>
              <label style={{ textAlign: 'left', }} for="desc" className="col-sm-2 downn col-form-label">
                <strong>Expertise:</strong>
              </label>
              <input
                className="form-control form-input"
                name="tag"
                id="tag"
                placeholder="Ex. Web Development"
                onKeyUp={(e) => setToTaglist2(e, timeframe2)}
                onChange={(e) => setTimeFrame2(e.target.value)}
              />
            </div>

            <div className="a_fillter">

              <div className="tags">
                {tagList2.map((ele) => {
                  return (
                    <div className="tag">
                      <p>{ele}</p>
                      {/* <img src={('img/close.png')} alt="cross" className='close' onClick={}/> */}
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="form-group row" style={{ marginTop: -10 }}>
              <label style={{ textAlign: 'left', }} for="desc" className="col-sm-2 downn col-form-label">
                <strong>Language:</strong>
              </label>
              <input
                className="form-control form-input"
                name="tag"
                id="tag"
                placeholder="Ex. English"
                onKeyUp={(e) => setToTaglist3(e, timeframe3)}
                onChange={(e) => setTimeFrame3(e.target.value)}
              />
            </div>

            <div className="form-group row">
              <label
                for="name"
                style={{ textAlign: 'left', }}
                className="col-sm-2 col-form-label downn font-weight-bold"
              >
                <strong>Highest Qualifications certificate:</strong>
              </label>
              <div className="col-sm-10">
                <input style={{ paddingLeft: 15, paddingRight: 15 }} className="form-control form-input" type="file" name="file" placeholder="Enter Your Institute Name"
                  onChange={handleFileChangeCerti}
                  value={inputTag.certificate}
                  required />

              </div>
            </div>

            <div className="form-group row">
              <label
                for="name"
                style={{ textAlign: 'left', }}
                className="col-sm-2 col-form-label downn font-weight-bold"
              >
                <strong>Other Document which you want to shared:</strong>
              </label>
              <div className="col-sm-10">
                <input style={{ paddingLeft: 15, paddingRight: 15 }} className="form-control form-input" type="file" name="file" placeholder="Enter Your Institute Name"
                  onChange={handleFileChangeOther}
                  value={inputTag.others}
                />

              </div>
            </div>


            <div className="a_fillter">

              <div className="tags">
                {tagList3.map((ele) => {
                  return (
                    <div className="tag">
                      <p>{ele}</p>
                      {/* <img src={('img/close.png')} alt="cross" className='close' onClick={}/> */}
                    </div>
                  );
                })}
              </div>
            </div>



            <div className="justify-content align-center  mt-3 ">
              <div className="w-25" style={{ textAlign: 'left' }}>
                <button onClick={handleClick} type="submit" style={{ height: "41px", boxShadow: "2px -1px 32px 0px rgba(44,94,255,0.36)" }} className=" search-bar-button  m-auto " >
                  Submit
                </button>

              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

