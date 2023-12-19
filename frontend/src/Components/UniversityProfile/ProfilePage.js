import React,{useState, useEffect} from 'react';
import ProfileInputField from '../Profile/ProfileInputField';
import Button from '../Common/Button';
import axios from 'axios';
import Cookie from 'universal-cookie';
import { jwtDecode } from 'jwt-decode';

var data = {};

const ProfilePage = ({ fun, fun2 }) => {

    const [tagList, setTaglist] = useState([]);
    const [explist, setExplist] = useState([]);

    const [timeframe, setTimeFrame] = useState("");

    const [timeframe2, setTimeFrame2] = useState("");
const [ddata,setddata] = useState();

     const cookies = new Cookie();
    //  const UserType = cookies.get('userType');

    //  const CollegeId = cookies.get('uTypeId')


    const [showw, setshoww] = useState("false");
    const [userData, setUserData] = useState({
        data: {}
    });

    const Handle_toggle = () => {
        const img = document.getElementById("pop_Container");
        console.log(img);
    };

    const handleeditclick = () => {
        setshoww("true");
        console.log(showw);
    };

    const handlesubmit = (e) => {
        setshoww("false");
    };
    const setToTaglist = (e, k) => {
        if (e.keyCode == 13) {
        setTaglist([...tagList, k]);
        e.target.value = "";
        }
    };
    
    const setToExplist = (e, k) => {
        if (e.keyCode == 13) {
        setExplist([...tagList, k]);
        e.target.value = "";
        }
    };

    const fetchUser = async () => {
        try {
            const token = cookies.get('MentorToken');
            const tokendata = jwtDecode(token);
            data = await axios.get('http://localhost:5000/api/mentors/mentor/'+tokendata.id);
            data = data.data.user;
            console.log(data);
            setUserData(data);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        fetchUser();
        console.log(data);
        console.log(userData);
    }, [data]);

    return (
        <div>
            <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginRight: "auto",
              marginLeft: "auto",
              textAlign: "start",
              marginLeft: 40,
              width: "-webkit-fill-available",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginTop: 20,
              }}
            >
              <div
                style={{
                  fontFamily: "poppins",
                  fontWeight: "600",
                  fontSize: 26,
                  marginLeft: 30,
                }}
              >
                My Profile
              </div>
              <button
                className='bg-black text-white w-max px-3 py-2 ml-[75%] rounded-lg'
                onClick={()=>{
                    fun(false);
                    fun2(true);
                }}
              >back</button>
              <div
                style={{
                  border: "2px solid #F5F7F9",
                  marginLeft: "auto",
                  marginRight: "auto",
                  height: 1,
                  marginTop: 5,
                  width: "-webkit-fill-available",
                }}
              ></div>
            </div>

            <div style={{ display: "flex", flexDirection: "row" }}>
              <div className="inputchange">
                <div style={{ width: "-webkit-fill-available" }}>
                  <ProfileInputField
                    title={"Menter Name"}
                    placeholder={"Ex: Dharmesh Vala"}
                    vale={data?.name}
                  />
                </div>

                <div>
                  <ProfileInputField
                    title={"Intro"}
                    placeholder={
                      "Ex: Re-engineer curricula to meet global  employment requirements. Promote innovative practices at all levels."
                    }
                    // vale={
                    //   "Re-engineer curricula to meet global  employment requirements. Promote innovative practices at all levels."
                    // }
                    vale={data.intro}
                  />
                </div>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    flexGrow: "1",
                  }}
                >
                  <ProfileInputField
                    title={"Email"}
                    placeholder={"Ex: Dvala453@gmail.com"}
                    vale={data?.email}
                  />
                  <div style={{ marginLeft: 10, flexGrow: "1" }}>
                    <ProfileInputField
                      title={"Type"}
                      placeholder={"Ex: Private"}
                      vale={"Private"}
                    />
                  </div>
                </div>

                <div>
                  <ProfileInputField
                    title={"Address"}
                    placeholder={"Ex: Mota Bazar, Vallabh Vidyanagar"}
                    vale={"Mota Bazar, Vallabh Vidyanagar"}
                  />
                </div>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    flexGrow: "1",
                  }}
                >
                  <ProfileInputField
                    title={"District"}
                    placeholder={"Ex: Anand"}
                    vale={data?.district}
                  />
                  <div style={{ marginLeft: 10, flexGrow: "1" }}>
                    <ProfileInputField
                      title={"State"}
                      placeholder={"Ex: Gujarat"}
                      vale={data.state}
                    />
                  </div>
                </div>

                <div>
                  <ProfileInputField
                    title={"Laungauges"}
                    placeholder={"Ex: English"}
                    vale={"English, Hindi"}
                  />
                </div>

                <div>
                  <label
                    style={{ textAlign: "left" }}
                    for="desc"
                    className="col-sm-2 downn col-form-label"
                  >
                    <strong>Technology:</strong>
                  </label>
                  <input
                    className="form-control form-input"
                    name="tag"
                    id="tag"
                    placeholder="Ex. Web Development"
                    onKeyUp={(e) => setToTaglist(e, timeframe)}
                    onChange={(e) => setTimeFrame(e.target.value)}
                  />
                </div>

                <div className="a_fillter">
                  <div className="tags">
                    {tagList.map((ele) => {
                      return (
                        <div className="tag">
                          <p>{ele}</p>
                          {/* <img src={('img/close.png')} alt="cross" className='close' onClick={}/> */}
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div>
                  <label
                    style={{ textAlign: "left" }}
                    for="desc"
                    className="col-sm-2 downn col-form-label"
                  >
                    <strong>Expertise:</strong>
                  </label>
                  <input
                    className="form-control form-input"
                    name="exp"
                    id="exp"
                    placeholder="Ex. Web"
                    onKeyUp={(e) => setToExplist(e, timeframe2)}
                    onChange={(e) => setTimeFrame2(e.target.value)}
                  />
                </div>

                <div className="a_fillter">
                  <div className="tags">
                    {explist.map((ele) => {
                      return (
                        <div className="tag">
                          <p>{ele}</p>
                          {/* <img src={('img/close.png')} alt="cross" className='close' onClick={}/> */}
                        </div>
                      );
                    })}
                  </div>
                </div>


                <div>
                  <ProfileInputField
                    title={"Industry"}
                    placeholder={
                      "Ex: write your Industry and press enter to add"
                    }
                    vale={"IT"}
                  />
                </div>

                <div>
                  <ProfileInputField
                    title={"Tools"}
                    placeholder={"Ex: write your tool and press enter to add"}
                    vale={"VS Code"}
                  />
                </div>

                <div
                  style={{
                    marginTop: 20,
                    justifyContent: "end",

                    display: "flex",
                    marginBottom: "50px",
                  }}
                >
                  <Button title={"Request For Edit"} />
                </div>
              </div>
            </div>
          </div>
        </div>
    );
};

export default ProfilePage;