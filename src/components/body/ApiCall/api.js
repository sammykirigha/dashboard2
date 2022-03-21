import axios from "axios";

const apiKey = process.env.REACT_APP_API_KEY;

async function makeRequest() {

	const config = {
		method: 'get',
		url: `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${apiKey}`,
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		}
	}

    let res = await axios(config)

    console.log(res.data);
}

console.log(makeRequest());