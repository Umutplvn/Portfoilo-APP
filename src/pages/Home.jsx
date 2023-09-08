import React from 'react'
import "./Home.styled.css"
import { Box, Grid, Typography } from '@mui/material'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
const Home = () => {
  return (
<Box className='home_main'>

<Grid  container spacing={4} sx={{display:"flex", alignItems:"center", justifyContent:"center", height:"100vh"}}>
    <Grid item xs={10} md={5} color={"white"}>
<Typography variant='h3' fontWeight={"700"}>Front-End Software Developer</Typography>

<Typography  >Resolving design problems, building smart user interfaces and useful interactions, developing rich web applications and seamless web experiences</Typography>

<Typography sx={{color:"#b947d5", display:"flex", mt:"0.5rem", fontSize:"18px", alignItems:'center'}}>About me <ArrowForwardIosIcon sx={{fontSize:"20px", marginLeft:"0.5rem"}}/> </Typography>


    </Grid>
<Grid className="homeItem" item xs={9} md={5} padding={4}>
</Grid>
</Grid>
</Box>


 
  )
}

export default Home