import React from "react";
import "./Skills.css";
import { Box, Grid, Typography } from "@mui/material";

const Skills = () => {
  return (
    <Grid container id="skills" className="skillBox">
      <Grid item xs={12} md={6}>
        <Box className="skillText">
          <Typography variant="h7" sx={{ color: "grey", p: "1rem" }}>
            A PROBLEM IS A CHANCE FOR YOU TO DO YOUR BEST
          </Typography>
          <Typography sx={{fontWeight:"900"}} variant="h4">Skills</Typography>
          <Typography sx={{textAlign:"center"}} variant="h6">
            The main area of expertise is front end development (client side of
            the web).
          </Typography>
          <Typography  variant="h6" sx={{textAlign:"center"}}>
            HTML, CSS, JS, building small and medium web applications with Vue
            or React, custom plugins, features, animations, and coding
            interactive layouts.
          </Typography>
        </Box>
      </Grid>

      <Grid item xs={12} md={6} textAlign={"center"}>
        <div className="icons">
          <i className="fa-brands fa-square-js icon"></i>
          <i className="fa-brands fa-react icon" />
          <i className="fa-brands fa-html5 icon"></i>
          <i className="fa-brands fa-css3 icon"></i>
          <i className="fa-brands fa-sass icon"></i>
          <i className="fa-brands fa-bootstrap icon"></i>
          <i className="fa-brands fa-github icon"></i>
          <i className="fa-brands fa-node-js icon"></i>
          <i className="fa-solid fa-plus icon"></i>
        </div>
      </Grid>
    </Grid>
  );
};

export default Skills;
