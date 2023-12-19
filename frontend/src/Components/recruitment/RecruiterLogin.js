import { useContext, useEffect, useState } from "react";
import {
  Grid,
  TextField,
  Button,
  Typography,
  makeStyles,
  Paper,
} from "@material-ui/core";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Cookies from 'universal-cookie';


import EmailInput from "../lib/EmailInput";
import EmailInput2 from "../lib/PasswordInput";
// import { SetPopupContext } from "../App";

// import apiList from "../lib/apiList";
// import isAuth from "../lib/isAuth";

const useStyles = makeStyles((theme) => ({
  body: {
    padding: "60px 60px",
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%,-50%)",
    display: "flex",
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"center",
    borderRadius: "21px",
    backgroundColor: "#f4f4f4"
  },
  inputBox: {
    width: "300px",
  },
  submitButton: {
    width: "300px",
  },
}));

const RecruiterLogin = (props) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const cookies = new Cookies();

//   const setPopup = useContext(SetPopupContext);

//   const [loggedin, setLoggedin] = useState(isAuth());

  const [loginDetails, setLoginDetails] = useState({
    email: "",
    password: "",
  });

  const [inputErrorHandler, setInputErrorHandler] = useState({
    email: {
      error: false,
      message: "",
    },
    password: {
      error: false,
      message: "",
    },
  });

  const handleInput = (key, value) => {
    setLoginDetails({
      ...loginDetails,
      [key]: value,
    });
  };

  const handleInputError = (key, status, message) => {
    setInputErrorHandler({
      ...inputErrorHandler,
      [key]: {
        error: status,
        message: message,
      },
    });
  };


  useEffect(() => {
    const token = cookies.get('RecruiterToken');
    if(token) {
      navigate('/employ_dashboard')
    }
  },[])

  const handleLogin = async () => {
    const res = await axios.post("http://localhost:5000/recruiter/login", loginDetails);
    if (res.status === 200) {
      console.log("res.data", res.data);

      cookies.set("RecruiterToken", res.data.token, { path: "/" });

      alert("You're Login successfully, now Please Move on !!!")
      navigate("/employ_dashboard");
    } else {
      console.log("res.message", res.message);
      alert("Failed to Register !!!!")
    }
  };

  return(
// loggedin ? (
//     <Redirect to="/" />
//   ) : (
    <>
        <Paper elevation={3} className={classes.body}>
      <Grid container direction="column" spacing={4} alignItems="center">
        <Grid item>
          <Typography variant="h3" component="h2">
            Recruitor Login
          </Typography>
        </Grid>
        <Grid item>
          <EmailInput
            label="Email"
            value={loginDetails.email}
            onChange={(event) => handleInput("email", event.target.value)}
            inputErrorHandler={inputErrorHandler}
            handleInputError={handleInputError}
            className={classes.inputBox}
          />
        </Grid>
        <Grid item>
          <EmailInput2
            label="password"
            value={loginDetails.password}
            onChange={(event) => handleInput("password", event.target.value)}
            inputErrorHandler={inputErrorHandler}
            handleInputError={handleInputError}
            className={classes.inputBox}
          />
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            color="primary"
            onClick={handleLogin}
            className={classes.submitButton}
          >
            Login
          </Button>
        </Grid>
        {/* <Button
            variant="contained"
            color="primary"
            onClick={handleLogin}
            className={classes.submitButton}
          >
            Haven't Signed up Yet? Sign Up
          </Button> */}
          <p className="text-lg">Havent Signed Up Yet? Click <Link to="/RecruiterSignUp"className="font-semibold text-blue-800 underline">Here</Link> To Sign Up</p>
      </Grid>
    </Paper>
  </>
  );
};

export default RecruiterLogin;