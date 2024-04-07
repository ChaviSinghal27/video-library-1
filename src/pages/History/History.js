import { useHistoryContext } from "../../context/historyContext";
import { VideoData } from "../../utilities/data";
import { Link } from "react-router-dom";
import { useTheme } from "../../context/themeContext";
export function History() {
  const { state } = useHistoryContext();
  const { addToHistory } = state;

  const HistoryVideos = VideoData.filter((video) =>
    addToHistory.includes(video.id)
  );
  const { theme } = useTheme();
  return (
    <div>
      <h1 className="pagetitle">History</h1>
      <div className="border"></div>
      <div className="page-wrapper">
        <div className="video-card">
          {HistoryVideos.map((video) => (
            <Link to={`/videoplay/${video.id}`}>
              <div key={video.id} className="videos">
                <img src={video.URL} className="video-thumbnail" />

                <div className={theme}>
                  <div className="video-details">{video.VideoTitle}</div>
                  <div className="video-info-text">{video.VideoViews}</div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
