import React from "react";
import { Link } from "react-router-dom";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useSelector } from "react-redux";
import "./navbar.css"; // Import the CSS file

const Nav = ({ setislogin }) => {
  const Logout = () => {
    sessionStorage.removeItem("email");
    sessionStorage.removeItem("name");
    setislogin(true);
  };

  const items = useSelector((state) => state.cart);
  return (
    <nav>
      <div className="navbar-lists">
        <div>
          <Link to="/about" className="navbar-link ">
            About
          </Link>
        </div>
        <div>
          <Link to="/products" className="navbar-link ">
            Products
          </Link>
        </div>
        <div>
          <Link to="/profile" className="navbar-link ">
            Profile
          </Link>
        </div>
        <div>
          <Link to="/cart" className="navbar-link cart-trolley--link">
            <ShoppingCartIcon className="cart-trolley" />
            <span className="cart-total--item"> {items.items.length} </span>
          </Link>
        </div>
        {/* <div>
          <Link onClick={Logout} to="/about" className="navbar-link ">
            Logout
          </Link>
        </div> */}
      </div>
    </nav>
  );
};

export default Nav;
