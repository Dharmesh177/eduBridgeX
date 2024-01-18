import React, { useEffect, useState } from "react";
function formatDeadline(dateString) {
  const date = new Date(dateString);
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Months are zero-based
  const year = date.getFullYear();
  
  return `${day}-${month}-${year}`;
}

export default function JobsCard({ job }) {
  const deadline = formatDeadline(job.deadline_of_application);
  const skills = job.required_skills.join(", ");
  
  
 
  var other_detail = null;
  if (job.others){
    other_detail=job.others;
  }
  function formatTimeAgo(dateString) {
    const currentDate = new Date();
    const postDate = new Date(dateString);
    const timeDifference = currentDate - postDate;
    const seconds = Math.floor(timeDifference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const months = Math.floor(days / 30);

    if (seconds < 60) {
      return "today";
    } else if (minutes < 60) {
      return `${minutes} ${minutes === 1 ? "minute" : "minutes"} ago`;
    } else if (hours < 24) {
      return `${hours} ${hours === 1 ? "hour" : "hours"} ago`;
    } else if (days < 30) {
      return `${days} ${days === 1 ? "day" : "days"} ago`;
    } else {
      return `${months} ${months === 1 ? "month" : "months"} ago`;
    }
  }

  // console.log(time_ago);
  return (
    <>
      <div class="p-4 m-3  border rounded-lg shadow-sm bg-gray-200">
        <div className="flex justify-between">
          <div>
            <div className="font-sans text-lg text-left font-medium">
              {job.title}
            </div>
            <div className="font-sans text-m text-left">
              {job.name_recruiter}
            </div>
          </div>
          <div>
            <a
              class="inline-block rounded w-20 border border-black bg-white px-3 py-2 text-sm font-medium text-black hover:bg-black hover:text-white  mr-1"
              href="#"
            >
              SAVE
            </a>
            <a
              class="inline-block rounded w-20 border border-indigo-600 bg-black px-3 py-2 text-sm font-medium text-white hover:bg-white hover:text-indigo-600 "
              href={job.apply_link}
            >
              APPLY
            </a>
          </div>
        </div>
        <div className="text-left pt-3 -ml-1" id="i1">
          {job.status === "present" ? (
            <span className="whitespace-nowrap rounded-full bg-green-100 px-3 py-1 text-xs text-green-700 mr-2 font-medium">
              ACTIVELY HIRING
            </span>
          ) : null}
          <span class="whitespace-nowrap rounded-full bg-green-100 px-3 py-1 text-xs text-green-700 mr-2 font-medium">
            {formatTimeAgo(job.date_of_posting)}
          </span>
        </div>
        <div className="flex pt-4 flex-wrap">
          <div className="bg-gray-100 rounded-lg w-[210px] p-2 mr-2 mt-2">
            <div className="font-light">Salary</div>
            <div className="font-medium">{job.salary_per_month}</div>
          </div>
          <div className="bg-gray-100 rounded-lg w-[210px] p-2 mr-2 mt-2">
            <div className="font-light">Deadline</div>
            <div className="font-medium">{deadline}</div>
          </div>
          <div className="bg-gray-100 rounded-lg w-[210px] p-2 mr-2 mt-2">
            <div className="font-light">Job Type</div>
            <div className="font-medium">{job.type_of_job}</div>
          </div>
          <div className="bg-gray-100 rounded-lg w-[210px] p-2 mr-2 mt-2">
            <div className="font-light">Number Of Opening</div>
            <div className="font-medium">{job.max_applications}</div>
          </div>
          <div className="bg-gray-100 rounded-lg w-[210px] p-2 mr-2 mt-2">
            <div className="font-light">{job.rate_count} Rating</div>
            <div className="font-medium">{job.rating} out of 5</div>
          </div>
        </div>
        <div className="flex rounded-lg p-2 mt-3">
          <div className=" mr-2">Skill:</div>
          <div className="font-semibold">{skills}</div>
        </div>
        {other_detail!==null ? (
        <div className="flex rounded-lg p-2 -mt-2">
          <div className=" mr-2">Other Details:</div>
          <div className="font-semibold">{other_detail}</div>
        </div>
        ):null}
      </div>
    </>
  );
}
