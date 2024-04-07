import "./navbar.css";
import logo from "./Tuneit Logo.svg";
import setting from "./settings.svg";
import user from "./user.svg";
import { useTheme } from "../context/themeContext";
export function Navbar() {
  const { toggleTheme } = useTheme();
  return (
    <div>
      <header className="header">
        <nav className="navbar">
          <div className="logo">
            <img src={logo} alt="TuneIt Logo" />
          </div>
          <div className="search">
            <input
              className="search-bar"
              placeholder="what you are looking for..."
            />

            <button className="search-button">SEARCH</button>
          </div>
          <div className="nav-items">
            <button className="toggleButton" onClick={toggleTheme}>
              {" "}
              <img src={setting} alt="setting icon" />
            </button>
            <img src={user} alt="user icon" />
          </div>
        </nav>
      </header>
    </div>
  );
}
