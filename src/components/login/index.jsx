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

// local imports
import ValidationRules from "../../utils/validations";

export default function Login() {
  const [loginState, setLoginState] = useState({
    email: "",
    password: "",
  });

  const [loginErrorState, setLoginErrorState] = useState({
    email: "",
    password: "",
  });

  const [generalError, setGeneralError] = useState("");

  const handleFormChange = event => {
    const {name = '', value = ''} = event.target;

    if (name && value) {
        setLoginState(prevState => {
            return {...prevState, [name]: value};
        });
    }

    return;
  };

  const handleFormSubmit = event => {
    event.stopPropagation();
    event.preventDefault();

    // take values from the state and validate them
    const emailValidation = ValidationRules.validateEmail(loginState['email']);
    const passwordValidation = ValidationRules.validatePassword(loginState['password']);

    const newLoginErrorState = {...loginErrorState};

    if (emailValidation?.['error']) {
        newLoginErrorState.email = emailValidation['error'];
    } else if (emailValidation?.['success']) {
        newLoginErrorState.email = '';
    }

    if (passwordValidation?.['error']) {
        newLoginErrorState.password = passwordValidation['error'];
    } else if (passwordValidation?.['success']) {
        newLoginErrorState.password = '';
    }

    setLoginErrorState(newLoginErrorState);

    // only continue when there is no validation error reported.
    if (passwordValidation?.['success'] && emailValidation?.['success']) {
        // make API call to login API
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
            <FormControl error={loginErrorState["email"]}>
              <FormLabel>Email</FormLabel>
              <Input name="email" value={loginState['email']} placeholder="m@example.com" fullWidth onChange={handleFormChange}/>
              {loginErrorState["email"] ? (
                <FormHelperText>
                  <InfoOutlined />
                  {loginErrorState["email"]}
                </FormHelperText>
              ) : (
                <></>
              )}
            </FormControl>
            <FormControl error={loginErrorState['password']}>
              <FormLabel>Password</FormLabel>
              <Input name="password" value={loginState['password']} type="password" fullWidth onChange={handleFormChange}/>
              {loginErrorState["password"] ? (
                <FormHelperText>
                  <InfoOutlined />
                  {loginErrorState["password"]}
                </FormHelperText>
              ) : (
                <></>
              )}
            </FormControl>
            <Button type="submit" variant="solid">
              Login
            </Button>
          </Stack>
        </form>
        <Divider>
          <Chip variant="soft" color="neutral" size="sm">
            or you can
          </Chip>
        </Divider>
        <Button startDecorator={<GoogleIcon />} sx={{ width: "100%" }}>
          Login with Google
        </Button>
        <Button startDecorator={<FacebookIcon />} sx={{ width: "100%" }}>
          Login with Facebook
        </Button>
        <Divider></Divider>
        <Chip variant="soft" color="neutral" size="sm">
            Want to register yourself? Click here.
        </Chip>
      </Box>
    </div>
  );
}
