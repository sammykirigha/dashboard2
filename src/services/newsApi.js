import axios from 'axios';

export const getLatestNewsService = async () => {
    const apiKey = process.env.REACT_APP_API_KEY;
    try {
        const NEWS_ENDPOINT = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${apiKey}`;
        const {data: {articles}} = await axios.get(NEWS_ENDPOINT);
        console.log("my response data", typeof articles);
        return articles;
    } catch (error) {
        console.log(error);
    }
}