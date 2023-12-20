import React,{useEffect, useState} from 'react';
import StarIcon from '@mui/icons-material/Star';
import Beginner from "../../Assets/Images/beginner.jpg";
import Intermediate from "../../Assets/Images/intermediate.jpg";
import Master from "../../Assets/Images/master.jpg";
import Axios from 'axios';
import Cookie from 'universal-cookie'
import { jwtDecode } from 'jwt-decode';
import Header from '../Common/Header';

var data = {};

const UserProfile = () => {

    // const [userData, setUserData] = useState({});
    const cookies = new Cookie();

    const [singleUser, setSingleUser] = useState();
    const [rating, setRating] = useState();

    const [state, setState] = useState(false);

    const fetchUserData = async () => {
        const token = cookies.get('UserToken');
        const tokenData = jwtDecode(token);
        console.log(tokenData);
        try {
            const res = await Axios.get('http://localhost:5000/api/users/user/' + tokenData.id);
            console.log(res.data);
            data = res.data;
        } catch (err) {
            
        }
    }

    setInterval(()=>{setState(prev => !prev)}, 5000)

    useEffect(()=>{
        fetchUserData();
        console.log(data);
    },[])


    return (
        <div className='w-screen h-screen flex-col bg-gray-50'>
            <Header />
            {/* <h1 className='border'>My Profile</h1> */}
            <div className='flex justify-center items-center gap-24 mt-16'>
                <div className='flex-col bg-gray-200 p-12 w-[50%] h-[50%] border shadow'>
                    <div className='flex w-full'>
                        <div className='flex flex-col w-[50%]'>
                            <label className='font-semibold'>First Name</label>
                            <input 
                                className='h-10 border-1 bg-gray-50 text-center w-[90%] m-auto rounded-lg shadow-md'
                                placeholder='First Name'
                                value={data?.name}
                            /> 
                        </div>
                        <div className='flex flex-col w-[50%]'>
                            <label className='font-semibold'>Last Name</label>
                            <input 
                                className='h-10 border-1 bg-gray-50 text-center w-[90%] m-auto rounded-lg shadow-md'
                                placeholder='Last Name'
                                value={data?.name}
                            /> 
                        </div>
                    </div>
                    <div className='flex flex-col mt-4'>
                        <label className='font-semibold'>About Me</label>
                        <input 
                            className='h-10 border-1 bg-gray-50 text-center w-[95%] m-auto rounded-lg shadow-md'
                            placeholder='Last Name'
                            value={"I am a Student"}
                        /> 
                    </div>
                    <div className='flex mt-4'>
                        <div className='flex flex-col bg-gray-200 w-[50%]'>
                            <label className='font-semibold'>Date Of Birth</label>
                            <input 
                                className='h-10 border-1 bg-gray-50 text-center w-[90%] m-auto rounded-lg shadow-md'
                                placeholder='DOB'
                                value={"22/02/2004"}
                            /> 
                        </div>
                        <div className='flex flex-col w-[50%]'>
                            <label className='font-semibold'>Gender</label>
                            <input 
                                type='select'
                                className='h-10 border-1 bg-gray-50 text-center w-[90%] m-auto rounded-lg shadow-md'
                                placeholder='Gender'
                                value={"male"}
                            /> 
                        </div>
                    </div>
                    <div className='flex w-full mt-4'>
                        <div className='flex flex-col w-[50%]'>
                            <label className='font-semibold'>Passing Year</label>
                            <input 
                                className='h-10 border-1 bg-gray-50 text-center w-[90%] m-auto rounded-lg shadow-md'
                                placeholder='First Name'
                                value={"2022"}
                            /> 
                        </div>
                        <div className='flex flex-col w-[50%]'>
                            <label className='font-semibold'>Skill-set</label>
                            <input 
                                className='h-10 border-1 bg-gray-50 text-center w-[90%] m-auto rounded-lg shadow-md'
                                placeholder='Last Name'
                                value={"Web-Development"}
                            /> 
                        </div>
                    </div>
                    <div className='flex flex-col mt-4'>
                        <label className='font-semibold'>College Name</label>
                        <input 
                            className='h-10 border-1 bg-gray-50 text-center w-[95%] m-auto rounded-lg shadow-md'
                            placeholder='Last Name'
                            value={"Birla Vishvakarma Mahavidyalaya"}
                        /> 
                    </div>
                </div>
                <div className='bg-gray-200 h-full p-16 border shadow'>
                    <div
                        style={{
                        display: "flex",
                        flexDirection: "column",
                        marginLeft: "auto",
                        marginRight: "auto",
                        }}
                    >
                        <div
                        className="w-full flex justify-center h-32"
                        // style={{ marginTop: 20, marginBottom: "auto" }}
                        >
                        <img
                            src="https://media.architecturaldigest.com/photos/57c7003fdc03716f7c8289dd/16:9/w_1920,c_limit/IMG%20Worlds%20of%20Adventure%20-%201.jpg"
                            className="rounded-full w-32"
                        /> 
                        </div>
                        <div
                        style={{
                            fontFamily: "poppins",
                            fontSize: 22,
                            fontWeight: "bold",
                            marginTop: 10,
                        }}
                        >
                        Profile Picture
                        </div>
                        
                        <div style={{ marginTop: 50 }}></div>
                        {/* <button
                        style={{
                            width: "fit-content",
                            paddingLeft: 30,
                            paddingRight: 30,
                            marginBottom: "auto",
                            marginTop: "auto",
                            display: "flex",
                            justifyContent: "center",
                            height: 45,
                            borderColor: "#2C5EFF",
                            borderWidth: 1,
                            borderRadius: 5,
                            background: "#ffffff",
                            marginLeft: "auto",
                            marginRight: "auto",
                            boxShadow: "0px 0px 20px 0px rgba(0,0,0,0.2)",
                        }}
                        >
                        <div style={{}}>
                            <i
                            className="material-icons"
                            style={{
                                marginLeft: 10,
                                fontSize: 28,
                                color: "#2C5EFF",
                                paddingTop: 7,
                                marginTop: "auto",
                                marginBottom: "auto",
                            }}
                            >
                            edit
                            </i>
                        </div>
                        <div
                            style={{
                            fontFamily: "poppins",
                            fontWeight: "bold",
                            marginTop: "auto",
                            marginBottom: "auto",
                            color: "#2C5EFF",
                            marginLeft: 10,
                            }}
                        >
                            Edit Picture
                        </div>
                        </button> */}
                        {/* <div style={{ fontFamily: 'poppins', fontWeight: 500, fontSize: 22 }}>Point</div> */}

                        <hr className="horizontal-line"></hr>

                        <div style={{ display: "flex", flexDirection: 'row' }}>
                        {rating < 200 ? <img style={{ boxShadow: "0px 0px 40px 10px rgba(199,199,199,1)", backgroundColor: '#2C5EFF', width: 70, borderRadius: '50%' }} src={Beginner} /> : rating > 700 ? <img src={Intermediate} style={{ backgroundColor: '#2C5EFF', width: 70, borderRadius: '50%' }} /> : <img src={Master} style={{ backgroundColor: '#2C5EFF', width: 70, borderRadius: '50%' }} />}
                        <div style={{ display: "flex", flexDirection: "column", marginTop: 'auto', marginBottom: 'auto' }}>
                            <div style={{ fontFamily: 'poppins', fontWeight: 500, marginTop: "auto", marginBottom: 'auto', marginLeft: 15, fontSize: 22 }}>{rating < 200 ? "Beginner" : rating < 700 ? "Intermediate" : "Master"}</div>

                            <div style={{ display: "flex", flexDirection: 'row', marginLeft: 13 }}>
                            <StarIcon />
                            <div style={{ fontFamily: 'poppins', marginLeft: 5, fontSize: 18, }}>576</div>
                            </div>
                        </div>
                        </div>
                        <div style={{ marginTop: 70 }}></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;