import { useHistoryContext } from "../../context/historyContext";
import { VideoData } from "../../utilities/data";
import { Link } from "react-router-dom";
export function History() {
  const { state } = useHistoryContext();
  const { addToHistory } = state;

  const HistoryVideos = VideoData.filter((video) =>
    addToHistory.includes(video.id)
  );
  console.log(addToHistory);
  return (
    <div>
      <h1>History</h1>
      <div className="page-wrapper"></div>
      <div className="video-card">
        {HistoryVideos.map((video) => (
          <Link to={`/videoplay/${video.id}`}>
            <div key={video.id} className="videos">
              <img src={video.URL} className="video-thumbnail" />

              <div className="video-details">
                <div>{video.VideoTitle}</div>
                <div className="video-info-text">{video.VideoViews}</div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
