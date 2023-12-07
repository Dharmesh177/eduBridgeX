import React, { useEffect } from 'react'
import Header from '../Common/Header';
// import ProjectCard from '../Profile/ProjectCard';
import "../Event/CSS/EventDiv.css"
import "../Filter/Filter.css";
// import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import ReadMoreIcon from '@mui/icons-material/ReadMore';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { useDispatch, useSelector } from 'react-redux';
import { getAllResources } from '../../actions/resource.action';

const ResourcePage = () => {
    // const [isHandi, setishan] = useState(false);


    const dispatch = useDispatch();
    const { resources } = useSelector(state => state.resource)


    useEffect(() => {
        dispatch(getAllResources())
        console.log('hello res..', resources);

    }, [])

    const [projects, setProjects] = useState();


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
        <>
            <Header index={6} />
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
                        {/*search bar*/}
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

                        {/*Search button*/}
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
                        resources && resources.length > 0 &&
                        resources.map((resource) => {
                            return (
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src="https://cdn-az.allevents.in/banners/e3137d25c10c1b049601026a8a7f0b17-rimg-w1024-h500-dc29bde4-gmir.jpeg" />
                                    <Card.Body>
                                        <Card.Title className='justify-content-around'>Title: <small>{resource.name}</small></Card.Title>
                                        <Card.Title className='justify-content-around'>Author: <small>{resource.provider.name}</small></Card.Title>
                                        <Card.Text>
                                            {resource.description}
                                        </Card.Text>
                                        <Card.Text className='d-flex justify-content-center mt-2' style={{ opacity: 0.6 }}>
                                            <small>Upload by Yash parsana</small>
                                        </Card.Text>
                                        <Button variant="light" className='ms-5 mt-2 justify-content-center align-items-center'>
                                            <div className='d-flex justify-content-center align-items-center'>
                                                <ArrowDownwardIcon /> Download
                                            </div>
                                        </Button>
                                    </Card.Body>
                                </Card>
                            )
                        })
                    }


                </div>
            </div>

        </>
    )
}

export default ResourcePage
