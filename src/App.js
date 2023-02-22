import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/nav-bar/Navbar";
import Home from "./pages/home-page/Home";
import Destination from "./pages/destination/Destination";
import Crew from "./pages/crew/Crew";
import Technology from "./pages/technology/Technology";
// import "./App.css";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="destination" element={<Destination />} />
        <Route path="crew" element={<Crew />} />
        <Route path="technology" element={<Technology />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// import { ThemeProvider } from "styled-components";
// import { GlobalStyles } from "./components/global";
// import { theme } from "./components/theme";
// import Menu from "./components/menu/Menu";
// import LazyShop from "./components/lazy-burger/LazyShop";
// import { CiShoppingCart } from "react-icons/ci";
