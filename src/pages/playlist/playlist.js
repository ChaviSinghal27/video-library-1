import { usePlaylistContext } from "../../context/playlistContext";
import { VideoData } from "../../utilities/data";

export function Playlist() {
  const { state } = usePlaylistContext();
  const { addToPlaylist } = state;
  const PlaylistVideos = VideoData.filter((video) =>
    addToPlaylist.includes(video.id)
  );
  console.log(PlaylistVideos);
  return (
    <div>
      <div>
        {PlaylistVideos.map((video) => (
          <div>
            <div>{video.VideoLink}</div>
            <div>{video.VideoTitle}</div>
            <div>
              {video.VideoViews}
              {video.VideoLikes}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
