import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Register from "./Register";
import Logout from "./Logout";
import Navbar from "./Navbar";
import logo from "../img/logo.svg";


const AllRoutes = () => {
    return (
        <div><div className="logo">
            <img src={logo} alt="Stranger's Things Logo" />
        </div><Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                {/* <Route path="/posts" element={<Posts />} /> */}
                <Route path="/signup" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/logout" element={<Logout />} />
                {/* <Route path="/user/{id}" element={<User />} /> */}
            </Routes></div>
    )
}
export default AllRoutes;