import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import cn from 'classnames'; 

const Tokenomics = () => {
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
       width: '100%', 
        }}>
      <Typography className={cn("px-2 py-2 m-2 pixelify_sans")}  variant="h4" gutterBottom component="div" sx={{  }}>
        Tokenomics
      </Typography>
      
      <Typography paragraph>
      Bushido, translating to the way of the warrior, is a Japanese term that describes a unique code of ethical conduct adhered to by the samurai, the warrior class of feudal Japan. Rooted in the philosophies of Confucianism, Buddhism, and Shintoism, Bushido emphasized virtues such as loyalty, honor, obedience, duty, filial piety, and self-sacrifice. This code guided the samurai not only in warfare but also in their daily lives, instilling a sense of responsibility to their lord and society. Key aspects of Bushido included righteousness, courage, benevolence, respect, sincerity, honor, and self-control. These principles were not formally written down until the Edo period (1603-1868) but were passed down through generations, deeply influencing Japanese culture and society. The legacy of Bushido continues to influence modern Japanese values and is often referenced in martial arts, business practices, and daily conduct, symbolizing the pursuit of moral integrity and excellence.
      </Typography>
    </Box>
  );
};

export default Tokenomics;
