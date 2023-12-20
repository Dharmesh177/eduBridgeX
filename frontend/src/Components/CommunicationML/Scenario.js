import React, { useState } from 'react';
import Header from '../Common/Header'
import axios from 'axios';

const Scenario = () => {

    const [fix, setFix] = useState("");
    const [inp, setInp] = useState("");
    const [start, setStart] = useState(false);
    const [resData, setResData] = useState("");

    const handleClick = async(temp) => {
        try {
            if(fix === "Telephone") {
                if(temp === "start") {
                    const res = await axios.post('http://localhost:2000/phone',{
                        input: inp
                    });
                    console.log(res);
                    setResData(res.data.output)
                    setInp("");
                    setStart(true);
                } else {
                    const res = await axios.post('http://localhost:2000/phone',{
                        input: "stop"
                    });
                    console.log(res);
                    setResData(res.data.output)
                    setInp("");
                    setStart(true);
                }
            } else if (fix === "Teacher") {
                if(temp === "start") {
                    const res = await axios.post('http://localhost:2000/teacher',{
                        input: inp
                    });
                    console.log(res);
                    setResData(res.data.output)
                    setInp("");
                    setStart(true);
                } else {
                    const res = await axios.post('http://localhost:2000/teacher',{
                        input: "stop"
                    });
                    console.log(res);
                    setResData(res.data.output)
                    setInp("");
                    setStart(true);
                }
            } else if(fix === "career") {
                if(temp === "start") {
                    const res = await axios.post('http://localhost:2000/teacher',{
                        input: inp
                    });
                    console.log(res);
                    setResData(res.data.output)
                    setInp("");
                    setStart(true);
                } else {
                    const res = await axios.post('http://localhost:2000/teacher',{
                        input: "stop"
                    });
                    console.log(res);
                    setResData(res.data.output)
                    setInp("");
                    setStart(true);
                }
            }
            // console.log(inp);
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <>
        <Header />
            <div className='flex flex-col h-screen w-screen'>
                {start === false ? <div className='flex flex-col w-full'>
                    <h2 className='bg-gray-100 mb-5'>Fixed Scenario</h2>
                    <div className='flex flex-wrap gap-5 justify-center w-[90%] m-auto'>
                            
                        <div className='bg-gray-200 px-5 py-3 w-[20%] flex flex-col text-wrap rounded-lg'
                            onClick={()=>{
                                setStart(true)
                                setFix("career")
                            }}
                        >
                            <h3 className='mb-2'>Career Counselling </h3>
                            <p>Start a Conversation in a Scenario where you are at Railway station</p>
                            {/* <button onClick={()=>setShowTeleOpt(false)} className='ml-48'>X</button> */}
                            {/* {showTeleOpt === false ? <div onClick={()=>setShowTeleOpt(true)}>
                                <h3>Railway Station</h3>
                                <p>Start a Conversation in a Scenario where you are at Railway station</p>
                            </div> :
                            <div className='flex flex-col gap-2'>
                                <button className='bg-gray-300 px-2 py-1 rounded-md'
                                    onClick={()=>{
                                        setShowTeleOpt(false)
                                        handleClick()
                                    }}
                                >Call a Friend</button>  
                                <button className='bg-gray-300 px-2 py-1 rounded-md'
                                    onClick={()=>{
                                        setShowTeleOpt(false)
                                        handleClick()
                                    }}
                                >Call a Teacher</button>   
                                <button className='bg-gray-300 px-2 py-1 rounded-md'
                                    onClick={()=>{
                                        setShowTeleOpt(false)
                                        handleClick()
                                    }}
                                >Call To a service center</button> 
                            </div>} */}
                        </div>
                        <div className='bg-gray-200 px-5 py-3 w-[20%] flex flex-col text-wrap rounded-lg'
                            onClick={()=>{
                                setStart(true)
                                setFix("Telephone")
                            }}
                        >
                            <h3>Telephonic Communication</h3>
                            <p>Start a Conversation in a Scenario where you are in a Telephone call</p>
                            {/* <button onClick={()=>setShowTeleOpt(false)} className='ml-48'>X</button> */}
                            {/* {showTeleOpt === false ? <div onClick={()=>setShowTeleOpt(true)}>
                                <h3>Telephonic Comunication</h3>
                                <p>Start a Conversation in a Scenario where you are in a Telephone call</p>
                            </div> :
                            <div className='flex flex-col gap-2'>
                                <button className='bg-gray-300 px-2 py-1 rounded-md'
                                    onClick={()=>{
                                        setShowTeleOpt(false)
                                        handleClick()
                                    }}
                                >Call a Friend</button>  
                                <button className='bg-gray-300 px-2 py-1 rounded-md'
                                    onClick={()=>{
                                        setShowTeleOpt(false)
                                        handleClick()
                                    }}
                                >Call a Teacher</button>   
                                <button className='bg-gray-300 px-2 py-1 rounded-md'
                                    onClick={()=>{
                                        setShowTeleOpt(false)
                                        handleClick()
                                    }}
                                >Call To a service center</button> 
                            </div>} */}
                        </div>
                            
                        <div className='bg-gray-200 px-5 py-3 w-[20%] flex flex-col text-wrap rounded-lg'
                            onClick={()=>{
                                setStart(true)
                                setFix("Teacher")
                            }}
                        >
                            <h3>Chat With Teacher</h3>
                            <p>Start a Conversation in a Scenario where you are welcoming guests at your home</p>
                            {/* <button onClick={()=>setShowTeleOpt(false)} className='ml-48'>X</button> */}
                            {/* {showTeleOpt === false ? <div onClick={()=>setShowTeleOpt(true)}>
                                <h3>Welcoming Guests</h3>
                                <p>Start a Conversation in a Scenario where you are welcoming guests at your home</p>
                            </div> :
                            <div className='flex flex-col gap-2'>
                                <button className='bg-gray-300 px-2 py-1 rounded-md'
                                    onClick={()=>{
                                        setShowTeleOpt(false)
                                        handleClick()
                                    }}
                                >Call a Friend</button>  
                                <button className='bg-gray-300 px-2 py-1 rounded-md'
                                    onClick={()=>{
                                        setShowTeleOpt(false)
                                        handleClick()
                                    }}
                                >Call a Teacher</button>   
                                <button className='bg-gray-300 px-2 py-1 rounded-md'
                                    onClick={()=>{
                                        setShowTeleOpt(false)
                                        handleClick()
                                    }}
                                >Call To a service center</button> 
                            </div>} */}
                        </div>
                        {/* <div className='bg-gray-200 px-5 py-3 w-[20%] flex flex-col text-wrap rounded-lg'>
                            <h3 className='mb-2'>Appointment</h3>
                            <p>Start a Conversation in a Scenario where you are taking doctor's appointment</p> */}
                            {/* <button onClick={()=>{
                                        setShowTeleOpt(false)
                                        handleClick()
                                    }} className='ml-48'>X</button> */}
                            {/* {showTeleOpt === false ? <div onClick={()=>setShowTeleOpt(true)}>
                                <h3 className='mb-2'>Appointment</h3>
                                <p>Start a Conversation in a Scenario where you are taking doctor's appointment</p>
                            </div> :
                            <div className='flex flex-col gap-2'>
                                <button className='bg-gray-300 px-2 py-1 rounded-md'
                                    onClick={()=>{
                                        setShowTeleOpt(false)
                                        handleClick()
                                    }}
                                >Call a Friend</button>  
                                <button className='bg-gray-300 px-2 py-1 rounded-md'
                                    onClick={()=>{
                                        setShowTeleOpt(false)
                                        handleClick()
                                    }}
                                >Call a Teacher</button>   
                                <button className='bg-gray-300 px-2 py-1 rounded-md'
                                    onClick={()=>{
                                        setShowTeleOpt(false)
                                        handleClick()
                                    }}
                                >Call To a service center</button> 
                            </div>} */}
                        {/* </div>   */}
                    </div>
                    {/* <div className='mt-24 flex flex-col justify-center items-center'>
                        <h2 className='ml-[-47%] mb-3'>Create Your Own Scenario</h2>
                        <input 
                            type='text'
                            className='h-12 w-[50%] rounded-lg bg-white shadow bg-black text-center'
                            placeholder='Ex. Asking Stranger For a place'
                            value={inp}
                            onChange={(e)=>setInp(e.target.value)}
                        />
                        <button
                            className='bg-gray-700 px-10 py-2 text-lg text-white mt-4 rounded-lg'
                            onClick={handleClick}
                        >Start Communicating</button>
                    </div> */}
                </div> :
                <div className='flex flex-col mb-10'>
                    <div className='w-[50%] m-auto min-h-24 text-xl bg-white shadow border mb-5 mt-5 flex justify-center items-center p-10'>
                        {resData === "" ? "Responce..." : resData}
                    </div> 
                    <textarea 
                        type='textarea'
                        className='h-28 w-[50%] rounded-lg bg-white m-auto mt-3 mb-5 shadow bg-black text-center p-10 text-xl'
                        placeholder={`Give appropriate response as you are in ${fix} Scenario`}
                        value={inp}
                        onChange={(e)=>setInp(e.target.value)}
                    />
                    <div className='flex gap-5 w-[30%] m-auto'>
                    <button
                        onClick={()=>handleClick("start")}
                        className='bg-gray-700 text-white w-max m-auto px-4 py-2 mb-5 rounded-lg'
                    >Submit</button> 

                    <button
                        onClick={()=>handleClick("stop")}
                        className='bg-gray-700 text-white w-max m-auto px-4 py-2 mb-5 rounded-lg'
                    >Stop</button> 
                    
                    <button
                        onClick={()=>{
                            setStart(false)
                            setResData("");
                        }}
                        className='bg-gray-700 text-white w-max m-auto px-4 py-2 mb-5 rounded-lg'
                    >Close</button> 
                    </div>
                     
                </div>}
            </div>
        </>
    );
};

export default Scenario;

