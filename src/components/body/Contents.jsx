import { Box, styled, Typography } from "@mui/material";
import "./Content.css";
import React, { useEffect, useState } from "react";
import FeedOutlinedIcon from "@mui/icons-material/FeedOutlined";
import OpenInNewOutlinedIcon from "@mui/icons-material/OpenInNewOutlined";
import { useDispatch, useSelector } from "react-redux";
import { getLatestNews } from "../../redux/newsActions";
import { useTheme } from "@emotion/react";
import Spinner from "../reusableCompts/spinner/Spinner";
import { CardContent } from "./DashboardLeft/FirstCard/card-content";
import CardContentTwo from "./DashboardLeft/SecondCard/card-content-two";
import ExtensionCard from "./DashboardLeft/ExtensionCard/extension-card";
import AdvertCard from "./DashboardLeft/AdvertCard/advert-card";
import FirstCard from "./DashboardRightCards/FirstCard/first-card";
import SecondCard from "./DashboardRightCards/SecondCard/second-card";
import ThirdCard from "./DashboardRightCards/ThirdCard/third-card";
import FourthCard from "./DashboardRightCards/FourthCard/fourth-card";

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
                    <FirstCard />
                    <SecondCard />
                    <ThirdCard />
                    <FourthCard />
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
    justifyContent: "space-between",
    // backgroundColor: 'red',
    [theme.breakpoints.up("lg")]: {
        flexDirection: "row",
    },
}));

const DashLeft = styled(Box)(({ theme }) => ({
    display: "flex",
    gridTemplateColumns: "repeat(auto-fill, 1fr)",
    flexDirection: "column",
    justifyContent: "center",
    // backgroundColor: 'blue',
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
    // backgroundColor: 'yellow',
    gap: "20px",
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
