import { usePlaylistContext } from "../../context/playlistContext";
import { useTheme } from "../../context/themeContext";
import { VideoData } from "../../utilities/data";
import { Link } from "react-router-dom";
export function Playlist() {
  const { state } = usePlaylistContext();
  const { addToPlaylist } = state;
  const PlaylistVideos = VideoData.filter((video) =>
    addToPlaylist.includes(video.id)
  );
  const { theme } = useTheme();
  return (
    <div>
      <h1 className="pagetitle">Playlist</h1>
      <div className="border"></div>
      <div className="page-wrapper">
        <div className="video-card">
          {PlaylistVideos.map((video) => (
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
