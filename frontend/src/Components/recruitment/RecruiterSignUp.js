import { useContext, useState } from "react";
import {
  Grid,
  TextField,
  Button,
  Typography,
  makeStyles,
  Paper,
} from "@material-ui/core";

import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import FormControl from "@mui/material/FormControl";
import EmailInput from "../lib/EmailInput";
import EmailInput2 from "../lib/PasswordInput";
import axios from "../../helpers/axios";
import { Link, useNavigate } from "react-router-dom";
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
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
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

const RecruiterSignUp = (props) => {
  const classes = useStyles();
  //   const setPopup = useContext(SetPopupContext);

  //   const [loggedin, setLoggedin] = useState(isAuth());

  const navigate = useNavigate();

  const [loginDetails, setLoginDetails] = useState({
    name: "",
    email: "",
    password: "",
    bio: "",
    contact_number: "",
    type: "",
  });

  const [inputErrorHandler, setInputErrorHandler] = useState({
    email: {
      error: false,
      message: "",
    },
    name: {
      error: false,
      message: "",
    },
    password: {
      error: false,
      message: "",
    },
    bio: {
      error: false,
      message: "",
    },
    contact_number: {
      error: false,
      message: "",
    },
    type: {
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

  const handleLogin = async () => {
    const res = await axios.post("http://localhost:5000/recruiter/recruiter/add", loginDetails);
    if (res.status === 200) {
      console.log("res.data", res.data);
      alert("You're SIgn`up successfully, now Please Login !!!")
      navigate("/RecruiterLogin");
    } else {
      console.log("res.message", res.message);
      alert("Failed to Register !!!!")
    }
  };

  return (
    // loggedin ? (
    //     <Redirect to="/" />
    //   ) : (
    <>
      <Paper elevation={3} className={classes.body}>
        <Grid container direction="column" spacing={4} alignItems="center">
          <Grid item>
            <Typography variant="h3" component="h2">
              Recruitor Registration
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
            <FormControl>
              <InputLabel htmlFor="component-outlined">name</InputLabel>
              <OutlinedInput
                id="component-outlined"
                label="Name"
                value={loginDetails.name}
                onChange={(event) => handleInput("name", event.target.value)}
                className={classes.inputBox}
                error={inputErrorHandler.name.error}
                helperText={inputErrorHandler.name.message}
                onBlur={(event) => {
                  if (event.target.value === "") {
                    handleInputError("name", true, "Name is required");
                  } else {
                    handleInputError("name", false, "");
                  }
                }}
                variant="outlined"
              />
            </FormControl>
          </Grid>

          <Grid item>
            <FormControl>
              <InputLabel htmlFor="component-outlined">Contact No</InputLabel>
              <OutlinedInput
                id="component-outlined"
                label="Contact No"
                value={loginDetails.contact_number}
                onChange={(event) =>
                  handleInput("contact_number", event.target.value)
                }
                className={classes.inputBox}
                error={inputErrorHandler.contact_number.error}
                helperText={inputErrorHandler.contact_number.message}
                onBlur={(event) => {
                  if (event.target.value === "") {
                    handleInputError(
                      "contact_number",
                      true,
                      "contact_number is required"
                    );
                  } else {
                    handleInputError("contact_number", false, "");
                  }
                }}
                variant="outlined"
              />
            </FormControl>
          </Grid>

          <Grid item>
            <FormControl>
              <InputLabel htmlFor="component-outlined">
                Role in Organization
              </InputLabel>
              <OutlinedInput
                id="component-outlined"
                label="Role in Organization"
                value={loginDetails.type}
                onChange={(event) => handleInput("type", event.target.value)}
                className={classes.inputBox}
                error={inputErrorHandler.type.error}
                helperText={inputErrorHandler.type.message}
                onBlur={(event) => {
                  if (event.target.value === "") {
                    handleInputError("type", true, "role is required");
                  } else {
                    handleInputError("type", false, "");
                  }
                }}
                variant="outlined"
              />
            </FormControl>
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
              Register
            </Button>
          </Grid>
          <p className="text-lg">Already Logged in? Click <Link to="/RecruiterLogin"className="font-semibold text-blue-800 underline">Here</Link> To Log in</p>
        </Grid>
      </Paper>
    </>
  );
};

export default RecruiterSignUp;
