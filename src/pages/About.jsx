import React from "react";
import "./About.styled.css";
import { Box, Typography } from "@mui/material";
const About = () => {
  return (
    <Box className="about_main" id="about">
      <Box className="blur" sx={{ display: "flex", flexWrap: "wrap" }}>
        <Box
          className="about_box"
          sx={{
            maxWidth: "400px",
            minWidth: "320px",
            padding: "1rem",
            display: "flex",
            flexDirection: "column",
            borderRadius: "1rem",
            margin: "auto",
            
          }}
        >
          <Typography sx={{ fontSize: "2rem", fontWeight: "800" }}>
            Hi, I'm Umut
          </Typography>
          <Typography sx={{ fontSize: "1.5rem", fontWeight: "800" }}>
            Full Stack Developer
          </Typography>
        </Box>

        <Box
          className="about_box2"
          sx={{
            maxWidth: "500px",
            minWidth: "400px",
            padding: "1rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            borderRadius: "1rem",
            margin: "auto",
          }}
        >
          <Typography sx={{ fontSize: "1.3rem" }}>
            I'm a disciplined and dedicated engineer with a passion for
            learning. As a full-stack developer, I create innovative digital
            solutions that combine creativity and functionality. My commitment
            to lifelong learning keeps me at the forefront of technology trends,
            ensuring I deliver effective solutions. I excel at collaborating
            with diverse teams and clients, using my strong communication skills
            to bring visions to life. Let's create digital excellence together.{" "}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default About;
