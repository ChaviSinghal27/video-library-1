import "../pages/Home/home.css";
import { Link } from "react-router-dom";

export function LeftBar() {
  return (
    <div>
      <div className="leftbar-component">
        <div>
          <Link to="/">
            <i class="fa-solid fa-compass"></i>
          </Link>
          <p>Explore</p>
        </div>
        <div>
          <button>
            <i class="fa-solid fa-clock"></i>
          </button>
          <p>Watchlist</p>
        </div>
        <div>
          <Link to="/History">
            <i class="fa-solid fa-clock-rotate-left"></i>
          </Link>
          <p>History</p>
        </div>
        <div>
          <Link to="/like">
            <i class="fa-solid fa-thumbs-up"></i>
          </Link>
          <p>Liked</p>
        </div>
        <div>
          <Link to="/playlist">
            <i class="fa-solid fa-list-check"></i>
          </Link>
          <p>playlist</p>
        </div>
      </div>
    </div>
  );
}
