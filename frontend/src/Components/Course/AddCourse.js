import React, { useState } from "react";

import "./form.css";
import Header from "../Common/Header";
import Axios from "axios";
const AddCourse = ({ add_course_page_disable }) => {
  const [formData, setFormData] = useState({
    // Initialize your form fields here
    title: "",
    description: "",
    imageUrl: "",
    difficultyLevel: "",
    description: "",
    duration: "",
    instructor: "",
    courseUrl: "",
    videos: "video link",
  });

  const back_button_click = () => {
    add_course_page_disable();
  };

  const [category, setcategory] = useState({
    category: [],
  });
  const [whatYouWillLearn, setwhatYouWillLearn] = useState({
    whatYouWillLearn: [],
  });
  const [requirement, setrequirements] = useState({
    requirements: [],
  });

  const [loading, setLoading] = useState(false);

  const category_change_event = (e) => {
    var main_div = document.getElementById("category");
    const divs = main_div.getElementsByClassName("text-left");
    const dataArray = [];

    for (let i = 0; i < divs.length; i++) {
      const div = divs[i];
      const t = div.getElementsByTagName("input");
      const data = t[0].value;
      dataArray.push(data);
      t.value = category[getIndex2(e)];
      // setdocumentvalue(t)
      // console.log(documents)
    }

    setcategory(dataArray);
    // setdocumentvalue(e.target); // Update the state with the input value
  };

  const requirement_change_event = (e) => {
    var main_div = document.getElementById("requirement");
    const divs = main_div.getElementsByClassName("text-left");
    const dataArray = [];

    for (let i = 0; i < divs.length; i++) {
      const div = divs[i];
      const t = div.getElementsByTagName("input");
      const data = t[0].value;
      dataArray.push(data);
      t.value = category[getIndex(e)];
      // setdocumentvalue(t)
      // console.log(documents)
    }

    setrequirements(dataArray);
    // setdocumentvalue(e.target); // Update the state with the input value
  };

  const whatYouWillLearn_change_event = (e) => {
    var main_div = document.getElementById("whatYouWillLearn");
    const divs = main_div.getElementsByClassName("text-left");
    const dataArray = [];

    for (let i = 0; i < divs.length; i++) {
      const div = divs[i];
      const t = div.getElementsByTagName("input");
      const data = t[0].value;
      dataArray.push(data);
      t.value = category[getIndex3(e)];
      // setdocumentvalue(t)
      // console.log(documents)
    }

    setwhatYouWillLearn(dataArray);
    // setdocumentvalue(e.target); // Update the state with the input value
  };
  const getIndex2 = (e) => {
    var parentDiv = document.getElementById("category");
    var index = Array.prototype.indexOf.call(parentDiv.children, e.target);
    return index;
  };
  const getIndex3 = (e) => {
    var parentDiv = document.getElementById("whatYouWillLearn");
    var index = Array.prototype.indexOf.call(parentDiv.children, e.target);
    return index;
  };
  const getIndex = (e) => {
    var parentDiv = document.getElementById("requirement");
    var index = Array.prototype.indexOf.call(parentDiv.children, e.target);
    return index;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  function add_category() {
    var newEligibilityDiv = document.createElement("div");
    newEligibilityDiv.className = "text-left";
    newEligibilityDiv.innerHTML = `
      <input
        style="
          padding: 0.75rem;
          border-radius: 0.5rem;
          border-width: 1px;
          border-color: #9CA3AF;
          width: 100%;
          margin-top:5px
        "
        placeholder="category"
        type="text"
      />
    `;
    var par = document.getElementById("category");

    par.appendChild(newEligibilityDiv);
    var input_tag = newEligibilityDiv.getElementsByTagName("input");
    var t = category[getIndex2(newEligibilityDiv)];
    if (t) {
      input_tag[0].value = t;
    }
    // Add event listener for the 'change' event
    input_tag[0].addEventListener("change", category_change_event);
  }
  function add_requirement() {
    var newEligibilityDiv = document.createElement("div");
    newEligibilityDiv.className = "text-left";
    newEligibilityDiv.innerHTML = `
      <input
        style="
          padding: 0.75rem;
          border-radius: 0.5rem;
          border-width: 1px;
          border-color: #9CA3AF;
          width: 100%;
          margin-top:5px
        "
        placeholder="category"
        type="text"
      />
    `;
    var par = document.getElementById("requirement");

    par.appendChild(newEligibilityDiv);
    var input_tag = newEligibilityDiv.getElementsByTagName("input");
    var t = requirement[getIndex(newEligibilityDiv)];
    if (t) {
      input_tag[0].value = t;
    }
    // Add event listener for the 'change' event
    input_tag[0].addEventListener("change", requirement_change_event);
  }
  function add_whatYouWillLearn() {
    var newEligibilityDiv = document.createElement("div");
    newEligibilityDiv.className = "text-left";
    newEligibilityDiv.innerHTML = `
      <input
        style="
          padding: 0.75rem;
          border-radius: 0.5rem;
          border-width: 1px;
          border-color: #9CA3AF;
          width: 100%;
          margin-top:5px
        "
        placeholder="what You Will Learn"
        type="text"
      />
    `;
    var par = document.getElementById("whatYouWillLearn");

    par.appendChild(newEligibilityDiv);
    var input_tag = newEligibilityDiv.getElementsByTagName("input");
    var t = category[getIndex3(newEligibilityDiv)];
    if (t) {
      input_tag[0].value = t;
    }
    // Add event listener for the 'change' event
    input_tag[0].addEventListener("change", whatYouWillLearn_change_event);
  }
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Call the function to send data to the backend
    var data = {
      requirements: requirement,
      category: category,
      benifits: whatYouWillLearn,
    };
    var main_data = { ...data, ...formData };
    console.log(main_data);
    try {
      setLoading(true);
      const res = await Axios.post(
        "http://localhost:5000/api/Course/addNewCourse",
        main_data
      );
      if (res.data.success === true) {
        alert("New Scheme Uploaded Successfully");
        setLoading(false);
      } else {
        alert("There Was Error While Uploading New Scheme");
        setLoading(false);
      }
    } catch (err) {
      console.log("error in adding new scheme");
      setLoading(false);
    }
  };

  function remove_requirement() {
    var parentDiv = document.getElementById("requirement");
    if (parentDiv.children.length > 0) {
      // Get the last child div
      var lastChild = parentDiv.lastElementChild;

      // Remove the last child div
      parentDiv.removeChild(lastChild);
    }
  }
  function remove_category() {
    var parentDiv = document.getElementById("category");
    if (parentDiv.children.length > 0) {
      // Get the last child div
      var lastChild = parentDiv.lastElementChild;

      // Remove the last child div
      parentDiv.removeChild(lastChild);
    }
  }
  function remove_whatYouWillLearn() {
    var parentDiv = document.getElementById("whatYouWillLearn");
    if (parentDiv.children.length > 0) {
      // Get the last child div
      var lastChild = parentDiv.lastElementChild;

      // Remove the last child div
      parentDiv.removeChild(lastChild);
    }
  }

  return (
    <>
      {/* <Header /> */}
      <div className="flex flex-row-reverse mr-6">
        <div class="mt-4 md:mt-8">
          <a
            href="#"
            class="inline-block rounded bg-black px-6 py-3 text-sm font-medium text-white transition hover:bg-emerald-700 focus:outline-none focus:ring focus:ring-yellow-400"
            onClick={back_button_click}
          >
            BACK
          </a>
        </div>
      </div>
      
        <div className="rounded-lg bg-white p-4 lg:col-span-3 lg:p-12">
          {/* <Header /> */}
          <form
            action=""
            className="space-y-4 w-[70%] m-auto mt-5"
            onSubmit={handleSubmit}
          >
            <div>
              <label className="sr-only" htmlFor="name">
                Title
              </label>
              <input
                className="w-full rounded-lg border-gray-400 border p-3 text-m text-black-600"
                placeholder="Job Title"
                type="text"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
              />
            </div>

            <div className="flex flex-row justify-between">
              <div className="basis-1/2 pr-2">
                <label className="sr-only" htmlFor="name">
                  DifficultyLevel
                </label>
                <input
                  className="w-full rounded-lg border-gray-400 border p-3 text-m text-black-600 "
                  placeholder="Difficulty Level"
                  type="text"
                  name="difficultyLevel"
                  value={formData.difficultyLevel}
                  onChange={handleInputChange}
                />
              </div>
              <div className="basis-1/2">
                <label className="sr-only" htmlFor="name">
                  duration
                </label>
                <input
                  className="w-full rounded-lg border-gray-400 border p-3 text-m text-black-600"
                  placeholder="duration"
                  type="text"
                  name="duration"
                  value={formData.duration}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div>
              <label className="sr-only" htmlFor="message">
                Job Description
              </label>

              <textarea
                className="w-full rounded-lg border-gray-200 p-3 text-m border"
                placeholder="Job Description"
                rows="4"
                value={formData.description}
                name="description"
                onChange={handleInputChange}
              ></textarea>
            </div>
            <div>
              <label className="sr-only" htmlFor="name">
                Img URL
              </label>
              <input
                className="w-full rounded-lg border-gray-400 border p-3 text-m text-black-600"
                placeholder="imageUrl"
                type="text"
                name="imageUrl"
                value={formData.imageUrl}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label className="sr-only" htmlFor="name">
                Course Link
              </label>
              <input
                className="w-full rounded-lg border-gray-400 border p-3 text-m text-black-600"
                placeholder="Course Link"
                type="text"
                name="courseUrl"
                value={formData.courseUrl}
                onChange={handleInputChange}
              />
            </div>
            <span className="relative flex justify-center">
              <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-75"></div>
              <span className="relative z-10 bg-white px-6">Category</span>
            </span>
            <div id="category">
              <div className="text-left">
                <input
                  className="ele"
                  placeholder="category"
                  type="text"
                  value={category[getIndex2]}
                  onChange={category_change_event}
                />
              </div>
            </div>
            <div className="text-left flex justify-between">
              <button
                type="button"
                className="inline-block w-full rounded-lg bg-black px-4 py-2 font-medium text-white sm:w-auto"
                onClick={add_category}
              >
                ADD Steps
              </button>
              <button
                type="button"
                className="inline-block w-full rounded-lg bg-black px-4 py-2 font-medium text-white sm:w-auto"
                onClick={remove_category}
              >
                Remove Steps
              </button>
            </div>
            <span className="relative flex justify-center">
              <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-75"></div>
              <span className="relative z-10 bg-white px-6">
                whatYouWillLearn
              </span>
            </span>
            <div id="whatYouWillLearn">
              <div className="text-left">
                <input
                  className="ele"
                  placeholder="what You WillLearn"
                  type="text"
                  value={whatYouWillLearn[getIndex3]}
                  onChange={whatYouWillLearn_change_event}
                />
              </div>
            </div>
            <div className="text-left flex justify-between">
              <button
                type="button"
                className="inline-block w-full rounded-lg bg-black px-4 py-2 font-medium text-white sm:w-auto"
                onClick={add_whatYouWillLearn}
              >
                ADD
              </button>
              <button
                type="button"
                className="inline-block w-full rounded-lg bg-black px-4 py-2 font-medium text-white sm:w-auto"
                onClick={remove_whatYouWillLearn}
              >
                Remove
              </button>
            </div>

            <span className="relative flex justify-center">
              <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-75"></div>
              <span className="relative z-10 bg-white px-6">requirement</span>
            </span>
            <div id="requirement">
              <div className="text-left">
                <input
                  className="ele"
                  placeholder="what You WillLearn"
                  type="text"
                  value={requirement[getIndex]}
                  onChange={requirement_change_event}
                />
              </div>
            </div>
            <div className="text-left flex justify-between">
              <button
                type="button"
                className="inline-block w-full rounded-lg bg-black px-4 py-2 font-medium text-white sm:w-auto"
                onClick={add_requirement}
              >
                ADD
              </button>
              <button
                type="button"
                className="inline-block w-full rounded-lg bg-black px-4 py-2 font-medium text-white sm:w-auto"
                onClick={remove_requirement}
              >
                Remove
              </button>
            </div>

            <div>
              <label className="sr-only" htmlFor="name">
                instructor
              </label>
              <input
                className="w-full rounded-lg border-gray-400 border p-3 text-m text-black-600"
                placeholder="Instructor"
                type="text"
                name="instructor"
                value={formData.instructor}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <button
                type="submit"
                className="inline-block w-full rounded-lg bg-black px-4 py-2 font-medium text-white sm:w-auto mt-4"
              >
                SUBMIT
              </button>
            </div>
          </form>
        </div>
      
    </>
  );
};

export default AddCourse;
