import React, { useEffect, useState } from "react";
import Coursecard2 from "./Coursecard2";
import Axios from 'axios';
import DeleteAlert from "./DeleteAlert";
export default function ManageCourse() {
    const [course_id, set_course_id] = useState("")
    const [courses, setCourse] = useState([]);
    const [loading, setLoading] = useState(true);
    const [delete_card, set_delete_card_visible] = useState(false);
    const delete_card_visible = () =>{
        if (delete_card){
        set_delete_card_visible(false)}
        else{
          set_delete_card_visible(true)
        }
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
    {delete_card && <DeleteAlert fun={delete_card_visible} id={course_id}/> }
      {courses.map((course) => (
        <Coursecard2 course={course} set_course_id={set_course_id} fun={delete_card_visible}/> 
      ))
      }
     
    

    </>
  );
}