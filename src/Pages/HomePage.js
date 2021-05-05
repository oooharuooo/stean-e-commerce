import React from "react";
import { useListGamesContext } from "../context/product_context";
import { Loading } from "../components/index";

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

const HomePage = () => {
	const { listGames, listGames_loading } = useListGamesContext();

	return (
		<Grid
			container
			direction="row"
			justify="flex-start"
			spacing={6}
			style={{ backgroundColor: "azure" }}
		>
			{listGames_loading ? (
				<Loading />
			) : (
				listGames.map((listGame) => {
					const { name, id, genres, background_image } = listGame;
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
				})
			)}
		</Grid>
	);
};

export default HomePage;
