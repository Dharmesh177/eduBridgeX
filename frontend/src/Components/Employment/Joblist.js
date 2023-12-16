import React, { useState, useEffect } from 'react';
import JobsCard from './JobCard';
import Axios from 'axios';
const JobList = ({ fun, set_job_id }) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Axios.get('http://localhost:5000/jobs/jobs');
        setJobs(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };fetchData();
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
