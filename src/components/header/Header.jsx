import Logo from "../../assets/Logo (2).svg";
import "./header.css";
const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="header_logo">
          <img src={Logo} />
        </div>
        <div className="header_links">
          <ul>
            <li><a href="/">Order</a></li>
            <li><a href="/shop">Shop</a></li>
            <li><a href="/order-review">Order Review</a></li>
            <li><a href="/manage">Manage Inventory</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
