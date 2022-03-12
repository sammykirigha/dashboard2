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
    ListItemIcon,
    Link,
} from "@mui/material";
import React from "react";
import WifiTetheringIcon from "@mui/icons-material/WifiTethering";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Header from "../../reusableCompts/DrawerHeader";
import ListItemContent from "../listitem/ListItem";
import './List.css'
import SelectItems from "../../reusableCompts/SelectItems";
import {links, otherLinks} from "../header-routes";
import { useNavigate } from "react-router-dom";


const renderRouteLinks = (links, navigate)=>(
    <>
     {
                    links.map(({text, icon, badge, link, children})=>{
                        if(children?.length > 0){
                            return (
                                <Accordion disableGutters={true} sx={{ paddingTop: 0, marginTop: 0 }} >
                                    <AccordionSummary
                                        sx={{ paddingTop: 0, marginTop: 0, }}
                                        style={{ marginLeft: '-10px'}}
                                    >
                                        <ListItem onClick={() => {
                                            navigate(link)
                                        }} >
                                            <ListItemIcon style={{color: '#103B66', }}>
                                            <WifiTetheringIcon />
                                            </ListItemIcon>
                                            <ListItemText className='listitem-text' secondary={text} />
                                            <ArrowDropDownIcon />
                                        </ListItem>
                                    </AccordionSummary>
                                    <AccordionDetails
                                        sx={{ background: "#E9F8FE", }}
                                    >
                                        <Box className="accord-list-box" >
                                            {children.map((child) => (
                                            <ListItemText onClick={() => navigate(child.link)}  className="accord-list-item" secondary={child.text} />
                                            ))}
                                        </Box>   
                                    </AccordionDetails>
                                </Accordion>
                            )
                        }else{
                            return (
                            <ListItemContent to={link}  className='list-content' icon={icon} text={text}>
                            {badge &&  <Badge badgeContent={badge} color="success"  />}
                            </ListItemContent>
                            )
                        }
                    })
                }
    </>
)

const renderOtherLinks = (otherLinks) => (
    <>
     {
         otherLinks.map(({text, icon, link}) => {
            return (
                <ListItemContent to={link}  className='list-content' icon={icon} text={text} />
                )
         } )
     }
    </>
)

const ListContainer = ({ handleDrawerClick }) => {
    const navigate = useNavigate();
    return (
        <Box>
            <Header handleClick={handleDrawerClick} />
            <Divider />
            <List>
               {renderRouteLinks(links, navigate)}
            </List>
            <Divider />
            <List>
                {renderOtherLinks(otherLinks)}
            </List>
            <Typography component="div" style={{ margin: "50px 0px" }}>
                <span style={{ marginLeft: "20px" }}>Select your shop</span>
                <SelectItems />
            </Typography>
        </Box>
    );
};

export default ListContainer;


