import React, { useEffect, useState } from "react";

export default function DeleteAlert({ fun, id, fun1 }) {
  const click = () => {
    fun();
  };


  const delete_job_by_id = () => {
    fetch(`http://localhost:5000/jobs/deleteJob/${id}`)
      .then(response => response.json())
      .then(data => {
        // console.log('Job deleted:', data);
        // Call onDelete callback to handle any additional logic in the parent component
        fun1(prev => !prev);
        alert("Job Deleted Successfully");
        // refreshFun(prev => !prev);
      })
      .catch(error => {
        console.error('Error deleting job:', error);
      });
      fun()
  };
  
  return (
    <div className="flex items-center justify-center h-[100vh] w-full fixed bg-[#00000070]">
        <div class="rounded-lg bg-white p-8 shadow-2xl items-center w-[50hv]">
          <h2 class="text-lg font-bold ">Are you sure you want to delete that?</h2>

          <p class="mt-2 text-sm text-gray-500">
            Doing that will delete data from database which will not display for any user
          </p>

          <div class="mt-4 flex gap-2 justify-between">
            <button
              type="button"
              class="rounded bg-red-50 px-4 py-2 text-sm font-medium text-red-600"
              onClick={delete_job_by_id}
            >
              Yes, I'm sure
            </button>

            <button
              type="button"
              class="rounded bg-green-50 px-4 py-2 text-sm font-medium text-green-600"
              onClick={click}
            >
              No, go back
            </button>
          </div>
        </div>
        </div>
        // </div>
  );
}
