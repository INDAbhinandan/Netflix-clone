import React from "react";
import netlogo from "../../netlogo.png";
import "../Home/Home.scss";
import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
export default function Header() {
    return (
        <nav className="header">
            <img src={netlogo} alt="logo" />

            <div>
                <Link to="/Tv show">TV Shows</Link>
                <Link to="/movies">Movies</Link>
                <Link to="/recent">Recently Added</Link>
                <Link to="/mylist">My List</Link>
            </div>
            <FiSearch />
        </nav>
    );
}
