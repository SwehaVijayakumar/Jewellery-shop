import { Link } from "react-router-dom";
import "./Logo.css";

function Logo() {
  return (
    <Link to="/" className="logo-link">
      <img
        src="images/logo.png"
        alt="Vinuriya Jewellery"
        className="site-logo"
      />
    </Link>
  );
}

export default Logo;
