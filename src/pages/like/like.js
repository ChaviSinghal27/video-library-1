import { Link } from "react-router-dom";
import { usePlaylistContext } from "../../context/playlistContext";
import { VideoData } from "../../utilities/data";
import "../Home/home.css";
export function Like() {
  const { state } = usePlaylistContext();
  const { addToLike } = state;
  const likedVideos = VideoData.filter((video) => addToLike.includes(video.id));
  console.log(addToLike);
  return (
    <div>
      <h1>Liked</h1>
      <div className="page-wrapper"></div>
      <div className="video-card">
        {likedVideos.map((video) => (
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
