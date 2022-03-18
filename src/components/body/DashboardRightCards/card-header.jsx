import { Box } from "@mui/system";
import React from "react";
import "./card-header.css";
import { Typography } from "@mui/material";

const CardHeader = ({icon, headerText}) => {
    return (
		<Box className="box">
			{icon}
			<Typography className="config-text">{ headerText}</Typography>
        </Box>
    );
};

export default CardHeader;
