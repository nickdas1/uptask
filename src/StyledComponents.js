import { Box, Input } from "@mui/material";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

export const PRIMARY_GREEN = "#14a800";
const SECONDARY_GREEN = "#2D6326";
export const PRIMARY_NAVY = "#1D4354";

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
  background: PRIMARY_GREEN,
  borderRadius: "30px",
  width: "80%",
  "&:hover": {
    background: `${SECONDARY_GREEN}`,
  },
}));
