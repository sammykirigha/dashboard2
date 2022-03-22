import axios from "axios";

const apiKey = process.env.REACT_APP_API_KEY;

export const makeRequest = async() => {
     const config = {
		method: 'get',
		url: `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${apiKey}`,
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		}
	}
   try {
       let res = await axios(config)
   } catch (error) {
       console.log(error);
    }  
    
}

