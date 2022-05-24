import { useEffect } from "react";
import {
  PrimaryButton,
  LoginContainer,
  LoginBox,
  LoginInput,
} from "./StyledComponents";
import Typography from "@mui/material/Typography";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import PersonIcon from "@mui/icons-material/Person";
import { Paper } from "@mui/material";

export default function Login({ setLoggedIn }) {
  useEffect(() => {
    setLoggedIn(false);
  }, []);

  return (
    <LoginContainer>
      <Paper elevation={5}>
      <LoginBox>
        <Typography
          variant="h4"
          gutterBottom
          component="div"
          sx={{ color: "#666666", mb: "25px" }}
        >
          Log In
        </Typography>
        <FormControl sx={{ width: "80%" }}>
          <LoginInput
            disableUnderline
            autoComplete="off"
            id="email"
            placeholder="Username or Email"
            startAdornment={
              <InputAdornment position="start">
                <PersonIcon />
              </InputAdornment>
            }
          />
        </FormControl>
        <FormControl sx={{ width: "80%" }}>
          <LoginInput
            disableUnderline
            autoComplete="off"
            id="password"
            placeholder="Password"
          />
        </FormControl>
        <PrimaryButton
          variant="contained"
          sx={{ margin: "20px 0" }}
          onClick={() => setLoggedIn(true)}
        >
          Continue With Email
        </PrimaryButton>
      </LoginBox>
      </Paper>
    </LoginContainer>
  );
}
