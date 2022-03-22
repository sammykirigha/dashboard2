import React, { useEffect, useState } from 'react';
import axios from 'axios'


const useMakeRequestHook = () => {
	const [data, setData] = useState([])

	const apiKey = process.env.REACT_APP_API_KEY;
	

	const fetchData = async () => {
		let res = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${apiKey}`)
		return res.data.articles
	}

	useEffect(() => {
		const results = fetchData()
		results.then(function (data) {
		    setData(data)
		});
	}, [])

  return [data, setData]
}

export default useMakeRequestHook