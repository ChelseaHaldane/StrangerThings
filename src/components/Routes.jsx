import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Posts from "./Posts";
import Register from "./Register";

const AllRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="/signup" element={<Register />} />
            <Route path="/login" element={<Login />} />
        </Routes>
    )
}


export default AllRoutes;