import React, { useEffect, useState } from "react";

export default function Coursecard2({ course, fun, set_course_id }) {
    const call = () =>{
        fun()
        set_course_id(course._id)
      }
  return (
    <>
    
      <div className="p-4">
        <section class="overflow-hidden bg-gray-50 grid grid-cols-2">
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
                    onClick={call}
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
            class="h-[350px] w-[500px] object-cover ml-8"
          />
        </section>
        </div>
    </>
  );
}
