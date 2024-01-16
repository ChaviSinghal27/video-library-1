import "./navbar.css";

export function Navbar() {
  return (
    <div>
      <header>
        <nav className="navbar">
          <div className="logo">
            <p>WeWatch</p>
          </div>
          <div className="search">
            <input className="search-bar" placeholder="search" />

            <button className="search-button">search</button>
          </div>
          <div className="nav-items">
            <p>setting</p>
            <p>Account</p>
          </div>
        </nav>
      </header>
    </div>
  );
}
