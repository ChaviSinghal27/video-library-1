import { Link } from "react-router-dom";
import { useHistoryContext } from "../context/historyContext";
import "../pages/Home/home.css";

export function VideoDisplay({ videoData }) {
  const { dispatch } = useHistoryContext();

  return (
    <div>
      <div className="video-card">
        {videoData.map((video) => (
          <div>
            <div key={video.id}>
              <Link to={`/videoplay/${video.id}`}>
                <div
                  className="videos"
                  onClick={() =>
                    dispatch({ type: "HISTORY", payload: video.id })
                  }
                >
                  <img src={video.URL} className="video-thumbnail" />

                  <div className="video-details">
                    <div>{video.VideoTitle}</div>
                    <div className="video-info-text">{video.VideoViews}</div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
