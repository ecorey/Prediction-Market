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
      <Typography className={cn("px-2 py-2 m-2 pixelify_sans")} variant="h4" gutterBottom component="div" sx={{ fontWeight: 'bold' }}>
        About
      </Typography>
      <Typography paragraph>
      radbro, starfish, radbro, radbro, radbro, whale, radbro, octopus, turtle, lobster, radbro, shark, starfish, lobster, starfish, seahorse, radbro, seahorse, lobster, octopus
      radbro, starfish, radbro, radbro, radbro, whale, radbro, octopus, turtle, lobster, radbro, shark, starfish, lobster, starfish, seahorse, radbro, seahorse, lobster, octopus
      radbro, starfish, radbro, radbro, radbro, whale, radbro, octopus, turtle, lobster, radbro, shark, starfish, lobster, starfish, seahorse, radbro, seahorse, lobster, octopus
      radbro, starfish, radbro, radbro, radbro, whale, radbro, octopus, turtle, lobster, radbro, shark, starfish, lobster, starfish, seahorse, radbro, seahorse, lobster, octopus
      radbro, starfish, radbro, radbro, radbro, whale, radbro, octopus, turtle, lobster, radbro, shark, starfish, lobster, starfish, seahorse, radbro, seahorse, lobster, octopus

      
      </Typography>
      <Typography paragraph>
      radbro, starfish, radbro, radbro, radbro, whale, radbro, octopus, turtle, lobster, radbro, shark, starfish, lobster, starfish, seahorse, radbro, seahorse, lobster, octopus
      radbro, starfish, radbro, radbro, radbro, whale, radbro, octopus, turtle, lobster, radbro, shark, starfish, lobster, starfish, seahorse, radbro, seahorse, lobster, octopus
      radbro, starfish, radbro, radbro, radbro, whale, radbro, octopus, turtle, lobster, radbro, shark, starfish, lobster, starfish, seahorse, radbro, seahorse, lobster, octopus
      radbro, starfish, radbro, radbro, radbro, whale, radbro, octopus, turtle, lobster, radbro, shark, starfish, lobster, starfish, seahorse, radbro, seahorse, lobster, octopus
      radbro, starfish, radbro, radbro, radbro, whale, radbro, octopus, turtle, lobster, radbro, shark, starfish, lobster, starfish, seahorse, radbro, seahorse, lobster, octopus
      radbro, starfish, radbro, radbro, radbro, whale, radbro, octopus, turtle, lobster, radbro, shark, starfish, lobster, starfish, seahorse, radbro, seahorse, lobster, octopus
      </Typography>
    </Box>
  );
};

export default About;
