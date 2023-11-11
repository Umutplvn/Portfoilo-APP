import React from "react";
import "./Skills.css";
import { Box, Grid, Typography } from "@mui/material";
import {BiLogoMongodb} from "react-icons/bi"
import {DiNodejs} from 'react-icons/di'

const Skills = () => {
  return (
    <Grid container id="skills" className="skillBox">
      <Grid item xs={11} md={6}>
        <Box className="skillText">
          <Typography variant="p" sx={{ color: "grey", textAlign:"center" }}>
            A PROBLEM IS A CHANCE FOR YOU TO DO YOUR BEST
          </Typography>
          <Typography sx={{ fontWeight: "900" }} variant="h5">
            Skills
          </Typography>
          <Typography variant="h6" sx={{ textAlign: "center" }}>
Developing web apps with HTML, CSS, JavaScript, MongoDB, ExpressJS, NodeJS, and Vue/React for frontend, plus custom plugins, features, animations, and interactive layouts for small and medium projects.
          </Typography>
        </Box>
      </Grid>

      <Grid item xs={12} md={6} textAlign={"center"}>
        <div className="icons" >
          <i className="fa-brands fa-square-js icon"></i>
          <i className="fa-brands fa-react icon" />
          <i className="fa-brands fa-html5 icon"></i>
          <i className="fa-brands fa-css3 icon"></i>
          <i className="fa-brands fa-sass icon"></i>
          <i className="fa-brands fa-github icon"></i>
          <i style={{color:"white", fontSize:"80px",display:"flex", justifyContent:"center", alignItems:"center"}}><BiLogoMongodb/></i>
          <i style={{color:"white", fontSize:"80px",display:"flex", justifyContent:"center", alignItems:"center"}}><DiNodejs/></i>
        </div>
      </Grid>
    </Grid>
  );
};

export default Skills;
