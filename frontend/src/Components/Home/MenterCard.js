import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
export default function MenterCard(props) {
  console.log(props);
//   const project = props.project
//   console.log(project);
//   const tags = project.Tags
const Tags = ['WEB','REACT','MERN','COUNCELLING'];
  return (
    <div className="">
    <div className="container">
    <div className="row">
    <div className="main-div mt-3 p-3 col-md-12 col-sm-6">
    <div className=" row">
    <div className="col-8 ccc">
      <Link style={{textDecoration:"none"}} to={{ pathname: `/viewProject/${props.id}` }}>
      <p className="title"> {props.PName}</p>
       
      </Link>
      <span className="tag  clg-Tag" style={{paddingBottom:"4px"}}>{props.PType}</span>
    </div>
    <div className="col-4 ccc1 mt-10" >
      
      <span className="tag">{props.Rating}</span>
      <span>
        {" "}
        <ThumbUpIcon/>
      </span>
    </div>
  </div>
  <div className="text-left">
    <p className="text-left">
      {props.Desc}
    </p>
  </div>
  <div className="row">
    <div className="col-12 d-flex align-items-baseline justify-content-left">
    <span className="title">Tag : </span>
      
      {
      Tags.map((element, index) => {
          return <span className="tag lan-Tag"> {element} </span>
        })
      }
    </div>
    
  </div>
    </div>
    </div>
    </div>
    </div>
  );
}