import React from "react";
import { NavLink } from "react-router-dom";
import "../App.css";
import { useAuth } from "../context/AuthContext";
export const Navbar = () => {
  const auth = useAuth();
  const navLinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
    };
  };
  const handleLogout = () => {
    auth.logout();
  };

  return (
    <nav className="primary-navbar">
      <div className="left-links">
        <NavLink style={navLinkStyles} to="home">
          Home
        </NavLink>
        <NavLink style={navLinkStyles} to="profile">
          Profile
        </NavLink>
      </div>
      <div className="right-links">
        {!auth.user && (
          <NavLink style={navLinkStyles} to="login">
            Login
          </NavLink>
        )}
        {auth.user && (
          <NavLink style={navLinkStyles} onClick={handleLogout} to="logout">
            Logout
          </NavLink>
        )}
      </div>
    </nav>
  );
};
