// import React from 'react'

import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Register from "./components/Register";
import AddRecipe from "./components/AddRecipe";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Saved from "./components/Saved";
// import FetchRecipeById from "./components/FetchRecipeById";
import Detail from "./components/Detail";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/saved" element={<Saved />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/addRecipe" element={<AddRecipe />} />
          <Route path="/:id" element={<Detail />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
