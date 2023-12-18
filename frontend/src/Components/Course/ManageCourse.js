import React, { useEffect, useState } from "react";
import Coursecard2 from "./Coursecard2";
import Axios from 'axios';
import DeleteAlert from "./DeleteAlert";
import AddCourse from "./AddCourse";
export default function ManageCourse() {
    const [course_id, set_course_id] = useState("")
    const [courses, setCourse] = useState([]);
    const [loading, setLoading] = useState(true);
    const [delete_card, set_delete_card_visible] = useState(false);
    const [add_course_page, set_add_course_page] = useState(false);

    const add_course_page_disable =() =>{
      set_add_course_page(false);
    }


    const delete_card_visible = () =>{
        if (delete_card){
        set_delete_card_visible(false)}
        else{
          set_delete_card_visible(true)
        }
      }
    const set_add_course_page_visible =() =>{
      set_add_course_page(true);
    }
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await Axios.get('http://localhost:5000/api/Course/getAllCourses');
            setCourse(response.data);
            setLoading(false);
          } catch (error) {
            console.error('Error fetching data:', error);
            setLoading(false);
          }
        };fetchData();
      }, []);
 
  return (
    <>
    {!add_course_page && <div className="flex flex-row-reverse mr-6">

    <div class="mt-4 md:mt-8">
                  <a
                    href="#"
                    class="inline-block rounded bg-black px-6 py-3 text-sm font-medium text-white transition hover:bg-emerald-700 focus:outline-none focus:ring focus:ring-yellow-400"
                    onClick={set_add_course_page_visible}
                   
                  >
                    ADD NEW COURSE
                  </a>
                </div>
                </div>}
    
    {add_course_page && <AddCourse add_course_page_disable={add_course_page_disable}/>}
    
    {!add_course_page && delete_card && <DeleteAlert fun={delete_card_visible} id={course_id}/> }
      {!add_course_page && courses.map((course) => (
        <Coursecard2 course={course} set_course_id={set_course_id} fun={delete_card_visible}/> 
      ))

    }
    

    </>
  );
}