import { useContext, useEffect, useState } from "react";

export default function Editjob() {
  return (
    <div class="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12 mt-4">
      <form action="" class="space-y-4">
        <div>
          <label class="sr-only" for="name">
            Name
          </label>
          <input
            className="w-full rounded-lg border-gray-400 border p-3 text-m text-black-600"
            placeholder="Recruiter Name"
            type="text"
            name="Recruiter_Name"
          />
        </div>

        <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label class="sr-only" for="email">
              Email
            </label>
            <input
              class="w-full rounded-lg border-gray-400 border p-3 text-m text-black-600  pointer-events-none"
              placeholder="Email address"
              type="email"
              id="email"
            />
          </div>

          <div>
            <label class="sr-only" for="phone">
              Phone
            </label>
            <input
              class="w-full rounded-lg border-gray-400 border p-3 text-m text-black-600"
              placeholder="Phone Number"
              type="tel"
              id="phone"
            />
          </div>
        </div>
        <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label class="sr-only" for="password">
              Password
            </label>
            <input
              class="w-full rounded-lg border-gray-400 border p-3 text-m text-black-600"
              placeholder="Password"
              type="password"
              id="password"
            />
          </div>

          <div>
            <select
              name="HeadlineAct"
              id="HeadlineAct"
              class="w-full rounded-lg border-gray-400 border text-gray-700 sm:text-lg h-[55px]"
            >
              <option value="" className="text-center">
                Type{" "}
              </option>
              <option value="recruiter" className="text-center">
                Recruiter
              </option>
            </select>
          </div>
        </div>

        <div>
          <label class="sr-only" for="bio">
            Bio
          </label>

          <textarea
            class="w-full rounded-lg border-gray-200 border p-3 text-m"
            placeholder="Bio"
            rows="2"
            id="bio"
          ></textarea>
        </div>

        <div class="mt-4">
          <button
            type="submit"
            class="inline-block w-full rounded-lg bg-black px-3 py-2 font-medium text-white sm:w-auto"
          >
            Send Enquiry
          </button>
        </div>
      </form>
    </div>
  );
}
