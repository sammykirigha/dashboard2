import { Avatar, Box, styled, Typography } from "@mui/material";
import "./Content.css";
import React, { useEffect, useState } from "react";
import BuildIcon from "@mui/icons-material/Build";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import FeedOutlinedIcon from "@mui/icons-material/FeedOutlined";
import OpenInNewOutlinedIcon from "@mui/icons-material/OpenInNewOutlined";
import StarRateIcon from "@mui/icons-material/StarRate";
import { useDispatch, useSelector } from "react-redux";
import { getLatestNews } from "../../redux/newsActions";
import { useTheme } from "@emotion/react";
import Spinner from "../reusableCompts/spinner/Spinner";
import { CardContent } from "./FirstCard/card-content";
import CardContentTwo from "./SecondCard/card-content-two";
import image1 from "../../images/iPhone.png";
import AdvertCard from "./AdvertCard/advert-card";
import ExtensionCard from "./ExtensionCard/extension-card";

const truncateString = (str, num) => {
    if (str?.length > num) {
        let subStr = str.substring(0, num);
        return subStr + "...";
    } else {
        return str;
    }
};

const Contents = () => {
    const theme = useTheme();
    const [_news, setNews] = useState([]);

    const { news, loading } = useSelector((state) => state.news);
    const dispatch = useDispatch();

    useEffect(() => {
        let arr = [
            news[0],
            news[1],
            news[2],
            news[3],
            news[4],
            news[5],
            news[6],
            news[7],
        ];
        dispatch(getLatestNews());
        // setNews(arr);
    }, [dispatch]);

    console.log(_news);
    return (
        <Box className="main-box">
            <DashContainer>
                <DashLeft>
                    <CardContent />
                    <CardContentTwo />
                    <AdvertCard />
                    <ExtensionCard />
                    <DashLeftInner>
                        <CardContent>
                            <Box className="news-box">
                                <Box className="news-main">
                                    <FeedOutlinedIcon className="news-icon" />
                                    <Typography
                                        component="p"
                                        className="news-text1"
                                    >
                                        Latest news
                                    </Typography>
                                </Box>
                                <Box className="news-main">
                                    <Typography
                                        component="p"
                                        className="news-text2"
                                    >
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
                            <DashLeftInnerCards>
                                {loading ? (
                                    <div className="spinner-div">
                                        <Spinner />
                                    </div>
                                ) : (
                                    _news?.map((item, index) => (
                                        <Box key={index} className="news-body">
                                            <Box className="news-image">
                                                <img
                                                    className="image"
                                                    style={{
                                                        objectFit: "contain",
                                                        overflow: "hidden",
                                                    }}
                                                    src={item.urlToImage}
                                                    alt="news"
                                                />
                                            </Box>
                                            <Box className="news-info">
                                                <Typography className="news-h6">
                                                    {truncateString(
                                                        item.title,
                                                        15
                                                    )}
                                                </Typography>
                                                <Typography
                                                    component="p"
                                                    className="news-paragraph"
                                                >
                                                    {item.description
                                                        ? truncateString(
                                                              item.description,
                                                              40
                                                          )
                                                        : "i think that the: return true; // Inform Chrome"}
                                                </Typography>
                                                <Typography
                                                    component="p"
                                                    className="news-link"
                                                >
                                                    {truncateString(
                                                        item.url,
                                                        30
                                                    )}
                                                </Typography>
                                            </Box>
                                        </Box>
                                    ))
                                )}
                            </DashLeftInnerCards>
                        </CardContent>
                    </DashLeftInner>
                </DashLeft>
                <DashRight>
                    <CardContent>
                        <Box style={{ padding: "10px" }}>
                            <Box
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                }}
                            >
                                <BuildIcon
                                    style={{
                                        height: "20px",
                                        width: "20px",
                                        marginRight: "10px",
                                    }}
                                />
                                <Typography className="config-text">
                                    Configure your shop
                                </Typography>
                            </Box>
                            <Box className="complete-box">
                                <Typography className="complete-box">
                                    45%
                                </Typography>
                                <Typography component="span">
                                    completed
                                </Typography>
                            </Box>
                            <Box style={{ margin: "15px 0px", width: "90%" }}>
                                <Typography
                                    component="p"
                                    className="config-paragraph"
                                >
                                    Complete all the steps to have a complete
                                    shop to best present to your customers.
                                </Typography>
                                <Typography
                                    component="div"
                                    className="config-link"
                                >
                                    Complete the setup!
                                    <ArrowForwardIcon
                                        style={{
                                            height: "20px",
                                            width: "25px",
                                            marginLeft: "7px",
                                        }}
                                    />
                                </Typography>
                            </Box>
                        </Box>
                    </CardContent>
                    <CardContent>
                        <Box className="trust-pilot">
                            <Box className="icon-box">
                                <StarRateIcon className="trust-icon" />
                                <Typography
                                    component="p"
                                    className="trust-text"
                                >
                                    Trustpilot
                                </Typography>
                            </Box>
                            <Box
                                style={{
                                    marginTop: "15px",
                                    padding: "20px",
                                    width: "90%",
                                }}
                            >
                                <Typography
                                    component="p"
                                    className="trust-paragraph"
                                >
                                    Show us your love by leaving a positive
                                    review on trust pilot and receive the
                                    extension of 50 additional products
                                </Typography>
                                <Typography
                                    component="div"
                                    className="trust-link"
                                >
                                    Complete the setup!
                                    <ArrowForwardIcon
                                        style={{
                                            height: "20px",
                                            width: "25px",
                                            marginLeft: "7px",
                                        }}
                                    />
                                </Typography>
                            </Box>
                        </Box>
                    </CardContent>
                    <CardContent>
                        <Box style={{ padding: "15px" }}>
                            <Box
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                }}
                            >
                                <PeopleAltOutlinedIcon
                                    style={{
                                        height: "20px",
                                        width: "20px",
                                        marginRight: "10px",
                                    }}
                                />
                                <Typography
                                    component="p"
                                    className="config-text"
                                >
                                    Invite friend
                                </Typography>
                            </Box>
                            <Box style={{ width: "90%" }}>
                                <Typography
                                    component="p"
                                    className="invite-paragraph"
                                >
                                    <strong style={{ color: "#00C48C" }}>
                                        Receive 50 products
                                    </strong>{" "}
                                    by inviting a friend who subscribes to a
                                    plan. Your friend will receive a 30%
                                    discount coupon valid for any plan.
                                </Typography>
                                <Typography
                                    component="div"
                                    className="invite-link"
                                >
                                    Complete the setup!
                                    <ArrowForwardIcon
                                        style={{
                                            height: "20px",
                                            width: "25px",
                                            marginLeft: "7px",
                                        }}
                                    />
                                </Typography>
                            </Box>
                        </Box>
                    </CardContent>
                    <CardContent>
                        <Box style={{ padding: "10px" }}>
                            <Box
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                }}
                            >
                                <BuildIcon
                                    style={{
                                        height: "20px",
                                        width: "20px",
                                        marginRight: "10px",
                                    }}
                                />
                                <Typography
                                    component="p"
                                    className="config-text"
                                >
                                    Customer support
                                </Typography>
                            </Box>
                            <Box className="customer-box">
                                <Avatar alt="Sammy" src={image1} />
                                <Typography
                                    component="span"
                                    className="customer-text"
                                >
                                    Simone is here to help you.
                                </Typography>
                            </Box>
                            <div
                                style={{ margin: "10px 0px", padding: "10px" }}
                            >
                                <button className="customer-button">
                                    Contact us
                                </button>
                            </div>
                        </Box>
                    </CardContent>
                </DashRight>
            </DashContainer>
        </Box>
    );
};

const DashContainer = styled(Box)(({ theme }) => ({
    display: "flex",
    width: "100%",
    gap: "10px",
    transform: "translateY(-30px)",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    [theme.breakpoints.up("lg")]: {
        flexDirection: "row",
    },
}));

const DashLeft = styled(Box)(({ theme }) => ({
    display: "flex",
    gridTemplateColumns: "repeat(auto-fill, 1fr)",
    flexDirection: "column",
    justifyContent: 'center',
    [theme.breakpoints.up("md")]: {
        flex: 2,
        display: "grid",
        gap: "10px",
        gridTemplateColumns: "repeat(auto-fill, 1fr)",
    },
}));

const DashRight = styled(Box)(() => ({
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flext-start",
    gap: "10px",
}));

const DashLeftInnerCards = styled(Box)(() => ({
    flex: 2,
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
}));

const DashLeftInner = styled(Box)(() => ({
    gridColumn: "1 / span 2",
    gridRow: "3 / span 3",
}));

export default Contents;
