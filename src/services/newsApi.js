import axios from 'axios';

export const getLatestNewsService = async () => {
    const apiKey = process.env.REACT_APP_API_KEY;
    try {
        const NEWS_ENDPOINT = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${apiKey}`;
        const response = await axios.get(NEWS_ENDPOINT);
        console.log("my response", response);
        return response;
    } catch (error) {
        console.log(error);
    }
}