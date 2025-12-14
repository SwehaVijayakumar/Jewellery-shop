import { Link } from "react-router-dom";
import "./Logo.css";

const base = import.meta.env.BASE_URL;

function Logo() {
  return (
    <Link to="/" className="logo-link">
      <img
        src={`${base}images/logo.png`}
        alt="Vinuriya Jewellery Logo"
        className="site-logo"
      />
    </Link>
  );
}

export default Logo;
