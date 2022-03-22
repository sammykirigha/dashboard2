import { Box, styled } from "@mui/material";
import "./Content.css";
import React from "react";
import { useTheme } from "@emotion/react";
import { CardContent } from "./DashboardLeft/FirstCard/card-content";
import CardContentTwo from "./DashboardLeft/SecondCard/card-content-two";
import ExtensionCard from "./DashboardLeft/ExtensionCard/extension-card";
import AdvertCard from "./DashboardLeft/AdvertCard/advert-card";
import FirstCard from "./DashboardRightCards/FirstCard/first-card";
import SecondCard from "./DashboardRightCards/SecondCard/second-card";
import ThirdCard from "./DashboardRightCards/ThirdCard/third-card";
import FourthCard from "./DashboardRightCards/FourthCard/fourth-card";
import NewsCard from "./DashboardLeft/NewsCard/news-card";
import NewsHeader from "./DashboardLeft/NewsCard/news-header";
import NewsData from "./DashboardLeft/NewsCard/news-data";

const Contents = () => {
    const theme = useTheme();
    return (
        <Box className="main-box">
            <DashContainer>
                <DashLeft>
                    <CardContent />
                    <CardContentTwo />
                    <AdvertCard />
                    <ExtensionCard />
                    <DashLeftInner>
                        <NewsCard>
                            <NewsHeader />
                            <DashLeftInnerCards>
                                <NewsData />
                            </DashLeftInnerCards>
                        </NewsCard>
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
    alignItems: 'center',
    // backgroundColor: 'blue',
    // marginLeft: '10px',
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
    alignItems: "center",
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
