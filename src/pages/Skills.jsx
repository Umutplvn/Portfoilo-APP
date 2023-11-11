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
          <Typography variant="h7" sx={{ color: "grey", p: "1rem" }}>
            A PROBLEM IS A CHANCE FOR YOU TO DO YOUR BEST
          </Typography>
          <Typography sx={{ fontWeight: "900" }} variant="h4">
            Skills
          </Typography>
          <Typography sx={{ textAlign: "center" }} variant="h6">
            The main area of expertise is front end and back end development.
          </Typography>
          <Typography variant="h6" sx={{ textAlign: "center" }}>
          Building small and medium web applications using HTML, CSS, JavaScript, MongoDB, ExpressJS and NodeJS, while incorporating Vue or React for front-end development, custom plugins, features, animations, and interactive layouts.
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
          <i style={{color:"white", fontSize:"80px",display:"flex", justifyContent:"center", alignItems:"center"}}><BiLogoMongodb/></i>
          <i style={{color:"white", fontSize:"80px",display:"flex", justifyContent:"center", alignItems:"center"}}><DiNodejs/></i>
          <i className="fa-solid fa-plus icon"></i>
        </div>
      </Grid>
    </Grid>
  );
};

export default Skills;
