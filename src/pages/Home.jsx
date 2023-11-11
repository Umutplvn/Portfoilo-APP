import React, { useState } from "react";
import "./Home.styled.css";
import { Box, Button, Grid, Typography } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Link } from "react-scroll";

const Home = () => {

  const[ hover, setHover]=useState(false)    


  return (
    <Box className="home_main" id="home" >
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
            Full-Stack Software Developer
          </Typography>

          <Typography>
          Responsible for both front-end and back-end development, ensuring the seamless functionality and user-friendliness of web applications.          </Typography>

<Link to="about" spy={true} smooth={true} offset={0} duration={500}>
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
</Link>
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
