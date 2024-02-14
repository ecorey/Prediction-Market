// Import necessary components from Next.js and Material-UI
import Image from "next/image";
import { Container, Grid, Box } from '@mui/material';

// Import your custom components
import SquareOne from "../components/SquareOne";
import About from "../components/About";
import Tokenomics from "../components/Tokenomics";
import Roadmap from "../components/Roadmap";
import Mint from "../components/Mint";
import NavBar from "@/components/NavBar";
import Footer from '../components/Footer';

// Import global CSS
import '../app/globals.css';

export default function Home() {
  return (
    <main>
      <NavBar />

      {/* Box component for additional external padding */}
      <Box sx={{ flexGrow: 1, padding: '0 16px' }}> {/* Adjust this padding as needed */}
        <Container maxWidth="xl" sx={{ mx: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          {/* Grid container with centered content */}
          <Grid container spacing={4} sx={{ justifyContent: 'center' }}>
            {/* Grid items, each taking full width but centered within the container */}
            <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
              <SquareOne />
            </Grid>
            <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
              <Tokenomics />
            </Grid>
            <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
              <About />
            </Grid>
            <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
              <Roadmap />
            </Grid>
            <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
              <Mint />
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Footer />
    </main>
  );
}
