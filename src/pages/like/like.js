import { usePlaylistContext } from "../../context/playlistContext";
import { VideoData } from "../../utilities/data";

export function Like() {
  const { state } = usePlaylistContext();
  const { addToLike } = state;
  const likedVideos = VideoData.filter((video) => addToLike.includes(video.id));
  console.log(addToLike);
  return (
    <div>
      <div>
        {likedVideos.map((video) => (
          <div>
            <div>
              <img src={video.URL} />
            </div>
            <div>
              {video.VideoLikes}
              {video.VideoViews}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
