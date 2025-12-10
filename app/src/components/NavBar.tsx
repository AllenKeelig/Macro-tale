import { Link, useLocation } from "react-router-dom";

export default function NavBar() {
  const { pathname } = useLocation();

  return (
    <nav className="navbar">
      <Link className={pathname === "/tabletop" ? "active" : ""} to="/tabletop">
        Tabletop
      </Link>

      <Link className={pathname === "/character" ? "active" : ""} to="/character">
        Character Sheet
      </Link>
    </nav>
  );
}
