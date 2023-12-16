import React, { useEffect, useState } from "react";
import "./dashboard.css";
import DeleteAlert from "./DeleteAlert";
import JobList from "./Joblist";
// import AddJob from "./AddJob";
import Employedit from "./Employedit"
export default function Employ_Dashboard() {
  const [showjobs, setjobcomponent] = useState(true);
  const [show_employ_edit_page, set_employ_edit_page] = useState(false);
  const [delete_card, set_delete_card_visible] = useState(false);
  const [job_id, set_id] = useState("")

  const set_job_id = (id) =>{
    set_id(id)
  }

const delete_card_visible = () =>{
  if (delete_card){
  set_delete_card_visible(false)}
  else{
    set_delete_card_visible(true)
  }
}
    
  const jobs_visible = () => {
    setjobcomponent(true);
    set_employ_edit_page(false)
  };
  const employ_edit_page_visible = () => {
    setjobcomponent(false);
    set_employ_edit_page(true)
  };
  return (
    <>
      {delete_card && <DeleteAlert fun={delete_card_visible} id={job_id}/> }
      <div className="main_div">
      
        <div className="side_div1">
          <div className="side_div_container1">
            <div className="side_div_container1">
              <ul className="side_div_ul">
                <li>
                  <a href="#" className="side_div_li" onClick={jobs_visible}>
                    Manage Jobs
                  </a>
                </li>

                <li>
                  <a href="" className="side_div_li">
                    Add New Job
                  </a>
                </li>

                <li>
                  <a href="#" className="side_div_li" onClick={employ_edit_page_visible}>
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
          {showjobs && <JobList fun={delete_card_visible} set_job_id={set_job_id}/>}
          {show_employ_edit_page && <Employedit/>}
          
          {/* { <AddJob/> } */}
          
        </div>
      </div>
    </>
  );
}
