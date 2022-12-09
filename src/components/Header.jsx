import React from "react";
import Login from "./Login";
import Logout from "./Logout";
import { me } from "../api/auth";

const Header = () => {
    return (
        <header>
            If user
            <Navbar />
        </header>
    )
}
export default Header