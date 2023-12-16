import { TextField } from "@material-ui/core";
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormControl from '@mui/material/FormControl';

const EmailInput = (props) => {
  const {
    label,
    value,
    onChange,
    inputErrorHandler,
    handleInputError,
    required,
    className,
  } = props;

  
  return (
    <FormControl>
        <InputLabel htmlFor="component-outlined">{label}</InputLabel>
        <OutlinedInput
          id="component-outlined"
          label={label}
      variant="outlined"
      value={value}
      onChange={onChange}
      helperText={inputErrorHandler.email.message}
      onBlur={(event) => {
        if (event.target.value === "") {
          if (required) {
            handleInputError("email", true, "Email is required");
          } else {
            handleInputError("email", false, "");
          }
        } else {
          const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          if (re.test(String(event.target.value).toLowerCase())) {
            handleInputError("email", false, "");
          } else {
            handleInputError("email", true, "Incorrect email format");
          }
        }
      }}
      error={inputErrorHandler.email.error}
      className={className}

        />
      </FormControl>
  );
};

export default EmailInput;