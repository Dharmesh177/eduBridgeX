import React,{useEffect} from "react";
import "./f.css";
import TodayIcon from "@mui/icons-material/Today";
import AvTimerIcon from '@mui/icons-material/AvTimer';
import HourglassTopIcon from '@mui/icons-material/HourglassTop';
import "./CSS/EventDiv.css"
import "../Filter/Filter.css";
import Header from '../Common/Header';
import { useState } from 'react';
import ReadMoreIcon from '@mui/icons-material/ReadMore';
import { getAllEvents } from '../../actions/event.action';
import { useDispatch, useSelector } from 'react-redux';
import EventCard from './EventCard';
function FullEvent() {
    
    const dispatch = useDispatch();
    const [projects, setProjects] = useState();
    const { events } = useSelector(state => state.event)


    useEffect(() => {
        dispatch(getAllEvents())
    }, [])

    // { console.log('eventsssss', event.events); }
    // const sendReq = async () => {
    //     const res = await axios
    //         .get("http://localhost:5000/api/project")
    //         .catch((err) => console.log(err));
    //     const data = await res.data;

    //     console.log(data);
    //     return data;
    // };

    // useEffect(() => {
    //     sendReq().then((data) => {
    //         setProjects(data.projects);
    //     });
    // }, []);


    const [searchinput, searchinputUpdate] = useState("");
    const filter2 = () => {
        let temp = [...projects];

        if (searchinput != "") {
            temp = temp.filter((ele) => {
                return ele.PName.toLowerCase().includes(searchinput.toLowerCase());
            });
        }

        if (tagList != "" && tag != "") {
            temp = temp.filter((ele) => {
                return ele.Tags.includes(tag);
            });
        }

        if (tagList != "" && lang != "") {

            temp = temp.filter((ele) => {
                return ele.Tags.includes(lang);
            });
        }

        if (tagList != "" && timeframe != "") {

            temp = temp.filter((ele) => {
                console.log(ele.Date.getFullYear);
                return ele.Date.getFullYear === timeframe;
            });
        }

        console.log("---r---");
        console.log(temp);
        setProjects(temp);

        // sessionStorage.setItem('searchinput', searchinput);
        // setFlag("true");
    };

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
    <div>
    <Header />
    <div style={{ width: "100%" }}>
        <div
            style={{ paddingLeft: 40, paddingRight: 40, justifyContent: "left" }}
        >
            <div style={{ marginTop: 40 }} />
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                }}
            >
                
                <div
                    className="container-serach-box-search-bar"
                    style={{ width: "80%" }}
                >
                    <i
                        className="material-icons"
                        style={{ marginLeft: 10, fontSize: 28, color: "#9B9B9B" }}
                    >
                        search
                    </i>
                    <div style={{ paddingLeft: 20 }} />
                    <input
                        type="text"
                        className="search-bar-input-box"
                        placeholder="search by name"
                        value={searchinput}
                        onChange={(e) => searchinputUpdate(e.target.value)}
                    />
                </div>
                
                <button
                    className="search-bar-button"
                    id="searchinput"
                    onClick={filter2}
                >
                    Search
                </button>
            </div>
        </div>
    </div>

      <div className="ff row">
        <div className="home-slider-decor col-md-6">
          <img
            class="p-5"
            loading="lazyload"
            data-src="img/posterofevent.png"
            src="img/posterofevent.jpg"
            alt="Dynamic PHP Website Development Services"
            title="Dynamic PHP Website Development Services"
            width="549"
            height="439"
            style={{alignItems:'center'}}
          />
        </div>
        <div className="info col-md-6">
          <div class="text">
            <h2 className="p-3">
              <a href="#">Introduction to Business Leaders</a>
            </h2>
        
            <p className="p-3">
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia. It is a paradisematic country, in
              which roasted parts of sentences fly into your mouth.
            </p>
            <span class="time p-3"><HourglassTopIcon className="mx-2"/> 09:00 am - 4:30 pm</span>
            <p class="location p-3">
              <TodayIcon className="mx-2" />
              20 July 2019 - Hall, Building Los Angeles CA
            </p>
            <p className="p-3">
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia. It is a paradisematic country, in
              which roasted parts of sentences fly into your mouth.
            </p>
            
            <h3 class="speaker-name p-3">
              — <a href="#">Ryan Thompson</a>{" "}
              <span class="position p-3">Founder of Wordpress</span>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FullEvent;
