import React from "react";
import cn from 'classnames'; 
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const NavBar = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#000', elevation: 0 }}>

      <Toolbar>
        <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
          <Typography
            variant="h1"
            component="div"
            className={cn("px-2 py-2 m-2 pixelify_sans")} 
            sx={{ flexGrow: 1, textAlign: 'center' }} 
          >
            PIXLECATS
          </Typography>
        </Box>
        <Button variant="outlined" sx={{ border: '1px solid', marginRight: '8px' }}>
          Connect Wallet
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
