import React, { useState, useEffect } from 'react';
import JobsCard from '../Employment/JobCard';
import Axios from 'axios';
import Cookie from 'universal-cookie';
import {jwtDecode} from 'jwt-decode';


const JobList = ({ fun, set_job_id, recEmail }) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  // console.log(recEmail);
  const fetchData = async () => {
    //   const cookie = new Cookie();
    //   const token = cookie.get('MentorToken');
      // console.log(token);
    //   const jwtData = jwtDecode(token);
      try {
        const response = await Axios.get('http://localhost:5000/jobs/jobsOf/dvala@gmail.com');
        console.log("hello");
        console.log(response);
        setJobs(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

  useEffect(() => {
    fetchData();
  }, []);

  return (

    <div>
      {jobs.map((job) => (
        <JobsCard job={job} fun={fun} set_job_id={set_job_id}/> 
      ))
      }
     
    </div>
  );
};

export default JobList;
