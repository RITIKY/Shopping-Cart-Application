import React from "react";
import { Link } from "react-router-dom";
import Nav from "../Navbar/Navbar";
import "./header.css";

const Header = ({ islogin, setislogin, totalcount }) => {
  return (
    <div className="header">
      <div className="header_left">
        <Link to="/products" className="header_left_link">
          Click & Collect
        </Link>
      </div>
      <div className="header_right">
        <Nav
          islogin={islogin}
          setislogin={setislogin}
          totalcount={totalcount}
        />
      </div>
    </div>
  );
};

export default Header;
