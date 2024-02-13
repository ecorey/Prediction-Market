import Image from "next/image";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import SquareOne from "../components/SquareOne";
import About from "../components/About";
import Tokenomics from "../components/Tokenomics";
import Roadmap from "../components/Roadmap";
import Mint from "../components/Mint";

export default function Home() {
  return (
    <main className="">
       <Grid container spacing={4} className="max-w-screen-2xl mx-auto pt-5 pr-7">
      <Grid item xs={12} md={3}>
        <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
          <SquareOne />
        </Box>
      </Grid>
      <Grid item xs={12} md={9}>
        <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
          <Tokenomics />
        </Box>
      </Grid> 
      <Grid item xs={12} md={6}>
        <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
          <About />
        </Box>
      </Grid>
      <Grid item xs={12} md={6}>
        <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
          <Roadmap />
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
          <Mint />
        </Box>
      </Grid>
    </Grid>

    </main>
  );
}
