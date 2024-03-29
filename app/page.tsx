import Image from "next/image";
import { Container, Grid, Box } from '@mui/material';

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
    <main>
        <NavBar />

        <Box sx={{ flexGrow: 1, padding: '0 16px' }}> 
          <Container maxWidth="xl" sx={{ mx: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Grid container spacing={4} sx={{ justifyContent: 'center' }}>
              

            <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
                <Tokenomics />
              </Grid>

              <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
                <SquareOne />
              </Grid>
              
              <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
                <Mint />
              </Grid>
              
              <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
                <Roadmap />
              </Grid>
              

              <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
                <About />
              </Grid>
            </Grid>
          </Container>
        </Box>

        <Footer />
      
    </main>
  );
}
