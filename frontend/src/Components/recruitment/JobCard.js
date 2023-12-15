import React, { useEffect, useState } from "react";

export default function JobsCard({ fun }) {
  
    
  const click = () =>{
    fun()
  }
    
  return (
    <>
      <div class="p-4 m-3  border rounded-lg shadow-sm">
        <div className="flex justify-between">
          <div>
            <div className="font-sans text-lg text-left font-medium">
              Job Title
            </div>
            <div className="font-sans text-m text-left">Company name</div>
          </div>
          <div>
            <a
              class="inline-block rounded w-20 border border-black bg-white px-3 py-2 text-sm font-medium text-black hover:bg-black hover:text-white  mr-1"
              href="#"
              onClick={click}
            >
             DELETE
            </a>
            <a
              class="inline-block rounded w-20 border border-indigo-600 bg-black px-3 py-2 text-sm font-medium text-white hover:bg-white hover:text-indigo-600 "
              href="#"
              
            >
              EDIT
            </a>
          </div>
        </div>
        <div className="text-left pt-3 -ml-1">
          <span class="whitespace-nowrap rounded-full bg-green-100 px-3 py-1 text-xs text-green-700 mr-2 font-medium">
            ACTIVELY HIRING
          </span>
          <span class="whitespace-nowrap rounded-full bg-green-100 px-3 py-1 text-xs text-green-700 mr-2 font-medium">
            2 days ago
          </span>
        </div>
        <div className="flex pt-4">
          <div className="bg-gray-100 rounded-lg basis-1/5 p-2 mr-2">
            <div className="font-light">Salary Per Month</div>
            <div className="font-medium">130000</div>
          </div>
          <div className="bg-gray-100 rounded-lg basis-1/5 p-2 mr-2">
            <div className="font-light">Deadline</div>
            <div className="font-medium">13 March</div>
          </div>
          <div className="bg-gray-100 rounded-lg basis-1/5 p-2 mr-2">
            <div className="font-light">Job Type</div>
            <div className="font-medium">Work From Home</div>
          </div>
          <div className="bg-gray-100 rounded-lg basis-1/5 p-2 mr-2">
            <div className="font-light">Number Of Opening</div>
            <div className="font-medium">1000</div>
          </div>
          <div className="bg-gray-100 rounded-lg basis-1/5 p-2 mr-2">
            <div className="font-light">1200 Rating</div>
            <div className="font-medium">4 out of 5</div>
          </div>
        </div>
        <div className="flex rounded-lg p-2 mt-2">
          <div className=" mr-2">Skill:</div>
          <div className="font-semibold">
            Web Development, Machine learning, Data science
          </div>
        </div>
        <div className="flex rounded-lg p-2 mt-2">
        <div className=" mr-2">Other details:</div>
        <div className="font-semibold">
          This job is for fresher and 2024 pass-out. those who wish to kick start their career in IT field are most welcome for learning perspective.
        </div>
      </div>
      </div>
    </>
  );
}
