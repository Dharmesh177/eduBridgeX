"use client"

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const DropDown = () => {

    const [isopen, setIsOpen] = useState(false);
    const options = ["User", "Mentor","Recruiter"];

    return (
        <>
            <div
                onClick={()=>setIsOpen(prev => !prev)}
            >
                <img    
                    src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"

                    className="w-full h-full rounded-circle"
                    // style={{ width: 70, height: 70}}
                    style={{ width: 62, height: 62, marginTop: "0px" }}
                    height="100px"
                    alt=''
                  />
            </div>

            {isopen && 
            <div className='origin-top-right absolute mt-12 rounded-md w-48 h-max right-2 bg-gray-300 border z-50'>
                <ul>
                    {options.map(itm => {
                        return (
                            <li className='pt-2 pb-2 border-b'><Link className="text-lg " to={"/"+itm+"Login"}>{itm} Login</Link></li>
                        )
                    })}
                </ul>
                <button 
                onClick={() => setIsOpen(prev => !prev)}
                className='flex w-full h-max pt-2 pb-2 bg-gray-300 rounded-b-xl h-max text-lg
                items-center justify-center hover:rounded-b-xl duration-500 hover:bg-gray-600 hover:font-bold hover:text-white text-White' href="/#">close</button>    
                
            </div>}
        </>
    );
};

export default DropDown;