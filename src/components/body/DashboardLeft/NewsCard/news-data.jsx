import { Typography } from "@mui/material";
import './news-card.css'
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import Spinner from "../../../reusableCompts/spinner/Spinner";
import useMakeRequestHook from "../../../customHook/make-request";

const truncateString = (str, num) => {
    if (str?.length > num) {
        let subStr = str.substring(0, num);
        return subStr + "...";
    } else {
        return str;
    }
};

const NewsData = () => {
	const [_news, setNews] = useState([]);
	// const [loading, setLoading] = useState(true)
	const [data, load, setLoad] = useMakeRequestHook()
	console.log(data);
	const news = data.slice(0,8)
    
	
	useEffect(() => {
		setNews(news);
		// setLoading(false)
	}, []);

	console.log(_news);
	
    return (
        <>
            {
                _news?.map((item, index) => (
                    <Box key={index} className="news-body">
                        <Box className="news-image">
                            <img
                                className="image"
                                src={item.urlToImage}
                                alt="news"
                            />
                        </Box>
                        <Box className="news-info">
                            <Typography className="news-h6">
                                {truncateString(item.title, 15)}
                            </Typography>
                            <Typography
                                component="p"
                                className="news-paragraph"
                            >
                                {item.description
                                    ? truncateString(item.description, 40)
                                    : "i think that the: return true; // Inform Chrome"}
                            </Typography>
                            <Typography component="p" className="news-link">
                                Estimated reading: 4 min
                            </Typography>
                        </Box>
                    </Box>
                ))
            }
        </>
    );
};

export default NewsData;
