import { Box, Grid } from '@mui/material';
import Contents from './components/body/Contents';
import HeroSection from './components/navbar/hero/Hero';
import PersistentDrawer from './components/Drawer'
import { Route, Routes } from 'react-router-dom';
import OneRoute from './components/reusableCompts/OneRoute';
import Marketing from './components/reusableCompts/Marketing';


function App() {
  return (
    <Box>
    <Grid container>
      <Grid item xs={12} md={12} >
        <PersistentDrawer>
          <Routes>
            <Route exact path="/"  element={
              <>
                <HeroSection />
                <Contents />
              </>
            } />
            <Route exact path="/admin/catalogue" element={<><OneRoute /></>}/>
            <Route exact path="/admin/orders" element={<><OneRoute /></>}/>
            <Route exact path="/admin/customers" element={<><OneRoute /></>}/>
            <Route exact path="/admin/marketing" element={<><Marketing /></>}>
                <Route path='/admin/marketing/discount' element={<><Marketing /></>} />
                <Route path='/admin/marketing/intent' element={<><Marketing /></>} />
                <Route path='/admin/marketing/features' element={<><Marketing /></>} />
                <Route path='/admin/marketing/conversion' element={<><Marketing /></>} />
                <Route path='/admin/marketing/abandonment' element={<><Marketing /></>} />
                <Route path='/admin/marketing/checkout' element={<><Marketing /></>} />
                <Route path='/admin/marketing/social' element={<><Marketing /></>} />
                <Route path='/admin/marketing/specialOffer' element={<><Marketing /></>} />
                <Route path='/admin/marketing/seasonalOffers' element={<><Marketing /></>} />
            </Route>
            <Route exact path="/admin/delivery" element={<><OneRoute /></>}/>
            <Route exact path="/admin/payment" element={<><OneRoute /></>}/>
            <Route exact path="/admin/store" element={<><OneRoute /></>}/>
            <Route exact path="/admin/subscriptions" element={<><OneRoute /></>}/>
            <Route exact path="/admin/integrations" element={<><OneRoute /></>}/>
            <Route exact path="/admin/extensions" element={<><OneRoute /></>}/>
            <Route exact path="/admin/settings" element={<><OneRoute /></>}/>
            <Route exact path="/admin/logout" element={<><OneRoute /></>}/>\
            <Route exact path="/admin/support" element={<><OneRoute /></>}/>
            <Route exact path="/admin/share" element={<><OneRoute /></>}/>\
            <Route exact path="/admin/shops" element={<><OneRoute /></>}/>
          </Routes>
        </PersistentDrawer>
      </Grid>
      </Grid>
      </Box>
  );
}

export default App;
