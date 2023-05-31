import TourCard from "../Components/TourCard";
import city from "../Components/data";

import { Grid, Container, Typography } from "@mui/material";

function Home() {
  return (
    <>
      <Container sx={{ marginY: 10 }}>
        {/* {city.map((item, index) => (
          <>
            <h2 key={index}>{item.name}</h2>
            {item.tours.map((itemx, index) => (
              <>
                <h5 key={index}>{itemx.name}</h5>
              </>
            ))}
          </>
        ))} */}
        <Typography
          variant="h4"
          component="h4"
          marginBottom={3.5}
          sx={{ textAlign: "center" }}
        >
          Explore the world
        </Typography>
        {city.map((cityItem) => (
          <div key={cityItem.id}>
            <Typography variant="h5" component="p" marginBottom={3.5}>
              {cityItem.name}
            </Typography>

            <Grid container spacing={2}>
              {cityItem.tours.map((tour) => (
                <TourCard tour={tour} key={tour.id} cityName={cityItem.name} />
              ))}
            </Grid>
          </div>
        ))}
      </Container>
    </>
  );
}

export default Home;
