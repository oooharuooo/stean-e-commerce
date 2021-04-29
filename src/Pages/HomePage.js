import React, { useState, useEffect } from "react";
import axios from "axios";

const url = `https://api.rawg.io/api/games?key=`;
const sort = `&metacritic=70&page_size=10`;
const apiKey = `6a522a36e82046969ab7f5ef35c3d7f2`;
const HomePage = () => {
	const [data, setData] = useState([]);

	// Fetch Data
	const fetchData = async () => {
		const {
			data: { results },
		} = await axios.get(`${url}${apiKey}${sort}`);
		setData(results);
	};
	useEffect(() => fetchData(), []);

	const z = data.map((d) => {
		const { name, id, metacritic, genres, short_screenshots } = d;
		console.log(d);
		return (
			<React.Fragment key={id}>
				<h1>{name}</h1>
				<p>{metacritic}</p>
				{genres.map((g) => (
					<p>{g.name}</p>
				))}
			</React.Fragment>
		);
	});
	return <div className="App">{z}</div>;
};

export default HomePage;
