import React from "react";
import "./Header.css";
import Navbar from "react-bootstrap/Navbar";
import "./Header.css";

const Header = () => {
  return (
    <div className="header-container">
      <Navbar className="header">
        <Navbar.Brand href="/">
          <h4>Playlist of the Day</h4>
        </Navbar.Brand>
      </Navbar>
    </div>
  );
};

export default Header;
