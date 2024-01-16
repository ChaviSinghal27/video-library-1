import { usePlaylistContext } from "../../context/playlistContext";
import { VideoData } from "../../utilities/data";
import { Link } from "react-router-dom";
export function Playlist() {
  const { state } = usePlaylistContext();
  const { addToPlaylist } = state;
  const PlaylistVideos = VideoData.filter((video) =>
    addToPlaylist.includes(video.id)
  );
  console.log(PlaylistVideos);
  return (
    <div>
      <h1>Playlist</h1>
      <div className="page-wrapper"></div>
      <div className="video-card">
        {PlaylistVideos.map((video) => (
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
