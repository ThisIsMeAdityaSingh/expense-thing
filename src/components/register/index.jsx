import React, { useState } from "react";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Button from "@mui/joy/Button";
import FormHelperText from "@mui/joy/FormHelperText";
import Divider from "@mui/joy/Divider";
import Stack from "@mui/joy/Stack";
import Input from "@mui/joy/Input";
import Box from "@mui/joy/Box";
import Chip from "@mui/joy/Chip";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import InfoOutlined from "@mui/icons-material/InfoOutlined";
import ValidationRules from "../../utils/validations";
import { Link } from 'react-router-dom';

export default function Registration() {
  const [registrationState, setRegistrationState] = useState({
    email: "",
    password: "",
    passwordCheck: "",
  });

  const [registrationError, setRegistrationError] = useState({
    email: "",
    password: "",
    passwordCheck: "",
  });

  const [generalError, setGeneralError] = useState("");

  const handleFormChange = event => {
    const {name = '', value = ''} = event.target;

    if (name && value) {
        setRegistrationState(prevState => {
            return {...prevState, [name]: value};
        });
    }

    return;
  };

  const handleFormSubmit = event => {
    event.preventDefault();
    event.stopPropagation();
    
    const emailValidation = ValidationRules.validateEmail(registrationState['email']);
    const passwordValidation = ValidationRules.validatePassword(registrationState['password']);

    const newRegistrationErrorState = {...registrationError};

    if (registrationState["password"] !== registrationState["passwordCheck"]) {
        newRegistrationErrorState.passwordCheck = "Passwords do not match";
    } else {
        newRegistrationErrorState.passwordCheck = "";
    }

    if (emailValidation?.['error']) {
        newRegistrationErrorState.email = emailValidation['error'];
    } else if (emailValidation?.['success']) {
        newRegistrationErrorState.email = '';
    }

    if (passwordValidation?.['error']) {
        newRegistrationErrorState.password = passwordValidation['error'];
    } else if (passwordValidation?.['success']) {
        newRegistrationErrorState.password = '';
    }

    setRegistrationError(newRegistrationErrorState);

    // if there are no errors, we make registration calls
    if (!newRegistrationErrorState.email && !newRegistrationErrorState.password && !newRegistrationErrorState.passwordCheck) {
        
    }

  };

  return (
    <div>
      <Box
        sx={{
          my: 15,
          marginLeft: "auto",
          marginRight: "auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 4,
          p: 3,
          border: "1px solid grey",
          width: "40%",
          borderRadius: "10px",
          boxShadow: "initial",
        }}
      >
        <form style={{ width: "100%" }} onSubmit={handleFormSubmit}>
          <Stack spacing={2}>
            <FormControl error={registrationError['email'] ? true: false}>
              <FormLabel>Email</FormLabel>
              <Input name="email" value={registrationState['email']} placeholder="m@example.com" fullWidth onChange={handleFormChange}/>
              {registrationError["email"] ? (
                <FormHelperText>
                  <InfoOutlined />
                  {registrationError["email"]}
                </FormHelperText>
              ) : (
                <></>
              )}
            </FormControl>
            <FormControl error={registrationError['password'] ? true: false}>
              <FormLabel>Password</FormLabel>
              <Input name="password" value={registrationState['password']} type="password" fullWidth onChange={handleFormChange}/>
              {registrationError["password"] ? (
                <FormHelperText>
                  <InfoOutlined />
                  {registrationError["password"]}
                </FormHelperText>
              ) : (
                <></>
              )}
            </FormControl>
            <FormControl error={registrationError['passwordCheck'] ? true: false}>
              <FormLabel>Re-enter your password</FormLabel>
              <Input name="passwordCheck" value={registrationState['passwordCheck']} type="password" fullWidth onChange={handleFormChange}/>
              {registrationError["passwordCheck"] ? (
                <FormHelperText>
                  <InfoOutlined />
                  {registrationError["passwordCheck"]}
                </FormHelperText>
              ) : (
                <></>
              )}
            </FormControl>
            <Button type="submit" variant="solid">
              Register
            </Button>
          </Stack>
        </form>
        <Divider>
          <Chip variant="soft" color="neutral" size="sm">
            or you can
          </Chip>
        </Divider>
        <Button startDecorator={<GoogleIcon />} sx={{ width: "100%" }}>
          Register with Google
        </Button>
        <Button startDecorator={<FacebookIcon />} sx={{ width: "100%" }}>
          Register with Facebook
        </Button>
        <Divider></Divider>
        <Chip variant="soft" color="neutral" size="sm">
            Want to register yourself? Click <Link to={"/"}>here</Link>.
        </Chip>
      </Box>
    </div>
  );
}
