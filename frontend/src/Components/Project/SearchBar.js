import React, { useEffect } from 'react'
import "../Filter/Filter.css";
import "../Common/Button.css"
import { useState } from 'react';
import { getAllEvents } from '../../actions/event.action';
import { useDispatch, useSelector } from 'react-redux';
import { getRecommendedMentors } from '../../actions/mentor.action';

const SearchInterestBasedMentors = () => {
    const dispatch = useDispatch();
    // const [projects, setProjects] = useState();
    // const { events } = useSelector(state => state.event)


    // useEffect(() => {
    //     dispatch(getAllEvents())
    // }, [])

    const [searchinput, searchinputUpdate] = useState("");

    const onSearchInputClick = () => {
        dispatch(getRecommendedMentors(searchinput))
        searchinputUpdate("")
    }

    return (
        <>
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

                <button
                    className="search-bar-button"
                    id="searchinput"
                    onClick={onSearchInputClick}
                >
                    Search
                </button>
            </div>
        </>
    )
}

export default SearchInterestBasedMentors
