import { Link } from "react-router-dom";
import { useHistoryContext } from "../context/historyContext";
import "../pages/Home/home.css";

export function VideoDisplay({ videoData }) {
  const { dispatch } = useHistoryContext();

  return (
    <div>
      <div className="video-card">
        {videoData.map((video) => (
          <div className="videos">
            <div key={video.id}>
              <Link to={`/videoplay/${video.id}`}>
                <div
                  onClick={() =>
                    dispatch({ type: "HISTORY", payload: video.id })
                  }
                >
                  <img src={video.URL} className="video-thumbnail" />
                </div>
              </Link>

              <div className="video-details">
                <h3>{video.VideoTitle}</h3>
                <h2>{video.VideoLikes}</h2>
                <h2>{video.VideoViews}</h2>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
