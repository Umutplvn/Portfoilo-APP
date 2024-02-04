import React, { useState } from "react";
import "./Portfolio.css";
import { Box } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { data } from "../helper/data";

const imgStyle = {
  width: "100%",
  border:"14px solid black",
  borderRadius:"1rem"
};

const Portfolio = () => {
  const[ hover, setHover]=useState(false)    
  const[ hover2, setHover2]=useState(false)    

  return (
    <Box sx={{ height:"100vh" }}  className="portfolio_main" id="portfolio" >

<Box className="blurPortfolio" sx={{display:"flex", flexWrap:"wrap"}}>

    <Carousel
     
      sx={{width:"100%", margin:"auto"}}
      stopAutoPlayOnHover
      navButtonsAlwaysInvisible="true"
      
      
    >
      {data.map((item) => (
        <Box sx={{display:"flex", flexWrap:"wrap", height:"90vh", padding:'2rem', justifyContent:"center", alignItems:'center', gap:"1rem"}}>
          <Box sx={{ color: "white", width:"400px" }}>
            <h5  style={{ color: "grey" }}>{item.type}</h5>
            <h2 style={{marginTop:"0.5rem"}}>{item.name}</h2>
            <h4 style={{marginTop:"2rem"}}>{item.desc}</h4>
            <h4 style={{marginTop:"0.5rem"}}>{item.built}</h4>
          
          <a
            onMouseEnter={()=>setHover(true)}
            onMouseLeave={()=>setHover(false)}
            onClick={() => window.open(item?.link)}
            style={{
             color:"#F4A949",
              display: "flex",
              fontSize: "16px",
              alignItems: "center",
              fontWeight:"800",
              marginTop:"1rem",
              cursor:"pointer"

            }}
            variant="outlined"
          >
            {item.link ? "Visit the app" : ""}
            {
item.link?   <ArrowForwardIosIcon
sx= {hover ? { fontSize: "20px", marginLeft: "0.5rem", transform: "translateX(0.5rem)", transition:"0.4s"}: { fontSize: "20px", marginLeft: "0.5rem", transition:"0.4s", color:"#F4A949", cursor:"pointer" } }
/> :""

            }
          
          </a>


          <a
            onMouseEnter={()=>setHover2(true)}
            onMouseLeave={()=>setHover2(false)}
            onClick={() => window.open(item.code)}
            style={{
             color:"#F4A949",
              display: "flex",
              mt: "0.5rem",
              fontSize: "16px",
              alignItems: "center",
              fontWeight:"800",
              marginTop:"0.5rem",
              cursor:"pointer"

            }}
            variant="outlined"
          >
            View the code
            <ArrowForwardIosIcon
              sx= {hover2 ? { fontSize: "20px", marginLeft: "0.5rem", transform: "translateX(0.5rem)", transition:"0.4s"}: { fontSize: "20px", marginLeft: "0.5rem", transition:"0.4s", color:"#F4A949", cursor:"pointer" } }
            />
          </a>


          </Box> 
          

          <Box sx={{display:"flex", justifyContent:"center",width:"90%",  maxWidth:"700px", overflow:"hidden"}}>
            <img style={imgStyle} src={item.imgLink} alt="" />
          </Box>
        </Box>
      ))}
    </Carousel>
</Box>
    </Box>
  );
};

export default Portfolio;

{
  /*  */
}
