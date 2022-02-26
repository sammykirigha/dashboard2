import { Box, Grid, styled } from "@mui/material";
import "./cards.css";
import React from "react";
import MediaCard from "./contentCard";
import CardInfo from "./cardInfo";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";

const Contents = () => {
    return (
        <Box sx={{ paddingLeft: "15px", paddingRight: "15px" }}>
            <DashContainer>
                <DashLeft>
                    <MediaCard>
                        <CardInfo
                            viewIcon={
                                <RemoveRedEyeOutlinedIcon className="icon" />
                            }
                            header={"Visitors"}
                            text={"This month"}
                            arroDownIcon={
                                <ArrowDropDownIcon className="icon" />
                            }
                        >
                            <h2>5784</h2>
                            <div
                                style={{
                                    padding: "10px",
                                    color: "#21B8F9",
                                    cursor: "pointer",
                                    display: "flex",
                                    alignItems: "center",
                                }}
                            >
                                <span>
                                    Do you want more visits? Contact us!
                                </span>
                                <ArrowForwardOutlinedIcon
                                    style={{
                                        width: "18px",
                                        marginLeft: "10px",
                                    }}
                                />
                            </div>
                        </CardInfo>
                    </MediaCard>
                    <MediaCard>
                        <CardInfo
                            viewIcon={
                                <FormatListBulletedIcon className="icon" />
                            }
                            header={"Orders"}
                            text={"This month"}
                            arroDownIcon={
                                <ArrowDropDownIcon className="icon" />
                            }
                        >
                            <div className="orders">
                                <div className="orders-up">
                                    <div className="orders-up-section1">
                                        <div>Orders Received: </div>
                                        <div>156</div>
                                    </div>
                                    <div className="orders-up-section2">
                                        <div>Earnings: </div>
                                        <div>$1893.24</div>
                                    </div>
                                </div>
                                <div className="orders-down">
                                    <span>
                                        Do you want more visits? Contact us!
                                    </span>
                                </div>
                            </div>
                        </CardInfo>
                    </MediaCard>
                </DashLeft>
                <DashRight>
                    <MediaCard>
                        <CardInfo
                            viewIcon={
                                <FormatListBulletedIcon className="icon" />
                            }
                            header={"Orders"}
                            text={"This month"}
                            arroDownIcon={
                                <ArrowDropDownIcon className="icon" />
                            }
                        >
                            <div className="orders">
                                <div className="orders-up">
                                    <div className="orders-up-section1">
                                        <div>Orders Received: </div>
                                        <div>156</div>
                                    </div>
                                    <div className="orders-up-section2">
                                        <div>Earnings: </div>
                                        <div>$1893.24</div>
                                    </div>
                                </div>
                                <div className="orders-down">
                                    <span>
                                        Do you want more visits? Contact us!
                                    </span>
                                </div>
                            </div>
                        </CardInfo>
                    </MediaCard>
                </DashRight>
            </DashContainer>
        </Box>
    );
};

const DashContainer = styled(Box)(() => ({
    display: "flex",
    width: "100%",
    gap:"20px",
    transform:"translateY(-50px)",
    alignItems:"start"
}));

const DashLeft = styled(Box)(() => ({
    flex: 2,
    display:"grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap:"20px"

}));

const DashRight = styled(Box)(() => ({
    flex: 1,
    display:"flex",
    flexDirection:"column",
    gap:"20px"
}));

export default Contents;
