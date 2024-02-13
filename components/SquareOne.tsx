import React from "react";
import Box from "@mui/material/Box";
import Image from 'next/image';

const SquareOne = () => {
  return (
    <Box sx={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        p: 2, 
        border: '1px solid black', 
        boxShadow: '0px 0px 10px orange', 
        borderRadius: '4px', 
        bgcolor: 'background.paper', 
      }}>
      <Image src="/bro.png" alt="cat is pixelated" width={275} height={275} objectFit="contain" />
    </Box>
  );
};

export default SquareOne;
