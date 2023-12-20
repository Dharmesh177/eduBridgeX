import React, { useState, useEffect } from 'react';
import JobsCard from './JobCard';
import Axios from 'axios';
const JobList = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Axios.get('http://localhost:5000/jobs/jobs');
        setJobs(response.data.reverse());
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };fetchData();
  }, []);

  return (

    <div className='h-[100%] overflow-scroll bg-gray-100 rounded-lg'>
      {jobs.map((job) => (
        <JobsCard job={job}/> 
      ))
      }
     
    </div>
  );
};

export default JobList;
