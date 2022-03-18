import { Card, Typography } from "@mui/material";
import React from "react";
import CardHeader from "../card-header";
import "./second-card.css";
import StarRateIcon from "@mui/icons-material/StarRate";
import CardBody from "../../../reusableCompts/cardBody/card-body";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Box } from "@mui/system";

const iconStyle = {
    height: "20px",
    width: "25px",
    marginLeft: "7px",
};

const footerStyle = {
    color: "#21b8f9",
    cursor: "pointer",
    marginTop: "50px",
    display: "flex",
    alignItems: "center",
    // paddingTop: "20px",
};

const SecondCard = () => {
    return (
        <Card className="second-card">
            <Box className="box-head">
                <StarRateIcon className="trust-icon" />
                <Typography className="link-text">Trustpilot</Typography>
            </Box>
            <CardBody>
                <Typography component="p" className="trust-paragraph">
                    Show us your love by leaving a positive review on trust
                    pilot and receive the extension of 50 additional products
                </Typography>
            </CardBody>
            <div style={footerStyle}>
                <span className="config-link">Complete the setup!</span>
                <ArrowForwardIcon className="footer-icon" />
            </div>
        </Card>
    );
};

export default SecondCard;
