import { Link } from "react-router-dom";
import { useHistoryContext } from "../context/historyContext";
import "../pages/Home/home.css";
import { useTheme } from "../context/themeContext";

export function VideoDisplay({ videoData }) {
  const { dispatch } = useHistoryContext();
  const { theme } = useTheme();
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

                  <div className={theme}>
                    <div className="video-details">{video.VideoTitle}</div>
                    <div className="video-info-text">
                      {video.VideoViews} views
                    </div>
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
