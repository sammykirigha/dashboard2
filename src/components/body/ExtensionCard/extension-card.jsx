import { Card, Typography } from "@mui/material";
import './extension-card.css'
import { Box } from "@mui/system";
import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import AddchartIcon from "@mui/icons-material/Addchart";
import Carousel, { CarouselItem } from "../../reusableCompts/carousel/Carousel";

const iconStyle = {
 height: "20px",
 width: "25px",
 marginLeft: "7px",
}

const ExtensionCard = () => {
    return (
        <Card className="exten-card">
            <Box className="config-box">
                <Box className="config-header-box">
                    <AddchartIcon className="config-add-icon" />
                    <Typography component="p" className="config-header">
                        Extensions marketplace
                    </Typography>
                </Box>
                    <Carousel>
                        <CarouselItem>
                            <Box className="exten-box2">
                                <Box
                                    className="exten-icon2"
                                    style={{
                                        backgroundColor: "#FFA26B",
                                    }}
                                >
                                    <Typography className="extension-icon-text">
                                        +50
                                    </Typography>
                                    <Typography className="extension-icon-text">
                                        Prodotti
                                    </Typography>
                                </Box>
                                <Typography className="exten-text">
                                    50 Additional Products
                                </Typography>
                            </Box>
                        </CarouselItem>
                        <CarouselItem>
                            <Box className="exten-box2">
                                <Box
                                    className="exten-icon2"
                                    style={{
                                        backgroundColor: "#00C48C",
                                    }}
                                >
                                    <Typography className="extension-icon-text">
                                        +50
                                    </Typography>
                                    <Typography className="extension-icon-text">
                                        Prodotti
                                    </Typography>
                                </Box>
                                <Typography className="exten-text">
                                    50 Additional Products
                                </Typography>
                            </Box>
                        </CarouselItem>
                    </Carousel>
                <Box>
                    <Typography
                        component="div"
                        className="links"
                    >
                        Discover all Extensions!
                        <ArrowForwardIcon style={iconStyle}/>
                    </Typography>
                </Box>
            </Box>
        </Card>
    );
};

export default ExtensionCard;
