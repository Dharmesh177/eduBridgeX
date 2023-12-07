import React, { useEffect } from 'react'
import Header from '../Common/Header';
// import ProjectCard from '../Profile/ProjectCard';
import "./CSS/EventDiv.css"
import "../Filter/Filter.css";
// import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import ReadMoreIcon from '@mui/icons-material/ReadMore';
import { getAllEvents } from '../../actions/event.action';
import { useDispatch, useSelector } from 'react-redux';
import EventCard from './EventCard';

const EventPage = () => {
    // const [isHandi, setishan] = useState(false);

    const dispatch = useDispatch();
    // const [projects, setProjects] = useState();
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
        let temp = [...events];

        if (searchinput != "") {
            temp = temp.filter((ele) => {
                return ele.name.toLowerCase().includes(searchinput.toLowerCase());
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
        <>
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

            <div className="flexforfilter">
                <div className="a_fillter">

                    <p className="tag" style={{ fontSize: "25px" }}>Applied Fillter</p>
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
                <div className="short_filter">
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
                                    <p>Time Frame</p>
                                </label>
                                <div
                                    className="sign-in-input-field-container"
                                    style={{ marginTop: 15 }}
                                >
                                    <input
                                        className="sign-in-input-fields"
                                        type="text"
                                        placeholder="Ex.2002"
                                        name="timeframe"
                                        id="timeframe"
                                        onKeyUp={(e) => setToTaglist(e, timeframe)}
                                        onChange={(e) => setTimeFrame(e.target.value)}
                                    />
                                </div>

                            </div>
                            <div className="tag">
                                <label htmlFor="University">
                                    <img src={"img/University.png"} alt="University" />
                                    <p>University</p>
                                </label>
                                <div
                                    className="sign-in-input-field-container"
                                    style={{ marginTop: 15 }}
                                >
                                    <input
                                        className="sign-in-input-fields"
                                        type="text"
                                        placeholder="Ex.BVM"
                                        name="University"
                                        id="University"
                                        onKeyUp={(e) => setToTaglist(e, university)}
                                        onChange={(e) => setUniversity(e.target.value)}
                                    />
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className=' d-flex justify-content-around mt-5 mb-3' style={{ backgroundColor: 'aliceblue' }}>
                <div className='d-flex justify-content-around my-2 ' style={{ width: '80%' }}>
                    {
                        events && events.length > 0 &&
                        events.map(event =>
                            <EventCard event={event} />
                        )
                    }

                    {/* <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://cdn-az.allevents.in/banners/e3137d25c10c1b049601026a8a7f0b17-rimg-w1024-h500-dc29bde4-gmir.jpeg" />
                        <Card.Body>
                            <Card.Title className='d-flex justify-content-center'>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Card.Text className='d-flex justify-content-center' style={{ opacity: 0.6 }}>
                                <small>October 19,2022</small>
                            </Card.Text>
                            <Button variant="light" className='mt-2' style={{ marginLeft: '7rem' }}><ReadMoreIcon /> <small>Read More</small></Button>
                        </Card.Body>
                    </Card> */}
                    {/* <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://cdn-az.allevents.in/banners/e3137d25c10c1b049601026a8a7f0b17-rimg-w1024-h500-dc29bde4-gmir.jpeg" />
                        <Card.Body>
                            <Card.Title className='d-flex justify-content-center'>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Card.Text className='d-flex justify-content-center' style={{ opacity: 0.6 }}>
                                <small>October 19,2022</small>
                            </Card.Text>
                            <Button variant="light" className='mt-2' style={{ marginLeft: '7rem' }}><ReadMoreIcon /> <small>Read More</small></Button>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://cdn-az.allevents.in/banners/e3137d25c10c1b049601026a8a7f0b17-rimg-w1024-h500-dc29bde4-gmir.jpeg" />

                        <Card.Body>

                            <Card.Title className='d-flex justify-content-center'>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Card.Text className='d-flex justify-content-center' style={{ opacity: 0.6 }}>
                                <small>October 19,2022</small>
                            </Card.Text>
                            <Button variant="light" className='mt-2' style={{ marginLeft: '7rem' }}><ReadMoreIcon /> <small>Read More</small></Button>
                        </Card.Body>
                    </Card> */}
                </div>
            </div>

        </>
    )
}

export default EventPage
