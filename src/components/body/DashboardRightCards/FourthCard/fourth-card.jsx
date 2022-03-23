import { Avatar, Card, Typography } from "@mui/material";
import './fourth-card.css'
import { Box } from "@mui/system";
import React from "react";
import image1 from "../../../../images/iPhone.png";
import BuildIcon from "@mui/icons-material/Build";

const box = {
display: "flex",
alignItems: "center",
}

const icon = {
height: "20px",
width: "20px",
marginRight: "10px",
}

const FourthCard = () => {
    return (
        <Card className="fourth-card-box">
            <Box style={box}>
                <BuildIcon style={icon}/>
                <Typography component="p" className="config-text">
                    Customer support
                </Typography>
            </Box>
            <Box className="customer-box">
                <Avatar alt="Sammy" src={image1} />
                <Typography component="span" className="customerText">
                    Simone is here to help you. Feel free to ask all your querries
                </Typography>
            </Box>
            <div className="div">
                <button className="customer-button">Contact us</button>
            </div>
        </Card>
    );
};

export default FourthCard;
