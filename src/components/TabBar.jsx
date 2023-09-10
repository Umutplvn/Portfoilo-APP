import * as React from "react";
import Box from "@mui/material/Box";
import HomeMaxIcon from "@mui/icons-material/HomeMax";
import InfoIcon from "@mui/icons-material/Info";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import { Link } from "react-scroll";
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
export default function TabPanel() {
  return (
    <Box
      sx={{
        flexGrow: 1,
        color: "white",
        display: "flex",
        gap:2,
        height: 224,
        position: "fixed",
        right: "0",
        top: "35%",
        marginRight:"4rem",
        transform: "rotate(90deg)",
        zIndex:"4"
      }}
    >
      <Link to="home" spy={true} smooth={true} offset={0} duration={500} >
        <HomeMaxIcon sx={{ transform: "rotate(270deg)", cursor:"pointer" }} />
      </Link>

      <Link to="about" spy={true} smooth={true} offset={0} duration={500}>
        <InfoIcon sx={{ transform: "rotate(270deg)", cursor:"pointer" }} />
      </Link>

      <Link to="skills" spy={true} smooth={true} offset={0} duration={500}>
        <AutoFixHighIcon sx={{ transform: "rotate(270deg)", cursor:"pointer" }} />
      </Link>

      <Link to="portfolio" spy={true} smooth={true} offset={0} duration={500}>
        <AccountTreeIcon sx={{ transform: "rotate(270deg)", cursor:"pointer" }} />
      </Link>

      <Link  to="contact" spy={true} smooth={true} offset={50} duration={500}>
        <ContactMailIcon sx={{ transform: "rotate(270deg)" , cursor:"pointer"}} />
      </Link>
    </Box>
  );
}
