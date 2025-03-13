import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import About from "./component/About";
import NavBar from "./component/NavBar";
import CreateNewUser from "./component/CreateNewUser";
import AllUsers from "./component/AllUsers";
import ErrorPage from "./component/ErrorPage";
function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/CreateNewUser" element={<CreateNewUser />} />
        <Route path="/AllUsers" element={<AllUsers />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
