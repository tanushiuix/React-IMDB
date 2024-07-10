import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Header/Navbar";
import MovieGallery from "./container/movie-gallery/MovieGallery";
import MovieDetail from "./container/MovieDetail";

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <MovieGallery />
    </>
  );
};

const RouterApp: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/movies/:resId" element={<MovieDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

ReactDOM.render(<RouterApp />, document.getElementById("root"));
