import React, { useState } from "react";
import "./Home.styled.css";
import { Box, Button, Grid, Typography } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Home = () => {

  const[ hover, setHover]=useState(false)    


  return (
    <Box className="home_main">
      <Grid
        container
        spacing={4}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "105vh",
          
        }}
      >
        <Grid item xs={10} md={5} mt={"4rem"} color={"white"}>
          <Typography variant="h4" fontWeight={"700"}>
            Front-End Software Developer
          </Typography>

          <Typography>
            Resolving design problems, building smart user interfaces and useful
            interactions, developing rich web applications and seamless web
            experiences
          </Typography>

          <Button
            onMouseEnter={()=>setHover(true)}
            onMouseLeave={()=>setHover(false)}
            sx={{
              color: "#e9bef4",
              display: "flex",
              mt: "0.5rem",
              fontSize: "16px",
              alignItems: "center",
              fontWeight:"800"
            
            }}
            variant="outlined"
          >
            About me
            <ArrowForwardIosIcon
              sx= {hover ? { fontSize: "20px", marginLeft: "0.5rem", transform: "rotate(90deg)", transition:"0.4s"}: { fontSize: "20px", marginLeft: "0.5rem", transition:"0.4s" } }
            />
          </Button>
        </Grid>
        <Grid className="homeItem" item xs={12} md={5} padding={4}>
          
            <div >
              <svg>
                <text  x="50%" y="50%" text-anchor="middle">
                  Hello  World!

                </text>
              </svg>
            </div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
