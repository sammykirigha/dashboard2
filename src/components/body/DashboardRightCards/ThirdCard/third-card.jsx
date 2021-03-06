import { Card, Typography } from "@mui/material";
import './third-card.css'
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import React from "react";
import CardHeader from "../card-header";
import CardBody from "../../../reusableCompts/cardBody/card-body";
import { Box } from "@mui/system";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const footerStyle = {
    color: "#21b8f9",
    cursor: "pointer",
    marginTop: "5px",
    display: "flex",
    alignItems: "center",
};

const configLink = {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "17px !important",
    textDecorationLine: "underline",
    color: "#21b8f9",
    cursor: " pointer",
};

const ThirdCard = () => {
    return (
        <Card className="third-card-box">
            <CardHeader 
                icon={<PeopleAltOutlinedIcon className="icon"/>}
                headerText={"Invite friend"}
            />
            <CardBody>
                <Box style={{ width: "90%" }}>
                    <Typography component="p" className="invite-paragraph">
                        <strong style={{ color: "#00C48C" }}>
                            Receive 50 products
                        </strong>{" "}
                        by inviting a friend who subscribes to a plan. Your
                        friend will receive a 30% discount coupon valid for any
                        plan.
                    </Typography>
                </Box>
            </CardBody>
            <div style={footerStyle}>
                <span style={configLink}>Start inviting frineds</span>
                <ArrowForwardIcon className="footer-icon" />
            </div>
        </Card>
    );
};

export default ThirdCard;
