import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Image from 'next/image';
import cn from 'classnames'; 

const Roadmap = () => {
  return (
    <Box sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        p: 2, 
        border: '1px solid white', 
        bgcolor: 'background.paper', 
        boxShadow: '0px 0px 10px orange', 
        borderRadius: '4px', 
        m: 1, 
        width: '100%', 
        maxWidth: '600px', 
      }}>
      <Typography className={cn("px-2 py-2 m-2 pixelify_sans")}  variant="h4" gutterBottom component="div" sx={{ fontWeight: 'bold' }}>
        Roadmap
      </Typography>
      <Image src="/rad.png" alt="Roadmap" width={500} height={300} objectFit="contain" />
    </Box>
  );
};

export default Roadmap;
