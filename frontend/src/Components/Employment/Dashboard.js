import React, { useEffect, useState } from "react";
import "./dashboard.css";
import DeleteAlert from "./DeleteAlert";
import JobList from "./Joblist";
import AddJob from "./AddJob";
import { Link } from "react-router-dom";
import Cookie from 'universal-cookie';
import { useNavigate } from 'react-router-dom';

import Employedit from "./Employedit"
import Header from "../Common/Header";
export default function Employ_Dashboard() {
  const [showjobs, setjobcomponent] = useState(true);
  const [show_employ_edit_page, set_employ_edit_page] = useState(false);
  const [delete_card, set_delete_card_visible] = useState(false);
  const [job_id, set_id] = useState("")
  const [addjob,setaddjob] = useState(false);
  // const [state, steState] = useState(false);

  const navigate = useNavigate();
  //const location = useLocation();
  //const email = location.state.email;

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
   
    set_employ_edit_page(false)
    setaddjob(false);
    setjobcomponent(true);
  };
  const employ_edit_page_visible = () => {
    setjobcomponent(false);
    setaddjob(false);
    set_employ_edit_page(true)
  };

  const visible_addjob = () =>{
    setjobcomponent(false);
    set_employ_edit_page(false);
    setaddjob(true);
    
  }

  useEffect(()=>{},[showjobs]);

  return (
    <>
      {delete_card && <DeleteAlert fun={delete_card_visible} id={job_id}/> }
      <div className="main_div h-screen">
      
        <div className="side_div1 bg-gray-100 rounded-lg">
          <div className="side_div_container1">
            <div className="side_div_container1">
              <ul className="side_div_ul">
                <li>
                  <a href="#" className="side_div_li" onClick={jobs_visible}>
                    Manage Jobs
                  </a>
                </li>

                <li>
                  <Link to="#" className="side_div_li" onClick={visible_addjob}>
                    Add New Job
                  </Link>
                </li>

                <li>
                  <a href="#" className="side_div_li" onClick={employ_edit_page_visible}>
                    Edit Profile
                  </a>
                </li>

                <li className="cursor-pointer">
                  <p className="side_div_li pointer-curser"
                    onClick={()=> {
                      const cookie = new Cookie();
                      cookie.remove('RecruiterToken', { path: "/" });
                      // navigate('/RecruiterLogin')
                      navigate('/landing')
                    }}
                  >
                    Log Out
                    
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="right_side_div1 h-full">
          {showjobs && <JobList fun={delete_card_visible} set_job_id={set_job_id}/>}
          {show_employ_edit_page && <Employedit/>}
          {addjob && <AddJob fun={setjobcomponent} fun1={setaddjob}/> }
          {/* { <AddJob/> } */}
          
        </div>
      </div>
    </>
  );
}
