import * as React from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { PRIMARY_NAVY } from "./StyledComponents";

export function NavBar() {
  return (
    <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "center" }}>
      <AppBar position="static" sx={{ backgroundColor: PRIMARY_NAVY }}>
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: "flex" }}
          >
            <Link to="/" style={{ textDecoration: "none", color: "white" }}>
              UpTask
            </Link>
          </Typography>
          <Link to="/jobs" style={{ textDecoration: "none", color: "white" }}>
            <Button color="inherit">Find a Job</Button>
          </Link>
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            <Button color="inherit">Login</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
