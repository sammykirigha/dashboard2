import { Box, Grid } from '@mui/material';
import './App.css';
import Contents from './components/body/Contents';
import HeroSection from './components/navbar/Hero';
import PersistentDrawer from './components/Drawer'


function App() {
  return (
    <Box>
    <Grid container>
      <Grid item xs={12} md={12} >
        <PersistentDrawer>
          <HeroSection />
          <Contents />
        </PersistentDrawer>
      </Grid>
      </Grid>
      </Box>
  );
}

export default App;
