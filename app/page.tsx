import Image from "next/image";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Container, Stack } from '@mui/material';


import SquareOne from "../components/SquareOne";
import About from "../components/About";
import Tokenomics from "../components/Tokenomics";
import Roadmap from "../components/Roadmap";
import Mint from "../components/Mint";

import NavBar from "@/components/NavBar";
import Footer from '../components/Footer';

import '../app/globals.css';


export default function Home() {
  return (
    <main className="">
      <NavBar />
      
      <Stack direction="row" justifyContent="center" alignItems="center" spacing={2} padding={5}>
        {/* Animated div with image */}
        <div className="radcoin">
          <span>
            <Image
              src="https://radbro.xyz/images/radcoin.gif"
              alt="radcoin"
              width={125}
              height={125}
              layout="fixed"
            />
          </span>
        </div>
      </Stack>

        <Container maxWidth="xl">
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
      </Container>

      <Stack direction="row" justifyContent="center" alignItems="center" spacing={2} padding={10}>
        {/* Animated div with image */}
        <div className="radcoin">
          <span>
            <Image
              src="/radbro3d.gif"
              alt="radbro"
              width={125}
              height={125}
              layout="fixed"
            />
          </span>
        </div>
      </Stack>
      
    <Footer />

    </main>
  );
}
