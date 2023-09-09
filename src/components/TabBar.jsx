import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import HomeMaxIcon from "@mui/icons-material/HomeMax";
import InfoIcon from "@mui/icons-material/Info";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import { Routes } from "react-router-dom";
import Home from "../pages/Home";

export default function TabPanel(props) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    event.preventDefault()
  };
  return (
    <Box
      sx={{
        flexGrow: 1,
        color: "white",
        display: "flex",
        height: 224,
        position: "fixed",
        right: "0",
        top: "35%",
        margin: "1rem",
      }}
    >
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="icon tabs example"
        orientation="vertical"
      >
        
        <Tab
          href="/"
          sx={{ color: "white" }}
          icon={<HomeMaxIcon />}
          aria-label="Home"
        />
        <Tab
          href="/about"
          
          sx={{ color: "white" }}
          icon={<InfoIcon />}
          aria-label="About"
        />
        <Tab
          href="/portfoilo"
          sx={{ color: "white" }}
          icon={<AccountTreeIcon />}
          aria-label="Portfoilo"
        />
        <Tab
          href="/contact"
          sx={{ color: "white" }}
          icon={<ContactMailIcon />}
          aria-label="Contact"
        />
      </Tabs>
    </Box>
  );
}
