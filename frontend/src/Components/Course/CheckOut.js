import Axios from 'axios';
import React, { useEffect } from 'react'
import { useState, useRef } from 'react'
import { useLocation } from 'react-router-dom';

export default function CarrierCouncelling() {

    const location = useLocation();
    const [course, setCourse] = useState({});
    const [id, setId] = useState("");

    const fetchCourse = async(id) => {
        try {
            const res = await Axios.get('http://localhost:5000/api/Course/getCourseById/' + id);
            console.log(res.data);
            setCourse(res.data);
        } catch (err) {
            
        }
    }

    const handleClick = async () => {
        try {
            console.log("hello");
            const res = await Axios.get('http://localhost:5000/api/Course/updateCounter/' + id);
            console.log("hello2");
            // console.log(res);
        } catch (err) {
            console.log(err);
        }
    }
   
    useEffect(()=>{
        const id = location.state.id;
        console.log(id);
        setId(id);
        fetchCourse(id);

        const rzpPaymentForm = document.getElementById("rzp_payment_form");
        
        if (!rzpPaymentForm.hasChildNodes()) {
    
          const script = document.createElement("script");
          script.src = "https://checkout.razorpay.com/v1/payment-button.js";
          script.async = true;
          script.dataset.payment_button_id = "pl_NEYQw7fpIA9PPW";
          rzpPaymentForm.appendChild(script);
    
        
      }

    },[])

    return (
        <div className="bg-gray-100 h-screen py-8">
            <div className="container rounded-md p-4 bg-gray-200 border border-black mx-auto px-4">
                <h1 className="text-3xl font-bold mb-4">EduBridgeX Cources</h1>
                <hr />
                <div className="flex flex-col md:flex-row gap-4">
                    <div className="md:w-3/4">
                        <div className="bg-white rounded-lg shadow-md p-6 mb-4">
                            <table className="w-full">
                                <thead>
                                    <tr>
                                        <th className="text-left font-semibold">Product</th>
                                        <th className="text-left font-semibold">Price</th>
                                        {/* <th className="text-left font-semibold">Months</th> */}
                                        <th className="text-left font-semibold">Total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="py-4">
                                            <div className="flex items-center">
                                                <img className="h-16 w-16 mr-4" src="https://via.placeholder.com/150" alt="Product image" />
                                                    <span className="font-semibold">{course.title}</span>
                                            </div>
                                        </td>
                                        <td className="py-4">{course.price} Rs.</td>
                                        <td className="py-4">
                                            {/* <div className="flex items-center">
                                                <button className="border rounded-md py-2 px-4 mr-2">-</button>
                                                <span className="text-center w-8">1</span>
                                                <button className="border rounded-md py-2 px-4 ml-2">+</button>
                                            </div> */}
                                        </td>
                                        <td className="py-4">{course.price}</td>
                                    </tr>
                                    {/* <!-- More product rows --> */}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="md:w-1/4">
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <h2 className="text-lg font-semibold mb-4">Summary</h2>
                            <div className="flex justify-between mb-2">
                                <span>Subtotal</span>
                                <span>{course.price}</span>
                            </div>
                            <div className="flex justify-between mb-2">
                                <span>Taxes</span>
                                <span>{0}</span>
                            </div>
                            <hr className="my-2" />
                                <div className="flex justify-between mb-2">
                                    <span className="font-semibold">Total</span>
                                    <span className="font-semibold">{course.price}</span>
                                </div>
                            <form id="rzp_payment_form"
                                onClick={handleClick}
                            ></form>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}