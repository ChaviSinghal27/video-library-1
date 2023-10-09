import { data } from "../../utilities/data";
import "./videoplay.css";

export function VideoPlay() {
  return (
    <div className="videoplay-content">
      <div className="videolink">{data.videoData[0]["VideoLink"]}</div>
      <div className="video-description">
        <div className="video-info">
          <div>{data.videoData[0]["VideoViews"]}</div>
          <div>{data.videoData[0]["VideoLikes"]}</div>
        </div>

        <div className="video-buttons">
          <button>
            <i class="fa-solid fa-clock"></i>
          </button>
          <button>
            <i class="fa-solid fa-thumbs-up"></i>
          </button>
          <button>
            <i class="fa-solid fa-list-check"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
