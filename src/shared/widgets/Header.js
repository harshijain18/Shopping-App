import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { NavLink } from "react-router-dom";

export function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            C H E A T K A R T &nbsp;
            <NavLink style={{ textDecoration: "none", color: "white" }} to="/">
              {" "}
              Home
            </NavLink>
          </Typography>

          {/* <Button ><NavLink style={{ color: "white" , textDecoration: "none"}} to="/cart">Cart</NavLink></Button>
          <Button color="inherit">My Cart</Button>
          <Button ><NavLink style={{ color: "white" , textDecoration: "none"}} to="/login">Login</NavLink></Button>
          <Typography>/</Typography>
          <NavLink style={{ textDecoration: "none",color: "white"}} to="/register"><Button color="inherit">Register</Button></NavLink> */}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
