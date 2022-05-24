import { Box, Input } from "@mui/material";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

export const PRIMARY_GREEN = "#14a800";
const SECONDARY_GREEN = "#2D6326";
export const PRIMARY_NAVY = "#1D4354";

export const MainBody = styled(Box)(() => ({
  display: "flex",
  padding: "50px 5%",
  textAlign: "left",
  justifyContent: "space-between",
}));

export const LoginContainer = styled(Box)(() => ({
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export const LoginBox = styled(Box)(() => ({
  background: "white",
  width: "400px",
  height: "325px",
  padding: "40px",
  boxSizing: "border-box",
}));

export const LoginInput = styled(Input)(() => ({
  border: `1px solid ${PRIMARY_GREEN}`,
  borderRadius: "5px",
  margin: "8px 0",
  padding: "2px 10px",
  width: "100%",
}));

export const PrimaryButton = styled(Button)(() => ({
  color: "white",
  background: PRIMARY_GREEN,
  borderRadius: "30px",
  width: "80%",
  "&:hover": {
    background: `${SECONDARY_GREEN}`,
  },
  "@media only screen and (max-width: 600px)": {
    fontSize: "10px",
  },
}));

export const SecondaryButton = styled(Button)(() => ({
  color: PRIMARY_GREEN,
  background: "none",
  borderRadius: "30px",
  border: `1px solid ${PRIMARY_GREEN}`,
  width: "80%",
  "&:hover": {
    background: `${PRIMARY_GREEN}`,
    color: "white",
  },
  "@media only screen and (max-width: 600px)": {
    fontSize: "10px",
  },
}));

export const SpacerBox = styled(Box)(() => ({
  padding: "20px",
}));
