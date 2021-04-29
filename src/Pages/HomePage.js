import React, { useState, useEffect } from "react";
import axios from "axios";

import {
	Box,
	Typography,
	Card,
	CardMedia,
	CardActionArea,
	CardActions,
	CardContent,
	Grid,
} from "@material-ui/core/";

const url = `https://api.rawg.io/api/games?key=`;
const sort = `&metacritic=70&page_size=12`;
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

	return (
		<Grid
			container
			direction="row"
			justify="flex-start"
			spacing={6}
			style={{ backgroundColor: "azure" }}
		>
			{data.map((d) => {
				const { name, id, genres, background_image } = d;
				return (
					<Grid key={id} container item xs={12} sm={6} md={4}>
						<Card>
							<CardActionArea>
								<CardMedia
									component="img"
									alt="Contemplative Reptile"
									image={background_image}
									title="Contemplative Reptile"
									style={{ height: "300px" }}
								/>
								<CardContent>
									<Typography gutterBottom variant="h6" component="h2">
										{name}
									</Typography>

									<Box display="flex" style={{ gap: "1rem" }}>
										<Typography variant="overline" color="textPrimary">
											Genres:
										</Typography>
										{genres.map((genre, index) => (
											<Typography
												key={index}
												variant="overline"
												color="textSecondary"
											>
												{genre.name}
											</Typography>
										))}
									</Box>
								</CardContent>
							</CardActionArea>
						</Card>
					</Grid>
				);
			})}
		</Grid>
	);
};

export default HomePage;
