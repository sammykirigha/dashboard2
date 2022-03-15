import {
    Avatar,
    Box,
    styled,
    Typography,
} from "@mui/material";
import "./Content.css";
import React, { useEffect, useState } from "react";
import MediaCard from "./contentCard";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import BuildIcon from "@mui/icons-material/Build";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import AddchartIcon from "@mui/icons-material/Addchart";
import image1 from "../../images/iPhone.png";
import image2 from "../../images/appstore.png";
import image3 from "../../images/googleapp.png";
import FeedOutlinedIcon from "@mui/icons-material/FeedOutlined";
import OpenInNewOutlinedIcon from "@mui/icons-material/OpenInNewOutlined";
import StarRateIcon from "@mui/icons-material/StarRate";
import { useDispatch, useSelector } from "react-redux";
import { getLatestNews } from "../../redux/newsActions";
import Carousel, { CarouselItem } from "../reusableCompts/carousel/Carousel";
import { useTheme } from "@emotion/react";
import Spinner from '../reusableCompts/spinner/Spinner'

const truncateString = (str, num) => {
    if (str?.length > num) {
        let subStr = str.substring(0, num);
        return subStr + "...";
    } else {
        return str;
    }
};

const options = [
    {
        label: "This Month",
        value: "1235",
    },
    {
        label: "Next Month",
        value: "4563",
    },
    {
        label: "Last Month",
        value: "7890",
    },
];

const optionsB = [
    {
        label: "This Year",
        value: { num: "567", price: "7865.65" },
    },
    {
        label: "Next Year",
        value: { num: "467", price: "9565.78" },
    },
    {
        label: "Last Year",
        value: { num: "127", price: "2065.43" },
    },
];

const Contents = () => {
    const theme = useTheme();
    const [_news, setNews] = useState([]);
    const [values, setValues] = useState(5678);
    const [orders, setOrders] = useState({ num: "100", price: "5688.33" });
    
    const {news, loading} = useSelector((state) => state.news);
    const dispatch = useDispatch();

    let arr = [news[0],news[1],news[2],news[3],news[4],news[5],news[6],news[7]]

    useEffect(() => {
        dispatch(getLatestNews());
        setNews(arr);
    }, []);

    console.log(_news);

    const onChange = (e) => {
        const { value } = e.target;
        setValues(value);
    };

    const ordersChange = (e) => {
        const { value } = e.target;
        setOrders(JSON.parse(value));
    };

    return (
        <Box className="main-box">
            <DashContainer>
                <DashLeft>
                    <MediaCard>
                        <div className="card-box">
                            <div className="card-content1">
                                <div className="card-header">
                                    <RemoveRedEyeOutlinedIcon className="icon" />
                                    <span data-testid='values' className="card-content-span1">
                                        Visitors
                                    </span>
                                </div>
                                <div className="card-header">
                                    <select
                                        onChange={onChange}
                                        className="select"
                                        data-testid='select'
                                        value={values}
                                    >
                                        {options.map((option) => (
                                            <option value={option.value}>
                                                {option.label}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                            <div className="card-content2">
                                <span className="visitors-number">
                                    {values}
                                </span>
                                <div className="visitors-info">
                                    <span className="config-link">
                                        Do you want more visits? Contact us!
                                    </span>
                                    <ArrowForwardOutlinedIcon
                                        style={{
                                            width: "18px",
                                            marginLeft: "5px",
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    </MediaCard>
                    <MediaCard>
                        <div className="card-box">
                            <div className="card-content1">
                                <div className="card-header">
                                    <FormatListBulletedIcon className="icon" />
                                    <span data-testid='orders' className="card-content-span1">
                                        Orders
                                    </span>
                                </div>
                                <div className="card-header">
                                    <select
                                        onChange={ordersChange}
                                        className="select"
                                    >
                                        {optionsB.map((option, index) => (
                                            <option
                                                value={JSON.stringify(
                                                    option.value
                                                )}
                                            >
                                                {option.label}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                            <div className="card-content2">
                                <div className="orders">
                                    <div className="orders-up">
                                        <div className="orders-up-section1">
                                            <div className="orders-received">
                                                Orders Received:{" "}
                                            </div>
                                            <div className="orders-quantity">
                                                {orders.num}
                                            </div>
                                        </div>
                                        <div className="orders-up-section2">
                                            <div className="orders-received">
                                                Earnings:{" "}
                                            </div>
                                            <div className="orders-quantity">
                                                ${orders.price}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="orders-down">
                                        <span className="config-link">
                                            10 free tips to increase your sales
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </MediaCard>
                    <MediaCard>
                        <Box className="add-box">
                            <Box className="add-body">
                                <Box className="add-text-box">
                                    <Typography className="add-paragraph">
                                        Sell your products on your exclusive APP
                                        published on the stores
                                    </Typography>
                                    <Typography className="add-link-box">
                                        <span className="add-link">
                                            Show more
                                        </span>
                                        <ArrowForwardIcon className="arrowForward" />
                                    </Typography>
                                </Box>
                                <Box className="add-image-div">
                                    <img
                                        className="phone-image"
                                        src={image1}
                                        alt="phone"
                                    />
                                </Box>
                            </Box>
                            <Box className="images">
                                <img
                                    className="playStore"
                                    src={image2}
                                    alt="phone"
                                />
                                <img
                                    className="playStore"
                                    src={image3}
                                    alt="phone"
                                />
                            </Box>
                        </Box>
                    </MediaCard>
                    <MediaCard>
                        <Box className="config-box">
                            <Box className="config-header-box">
                                <AddchartIcon className="config-add-icon" />
                                <Typography
                                    component="p"
                                    className="config-header"
                                >
                                    Extensions marketplace
                                </Typography>
                            </Box>
                            <Box className="exten-main">
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
                                                Connect to your own domain
                                            </Typography>
                                        </Box>
                                    </CarouselItem>
                                    <CarouselItem>
                                        <Box className="exten-box2">
                                            <Box
                                                className="exten-icon2"
                                                style={{
                                                    backgroundColor: "blue",
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
                            </Box>
                            <Box style={{ marginTop: "25px" }}>
                                <Typography
                                    component="div"
                                    style={{ paddingTop: "5px" }}
                                    className="config-link"
                                >
                                    Discover all Extensions!
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
                    </MediaCard>
                    <DashLeftInner>
                        <MediaCard>
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
                                                    style={{objectFit: 'contain', overflow: 'hidden'}}
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
                        </MediaCard>
                    </DashLeftInner>
                </DashLeft>
                <DashRight>
                    <MediaCard>
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
                    </MediaCard>
                    <MediaCard>
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
                    </MediaCard>
                    <MediaCard>
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
                    </MediaCard>
                    <MediaCard>
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
                    </MediaCard>
                </DashRight>
            </DashContainer>
        </Box>
    );
};

const DashContainer = styled(Box)(({ theme }) => ({
    display: "flex",
    width: "100%",
    gap: "20px",
    transform: "translateY(-35px)",
    flexDirection: "column",
    [theme.breakpoints.up("lg")]: {
        flexDirection: "row",
    },
}));

const DashLeft = styled(Box)(({ theme }) => ({
    display:"flex",
    flexDirection:"column",
    alignItems: "start",
    gap: "20px",
    [theme.breakpoints.up("md")]: {
        flex: 2,
        display: "grid",
        gap: "20px",
        gridTemplateColumns: "repeat(auto-fill, 1fr)",
    },
    gap: "20px",
    
}));

const DashRight = styled(Box)(() => ({
    flex: 1,
    display: "flex",
    flexDirection: "column",
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
