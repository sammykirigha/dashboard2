import { Avatar, Box, Button, CardMedia, Grid, styled, Typography } from "@mui/material";
import "./Content.css";
import React from "react";
import MediaCard from "./contentCard";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import BuildIcon from '@mui/icons-material/Build';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import StarPurple500OutlinedIcon from '@mui/icons-material/StarPurple500Outlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import AddchartIcon from '@mui/icons-material/Addchart';
import LanguageIcon from '@mui/icons-material/Language';
import image1 from '../../images/iPhone.png'
import image2 from '../../images/appstore.png'
import image3 from '../../images/googleapp.png'
import image4 from '../../images/Image.png'
import FeedOutlinedIcon from '@mui/icons-material/FeedOutlined';
import OpenInNewOutlinedIcon from '@mui/icons-material/OpenInNewOutlined';
import CardInfo from "../reusableCompts/cardInfo/cardInfo";

const Contents = () => {
    return (
        <Box sx={{ paddingLeft: "15px", paddingRight: "15px" }}>
            <DashContainer>
                <DashLeft>
                    <MediaCard>
                        <CardInfo
                            viewIcon={
                                <RemoveRedEyeOutlinedIcon className="icon" />
                            }
                            header={"Visitors"}
                            text={"This month"}
                            arroDownIcon={
                                <ArrowDropDownIcon className="icon2" />
                            }
                        >
                            <span className="visitors-number">5784</span>
                            <div className="visitors-info"  >
                                <span className="config-link">
                                    Do you want more visits? Contact us!
                                </span>
                                <ArrowForwardOutlinedIcon
                                    style={{
                                        width: "18px",
                                        marginLeft: "5px",
                                    }}
                                />
                            </div>
                        </CardInfo>
                    </MediaCard>
                    <MediaCard>
                        <CardInfo
                            viewIcon={
                                <FormatListBulletedIcon className="icon" />
                            }
                            header={"Orders"}
                            text={"This month"}
                            arroDownIcon={
                                <ArrowDropDownIcon className="icon2" />
                            }
                        >
                            <div className="orders">
                                <div className="orders-up">
                                    <div className="orders-up-section1">
                                        <div className="orders-received">Orders Received: </div>
                                        <div className="orders-quantity">156</div>
                                    </div>
                                    <div className="orders-up-section2">
                                        <div className="orders-received">Earnings: </div>
                                        <div className="orders-quantity">$1893.24</div>
                                    </div>
                                </div>
                                <div className="orders-down">
                                    <span className="config-link">
                                        Do you want more visits? Contact us!
                                    </span>
                                </div>
                            </div>
                        </CardInfo>
                    </MediaCard>
                    <MediaCard>
                        <Box className="add-box">
                            <Box className="add-body" >
                              <Box className="add-text-box">
                                <Typography className="add-paragraph">
                                  Sell your products on your exclusive APP published on the stores 
                                </Typography>
                                <Typography  className="add-link-box">
                                    <span className="add-link">Show more</span>
                                    <ArrowForwardIcon className="arrowForward"  />
                                </Typography>
                               </Box>
                               <Box className="add-image-div" >
                                  <img className="phone-image"  src={image1} alt="phone" />
                               </Box>
                            </Box>
                            <Box className="images">
                              <img className="playStore"  src={image2} alt="phone" />
                              <img className="playStore" src={image3} alt="phone" />
                            </Box>
                        </Box>
                    </MediaCard>
                    <MediaCard>
                    <Box className="config-box">
                         <Box className="config-header-box" >
                           <AddchartIcon className="config-add-icon" />
                           <Typography  component='p' className='config-header'>
                             Extensions marketplace
                           </Typography>
                         </Box>
                         <Box className="exten-main">
                             <Box className="exten-box">
                                 <Box className="exten-icon">
                                    <LanguageIcon className="extension-icon" />
                                 </Box>
                                 <Typography className="exten-text">
                                    Connect your own domain 
                                 </Typography>
                             </Box>
                             <Box className="exten-box2" >
                                 <Box className="exten-icon2">
                                    <Typography className="extension-icon-text">
                                    +50 Prodotti
                                    </Typography>
                                 </Box>
                                 <Typography className="exten-text">
                                  50 Additional Products 
                                 </Typography>
                            </Box>
                         </Box>
                         <Box style={{marginTop: '25px'}}>
                            <Typography component='div' style={{paddingTop: '5px'}} className="config-link">
                                Discover all Extensions!
                                <ArrowForwardIcon style={{height: '20px', width: '25px', marginLeft: '7px'}} /> 
                            </Typography>
                         </Box>
                    </Box>
                    </MediaCard>
                    <DashLeftInner>
                        <MediaCard>
                            <Box className="news-box">
                                <Box className="news-main">
                                    <FeedOutlinedIcon className="news-icon"/>
                                    <Typography  component='p' className='news-text1'>
                                        Latest news
                                    </Typography>
                                </Box> 
                                <Box className="news-main">
                                    <Typography  component='p' className='news-text2'>
                                        Visit our blog
                                    </Typography>
                                    <OpenInNewOutlinedIcon style={{marginLeft: '10px', color: '#21B8F9'}} />
                                </Box> 
                            </Box>
                            <DashLeftInnerCards>
                                <Box className="news-body">
                                    <Box className="news-image">
                                        <img className="image"  src={image4} alt='news' />
                                    </Box>
                                    <Box className="news-info">
                                       <Typography className="news-h6" >
                                           Ecommerce
                                       </Typography> 
                                       <Typography component='p' className="news-paragraph" >
                                        How to configure the DNS to point to your VetrinaLive
                                       </Typography>
                                       <Typography component='p' className="news-link" >
                                        Estimated reading: 4 min
                                       </Typography>
                                    </Box>
                                </Box>
                                <Box className="news-body">
                                    <Box className="news-image">
                                        <img className="image"  src={image4} alt='news' />
                                    </Box>
                                    <Box className="news-info">
                                       <Typography component='h6' className="news-h6" >
                                           Ecommerce
                                       </Typography> 
                                       <Typography component='p' className="news-paragraph" >
                                        How to configure the DNS to point to your VetrinaLive
                                       </Typography>
                                       <Typography component='p' className="news-link" >
                                        Estimated reading: 4 min
                                       </Typography>
                                    </Box>
                                </Box>
                                <Box className="news-body">
                                    <Box className="news-image">
                                        <img className="image"  src={image4} alt='news' />
                                    </Box>
                                    <Box className="news-info">
                                       <Typography component='h6' className="news-h6" >
                                           Ecommerce
                                       </Typography> 
                                       <Typography component='p' className="news-paragraph" >
                                        How to configure the DNS to point to your VetrinaLive
                                       </Typography>
                                       <Typography component='p' className="news-link" >
                                        Estimated reading: 4 min
                                       </Typography>
                                    </Box>
                                </Box>
                                <Box className="news-body">
                                    <Box className="news-image">
                                        <img className="image"  src={image4} alt='news' />
                                    </Box>
                                    <Box className="news-info">
                                       <Typography component='h6' className="news-h6" >
                                           Ecommerce
                                       </Typography> 
                                       <Typography component='p' className="news-paragraph" >
                                        How to configure the DNS to point to your VetrinaLive
                                       </Typography>
                                       <Typography component='p' className="news-link" >
                                        Estimated reading: 4 min
                                       </Typography>
                                    </Box>
                                </Box>
                                <Box className="news-body">
                                    <Box className="news-image">
                                        <img className="image"  src={image4} alt='news' />
                                    </Box>
                                    <Box className="news-info">
                                       <Typography component='h6' className="news-h6" >
                                           Ecommerce
                                       </Typography> 
                                       <Typography component='p' className="news-paragraph" >
                                        How to configure the DNS to point to your VetrinaLive
                                       </Typography>
                                       <Typography component='p' className="news-link" >
                                        Estimated reading: 4 min
                                       </Typography>
                                    </Box>
                                </Box>
                                <Box className="news-body">
                                    <Box className="news-image">
                                        <img className="image"  src={image4} alt='news' />
                                    </Box>
                                    <Box className="news-info">
                                       <Typography component='h6' className="news-h6" >
                                           Ecommerce
                                       </Typography> 
                                       <Typography component='p' className="news-paragraph" >
                                        How to configure the DNS to point to your VetrinaLive
                                       </Typography>
                                       <Typography component='p' className="news-link" >
                                        Estimated reading: 4 min
                                       </Typography>
                                    </Box>
                                </Box>
                                <Box className="news-body">
                                    <Box className="news-image">
                                        <img className="image"  src={image4} alt='news' />
                                    </Box>
                                    <Box className="news-info">
                                       <Typography component='h6' className="news-h6" >
                                           Ecommerce
                                       </Typography> 
                                       <Typography component='p' className="news-paragraph" >
                                        How to configure the DNS to point to your VetrinaLive
                                       </Typography>
                                       <Typography component='p' className="news-link" >
                                        Estimated reading: 4 min
                                       </Typography>
                                    </Box>
                                </Box>
                                <Box className="news-body">
                                    <Box className="news-image">
                                        <img className="image"  src={image4} alt='news' />
                                    </Box>
                                    <Box className="news-info">
                                       <Typography component='h6' className="news-h6" >
                                           Ecommerce
                                       </Typography> 
                                       <Typography component='p' className="news-paragraph" >
                                        How to configure the DNS to point to your VetrinaLive
                                       </Typography>
                                       <Typography component='p' className="news-link" >
                                        Estimated reading: 4 min
                                       </Typography>
                                    </Box>
                                </Box>
                            </DashLeftInnerCards>
                        </MediaCard>
                    </DashLeftInner>
                </DashLeft>
                <DashRight>
                    <MediaCard>
                        <Box style={{padding: '10px'}}>
                         <Box style={{display: 'flex', alignItems: 'center'}}>
                           <BuildIcon style={{height: '20px', width: '20px', marginRight: '10px'}}/>
                           <Typography className='config-text'>
                             Configure your shop
                           </Typography>
                         </Box>
                         <Box className="complete-box">
                           <Typography className="complete-box" >
                             45%
                           </Typography>
                           <Typography  component='span' >
                             completed
                           </Typography>
                         </Box>
                         <Box style={{margin: '15px 0px', width: '90%'}}>
                           <Typography  component='p' className="config-paragraph">
                           Complete all the steps to have a complete shop to best present to your customers.
                           </Typography>
                           <Typography component='div' className="config-link">
                            Complete the setup!
                            <ArrowForwardIcon style={{height: '20px', width: '25px', marginLeft: '7px'}} /> 
                           </Typography>
                         </Box>
                        </Box>
                    </MediaCard>
                    <MediaCard>
                        <Box className="trust-pilot">
                         <Box className="icon-box">
                           <StarPurple500OutlinedIcon className="trust-icon" />
                           <Typography  component='p' className='trust-text'>
                             Trustpilot
                           </Typography>
                         </Box>
                         <Box style={{marginTop: '15px', padding: '20px', width: '90%'}}>
                           <Typography  component='p' className="trust-paragraph">
                           Show us your love by leaving a positive review on trust pilot and receive the extension of 50 additional products
                           </Typography>
                           <Typography component='div' className="trust-link">
                            Complete the setup!
                            <ArrowForwardIcon style={{height: '20px', width: '25px', marginLeft: '7px'}} /> 
                           </Typography>
                         </Box>
                        </Box>
                    </MediaCard>
                    <MediaCard>
                        <Box style={{padding: '15px'}}>
                         <Box style={{display: 'flex', alignItems: 'center'}}>
                           <PeopleAltOutlinedIcon style={{height: '20px', width: '20px', marginRight: '10px'}}/>
                           <Typography  component='p' className='config-text'>
                             Invite friend
                           </Typography>
                         </Box>
                         <Box style={{width: '90%'}}>
                           <Typography  component='p' className="invite-paragraph">
                           <strong style={{color: '#00C48C'}}>Receive 50 products</strong> by inviting a friend who subscribes to a plan. 
                           Your friend will receive a 30% discount coupon valid for any plan.
                           </Typography>
                           <Typography component='div' className="invite-link">
                            Complete the setup!
                            <ArrowForwardIcon style={{height: '20px', width: '25px', marginLeft: '7px'}} /> 
                           </Typography>
                         </Box>
                        </Box>
                    </MediaCard>
                    <MediaCard>
                        <Box style={{padding: '10px'}}>
                         <Box style={{display: 'flex', alignItems: 'center'}}>
                           <BuildIcon style={{height: '20px', width: '20px', marginRight: '10px'}}/>
                           <Typography  component='p' className='config-text'>
                             Customer support
                           </Typography>
                         </Box>
                         <Box className="customer-box">
                         <Avatar alt="Sammy" src={image1} />
                         <Typography component='span' className="customer-text">
                          Simone is here to help you.
                         </Typography>
                         </Box>
                         <div style={{margin: '10px 0px', padding: '10px'}}>
                           <button className="customer-button" >
                             Contact us
                           </button>
                         </div>
                        </Box>
                    </MediaCard>
                </DashRight>
            </DashContainer>
        </Box>
    );
};

const DashContainer = styled(Box)(() => ({
    display: "flex",
    width: "100%",
    gap:"20px",
    transform:"translateY(-35px)",
    alignItems:"start"
}));

const DashLeft = styled(Box)(() => ({
    flex: 2,
    display:"grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap:"20px",

}));

const DashRight = styled(Box)(() => ({
    flex: 1,
    display:"flex",
    flexDirection:"column",
    gap:"20px"
}));

const DashLeftInnerCards = styled(Box)(() => ({
    flex: 2,
    display:"grid",
    gridTemplateColumns: "repeat(2, 1fr)",

}));

const DashLeftInner = styled(Box)(() => ({
    gridColumn: '1 / span 2',
    gridRow: '3 / span 3'
}));



export default Contents;
