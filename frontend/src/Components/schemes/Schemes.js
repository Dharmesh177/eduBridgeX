import React, { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';
import "./schemes.css";
import Axios from "axios";

export default function Schemes() {

  const location = useLocation();
  const id = location.state;

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchScheme = async() => {
    try {
      setLoading(true);
      const result = await Axios.get("http://localhost:5000/api/schemes/getSchemeById/" + id.id);
      setData(result.data);
      setLoading(false);
    } catch (err) {
      console.log("error while fetching scheme in schemes route");
      setLoading(false);
    }
  }

  useEffect(()=> {
    fetchScheme();
    console.log(data);
  },[]);

  return (
    <>
      {loading === true ? <div className="h-screen w-screen text-5xl flex flex-col justify-center items-center">Loading...</div> : 
      <div class="main_div">
        <div class="side_div">
          <div class="side_div_container">
            <div class="side_div_container">
              <ul class="side_div_ul">
                <li>
                  <a href="#1" class="side_div_li">
                    Detail
                  </a>
                </li>

                <li>
                  <a href="" className="side_div_li">
                    Benefits
                  </a>
                </li>

                <li>
                  <a href="" className="side_div_li">
                    Eligibility
                  </a>
                </li>

                <li>
                  <a href="" className="side_div_li">
                    Application Process
                  </a>
                </li>

                <li>
                  <a href="" className="side_div_li">
                    Documents Required
                  </a>
                </li>
                <li>
                  <a href="" className="side_div_li">
                    Frequently Asked Questions
                  </a>
                </li>
                <li>
                  <a href="" className="side_div_li">
                    Sources And References
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="right_side_div">
          <div class="right_text_heading">
            <p>{data?.organization}</p>
          </div>
          <div class="right_main_text">
            <p>
              {data?.title}
            </p>
          </div>
          <div class="badges_div">
            {data?.tags.map(itm => {
              return (
                <span class="badges">{itm}</span>
              )
            })}
            
            {/* <span class="badges">Students</span> */}
          </div>
          <div class="data_section" id="1">
            <div class="data_section_header">Details</div>
            <div class="data_section_data">
              {data?.description}
              {/* The Government of Tamil Nadu has launched the “Migrants Employment
              Generation Programme (MEGP)” for the Non-Resident Tamils, who
              returned back to Tamil Nadu due to Covid-19 Pandemic. This scheme
              is to be implemented by the Commissionerate of Industries and
              Commerce and this Commissionerate is the Nodal Agency at the State
              Level. Also, the Government has ordered that the District
              Industries Centre (DICs) of the concerned Districts and the Office
              of the Regional Joint Director of Industries and Commerce in
              respect of Chennai District is the implementing agencies in
              coordination with this Commissionerate. */}
            </div>
          </div>
          <div class="data_section">
            <div class="data_section_header">Benefits</div>
            <div class="data_section_data">
              {data?.benifits}
              {/* Under the scheme, the subsidy @ 25% of the project cost will be
              sanctioned to the beneficiaries subject to a maximum of ₹2.5
              lakhs. */}
            </div>
          </div>
          <div class="data_section">
            <div class="data_section_header">Eligibility</div>
            <div class="data_section_data">
              <ul class="eligibility_list_ul">
                {data?.eligibility.map(itm => {
                  return (
                    <li class="eligibility_list">
                      {itm}
                    </li>
                  )
                })}
                
                {/* <li class="eligibility_list">
                  The age of the applicant should be between 18 to 45 years in
                  general and for special categories (Women/Minorities/
                  BC/MBC/SC/ST/Ex-servicemen/Transgender/Differently abled), the
                  age relaxation is up to 55 years.
                </li>
                <li class="eligibility_list">
                  The applicant should possess a minimum educational
                  qualification of 8th standard pass.
                </li>
                <li class="eligibility_list">
                  The family income of the applicant should be below ₹5.00 lakh.
                </li> */}
              </ul>
            </div>
            <div class="data_section">
              <div class="data_section_header">Application Process</div>
              <div class="data_section_data">
                <ul class="eligibility_list_ul">
                  {data?.steps.map(itm => {
                    return (
                      <li class="eligibility_list">
                        {itm}
                      </li>
                    )
                  })}
                  
                  {/* <li class="eligibility_list">
                    The age of the applicant should be between 18 to 45 years in
                    general and for special categories (Women/Minorities/
                    BC/MBC/SC/ST/Ex-servicemen/Transgender/Differently abled),
                    the age relaxation is up to 55 years.
                  </li>
                  <li class="eligibility_list">
                    The applicant should possess a minimum educational
                    qualification of 8th standard pass.
                  </li>
                  <li class="eligibility_list">
                    The family income of the applicant should be below ₹5.00
                    lakh.
                  </li> */}
                </ul>
              </div>
            </div>
            <div class="data_section">
              <div class="data_section_header">Documents Required</div>
              <div class="data_section_data">
                <ul class="eligibility_list_ul">
                  {data?.docRequired.map(itm => {
                    return (
                      <li class="eligibility_list">
                        {itm}
                      </li>
                    )
                  })}
                  
                  {/* <li class="eligibility_list">
                    The age of the applicant should be between 18 to 45 years in
                    general and for special categories (Women/Minorities/
                    BC/MBC/SC/ST/Ex-servicemen/Transgender/Differently abled),
                    the age relaxation is up to 55 years.
                  </li>
                  <li class="eligibility_list">
                    The applicant should possess a minimum educational
                    qualification of 8th standard pass.
                  </li>
                  <li class="eligibility_list">
                    The family income of the applicant should be below ₹5.00
                    lakh.
                  </li> */}
                </ul>
              </div>
            </div>
            <div class="data_section">
              <div class="data_section_header">FAQs</div>
              <div class="data_section_data">
                <div className="space-y-4 mt-1">
                  {data?.FAQ.map(itm => {
                    return (
                      <details
                        className="group [&_summary::-webkit-details-marker]:hidden"
                        open
                      >
                        <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900">
                          <p className="font-medium">
                            {itm.question}
                          </p>

                          <svg
                            className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </summary>

                        <p className="mt-4 px-4 leading-relaxed text-gray-700">
                          {itm.answer}
                        </p>
                      </details>
                    )
                  })}
                </div>
              </div>
              <div class="data_section" id="1">
                <div class="data_section_header">Sources And References</div>
                <div class="data_section_data">
                  <div class="flex items-center">
                    <p class="flex items-center">
                      <a href="" class="ref">
                        {data?.reference}
                      </a>
                      <img
                        src="icons8-link-48.png"
                        alt=""
                        class="ref_img"
                      />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      }
    </>
  );
}
