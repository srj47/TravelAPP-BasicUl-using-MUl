import {
  Box,
  Grid,
  Paper,
  Typography,
  Rating,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import { AccessTime } from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";

const theme = createTheme({
  components: {
    MuiTypography: {
      variants: [
        {
          props: {
            variant: "body2",
          },
          style: {
            fontSize: 14,
          },
        },
        {
          props: {
            variant: "body3",
          },
          style: {
            fontSize: 12,
          },
        },
      ],
    },
  },
});

const TourCard = ({ tour, cityName }) => {
  // let CityName = cityName.replace(/\s/g, "_");
  // let TourName = tour.name.replace(/\s/g, "_");
  let CityName = cityName;
  let TourName = tour.name;

  return (
    <>
      <ThemeProvider theme={theme}>
        <Grid item xs={3}>
          <Link to={`/${CityName}-${TourName}`}>
            <Paper elevation={5} square>
              <img src={tour.image} className="img" alt=" ... " />
              <Box padding={1}>
                <Typography variant="h6" component="h1" marginBottom={0}>
                  {tour.name}
                </Typography>
              </Box>
              <Box
                padding={1}
                sx={{ display: "flex", alignItems: "center" }}
                marginTop={0}
              >
                <AccessTime sx={{ width: 15 }} />
                <Typography variant="body2" component="p" marginLeft={0.5}>
                  {tour.duration}hr
                </Typography>
              </Box>
              <Box
                padding={1}
                sx={{ display: "flex", alignItems: "center" }}
                marginTop={1}
                marginLeft={0}
              >
                <Rating
                  name="read-only"
                  value={tour.rating}
                  readOnly
                  precision={0.5}
                  size="small"
                />
                <Typography variant="body2" component="p" marginLeft={0.5}>
                  {tour.rating}
                </Typography>
                <Typography variant="body3" component="p" marginLeft={1.5}>
                  ({tour.numberOfReviews} reviews)
                </Typography>
              </Box>
              <Box paddingLeft={1} marginBottom={2}>
                <Typography variant="h6" component="h3">
                  From C ${tour.price}
                </Typography>
              </Box>
            </Paper>
          </Link>
        </Grid>
      </ThemeProvider>
    </>
  );
};

export default TourCard;
