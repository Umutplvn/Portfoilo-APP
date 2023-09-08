import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Typed from 'react-typed';
import { Typography } from '@mui/material';


export default function ButtonAppBar() {
  return (
    <Box sx={{flexGrow: 1,  width:'100%' }}
    >
      
<Box sx={{display:"flex", position:"fixed", justifyContent:"space-between",color:"white", mt:"2rem", width:"100vw", padding:"1rem"}}>

<Typography fontSize={"16px"} sx={{fontFamily:"comics"}}>

<Typed
                    strings={["I'm a developer"]}
                    typeSpeed={90}
                    backSpeed={90}
                    loop
                    
                   
                />
                <br/>
</Typography>
 
    

          <Button color="inherit">Login</Button>
</Box>
         
    </Box>
  );
}