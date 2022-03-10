import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Badge,
    Divider,
    List,
    Typography,
    Box,
    ListItemText,
    ListItem,
    ListItemIcon
} from "@mui/material";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import PersonIcon from "@mui/icons-material/Person";
import WifiTetheringIcon from "@mui/icons-material/WifiTethering";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import BrushIcon from "@mui/icons-material/Brush";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import VerifiedIcon from "@mui/icons-material/Verified";
import GridViewIcon from "@mui/icons-material/GridView";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import ShareIcon from "@mui/icons-material/Share";
import PreviewIcon from "@mui/icons-material/Preview";
import QuizIcon from "@mui/icons-material/Quiz";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Header from "../../reusableCompts/DrawerHeader";
import ListItemContent from "../listitem/ListItem";
import './List.css'
import SelectItems from "../../reusableCompts/SelectItems";

const makertingArray = [
    "Discount codes", 
    "Exit intent",
    "Checkout Features",
    "Post-purchase conversion",
    "Cart abandonment",
    "Timer checkout",
    "Sell on Social",
    "Special Offer",
    "Seasonal Offer"
]


const ListContainer = ({ handleDrawerClick }) => {
    return (
        <Box>
            <Header handleClick={handleDrawerClick} />
            <Divider />
            <List>
                <ListItemContent icon={<HomeIcon />} text={"Dashboard"} />
                <ListItemContent icon={<ShoppingCartOutlinedIcon  />} text={"Catalogue"}>
                    {/* <ArrowDropDownIcon /> */}
                </ListItemContent>
                <ListItemContent icon={<FormatListBulletedIcon />}text={"Orders"}>
                    <Badge badgeContent={4} color="error" />
                </ListItemContent>
                <ListItemContent icon={<PersonIcon />} text={"Customers"} />
                <Accordion disableGutters={true} sx={{ paddingTop: 0, marginTop: 0 }} >
                    <AccordionSummary
                        sx={{ paddingTop: 0, marginTop: 0, }}
                        style={{ marginLeft: '-10px'}}
                    >
                        <ListItem button >
                            <ListItemIcon style={{color: '#103B66', }}>
                              <WifiTetheringIcon />
                            </ListItemIcon>
                            <ListItemText className='listitem-text' secondary='makerting' />
                            <ArrowDropDownIcon />
                        </ListItem>
                    </AccordionSummary>
                    <AccordionDetails
                        sx={{ background: "#E9F8FE", }}
                    >
                        <Box className="accord-list-box" >
                            {makertingArray.map((item) => (
                               <ListItemText  className="accord-list-item" secondary={item} />
                            ))}
                        </Box>   
                    </AccordionDetails>
                </Accordion>
                <ListItemContent icon={<LocalShippingIcon />} text={"Delivery Options"} />
                <ListItemContent icon={<AttachMoneyIcon />} text={"Payment Options"}/>
                <ListItemContent icon={<BrushIcon />} text={"Store Design"} />
                <ListItemContent icon={<SubscriptionsIcon />} text={"Subscribtions"} />
                <ListItemContent icon={<VerifiedIcon />} text={"Integrations"} />
                <ListItemContent icon={<GridViewIcon />} text={"Extensions"} />
                <ListItemContent icon={<SettingsIcon />} text={"Settings"} />
                <ListItemContent icon={<LogoutIcon />} text={"Log out"} />
            </List>
            <Divider />
            <List>
                <ListItemContent icon={<QuizIcon />} text={"Customer Support"} />
                <ListItemContent icon={<ShareIcon />} text={"Share your shop"} />
                <ListItemContent icon={<PreviewIcon />}  text={"view your shop"} />
            </List>
            <Typography component="div" style={{ margin: "50px 0px" }}>
                <span style={{ marginLeft: "20px" }}>Select your shop</span>
                <SelectItems />
            </Typography>
        </Box>
    );
};

export default ListContainer;


