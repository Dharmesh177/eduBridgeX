import React, { useEffect, useState } from 'react';
import Cookie from 'universal-cookie';
import { jwtDecode } from 'jwt-decode';
import Axios from 'axios';
import AddCourse from '../Course/AddCourse';

const ListResource = () => {

    const cookie = new Cookie();
    const [state, setState] = useState(false);
    const [courses, setCourses] = useState([]);

    const fetchCourse = async () => {
        try {
            const token = cookie.get('MentorToken');
            const tokendata = jwtDecode(token);
            console.log(tokendata);

            const result = await Axios.get('http://localhost:5000/api/Course/CourseOfMentor/' + tokendata.email);
            setCourses(result.data);
            // console.log(result);
        } catch (err) {
            
        }
    }

    useEffect(()=>{fetchCourse()},[state,setState]);

    return (
        <>
            {state===true ? < AddCourse add_course_page_disable={setState}/> : <div className='flex-col'>
                <div style={{display:"flex", justifyContent:"space-between"}} className='w-full items-center'>
                    <h2 className='font-semibold text-md ml-5'>Uploaded Courses</h2>
                    <button
                        onClick={()=>setState(prev => !prev)}
                        className='bg-black text-white py-2 px-3 rounded-lg mr-5'
                    >add course</button>
                </div>
                <div className='bg-gray-100 pt-2 h-[20%] mt-5 rounded-lg flex flex-col border mr-3 ml-3'>
                {/* <div className='bg-white h-full w-[90%] m-auto mt-5 rounded-lg flex-col'> */}
                    {courses.map(course => {
                        return (
                            // <div className="w-[90%] m-auto rounded-lg mt-5 bg-red-400">
                                <section class="overflow-hidden w-max m-auto h-min bg-gray-200 shadow grid grid-cols-2 mt-5 rounded-lg">
                                <div class="p-8">
                                    <div class="mx-auto max-w-xl text-center  ml-3">
                                    <h2 class="text-2xl font-bold text-gray-900 md:text-3xl text-left">
                                        {course.title}
                                    </h2>
                                    <div>
                                        <div class="text-m text-gray-500 text-left mt-2">
                                        {course.instructor}
                                        </div>
                                    </div>
                                    <p class="hidden text-gray-500 md:mt-4 md:block text-left">
                                        {course.description}
                                    </p>
                                    <div class="mt-3  text-xs">
                                        <div className="flex flex-rowpt-4">
                                        <div className="bg-green-100 rounded-lg basis-1/3 p-2 mr-2">
                                            {/* <div className="font-light text-m">Difficulty Level</div> */}
                                            <div className="font-medium text-lg">{course.difficultyLevel}</div>
                                        </div>
                                        <div className="bg-green-100 rounded-lg basis-1/3 p-2 mr-2">
                                            {/* <div className="font-light text-m">Duration</div> */}
                                            <div className="font-medium text-lg">{course.duration} Hours</div>
                                        </div>
                                        <div className="bg-green-100 rounded-lg basis-1/3 p-2 mr-2">
                                            {/* <div className="font-light text-m">Rating</div> */}
                                            <div className="flex flex-row justify-center">
                                            <div className="font-medium text-lg">4.7 &#9733;</div>
                                            <div className="mt-[5px] ml-1">(12345)</div>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-row mt-4">
                                        <div class="mt-4 md:mt-8">
                                        <a
                                            href="#"
                                            class="inline-block rounded bg-emerald-600 px-10 py-3 text-m font-medium text-white transition hover:bg-emerald-700 focus:outline-none focus:ring focus:ring-yellow-400"
                                            // onClick={call}
                                        >
                                            Delete Course
                                        </a>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <img
                                    alt="Student"
                                    src="https://images.unsplash.com/photo-1464582883107-8adf2dca8a9f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                                    class="h-[350px] w-[500px] object-cover ml-24"
                                />
                                </section>
                            // </div>
                        )
                    })}
                {/* </div> */}
                </div>
            </div>}
        </>
    );
};

export default ListResource;