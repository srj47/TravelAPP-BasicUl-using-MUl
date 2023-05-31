import {
  Box,
  Container,
  Typography,
  Paper,
  BottomNavigation,
} from "@mui/material";
import React from "react";
// import mainImg from "../images/OIP.jpg";
import FAQBox from "../Components/FAQBox";
import BasicModal from "../Components/Model";
import ImageCollage from "../Components/ImageCollage";
import { useParams } from "react-router-dom";
import city from "../Components/data";

function TourDetails() {
  let { TourTitle } = useParams();
  console.log(TourTitle);
  let splitter = TourTitle.split("-");
  console.log(splitter);
  let cityName = splitter[0];
  let TourName = splitter[1];

  const getImagePath = (tourName) => {
    // Find the tour object that matches the tour name
    const foundTour = city.find((item) =>
      item.tours.find((tour) => tour.name === tourName)
    );

    return foundTour
      ? foundTour.tours.find((tour) => tour.name === tourName).image
      : null;
  };

  const ImagePath = getImagePath(TourName);
  console.log(ImagePath);
  return (
    <>
      <Container sx={{ width: 1000, marginY: 10 }}>
        <Typography variant="h5" component="h3" marginTop={4}>
          {cityName}
        </Typography>
        <Typography variant="h2" component="h3" marginTop={0}>
          {TourName}
        </Typography>

        <Box sx={{ display: "flex", marginY: 2 }}>
          <img src={ImagePath} alt=" ... " width={1000} height={400} />
          {/* <ImageCollage /> */}
        </Box>
        <Box marginY={4}>
          <Typography variant="h6" component="h4">
            About
          </Typography>
          <Typography variant="paragraph" component="p">
            Ut occaecat minim id incididunt Lorem Lorem cillum pariatur. Ipsum
            excepteur labore anim excepteur enim dolor irure do. Lorem
            adipisicing dolore magna mollit fugiat mollit officia reprehenderit
            nulla aliqua ut mollit. Lorem exercitation adipisicing minim eiusmod
            sint quis sit adipisicing aliqua proident. Eu eu et dolore ea.
            Veniam voluptate deserunt laboris duis ad occaecat duis tempor. Sunt
            voluptate labore id consequat.
          </Typography>
        </Box>
        <Box marginTop={4} marginBottom={12}>
          <Typography variant="h6" component="h4">
            FAQ
          </Typography>
          <FAQBox />
        </Box>
        <Box>
          <Paper
            sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
            elevation={3}
          >
            <BottomNavigation>
              <BasicModal />
            </BottomNavigation>
          </Paper>
        </Box>
      </Container>
    </>
  );
}

export default TourDetails;
