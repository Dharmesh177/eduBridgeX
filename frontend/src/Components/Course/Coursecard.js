import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';


export default function Coursecard({ course }) {

  const navigate = useNavigate();
  
  return (
    <>
      <div className="p-4 mr-[-20%]">
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
                <div className="flex flex-row pt-2 flex-wrap">
                  <div className="bg-green-100 rounded-lg w-[150px] p-2 mr-2 mt-2">
                    {/* <div className="font-light text-m">Difficulty Level</div> */}
                    <div className="font-medium text-lg">{course.difficultyLevel}</div>
                  </div>
                  <div className="bg-green-100 rounded-lg w-[150px] p-2 mr-2 mt-2">
                    {/* <div className="font-light text-m">Duration</div> */}
                    <div className="font-medium text-lg">{course.duration} Hours</div>
                  </div>
                  <div className="bg-green-100 rounded-lg w-[150px] p-2 mr-2 mt-2">
                    {/* <div className="font-light text-m">Duration</div> */}
                    <div className="font-medium text-lg">{course.price} Rs.</div>
                  </div>
                  <div className="bg-green-100 rounded-lg w-[150px] p-2 mr-2 mt-2">
                    {/* <div className="font-light text-m">Rating</div> */}
                    <div className="flex flex-row justify-center">
                      <div className="font-medium text-lg">4.7 &#9733;</div>
                      <div className="mt-[5px] ml-1">(12345)</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row-reverse mt-4">
                <div class="mt-4 md:mt-8">
                  <p
                    onClick={()=>navigate('/CheckOut', {state: {id: course._id}})}
                    class="inline-block rounded bg-emerald-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-emerald-700 focus:outline-none focus:ring focus:ring-yellow-400"
                  >
                    Ckeckout
                  </p>
                </div>
              </div>
            </div>
          </div>
          <img
            alt="Student"
            src={course.imageUrl}
            class="h-[350px] w-[500px] object-cover ml-8"
          />
        </section>
        <div class="space-y-4">
  <details class="group [&_summary::-webkit-details-marker]:hidden" open>
    <summary
      class="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg  p-4 text-gray-900 w-[200px] -mt-20 h-4 ml-[30px]"
    >
      <button class="font-medium ml-32 w-max">More Detail</button>

      <svg
        class="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
      </svg>
    </summary>

    <div className="pt-10 bg-gray-50 pl-44 text-left pb-3">
        <div>
            <div className="text-m py-2">Uploaded on 21 March</div>
            <div className="text-left font-semibold text-left pt-3">what You Will Learn:</div>
            <ul className="text-left ml-4 list-disc">
            {course.whatYouWillLearn.map(itm => {
                  return (
                    <li className="ml-5">   {itm}</li>
                  )
                })}
            </ul>
        </div>
        <div>
            <div className="text-left font-semibold text-left mt-4">Requirements</div>
            <ul className="text-left ml-4 list-disc">
            {course.requirements.map(itm => {
                  return (
                    <li className="ml-5">   {itm}</li>
                  )
                })}
            </ul>
        </div>
        <div>
            <div className="flex flex-row">
        <div className="text-m py-4 font-semibold mr-2">Category: </div>
        <div className="text-m py-4 font flex">
          {course.category.map(itm => {
            return (
              <div className="whitespace-nowrap rounded-full w-max bg-purple-100 px-2.5 py-1.5 text-sm text-purple-700 mr-3 cursor-pointer transition-transform transform hover:scale-105 hover:bg-purple-300 duration-500 -mt-[3px]">
                  {itm}
                </div>
            )
          })}
        </div>

        </div>
        
        </div>
    </div>
  </details>

  
</div>
      </div>
    </>
  );
}
