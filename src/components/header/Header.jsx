import { NavLink } from "react-router-dom";
import Logo from "../../assets/Logo (2).svg";
import "./header.css";
const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="header_logo">
         <NavLink to='/'><img src={Logo} alt='..' /></NavLink> 
        </div>
        <div className="header_links">
          <ul>
            <li><NavLink to="/home">Home</NavLink></li>
            <li><NavLink to="/product">Order</NavLink></li>
            <li><NavLink to="/order-review">Order Review</NavLink></li>
            <li><NavLink to="/manage">Manage Inventory</NavLink></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
