import { Link } from "react-router-dom";
import { usePlaylistContext } from "../../context/playlistContext";
import { VideoData } from "../../utilities/data";
import "../Home/home.css";
import { useTheme } from "../../context/themeContext";
export function Like() {
  const { state } = usePlaylistContext();
  const { addToLike } = state;
  const likedVideos = VideoData.filter((video) => addToLike.includes(video.id));

  const { theme } = useTheme();
  return (
    <div>
      <h1 className="pagetitle">Liked</h1>
      <div className="border"></div>
      <div className="page-wrapper">
        <div className="video-card">
          {likedVideos.map((video) => (
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
