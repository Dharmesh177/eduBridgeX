import React, { useEffect, useState } from "react";

export default function SchemesCard() {
  return (
    <>
      <div class="p-4 m-2 w-4/5 border rounded-lg shadow-sm">
        <div class="text-left">
          <p>
            <a href="" class="no-underline text-slate-500 text-base font-thin">
              Ministry Of Social Justice and Empowerment
            </a>
          </p>
        </div>
        <div class="text-left mt-1">
          <p>
            <a href="" class="no-underline text-slate-500 text-lg font-bold">
            Fee Waiver Scheme For SC/ST Students Pursuing Higher Education
            </a>
          </p>
        </div>
        <div class="text-left mt-2">
          <p>
            <a
              href=""
              class="no-underline text-slate-500 text-base font-thin text-ellipsis"
            >
              Fee Waiver Scheme for SC/ST Students Pursuing Higher Education" provides free access to every SC/ST student, to the institutions of higher learning so that that no eligible SC/ST students are deprived of higher education for want of resources.
            </a>
          </p>
        </div>
        <div class="text-left mt-3">
          <span class="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-1.5 text-sm text-purple-700 mr-3">
          Life Insurance
          </span>
          <span class="whitespace-nowrap rounded-full bg-emerald-100 px-2.5 py-1.5 text-sm text-purple-700 mr-3">
            Students
          </span>
          <span class="whitespace-nowrap rounded-full bg-amber-100 px-2.5 py-1.5 text-sm text-purple-700 mr-3">
          Employment
          </span>
          <span class="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-1.5 text-sm text-purple-700 mr-3">
          Covid-19

          </span>
        </div>
      </div>
    </>
  );
}
