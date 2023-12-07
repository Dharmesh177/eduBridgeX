import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";
import "../GeneralCSS/main.css"
import NotificationsIcon from '@mui/icons-material/Notifications';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import Languageoption from '../multilang/language-dropdown'
import {useTranslation} from 'react-i18next'
import i18next from "i18next"

export default function Header(props) {
  const {t} = useTranslation();
  const handleClick=(e)=>{
      i18next.changeLanguage(e.target.value)
  }

  const popover = (
    <Popover id="popover-basic">
      <Popover.Header as="h3">Notifications</Popover.Header>
      <Popover.Body>
        And here's some <strong>amazing</strong> content. It's very engaging.
        right?
        <hr />
        And here's some <strong>amazing</strong> content. It's very engaging.
        right?
        <hr />
        And here's some <strong>amazing</strong> content. It's very engaging.
        right?
        <hr />
        And here's some <strong>amazing</strong> content. It's very engaging.
        right?
        <hr />
      </Popover.Body>
    </Popover>
  );
  let index = props.index;
  console.log('index', index);

  return (
    <>
    
      <div>
        <div className="main-container-header">
          <div style={{}}>
            <NavLink className="nav-link" to="/">
              <div className="">
                <img
                  src="img/nv1.jpg"
                  className="homeimg"
                  style={{ width: 70, height: 70, marginTop: "14px" }}
                  alt=''
                />
              </div>
            </NavLink>
          </div>
          <div>
            <div className="tab-container-header">
              <div className="tab-container">
                <NavLink className=
                  {(index === 1) ? "nav-link active black" : "nav-link"} to="/mentor">
                 {t("Find Mentor")}
                </NavLink>
              </div>

              <div className="tab-container">
                <NavLink className=
                {(index===2)? "nav-link active black" : "nav-link" } to="/event">
                  {t("Events")}
                </NavLink>
              </div>

              <div className="tab-container">
                <NavLink className={(index === 3) ? "nav-link active" : "nav-link"} to="/blog">
                {t("Blog")}
                </NavLink>
              </div>
              <div className="tab-container">
                <NavLink className={(index == 4) ? "nav-link active" : "nav-link"} to="/roadmap">
                  {t("Roadmap")}
                </NavLink>
              </div>
              <div className="tab-container">
                <NavLink className={(index == 5) ? "nav-link active" : "nav-link"} to="/community">
                  {t("Community")}
                </NavLink>
              </div>
              <div className="tab-container">
                <NavLink className={(index == 6) ? "nav-link active" : "nav-link"} to="/resources">
                  {t("Resources")}
                </NavLink>
              </div>
              <div className="tab-container">
                <NavLink className={(index == 7) ? "nav-link active" : "nav-link"} to="/aboutus">
                  {t("About")}
                </NavLink>
              </div>
              <div className="tab-container">
                <NavLink className={(index == 8) ? "nav-link active" : "nav-link"} to="/contact">
                 {t("Contact")}
                </NavLink>
              </div>

              <div className="tab-container">
              <NavLink className={(index == 8) ? "nav-link active" : "nav-link"} to="/contact">
               {t("Admin Login")}
              </NavLink>
            </div>
              

            </div>
          </div>

          <div
            className="tag-container"
            style={{
              justifyContent: "center",
              height: 100,
              alignItems: "center",
            }}
          >
            <div className='me-3' style={{ width: '50px' }}>
              <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
                <NotificationsIcon style={{ width: '55px', height: '40px', color: '#3d82be',cursor :'pointer' }} />
              </OverlayTrigger>
            </div>
           
            <div style={{ marginTop: "auto", marginBottom: "auto" }}>
              <NavLink className="nav-link" to="/login">
                <div className="profile w-1 h-5">
                  <img

                    src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"

                    className="w-110 h-110 rounded-circle"
                    // style={{ width: 70, height: 70, marginTop: "14px" }}
                    style={{ width: 62, height: 62, marginTop: "0px" }}
                    height="100px"
                    alt=''
                  />
                </div>
              </NavLink>
            </div>
          </div>
        </div>
        <hr className="horizontal-line"></hr>
      </div>
      <Languageoption onChange={(e)=> handleClick(e)}/>
    </>
  );
}
