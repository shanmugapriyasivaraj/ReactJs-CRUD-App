import React from "react";
import { AppBar, Toolbar, styled } from "@mui/material";
import { NavLink } from "react-router-dom";

const Header = styled(AppBar)`
  background: #111111;
`;

const Tabs = styled(NavLink)`
  font-size: 20px;
  margin-right: 45px;
  cursor: pointer;
  text-decoration: none;
  color: white;
`;

function Navbar() {
  return (
    <Header position="static">
      <Toolbar>
        <Tabs to="/">Contact Manager</Tabs>
        <Tabs to="/allusers">All Users</Tabs>
        <Tabs to="/adduser">Add user</Tabs>
      </Toolbar>
    </Header>
  );
}
export default Navbar;
