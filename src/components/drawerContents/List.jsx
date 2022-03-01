import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Badge,
    Divider,
    IconButton,
    List,
    styled,
    Typography,
    useTheme,
} from "@mui/material";
import React from "react";
import ListItemContent from "./ListItem";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
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
import SelectItems from "./SelectItems";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const styles = {
    fontWeight: "700",
};

const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
}));

const ListContainer = ({ handleDrawerClose }) => {
    const theme = useTheme();
    return (
        <div>
            <DrawerHeader>
                <Typography variant="h6">
                    <span style={{ styles, ...{ color: "black" } }}>
                        Vetrina
                    </span>
                    <span style={{ styles, ...{ color: "blue" } }}>live</span>
                </Typography>
                <IconButton onClick={handleDrawerClose}>
                    <MenuIcon />
                </IconButton>
            </DrawerHeader>
            <Divider />
            <List>
                <ListItemContent icon={<HomeIcon />} text={"Dashboard"} />
                <ListItemContent icon={<ShoppingCartIcon />} text={"Catalogue"}>
                    <ArrowDropDownIcon />
                </ListItemContent>
                <ListItemContent
                    icon={<FormatListBulletedIcon />}
                    text={"Orders"}
                >
                    <Typography variant="success">
                        <Badge badgeContent={4} color="primary">
                            {/* <MailIcon color="action" /> */}
                        </Badge>
                    </Typography>
                </ListItemContent>
                <ListItemContent icon={<PersonIcon />} text={"Customers"} />
                <Accordion sx={{ boxShadow: "none", margin: 0 }}>
                    <AccordionSummary
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                        sx={{ padding: "0px", margin:"0px" }}
                    >
                        <ListItemContent
                            icon={<WifiTetheringIcon />}
                            text={"Marketing"}
                        >
                            <ArrowDropDownIcon />
                        </ListItemContent>
                    </AccordionSummary>
                    <AccordionDetails
                        sx={{ padding: "0px", background: "#E9F8FE", margin:"0px" }}
                    >
                        <ListItemContent text={"Orders"} />
                        <ListItemContent text={"Customers"} />
                        <ListItemContent text={"Marketing"} />
                    </AccordionDetails>
                </Accordion>
                <ListItemContent
                    icon={<LocalShippingIcon />}
                    text={"Delivery Options"}
                />
                <ListItemContent
                    icon={<AttachMoneyIcon />}
                    text={"Payment Options"}
                />
                <ListItemContent icon={<BrushIcon />} text={"Store Design"} />
                <ListItemContent
                    icon={<SubscriptionsIcon />}
                    text={"Subscribtions"}
                />
                <ListItemContent
                    icon={<VerifiedIcon />}
                    text={"Integrations"}
                />
                <ListItemContent icon={<GridViewIcon />} text={"Extensions"} />
                <ListItemContent icon={<SettingsIcon />} text={"Settings"} />
                <ListItemContent icon={<LogoutIcon />} text={"Log out"} />
            </List>
            <Divider />
            <List>
                <ListItemContent
                    icon={<QuizIcon />}
                    text={"Customer Support"}
                />
                <ListItemContent
                    icon={<ShareIcon />}
                    text={"Share your shop"}
                />
                <ListItemContent
                    icon={<PreviewIcon />}
                    text={"view your shop"}
                />
            </List>
            <Typography component="div" style={{ marginBottom: "50px" }}>
                <span style={{ marginLeft: "20px" }}>Select your shop</span>
                <div style={{ margin: "20px" }}>
                    <SelectItems />
                </div>
            </Typography>
        </div>
    );
};

export default ListContainer;
