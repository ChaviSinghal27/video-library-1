import "../pages/Home/home.css";

export function LeftBar() {
  return (
    <div>
      <div className="leftbar-component">
        <div>
          <button>
            <i class="fa-solid fa-compass"></i>
          </button>
          <p>Explore</p>
        </div>
        <div>
          <button>
            <i class="fa-solid fa-clock"></i>
          </button>
          <p>Watchlist</p>
        </div>
        <div>
          <button>
            <i class="fa-solid fa-clock-rotate-left"></i>
          </button>
          <p>History</p>
        </div>
        <div>
          <button>
            <i class="fa-solid fa-thumbs-up"></i>
          </button>
          <p>Liked</p>
        </div>
        <div>
          <button>
            <i class="fa-solid fa-list-check"></i>
          </button>
          <p>playlist</p>
        </div>
      </div>
    </div>
  );
}
