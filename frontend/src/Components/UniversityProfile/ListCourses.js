import React, { useEffect } from 'react';
import Cookie from 'universal-cookie';
import { jwtDecode } from 'jwt-decode';
import Axios from 'axios';

const ListResource = () => {

    const cookie = new Cookie();

    const fetchCourse = async () => {
        try {
            const token = cookie.get('MentorToken');
            const tokendata = jwtDecode(token);
            console.log(tokendata);

            const result = await Axios.get('http://localhost:5000/api/Course/CourseOfMentor/' + tokendata.id);
            console.log(result);
        } catch (err) {
            
        }
    }

    useEffect(()=>{fetchCourse()},[]);

    return (
        <div className='bg-red-100 h-full flex-col'>
            <h2 className='font-semibold text-md ml-[-70%]'>Uploaded Courses</h2>
            <div className='bg-black h-full'>

            </div>
        </div>
    );
};

export default ListResource;