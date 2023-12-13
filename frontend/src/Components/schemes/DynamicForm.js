import React, { useState } from "react";

import "./form.css";
import Header from "../Common/Header";
import Axios from "axios";
const DynamicForm = () => {
  const [formData, setFormData] = useState({
    // Initialize your form fields here
    scheme_name: "",
    org_name: "",
    ref: "",
    detail: "",
    benefits: "",
  });

  const [documents, setdocument] = useState({
    documents: [],
  });
  const [eligibility, seteligibility] = useState({
    eligibility: [],
  });
  const [application_step, setsteps] = useState({
    staps:[],
  })
  const [questions, setquestions] = useState({
    questions:[]
  })
  const [answers, setanswers] = useState({
    answers:[]
  });

  const [loading, setLoading] = useState(false);

  const application_step_change_event = (e) => {
    var main_div = document.getElementById("Application Process");
    const divs = main_div.getElementsByClassName("text-left");
    const dataArray = [];

    for (let i = 0; i < divs.length; i++) {
      const div = divs[i];
      const t = div.getElementsByTagName("input");
      const data = t[0].value;
      dataArray.push(data);
      t.value = documents[getIndex2(e)];
      // setdocumentvalue(t)
      // console.log(documents)
    }

    setsteps(dataArray);
    // setdocumentvalue(e.target); // Update the state with the input value
  };
  const eligibilityChangeIvent = (e) => {
    var main_div = document.getElementById("eligibility");
    const divs = main_div.getElementsByClassName("text-left");
    const dataArray = [];

    for (let i = 0; i < divs.length; i++) {
      const div = divs[i];
      const t = div.getElementsByTagName("input");
      const data = t[0].value;
      dataArray.push(data);
      t.value = documents[getIndex1(e)];
      // setdocumentvalue(t)
      // console.log(documents)
    }

    seteligibility(dataArray);
    // setdocumentvalue(e.target); // Update the state with the input value
  };
  const questionChangeIvent = (e) => {
    var main_div = document.getElementById("FAQs");
    const divs = main_div.getElementsByClassName("text-left");
    const dataArray = [];

    for (let i = 0; i < divs.length; i++) {
      const div = divs[i];
      const t = div.getElementsByTagName("input");
      const data = t[0].value;
      dataArray.push(data);
      t.value = questions[getIndex3(e)];
      // setdocumentvalue(t)
      // console.log(documents)
    }

    setquestions(dataArray);
    // setdocumentvalue(e.target); // Update the state with the input value
  };
  const answerChangeIvent = (e) => {
    var main_div = document.getElementById("FAQs");
    const divs = main_div.getElementsByClassName("text-left");
    const dataArray = [];

    for (let i = 0; i < divs.length; i++) {
      const div = divs[i];
      const t = div.getElementsByTagName("input");
      const data = t[1].value;
      dataArray.push(data);
      t.value = questions[getIndex3(e)];
      // setdocumentvalue(t)
      // console.log(documents)
    }

    setanswers(dataArray);
    // setdocumentvalue(e.target); // Update the state with the input value
  };

  const documentChangeIvent = (e) => {
    var main_div = document.getElementById("Documents");
    const divs = main_div.getElementsByClassName("text-left");
    const dataArray = [];

    for (let i = 0; i < divs.length; i++) {
      const div = divs[i];
      const t = div.getElementsByTagName("input");
      const data = t[0].value;
      dataArray.push(data);
      t.value = documents[getIndex2(e)];
      // setdocumentvalue(t)
      // console.log(documents)
    }

    setdocument(dataArray);
    // setdocumentvalue(e.target); // Update the state with the input value
  };

  const getIndex = (e) => {
    var parentDiv = document.getElementById("Documents");
    var index = Array.prototype.indexOf.call(parentDiv.children, e.target);
    return index;
  };
  const getIndex1 = (e) => {
    var parentDiv = document.getElementById("eligibility");
    var index = Array.prototype.indexOf.call(parentDiv.children, e.target);
    return index;
  };
  const getIndex2 = (e) => {
    var parentDiv = document.getElementById("Application Process");
    var index = Array.prototype.indexOf.call(parentDiv.children, e.target);
    return index;
  };
  const getIndex3 = (e) => {
    var parentDiv = document.getElementById("FAQs");
    var index = Array.prototype.indexOf.call(parentDiv.children, e.target);
    return index;
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    // Call the function to send data to the backend
    var data = {
      questions,
      answers,
      eligibility,
      documents,
      application_step
    }
    var main_data = { ...data, ...formData };
    // console.log(main_data);
    try {
      setLoading(true);
      const res = await Axios.post('http://localhost:5000/api/schemes/addnewScheme', main_data);
      if(res.data.success === true) {
        alert("New Scheme Uploaded Successfully");
        setLoading(false);
        }
      else {
        alert("There Was Error While Uploading New Scheme");
        setLoading(false);
      }
    } catch (err) {
        console.log("error in adding new scheme");
    }

  
  };
  function add_documents() {
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
        placeholder="Documents"
        
        type="text"
        value = ""
        
      />
    `;

    // newEligibilityDiv.value = documents[getIndex(newEligibilityDiv)]
    var par = document.getElementById("Documents");
    par.appendChild(newEligibilityDiv);
    var input_tag = newEligibilityDiv.getElementsByTagName("input");
    var t = documents[getIndex(newEligibilityDiv)];
    if (t) {
      input_tag[0].value = t;
    }
    // Add event listener for the 'change' event
    input_tag[0].addEventListener("change", documentChangeIvent);
  }
  function add_eligibility_div() {
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
        placeholder="Eligibility"
        type=""
      />
    `;

    var par = document.getElementById("eligibility");
    par.appendChild(newEligibilityDiv);
    var input_tag = newEligibilityDiv.getElementsByTagName("input");
    var t = documents[getIndex1(newEligibilityDiv)];
    if (t) {
      input_tag[0].value = t;
    }
    // Add event listener for the 'change' event
    input_tag[0].addEventListener("change", eligibilityChangeIvent);
  }
  function add_process_steps() {
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
        placeholder="Steps"
        type="text"
      />
    `;
  
    var par = document.getElementById("Application Process");
    par.appendChild(newEligibilityDiv);
    var input_tag = newEligibilityDiv.getElementsByTagName("input");
    var t = documents[getIndex2(newEligibilityDiv)];
    if (t) {
      input_tag[0].value = t;
    }
    // Add event listener for the 'change' event
    input_tag[0].addEventListener("change", application_step_change_event);
  }
  function add_QA() {
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
        placeholder="Question"
        type="text"
      />
      <input
        style="
          padding: 0.75rem;
          border-radius: 0.5rem;
          border-width: 1px;
          border-color: #9CA3AF;
          width: 100%;
          margin-top:5px
          margin-bottom:10px
        "
        placeholder="Answer"
        type="text"
      />
    `;
  
   
  
    var par = document.getElementById("FAQs");
    par.appendChild(newEligibilityDiv);
    var input_tag = newEligibilityDiv.getElementsByTagName("input");
    var q = answers[getIndex2(newEligibilityDiv)];
    var a = answers[getIndex2(newEligibilityDiv)];

    if (q) {
      input_tag[0].value = q;
      input_tag[1].value = a
    }
    // Add event listener for the 'change' event
    input_tag[0].addEventListener("change", questionChangeIvent);
    input_tag[1].addEventListener("change", answerChangeIvent);
  }
  return (
    <>
    <Header />
    {loading ? <div style={{display:"flex", flexDirection:"column", justifyContent:"center", height:"50vh",fontSize:"4rem"}}>
      Loading...
    </div> : 
  

    <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
      {/* <Header /> */}
      <form action="" className="space-y-4 w-[70%] m-auto mt-5" onSubmit={handleSubmit}>
        <div>
          <label className="sr-only" htmlFor="name">
            Name
          </label>
          <input
            className="w-full rounded-lg border-gray-400 border p-3 text-m text-black-600"
            placeholder="Scheme name"
            type="text"
            name="scheme_name"
            value={formData.scheme_name}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label className="sr-only" htmlFor="org">
            Name
          </label>
          <input
            className="w-full rounded-lg border-gray-400 border p-3 text-m text-black-600"
            placeholder="Organization name"
            type="text"
            name="org_name"
            value={formData.org_name}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label className="sr-only" htmlFor="message" >
            Details
          </label>

          <textarea
            className="w-full rounded-lg border-gray-200 p-3 text-m border"
            placeholder="Details"
            rows="4"
            value={formData.detail}
            name="detail"
            onChange={handleInputChange}
          ></textarea>
        </div>
        <div>
          <label className="sr-only" htmlFor="message">
            Benefits
          </label>

          <textarea
            className="w-full rounded-lg border-gray-200 p-3 text-m border"
            placeholder="Benefits"
            rows="4"
            value={formData.benefits}
            id="Benefits"
            name="benefits"
            onChange={handleInputChange}
          ></textarea>
        </div>
        <span className="relative flex justify-center">
          <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-75"></div>

          <span className="relative z-10 bg-white px-6">Eligibility</span>
        </span>
        <div id="eligibility">
          <div className="text-left">
            <input
              className="ele"
              placeholder="Eligibility"
              type="text"
              value={eligibility[getIndex1]}
              onChange={eligibilityChangeIvent}
            />
          </div>
        </div>
        <div className="text-left flex justify-between">
          <button
            type="button"
            className="inline-block w-full rounded-lg bg-black px-4 py-2 font-medium text-white sm:w-auto"
            onClick={add_eligibility_div}
          >
            ADD Eligibility
          </button>
          <button
            type="button"
            className="inline-block w-full rounded-lg bg-black px-4 py-2 font-medium text-white sm:w-auto"
            onClick={remove_eligibility_div}
          >
            Remove Eligibility
          </button>
        </div>
        <span className="relative flex justify-center">
          <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-75"></div>
          <span className="relative z-10 bg-white px-6">
            Application Process
          </span>
        </span>
        <div id="Application Process">
          <div className="text-left">
          <input
              className="ele"
              placeholder="Eligibility"
              type="text"
              value={application_step[getIndex2]}
              onChange={application_step_change_event}
            />
          </div>
        </div>
        <div className="text-left flex justify-between">
          <button
            type="button"
            className="inline-block w-full rounded-lg bg-black px-4 py-2 font-medium text-white sm:w-auto"
            onClick={add_process_steps}
            
          >
            ADD Steps
          </button>
          <button
            type="button"
            className="inline-block w-full rounded-lg bg-black px-4 py-2 font-medium text-white sm:w-auto"
            onClick={remove_process_steps}
          >
            Remove Steps
          </button>
        </div>
        <span className="relative flex justify-center">
          <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-75"></div>

          <span className="relative z-10 bg-white px-6">
            Documents Required
          </span>
        </span>
        <div id="Documents">
          <div className="text-left">
            <input
              className="ele"
              placeholder="Documents Name"
              type="text"
              value={documents[getIndex]}
              onChange={documentChangeIvent}
            />
          </div>
        </div>
        <div className="text-left flex justify-between">
          <button
            type="button"
            className="inline-block w-full rounded-lg bg-black px-4 py-2 font-medium text-white sm:w-auto"
            onClick={add_documents}
          >
            ADD Documents
          </button>
          <button
            type="button"
            className="inline-block w-full rounded-lg bg-black px-4 py-2 font-medium text-white sm:w-auto"
            onClick={remove_documents}
          >
            Remove Documents
          </button>
        </div>
        <span className="relative flex justify-center">
          <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-75"></div>

          <span className="relative z-10 bg-white px-6">FAQs</span>
        </span>
        <div id="FAQs">
          <div className="text-left">
          <input
              className="ele"
              placeholder="Question"
              type="text"
              value={questions[getIndex3]}
              onChange={questionChangeIvent}
            />
          <input
              className="ele"
              placeholder="Answer"
              type="text"
              value={answers[getIndex3]}
              onChange={answerChangeIvent}
            />
          </div>
        </div>
        <div className="text-left flex justify-between">
          <button
            type="button"
            className="inline-block w-full rounded-lg bg-black px-4 py-2 font-medium text-white sm:w-auto"
            onClick={add_QA}
          >
            ADD Question
          </button>
          <button
            type="button"
            className="inline-block w-full rounded-lg bg-black px-4 py-2 font-medium text-white sm:w-auto"
            onClick={remove_QA}
          >
            Remove Question
          </button>
        </div>
        <div>
          <label className="sr-only" htmlFor="name">
            Ref
          </label>
          <input
            className="w-full rounded-lg border-gray-400 border p-3 text-m text-black-600"
            placeholder="Reference"
            type="text"
            name="ref"
            value={formData.ref}
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
    }
   </>
  );
};

export default DynamicForm;

function remove_eligibility_div() {
  var parentDiv = document.getElementById("eligibility");
  if (parentDiv.children.length > 0) {
    // Get the last child div
    var lastChild = parentDiv.lastElementChild;

    // Remove the last child div
    parentDiv.removeChild(lastChild);
  }
}

function add_process_steps() {
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
      placeholder="Steps"
      type="text"
    />
  `;

  document.getElementById("Application Process").appendChild(newEligibilityDiv);
}

function remove_process_steps() {
  var parentDiv = document.getElementById("Application Process");
  if (parentDiv.children.length > 0) {
    // Get the last child div
    var lastChild = parentDiv.lastElementChild;

    // Remove the last child div
    parentDiv.removeChild(lastChild);
  }
}

function remove_documents() {
  var parentDiv = document.getElementById("Documents");
  if (parentDiv.children.length > 0) {
    // Get the last child div
    var lastChild = parentDiv.lastElementChild;

    // Remove the last child div
    parentDiv.removeChild(lastChild);
  }
}


function remove_QA() {
  var parentDiv = document.getElementById("FAQs");
  if (parentDiv.children.length > 0) {
    // Get the last child div
    var lastChild = parentDiv.lastElementChild;

    // Remove the last child div
    parentDiv.removeChild(lastChild);
    var lastChild = parentDiv.lastElementChild;
    parentDiv.removeChild(lastChild);
  }
}
