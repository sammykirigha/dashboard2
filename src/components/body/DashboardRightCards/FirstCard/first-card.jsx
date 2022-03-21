import { Card, Typography } from "@mui/material";
import "./first-card.css";
import React from "react";
import CardHeader from "../card-header";
import BuildIcon from "@mui/icons-material/Build";
import CardBody from "../../../reusableCompts/cardBody/card-body";
import { Box } from "@mui/system";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const footerStyle = {
    color: '#21b8f9',
	cursor: 'pointer',
	marginTop: '50px',
	display: 'flex',
	alignItems: 'center',
	paddingTop: '20px'
};

const FirstCard = () => {
    return (
        <Card className="first-card">
			<CardHeader
                icon={<BuildIcon className="icon" />}
				headerText={"Configure your shop"}
            />
            <CardBody>
                <Box className="complete-box">
                    <Typography className="complete-box">45%</Typography>
                    <Typography component="span">completed</Typography>
                </Box>
                <Box className='par-box'>
                    <Typography component="p" className="config-paragraph">
                        Complete all the steps to have a complete shop to best
                        present to your customers.
                    </Typography>
                </Box>
            </CardBody>
            <div style={footerStyle}>
                <span className="config-link">Complete the setup!</span>
                <ArrowForwardIcon className="footer-icon" />
            </div>
        </Card>
    );
};

export default FirstCard;
