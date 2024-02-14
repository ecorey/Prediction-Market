/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import cn from 'classnames'; 

const About = () => {
  return (
    <Box sx={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      p: 2, 
      border: '1px solid white',  
      boxShadow: '0px 0px 10px orange', 
      borderRadius: '4px', 
      m: 1, 
      width: '100%',  }}>
      <Typography className={cn("px-2 py-2 m-2 pixelify_sans")} variant="h4" gutterBottom component="div" sx={{ fontWeight: 'bold', color: 'red', }}>
        About
      </Typography>
      <Typography paragraph>
      
      
      </Typography>
      
      <Typography paragraph>
      
      </Typography>
    </Box>
  );
};

export default About;
