import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Body from "./components/Body";
import MovieDetails from "./components/Movies/MovieDetails";
const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <Body />
    </>
  );
};

const RouterApp: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/movies/:resId" element={<MovieDetails />} />
      </Routes>
    </BrowserRouter>
  );
};

ReactDOM.render(<RouterApp />, document.getElementById("root"));
