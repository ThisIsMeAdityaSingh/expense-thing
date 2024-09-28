import React from "react";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Button from "@mui/joy/Button";
import FormHelperText from "@mui/joy/FormHelperText";
import Divider from '@mui/joy/Divider';
import Stack from '@mui/joy/Stack';
import Input from "@mui/joy/Input";
import Box from "@mui/joy/Box";
import Chip from '@mui/joy/Chip';
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from '@mui/icons-material/Facebook';

export default function Login() {
  return (
    <div>
      <Box
        sx={{
          my: 15,
          marginLeft: 'auto',
          marginRight: 'auto',
          display: "flex",
          flexDirection: 'column',
          alignItems: "center",
          gap: 4,
          p: 3,
          border: "1px solid grey",
          width: '40%',
          borderRadius: '10px',
          boxShadow: 'initial'
        }}
      >
        <form style={{width: '100%'}}>
            <Stack spacing={2}>
                <FormControl>
                    <FormLabel>Email</FormLabel>
                    <Input placeholder="m@example.com" fullWidth/>
                </FormControl>
                <FormControl>
                    <FormLabel>Password</FormLabel>
                    <Input type="password" fullWidth/>
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
        <Button startDecorator={<GoogleIcon />} sx={{width: '100%'}}>Login with Google</Button>
        <Button startDecorator={<FacebookIcon />} sx={{width: '100%'}}>Login with Facebook</Button>
      </Box>
    </div>
  );
}
