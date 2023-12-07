import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Components/GeneralCSS/main.css";
import Home from './Components/Home/Home';
import Blogs from './Components/Blog/Blog';
import BlogPage from './Components/Blog/BlogPage';
import UniProfile from './Components/UniversityProfile/UniProfile';
// import Studentlog from "./loginsignup/login";
// import StudentSign from "./loginsignup/signin";
// import StudentForgot from "./loginsignup/forgot1";
// import Mainchat from "./Components/chatComp/mainchat";
// import Developerlogin from "./Components/loginsigninuser/login";
// import Developersignin from "./Components/loginsigninuser/signin";
// import Developerforgot from "./Components/loginsigninuser/forgot1";
// import Login from "./Components/loginsigninuser/login";
import AddBlog from './Components/Blog/AddBlog';
import MyBlogs from './Components/Blog/MyblogsPage';
import EditBlog from './Components/Blog/EditBlogPage';
import Dashboard from "./Components/admindashboard/dash";

import MEvents from './Components/UniversityProfile/MEvents';



import EventPage from './Components/Event/EventPage';
import ResourcePage from './Components/Resource/ResourcePage';
import MHistory from './Components/UniversityProfile/MHistory';
import Myprofilehistory from './Components/Profile/MyProfileHistory';
import MResources from './Components/UniversityProfile/MResources';
import StudentProfile from './Components/Profile/StudentProfile';
import MyProfile from './Components/Profile/MyProfile';
import BecomeMenter from './Components/ProjectUpload/BecomeMenter';
import Pop from './Components/UniversityProfile/Pop';
import Roadmap from './Components/Roadmap/Roadmap';
import Profile from './Components/Profile/Profile';
import FullRoadmapShow from './Components/Roadmap/FullRoadmapShow';
import FullEvent from './Components/Event/FullEvent';
import Login from './Components/Login/Login';
import SignUp from './Components/SignUp/SignUp';
import LLogin from './Components/stulogin/Login';
import SSignUp from './Components/stulogin/SignUp';
import VoiceSearch from './Components/VoiceSearch/VoiceSearch';
function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
      <Route index path="/" element={<Home/>} />
      <Route index path="/blog" element={<Blogs/>} />
      <Route index path="/voice" element={<VoiceSearch/>} />
      <Route index path="/blogpage" element={<BlogPage/>} />
      <Route index path="/addblog" element={<AddBlog/>} />
      <Route index path="/myblog" element={<MyBlogs/>} />
      <Route index path="/mentorpage" element={<UniProfile/>} />
      <Route index path="/mentorevents" element={<MEvents/>} />
      <Route index path="/mentorhistory" element={<MHistory/>} />
      <Route index path="/mentorresources" element={<MResources/>} />
      <Route index path="/temp" element={<FullEvent/>} />
      <Route index path="/editblog/:blogid" element={<EditBlog/>} />
      <Route index path="/login" element={<Login/>} />
      <Route index path="/signup" element={<SignUp/>} />
      <Route index path="/slogin" element={<LLogin/>} />
      <Route index path="/ssignup" element={<SSignUp/>} />
      <Route index path="/event" element={<EventPage/>} />
      <Route index path="/resources" element={<ResourcePage/>} />
      <Route index path="/profile" element={<Profile/>} />
      <Route index path="/profilehistory" element={<StudentProfile/>} />
      <Route index path="/0" element={<MyProfile/>} />
      <Route index path="/pop" element={<Pop/>} />
      <Route index path="/roadmap" element={<Roadmap/>} />
      <Route index path="/FullRoadmapShow" element={<FullRoadmapShow/>} />
      <Route path="/:adminid" element={<Dashboard />} />
      <Route index path="/becomementor" element={<BecomeMenter/>} />

      <Route index path="/dashboard" element={<Dashboard/>} />
      </Routes>
  
    <Routes>  
  </Routes>   
  </BrowserRouter>
    </div>
  );
}

export default App;
