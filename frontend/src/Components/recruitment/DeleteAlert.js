import React, { useEffect, useState } from "react";
import axios from "axios";

export default function DeleteAlert({ fun }) {
  const click = () => {
    fun();
  };

  const handleDelete = async () =>{
    
    const dataa = {
      _id: "v"
    };

    const res = await axios.post("http://localhost:5000/jobs/job/delete", dataa);
    if (res.status === 200) {
      console.log("res.data", res.data);
      alert("You're Added Job successfully !!!");
      //   navigate("/slogin");
    } else {
      console.log("res.message", res.message);
      alert("Failed to Register !!!!");
    }
  }
  return (
    <div className="flex items-center justify-center h-[100vh] w-full fixed bg-[#00000070]">
        <div class="rounded-lg bg-white p-8 shadow-2xl items-center">
          <h2 class="text-lg font-bold">Are you sure you want to delete that?</h2>

          <p class="mt-2 text-sm text-gray-500">
            Doing that will delete data from database which will not display for any user
          </p>

          <div class="mt-4 flex gap-2 justify-between">
            <button
              type="button"
              class="rounded bg-red-50 px-4 py-2 text-sm font-medium text-red-600"
              onClick={handleDelete}
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
