import React, { useEffect, useState } from "react";
import MaterialIcon, { colorPalette } from "material-icons-react";
import Button from "../Common/Button";
import ProfileInputField from "../Profile/ProfileInputField";
import ProfileInputFieldExtended from "../Profile/ProfileInputFieldExtended";
import SideBarOption from "../Profile/SideBarOption";
import axios from "axios";
import "./UniProfile.css";
import { NavLink } from "react-router-dom";
// import Cookies from 'universal-cookie'
import { Navigate } from "react-router-dom";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import EventCard from "../Event/EventCard";import Accordion from "react-bootstrap/Accordion";
import UserHistoryList from "./UserHistoryList";
import "./hismain.css"
import SearchIcon from '@mui/icons-material/Search';

function MHistory() {
  const [tagList, setTaglist] = useState([]);
  const [explist, setExplist] = useState([]);

  const [timeframe, setTimeFrame] = useState("");

  const [timeframe2, setTimeFrame2] = useState("");
  const [searchinput, searchinputUpdate] = useState("");
  //  const cookies = new Cookies();
  //  const UserType = cookies.get('userType');

  //  const CollegeId = cookies.get('uTypeId')


  const [showw, setshoww] = useState("false");

  const Handle_toggle = () => {
    const img = document.getElementById("pop_Container");
    console.log(img);
  };

  const handleeditclick = () => {
    setshoww("true");
    console.log(showw);
  };

  const handlesubmit = (e) => {
    setshoww("false");
  };
  const setToTaglist = (e, k) => {
    if (e.keyCode == 13) {
      setTaglist([...tagList, k]);
      e.target.value = "";
    }
  };
  
  const setToExplist = (e, k) => {
    if (e.keyCode == 13) {
      setExplist([...tagList, k]);
      e.target.value = "";
    }
  };
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

  const initialHistoryList = [
    {
      id: 0,
      timeAccessed: '27/09/2022 07.00PM',
      logoUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-img.png',
      title: 'Dharmesh Vala',
     typee:'individual mentoring',
      domainUrl: '20 mins',
    },
    {
      id: 1,
      timeAccessed: '27/08/2025 05:45 PM',
      logoUrl: 'https://assets.ccbp.in/frontend/react-js/twitter-img.png',
      title: 'Akshay Jadav',
      typee:'individual mentoring',
      domainUrl: '20 mins',
    },
    {
      id: 2,
      timeAccessed: '27/01/2001 04:35 PM',
      logoUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-img.png',
      title: 'Vishant Wali',
      typee:'individual mentoring',
      domainUrl: '18 mins',
    },
    {
      id: 3,
      timeAccessed: '27/09/2018 09:25 AM',
      logoUrl: 'https://assets.ccbp.in/frontend/react-js/gmail-img.png',
      title: 'Tejas Tank',
      domainUrl: '75min',
      typee:'individual mentoring',
    },
    {
      id: 4,
      timeAccessed: '27/09/2018 09:25 AM',
      logoUrl: 'https://assets.ccbp.in/frontend/react-js/gmail-img.png',
      title: 'Tejas Tank',
      domainUrl: '75min',
      typee:'individual mentoring',
    },
    {
      id: 5,
      timeAccessed: '27/09/2018 09:25 AM',
      logoUrl: 'https://assets.ccbp.in/frontend/react-js/gmail-img.png',
      title: 'Tejas Tank',
      domainUrl: '75min',
      typee:'individual mentoring',
    },
    {
      id: 6,
      timeAccessed: '27/09/2018 09:25 AM',
      logoUrl: 'https://assets.ccbp.in/frontend/react-js/gmail-img.png',
      title: 'Tejas Tank',
      domainUrl: '75min',
      typee:'individual mentoring',
    }
   ,
    {
      id: 7,
      timeAccessed: '17/08/2022 01:25 PM',
      logoUrl: 'https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png',
      title: 'Dharmesh Vala',
      domainUrl: '150 MINS',
      typee:'individual mentoring',
    },
  
    {
      id: 8,
      timeAccessed: '27/09/2018 09:25 AM',
      logoUrl: 'https://assets.ccbp.in/frontend/react-js/gmail-img.png',
      title: 'Tejas Tank',
      domainUrl: '75min',
      typee:'individual mentoring',
    },
    {
      id: 9,
      timeAccessed: '22/7/2019 09:00 AM',
      logoUrl: 'https://assets.ccbp.in/frontend/react-js/google-img.png',
      title: 'Yash Parsana',
      domainUrl: '100 mins',
      typee:'individual mentoring',
    },
  ]
  const [searchInput,setsearchInput] = useState("");

  const [historyList,sethistoryList] = useState(initialHistoryList);

  const onChangeSearchInput = (event) => {
    setsearchInput(event.target.value);

    // console.log(event.target.value)
  } 

  const onDeleteHistoryItem = (id) => {
   
    const filteredHistoryList = historyList.filter(
      eachHistoryItem => eachHistoryItem.id !== id,
    )
    sethistoryList(filteredHistoryList);
    
  }
  const searchResults = historyList.filter( (eachHistoryItem) => 
  eachHistoryItem.title.includes(searchInput)
)
  return (
    
    <>
      {
        <div
          style={{
            display: "flex",
            textAlign: "center",
            justifyContent: "left",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                position: "sticky",
                top: "0",
                padding: "15px",
              }}
            >
              <div style={{ marginTop: "auto", marginBottom: "auto" }}>
                <div className="profile w-5 h-5">
                  <img
                    src="https://media-exp1.licdn.com/dms/image/C5603AQFjdqTFknnOWw/profile-displayphoto-shrink_800_800/0/1662616747803?e=1670457600&v=beta&t=74tKSSzvo2bryUlYpD5gRLR24FecR6GFT2CcOCuIAc4"
                    className="w-110 h-110 rounded-circle"
                    height="100px"
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
                  Dharmesh Va..
                </div>

                <div
                  style={{
                    marginLeft: 20,
                    fontSize: 16,
                    color: "#9B9B9B",
                    fontWeight: "500",
                  }}
                >
                  Dvala453@gmail.com
                </div>
              </div>
            </div>
            {/* horizontal line */}
            <div style={{ border: "2px solid #F5F7F9", marginTop: 20 }}></div>

            {/* options */}
            <div
              className="editing"
              style={{ position: "sticky", top: "130px", padding: "10px" }}
            >
              <NavLink
                className=""
                style={{ textDecoration: "none", color: "black" }}
                to="/mentorpage"
              >
                <SideBarOption icon="person" title="Profile" />
              </NavLink>

              <NavLink
                className=""
                style={{ textDecoration: "none", color: "black" }}
                to="/dashboard"
              >
                <SideBarOption icon="dashboard" title="Dashboard" />
              </NavLink>

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
              to="/mentorresources"
            >
              <SideBarOption icon="book" title="resources" />
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
                to="/Logout"
              >
                <SideBarOption icon="logout" title="Logout" />
              </NavLink>
            </div>
          </div>
          <div
            style={{
              border: "2px solid #F5F7F9",
              // height: "-webkit-fill-available",
              // marginTop: "auto",
              // marginBottom: "auto",
              marginLeft: 20,
            }}
          >
            {/* this is for line */}
          </div>

          {/* profile section */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginRight: "auto",
              marginLeft: "auto",
              textAlign: "start",
              marginLeft: 40,
              width: "-webkit-fill-available",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginTop: 20,
              }}
            >
              <div
                style={{
                  fontFamily: "poppins",
                  fontWeight: "600",
                  fontSize: 26,
                  marginLeft: 30,
                }}
              >
                Your History
              </div>
              <div
                style={{
                  border: "2px solid #F5F7F9",
                  marginLeft: "auto",
                  marginRight: "auto",
                  height: 1,
                  marginTop: 5,
                  width: "-webkit-fill-available",
                }}
              ></div>
            </div>
   
            <div className="app-container">
            <div style={{ width: "100%" }}>
            <div style={{ paddingLeft: 40, paddingRight: 40, justifyContent: "left" }}>

                <div style={{ marginTop: 40 }} />
                <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center"
                    }}
                >
                    {/*search bar*/}
                    <div className="container-serach-box-search-bar" style={{ width: "80%" }}>
                        <SearchIcon style={{
                            marginLeft: "10px",
                            fontSize: "28px",
                            color: "rgb(155, 155, 155)"
                        }} />
                        <div style={{ paddingLeft: 20 }} />
                        <input
                            type="text"
                            className="search-bar-input-box"
                            placeholder="Enter the project"
                            value={searchinput}
                            onChange={e => searchinputUpdate(e.target.value)}
                        />
                    </div>

                    {/*Search button*/}
                    <button className="search-bar-button" id='searchinput' >Search</button>

                </div>
            </div>
        </div>

            <div className="history-list-container">
              {searchResults.length > 0 ? (
                <ul className="history-list">
                {searchResults.map(eachHistoryItem => (
                  <UserHistoryList historyListDetails={eachHistoryItem} key={eachHistoryItem.id} onDeleteHistoryItem={onDeleteHistoryItem }/>
                ))}
              </ul>
              ) : (<p className="Empty-history-message">There is no history to show</p>
              )}
            </div>
          </div>

           

           
            
          
                <div
                  style={{
                    marginTop: 20,
                    justifyContent: "end",

                    display: "flex",
                    marginBottom: "50px",
                    marginRight:"55px"
                  }}
                >
                  <Button title={"Request For Edit"} />
                </div>
              </div>
            
            
        </div>
      }
    </>
  );
}

export default MHistory;
