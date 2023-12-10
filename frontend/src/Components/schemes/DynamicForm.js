import React, { useState } from "react";
import "./form.css";
const DynamicForm = () => {
  
  return (
    <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
      <form action="" className="space-y-4">
        <div>
          <label className="sr-only" for="name">
            Name
          </label>
          <input
            className="w-full rounded-lg border-gray-400 border p-3 text-m text-black-600"
            placeholder="Scheme name"
            type="text"
            id="name"
          />
        </div>
        <div>
          <label className="sr-only" for="org">
            Name
          </label>
          <input
            className="w-full rounded-lg border-gray-400 border p-3 text-m text-black-600"
            placeholder="Organization name"
            type="text"
            id="org"
          />
        </div>

        <div>
          <label className="sr-only" for="message">
            Details
          </label>

          <textarea
            className="w-full rounded-lg border-gray-200 p-3 text-m border"
            placeholder="Details"
            rows="4"
            id="Details"
          ></textarea>
        </div>
        <div>
          <label className="sr-only" for="message">
            Benefits
          </label>

          <textarea
            className="w-full rounded-lg border-gray-200 p-3 text-m border"
            placeholder="Benefits"
            rows="4"
            id="Benefits"
          ></textarea>
        </div>
        <span class="relative flex justify-center">
          <div class="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-75"></div>

          <span class="relative z-10 bg-white px-6">Eligibility</span>
        </span>
        <div id="eligibility">
          <div className="text-left">
            <input
              className="ele"
              placeholder="Eligibility"
              type="text"
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
        <span class="relative flex justify-center">
          <div class="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-75"></div>
          <span class="relative z-10 bg-white px-6">Application Process</span>
        </span>
        <div id="Application Process">
          <div className="text-left">
            <input
              className="ele"
              placeholder="Steps"
              type="text"
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
        <span class="relative flex justify-center">
          <div class="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-75"></div>

          <span class="relative z-10 bg-white px-6">Documents Required</span>
        </span>
        <div id="Documents">
          <div className="text-left">
            <input
              className="ele"
              placeholder="Documents Name"
              type="text"
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
        <span class="relative flex justify-center">
          <div class="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-75"></div>

          <span class="relative z-10 bg-white px-6">FAQs</span>
        </span>
        <div id="FAQs">
          <div className="text-left">
          

            <input
              className="ele"
              placeholder="Questions"
              type="text"
              
            />
          </div>
          <div className="text-left mb-4">
            <input
              className="ele"
              placeholder="Answer"
              type="text"
              
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
          <label className="sr-only" for="name">
            Ref
          </label>
          <input
            className="w-full rounded-lg border-gray-400 border p-3 text-m text-black-600"
            placeholder="Reference"
            type="text"
            id="name"
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
  );
};

export default DynamicForm;

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
      type="text"
    />
  `;

  document.getElementById("eligibility").appendChild(newEligibilityDiv);
}

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
      placeholder="Document"
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
      placeholder="Document"
      type="text"
    />
  `;

  document.getElementById("Documents").appendChild(newEligibilityDiv);
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
  `;

  document.getElementById("FAQs").appendChild(newEligibilityDiv);
  var newEligibilityDiv = document.createElement("div");
  newEligibilityDiv.className = "text-left mb-4";
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
      placeholder="Answer"
      type="text"
    />
  `;

  document.getElementById("FAQs").appendChild(newEligibilityDiv);
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