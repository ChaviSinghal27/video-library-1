import { useTheme } from "../context/themeContext";
import "../pages/Home/home.css";

import { NavLink } from "react-router-dom";

export function LeftBar() {
  const { theme } = useTheme();
  return (
    <div>
      <div className="leftbar-component">
        <div className="leftbar-icon">
          <NavLink
            to="/"
            style={({ isActive }) => ({
              color: isActive ? "#8a1111" : "#e71b1b",
            })}
          >
            <i class="fa-solid fa-compass"></i>
          </NavLink>
        </div>
        <p>EXPLORE</p>

        <div className="leftbar-icon">
          <NavLink
            to="/History"
            style={({ isActive }) => ({
              color: isActive ? "#8a1111" : "#e71b1b",
            })}
          >
            <i class="fa-solid fa-clock-rotate-left"></i>
          </NavLink>
        </div>
        <p>HISTORY</p>
        <div className="leftbar-icon">
          <NavLink
            to="/like"
            style={({ isActive }) => ({
              color: isActive ? "#8a1111" : "#e71b1b",
            })}
          >
            <i class="fa-solid fa-thumbs-up"></i>
          </NavLink>
        </div>
        <p>LIKED</p>
        <div className="leftbar-icon">
          <NavLink
            to="/playlist"
            style={({ isActive }) => ({
              color: isActive ? "#8a1111" : "#e71b1b",
            })}
          >
            <i class="fa-solid fa-list-check"></i>
          </NavLink>
        </div>
        <p>PLAYLISTS</p>
      </div>
    </div>
  );
}
