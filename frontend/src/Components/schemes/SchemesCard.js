import React, { useEffect, useState } from "react";
import Axios from 'axios';
import Header from "../Common/Header";
import { useNavigate } from 'react-router-dom';

export default function SchemesCard() {

  const [loading, setLoading] = useState(false);
  const [schemes, setSchemes] = useState([]);
  const [type, setType] = useState("all");
  const [tag, setTag] = useState("");
  const [eli, setEli] = useState("");
  const eligibility = ["10th", "12th","Diploma", "BCom", "BBA", "BCA", "B.Tech","Bsc","MBA","MBBS","BHMS","BAMS"];
  const navigate = useNavigate();

  const fetchAllSchemes = async() => {
    try {
      setLoading(true);
      var res;
      if(type === "gov") {
        res = await Axios.get('http://localhost:5000/api/schemes/getAllSchemes/gov');
        // console.log(res.data);
        if(res.status === 200) {
          setSchemes(res.data)
          setLoading(false);
        }
        else {
          alert("There Was Error While Fetching Schemes. please try again");
          setLoading(false);
        }
      } else if(type === "private") {
        res = await Axios.get('http://localhost:5000/api/schemes/getAllSchemes/private');
        // console.log(res.data);
        if(res.status === 200) {
          setSchemes(res.data)
          setLoading(false);
        }
        else {
          alert("There Was Error While Fetching Schemes. please try again");
          setLoading(false);
        }
      } else {
        res = await Axios.get('http://localhost:5000/api/schemes/getAllSchemes/all');
        // console.log(res.data);
        if(res.status === 200) {
          setSchemes(res.data)
          setLoading(false);
        }
        else {
          alert("There Was Error While Fetching Schemes. please try again");
          setLoading(false);
        }
      }
    
    } catch (err) {
        console.log("error in adding new scheme");
        setLoading(false);
    }
  }

  // const changeSchemeType = (type) => {
  //   // setTypeChanged(prev => !prev);
  //   if(type === "gov") {
  //     setSchemes(schemes.filter(itm => {
  //       return itm.type === "government" || itm.type === "Government";
  //     }));
  //   } else {
  //     setSchemes(schemes.filter(itm => itm.type !== "government" || itm.type !== "Government"));
  //   }
  // }

  const fetchTagWise = async () => {
    try {
      setLoading(true);
      const res = await Axios.get('http://localhost:5000/api/schemes/getSchemeFromTag/' + tag);
      setSchemes(res.data.result);
      setLoading(false);
    } catch (error) {
      console.log("error is fetching tag wise");
      setLoading(false);
    }
  }

  const fetchEligibilityWise = async () => {
    try {
      setLoading(true);
      const res = await Axios.get('http://localhost:5000/api/schemes/getSchemeFromElig/' + eli);
      console.log(res);
      if(res.data.success === false) {
        alert("no schemes for given eligibility");
        setLoading(false);
        return;
      }
      setSchemes(res.data.result);
      setLoading(false);
    } catch (error) {
      console.log("error is fetching tag wise");
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchTagWise();
  },[tag])

  useEffect(() => {
    fetchAllSchemes();
  },[type]);

  useEffect(() => {
    fetchEligibilityWise();
  },[eli]);

  return (
    <>
    <Header />
    {loading===true ? <div className="h-screen w-screen text-5xl flex flex-col justify-center items-center">loading...</div> :
      <div className="flex w-full justify-between mt-3 h-[60%]">
      <div className="w-[30%] bg-gray-100 ml-2 rounded-lg flex flex-col" style={{Height:"42rem", border:"1px solid gray"}}>
        <h1 className="text-3xl ml-[-70%] mt-3 mb-3">
          Filters 
        </h1>
        <div className="flex flex-raw justify-around w-[95%] m-auto mt-2 border-t-2 py-5 pb-2">
          {/* <span className="text-lg ml-[-20%]">Organization type</span> */}
          <button className="bg-gray-800 text-white px-5 py-2 w-[40%] rounded-lg transition-transform transform hover:scale-105 duration-500"
            onClick={()=>setType("gov")}
          >
          Government Schemes
          </button>
          <button className="bg-gray-800 text-white px-5 py-2 w-[40%] rounded-lg transition-transform transform hover:scale-105 duration-500"
            onClick={()=>setType("private")}
          >
            Private Schemes
          </button>
        </div>

        <div className="flex-col mt-5 w-[95%] m-auto rounded-lg py-3" style={{border:"2px solid gray"}}>
          <p className="ml-[-57%] text-lg mb-3 font-semibold">eligibility wise</p>
          <div className="flex flex-wrap w-[80%] m-auto gap-3">
            {eligibility.map(itm => {
              return (
                <div
                  className="flex bg-gray-800 text-white px-3 rounded-md h-10 items-center transition-transform transform hover:scale-105 duration-500 cursor-pointer"
                  onClick={()=>setEli(itm)}
                >{itm}</div>
              )
            })}
          </div>
        </div>
        <button className="text-lg font-semibold px-3 py-2 m-auto rounded-lg mt-5 mb-5  bg-gray-800 w-max text-white transition-transform transform hover:scale-105 hover:text-red-700 cursor-pointer duration-500"
          onClick={()=>setType("all")}
        >Clear Filters</button>
      </div>
      <div className="bg-gray-100 h-max w-[68.5%] flex flex-col overflow-scroll items-center rounded-lg text-black mr-2" style={{maxHeight:"42rem", border:"1px solid gray"}}>
        <h1 className="fixed text-3xl w-[61%] px-3 font-bold backdrop-blur py-3"
          style={{borderBottom:"3px solid black",borderRadius:"2px"}}
        >
          {type.toUpperCase() === "" ? tag.toUpperCase() + " - Tag Related Schemes" : type.toUpperCase() + " Schemes"}</h1>
        <div className="flex flex-col w-[100%] mt-16 justify-center items-center">
          {schemes.map(itm => {
          return (
            <div class="p-4 m-2 w-[90%] border bg-gray-300 rounded-lg shadow-sm text-black">
            <div class="text-left">
              <p>
                <a href="" class="no-underline text-slate-500 text-base font-thin">
                  {itm?.organization}
                </a>
              </p>
            </div>
            <div class="text-left mt-1">
              <p>
                <a href="" class="no-underline text-slate-500 text-lg font-bold"
                  onClick={()=>navigate('/schemes', {state: {id: itm._id}})}
                >
                {itm?.title}
                </a>
              </p>
            </div>
            <div class="text-left mt-2">
              <p>
                <a
                  href=""
                  class="no-underline text-slate-500 text-base font-thin text-ellipsis"
                >
                  {itm?.description}
                </a>
              </p>
            </div>
            <div class="text-left mt-3 flex">
              {itm.tags.map(tag => {
                return (
                  <div className="whitespace-nowrap z-0 rounded-full w-max bg-purple-100 px-2.5 py-1.5 text-sm text-purple-700 mr-3 cursor-pointer transition-transform transform hover:scale-105 hover:bg-purple-300 duration-500"
                    onClick={()=> {
                      setTag(tag)
                      setType("")
                    }}
                  >
                    {tag}
                  </div>
                )
              })}
          
            </div>
          </div>
          )
          
        })}
      </div>
      </div>
    </div>
    
    }
    </>
  );
}
