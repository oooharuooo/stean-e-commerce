import React from "react";
import { useListGamesContext } from "../context/product_context";

import {
	Box,
	Typography,
	Card,
	CardMedia,
	CardActionArea,
	CardActions,
	CardContent,
	Grid,
	makeStyles,
} from "@material-ui/core/";

const useStyles = makeStyles({
	gridContainer: {
		flexDirection: "row",
		justifyContent: "flex-start",
		backgroundColor: "azure",
	},
	textBackground: {
		backgroundColor: "#a4ffd2",
	},
});

const ListGame = () => {
	const { listGames} = useListGamesContext();

    const classes = useStyles();
    
	return (
		<Grid container spacing={6} className={classes.gridContainer}>
			{listGames.map((listGame) => {
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
									<Typography
										gutterBottom
										variant="h6"
										component="h2"
										className={classes.textBackground}
									>
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

export default ListGame;
