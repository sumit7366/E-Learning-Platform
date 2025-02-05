import React from "react";
import "./header.css";
import { Link } from "react-router-dom";
import logo from './logo.png'
const Header = ({ isAuth }) => {
  return (
    <header>
      <div className="logo">
        {/* Add an image instead of text */}
        <img src={logo} alt="E-Learning" />
      </div>

      <div className="link">
        <Link to={"/"}>Home</Link>
        {/* Open Google Drive PDF link directly */}
        <a
          href="https://drive.google.com/drive/folders/1gmPS1oRcaYUtwSr5TH9jR9ceFp4hUdQY?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          Syllabus
        </a>
        <Link to={"/courses"}>Courses</Link>
        <Link to={"/about"}>About</Link>
        {isAuth ? (
          <Link to={"/account"}>Account</Link>
        ) : (
          <Link to={"/login"}>Login</Link>
        )}
      </div>
    </header>
  );
};

export default Header;
