// import React, { useEffect, useState } from 'react';
// import { Box, IconButton, Slide, Toolbar, useScrollTrigger } from '@mui/material';
// import Header from '../navbar/Header';
// import { styled, useTheme } from '@mui/material/styles';
// import MenuIcon from '@mui/icons-material/Menu';
// import MuiAppBar from '@mui/material/AppBar';
// const drawerWidth = 270;

// const HideOnScroll = ({children}) => {
//     const trigger = useScrollTrigger()
//     return (
//       <Slide appear={false} direction={'down'} in={!trigger}>
//         {children}
//       </Slide>
//     )
//   }

//   const AppBar = styled(MuiAppBar, {
//     shouldForwardProp: (prop) => prop !== 'open',
//   })(({ theme, open }) => ({
//     transition: theme.transitions.create(['margin', 'width'], {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.leavingScreen,
//     }),
//     backgroundColor: 'white',
//     color: 'black',
//     ...(open && {
//       width: `calc(100% - ${drawerWidth}px)`,
//       marginLeft: `${drawerWidth}px`,
//       transition: theme.transitions.create(['margin', 'width'], {
//         easing: theme.transitions.easing.easeOut,
//         duration: theme.transitions.duration.enteringScreen,
//       }),
//     }),
//   }));

// const NavBar = ({open, handleDrawerOpen }) => {


//   const theme = useTheme();
//   return (
//     <HideOnScroll>
//       <AppBar position="fixed" open={open}>
//         <Toolbar>
//           <IconButton
//             color="inherit"
//             aria-label="open drawer"
//             onClick={handleDrawerOpen}
//             edge="start"
//             sx={{ mr: 2, ...(open && { display: 'none' }) }}
//           >
//             <MenuIcon />
//           </IconButton>
//            <Header title={'Dashboard'} linkText={"What's new"} />
//         </Toolbar>
//       </AppBar>
//     </HideOnScroll>
//   )
// }

// export default NavBar