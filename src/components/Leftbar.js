import "../pages/Home/home.css";
import { NavLink } from "react-router-dom";

export function LeftBar() {
  return (
    <div>
      <div className="leftbar-component">
        <div className="leftbar-icon">
          <NavLink
            to="/"
            style={({ isActive }) => ({ color: isActive ? "red" : "black" })}
          >
            <i class="fa-solid fa-compass"></i>
          </NavLink>
        </div>
        <p>Explore</p>
        <div className="leftbar-icon">
          <NavLink style={{ color: "black" }}>
            <i class="fa-solid fa-clock"></i>
          </NavLink>
        </div>
        <p>Watchlist</p>
        <div className="leftbar-icon">
          <NavLink
            to="/History"
            style={({ isActive }) => ({ color: isActive ? "red" : "black" })}
          >
            <i class="fa-solid fa-clock-rotate-left"></i>
          </NavLink>
        </div>
        <p>History</p>
        <div className="leftbar-icon">
          <NavLink
            to="/like"
            style={({ isActive }) => ({ color: isActive ? "red" : "black" })}
          >
            <i class="fa-solid fa-thumbs-up"></i>
          </NavLink>
        </div>
        <p>Liked</p>
        <div className="leftbar-icon">
          <NavLink
            to="/playlist"
            style={({ isActive }) => ({ color: isActive ? "red" : "black" })}
          >
            <i class="fa-solid fa-list-check"></i>
          </NavLink>
        </div>
        <p>playlist</p>
      </div>
    </div>
  );
}
