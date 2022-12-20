import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Flavors from "../pages/Flavors";
import About from "../pages/About";

export default function RouteWeb(){
    return(
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home/>} />
                <Route exact path="/Sabores" element={<Flavors/>} />
                <Route exact path="/Sobre" element={<About/>} />
            </Routes>
        </BrowserRouter>
    )

}