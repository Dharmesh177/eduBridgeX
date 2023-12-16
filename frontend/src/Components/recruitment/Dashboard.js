import React, { useEffect, useState } from "react";
import "./dashboard.css";
import JobsCard from "./JobCard";
import DeleteAlert from "./DeleteAlert";
import AddJob from "./AddJob";
// import AddJob from "./AddJob";

export default function Employ_Dashboard() {
  const [showjobs, setjobcomponent] = useState(true);
  const [delete_card, delete_card_visible] = useState(false);

    
const set_val = () =>{
  if (delete_card){
  delete_card_visible(false)}
  else{
    delete_card_visible(true)
  }

}
    

  const display_jobs = () => {
    setjobcomponent(true);
  };
  return (
    <>
      {delete_card && <DeleteAlert fun={set_val}/> }
      <div className="main_div">
      
        <div className="side_div1">
          <div className="side_div_container">
            <div className="side_div_container">
              <ul className="side_div_ul">
                <li>
                  <a href="#" className="side_div_li" onClick={display_jobs}>
                    Manage Jobs
                  </a>
                </li>

                <li>
                  <a href="" className="side_div_li">
                    Add New Job
                  </a>
                </li>

                <li>
                  <a href="" className="side_div_li">
                    Edit Profile
                  </a>
                </li>

                <li>
                  <a href="" className="side_div_li">
                    Log Out
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="right_side_div1">
         <AddJob/>
          {/* { <AddJob/> } */}
          
        </div>
      </div>
    </>
  );
}
