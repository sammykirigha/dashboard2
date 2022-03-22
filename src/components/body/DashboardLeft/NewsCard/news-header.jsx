import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import './news-card.css'
import FeedOutlinedIcon from "@mui/icons-material/FeedOutlined";
import OpenInNewOutlinedIcon from "@mui/icons-material/OpenInNewOutlined";

const NewsHeader = () => {
    return (
        <Box className="news-box">
            <Box className="news-main">
                <FeedOutlinedIcon className="news-icon" />
                <Typography component="p" className="news-text1">
                    Latest news
                </Typography>
            </Box>
            <Box className="news-main">
                <Typography component="p" className="news-text2">
                    Visit our blog
                </Typography>
                <OpenInNewOutlinedIcon
                    style={{
                        marginLeft: "10px",
                        color: "#21B8F9",
                    }}
                />
            </Box>
        </Box>
    );
};

export default NewsHeader;
