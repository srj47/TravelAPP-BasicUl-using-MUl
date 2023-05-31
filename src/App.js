import Home from "./Pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TourDetails from "./Pages/TourDetails";
import SearchAppBar from "./Components/AppBar";

function App() {
  return (
    <>
      <Router basename="/">
        <SearchAppBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:TourTitle" element={<TourDetails />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
