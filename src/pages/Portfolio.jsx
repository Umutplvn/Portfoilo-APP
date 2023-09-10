import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "./Portfolio.css"
import { Box } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import {data} from "../helper/data"

const Portfolio = () => {


  return (


<div id="portfolio" className='portfolio_main'> 
  <img src="../../public/blogApp.png" style={{width:"200px", height:"200px"}} alt="" />
</div>
  )
}

export default Portfolio

{/* <Carousel id="portfolio" className='portfolio_main'>
{data.map((item)=>
<Box key={item.id}>
  <img src={item.imgLink}/>

<h1 style={{color:"white"}}>{item.name}</h1>
</Box>

)}
</Carousel> */}