import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typed from "react-typed";
import { Typography } from "@mui/material";
import { Link } from "react-scroll";

export default function ButtonAppBar() {

  const[ hover, setHover]=React.useState(false)    

  return (
    <Box sx={{ flexGrow: 1, width: "100%", zIndex:"4", position:"fixed" }}>
      <Box
        sx={{
          display: "flex",
          position: "fixed",
          justifyContent: "space-between",
          color: "white",
          mt: "2rem",
          width: "100vw",
          padding: "1rem",
        }}
      >
        <Typography
          fontSize={"16px"}
          sx={{ fontFamily: "comics", fontWeight: "700" }}
        >
          <Typed
          
            strings={["I'm a developer"]}
            typeSpeed={120}
            backSpeed={120}
            loop
          />
          <br />
        </Typography>
<Link  to="contact" spy={true} smooth={true} offset={50} duration={500}  onMouseEnter={()=>setHover(true)}
        onMouseLeave={()=>setHover(false)}>
        <Button variant="outlined" color="inherit" 
       
       sx={hover && {boxShadow:" rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;", transform:"scale(1.01)"}}
        >Contact</Button>
</Link>
      </Box>
    </Box>
  );
}
