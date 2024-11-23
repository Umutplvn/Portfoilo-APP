import { Box } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <Box sx={{position:"sticky", bottom:"0", display:"flex", gap:"1.5rem", margin:"2rem", left:0}}>

       <Link to={"https://github.com/Umutplvn"} >
       <a href="https://github.com/Umutplvn" target="_blank" rel="noopener noreferrer">
  <i style={{ fontSize: "2rem", color: "white", marginBottom: "1rem" }} className="fa-brands fa-github-alt"></i>
</a>
       </Link>

       <Link  to={"https://www.linkedin.com/in/umut-pehlivan-817b28174/"}>
       <a href="https://www.linkedin.com/in/umut-pehlivan-817b28174/" target="_blank" rel="noopener noreferrer">
  <i style={{ fontSize: "2rem", color: "white", marginBottom: "1rem" }} className="fa-brands fa-linkedin"></i>
</a>       </Link>
    </Box>
  )
}

export default Footer