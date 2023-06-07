import React, { useEffect } from "react";
import Home from "./pages/home/Home";
import Summery from "./pages/summery/Summery";
import { fetchDataFromApi } from "./utils/api";
import Header from "./components/header/Header";
import { useDispatch } from "react-redux";
import { setShows } from "./store/showSlice";
import Footer from "./components/footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const App = () => {
  const dispatch = useDispatch();

  const storeShows = () => {
    fetchDataFromApi().then((res) => {
      const allShow = [];
      res.map((item, index) => {
        allShow[index] = item.show;
      });
      dispatch(setShows(allShow));
    });
  };

  useEffect(() => {
    storeShows();
  }, []);

  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/summery/:id" element={<Summery />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
