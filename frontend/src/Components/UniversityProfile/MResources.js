
import React, { useEffect, useState } from "react";
// import MaterialIcon, { colorPalette } from "material-icons-react";
// import Button from "../Common/Button";
// import ProfileInputField from "../Profile/ProfileInputField";
// import ProfileInputFieldExtended from "../Profile/ProfileInputFieldExtended";
import SideBarOption from "../Profile/SideBarOption";
import axios from "axios";
import "./UniProfile.css";
import { NavLink } from "react-router-dom";
// import Cookies from 'universal-cookie'
import { useNavigate } from "react-router-dom";
// import AccountBoxIcon from "@mui/icons-material/AccountBox";
// import EventCard from "../Event/EventCard";
// import Addresources from "./Addresources";
import Cookies from 'universal-cookie';
import ListCourses from './ListCourses';
import { jwtDecode } from "jwt-decode";
import ProfilePage from "./ProfilePage";


// import Popup from 'reactjs-popup';
function MResources() {
    // const [tagList, setTaglist] = useState([]);

    const [recOpen, setRecOpen] = useState(true);
    const [profOpen, setProfOpen] = useState(false);

  // const [explist, setExplist] = useState([]);
  // const [timeframe, setTimeFrame] = useState("");
  // const [timeframe2, setTimeFrame2] = useState("");



   const cookies = new Cookies();
   const navigate = useNavigate();
  //  const UserType = cookies.get('userType');

  //  const CollegeId = cookies.get('uTypeId')

  const [mentorData, setMentorData] = useState({});
  // const [showw, setshoww] = useState("false");

  // const Handle_toggle = () => {
  //   const img = document.getElementById("pop_Container");
  //   console.log(img);
  // };

  // const handleeditclick = () => {
  //   setshoww("true");
  //   console.log(showw);
  // };

  // const handlesubmit = (e) => {
  //   setshoww("false");
  // };
  // const setToTaglist = (e, k) => {
  //   if (e.keyCode == 13) {
  //     setTaglist([...tagList, k]);
  //     e.target.value = "";
  //   }
  // };
  
  // const setToExplist = (e, k) => {
  //   if (e.keyCode == 13) {
  //     setExplist([...tagList, k]);
  //     e.target.value = "";
  //   }
  // };
  // const [user, setUser] = useState();

  // const sendRequest = async () => {
  //   const res = await axios
  //     .get(`http://localhost:5000/api/college/collegeId/${CollegeId}`)
  //     .catch((err) => console.log(err));
  //   const data = await res.data;
  //   console.log(data);
  //   console.log("-----");
  //   return data;
  // };
  // useEffect(() => {
  //   sendRequest().then((data) => setUser(data.college));
  // }, []);

  const fetchMentorData = async () => {
    try {
      const token = cookies.get('MentorToken');
      const tokenData = jwtDecode(token);
      // console.log(tokenData);
      const result = await axios.get('http://localhost:5000/api/mentors/mentor/'+tokenData.id);
      setMentorData(result.data.user);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(()=>{
    fetchMentorData();
  },[]);

  return (
    <div className="bg-gray-50">
    <>
    {
      <div
        style={{
          display: "flex",
          textAlign: "center",
          justifyContent: "left",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }} className="w-[23%]">
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              position: "sticky",
              top: "0",
              padding: "15px",
              width: "8%"
            }}
          >
            <div style={{ marginTop: "auto", marginBottom: "auto" }} className="w-16 h-16">
              <div className="w-full h-full">
                <img
                  src="https://tse4.mm.bing.net/th?id=OIP.bT_OP-crDSYAGCwQZXCKXQHaFj&pid=Api&P=0&h=180"
                  // className="rounded-circle"
                  className="w-full h-full rounded-full"
                  // height="100px"
                />
              </div>
            </div>
            <div
              style={{
                marginTop: "auto",
                marginBottom: "auto",
              }}
            >
              <div
                style={{
                  // marginTop: 50,
                  marginLeft: 20,
                  fontFamily: "poppins",
                  fontWeight: "bold",
                  fontSize: 22,
                  textAlign: "start",
                }}
              >
                {mentorData.name}
              </div>

              <div
                style={{
                  marginLeft: 20,
                  fontSize: 16,
                  color: "#9B9B9B",
                  fontWeight: "500",
                }}
              >
                {mentorData.email}
              </div>
            </div>
          </div>
          {/* horizontal line */}
          <div style={{ border: "2px solid #F5F7F9", marginTop: 20 }}></div>

          {/* options */}
          <div
            className="flex flex-col h-[90%] w-[18%] bg-gray-100 rounded-lg border fixed mt-28"
            // style={{ position: "sticky", top: "130px", padding: "10px" }}
          >
            <NavLink
              className="w-full"
              style={{ textDecoration: "none", color: "black" }}
              onClick={()=>{
                setProfOpen(true);
                setRecOpen(false);
              }}
              // to="/mentorpage"
            >
              <SideBarOption icon="person" title="Profile" />
            </NavLink>

            {/* <NavLink
              className=""
              style={{ textDecoration: "none", color: "black" }}
              to="/CourseOfMentor"
            >
              <SideBarOption icon="book" title="Courses" />
            </NavLink> */}

            <NavLink
              className=""
              style={{ textDecoration: "none", color: "black" }}
              to="/mentorevents"
            >
              <SideBarOption icon="event" title="Events" />
            </NavLink>

            <NavLink
            className=""
            style={{ textDecoration: "none", color: "black" }}
            onClick={()=>{
              setRecOpen();
              setProfOpen(false);
            }}
            // to="/mentorresources"
            >
              <SideBarOption icon="book" title="course" />
            </NavLink>

          <NavLink
            className=""
            style={{ textDecoration: "none", color: "black" }}
            to="/mentorhistory"
          >
            <SideBarOption icon="history" title="History" />
          </NavLink>

          <NavLink
            className=""
            style={{ textDecoration: "none", color: "black" }}
            to="/MentorLogin"
            onClick={()=>{
              cookies.remove('MentorToken', {path: "/"});
              // navigate('/MentorLogin')
              navigate('/landing')
            }}
          >
            <SideBarOption icon="logout" title="Logout" />
          </NavLink>
        </div>
        </div>
        <div className="w-full">
          {recOpen && <ListCourses />}
          {profOpen && <ProfilePage fun={setProfOpen} fun2={setRecOpen}/>}
        </div>
      </div>
    }
  </>
    </div>
  )
}

export default MResources
