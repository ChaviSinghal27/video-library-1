import { useParams } from "react-router-dom";
import { VideoData } from "../../utilities/data";
import "./videoplay.css";
import { usePlaylistContext } from "../../context/playlistContext";
import ReactPlayer from "react-player";
import { useState } from "react";

export function VideoPlay() {
  const { currentVideoId } = useParams();
  const num = parseInt(currentVideoId);
  const currentVideo = VideoData.filter((video) => num === video.id);
  const { dispatch, state } = usePlaylistContext();
  const { addToLike, addToPlaylist } = state;
  const [isLiked, setIsLiked] = useState(false);
  const [isWatchListed, setIsWatchListed] = useState(false);
  const likeHandler = () => {
    isLiked === false ? setIsLiked(true) : setIsLiked(false);
    if (!isLiked) {
      dispatch({ type: "LIKE", payload: currentVideo[0].id });
    } else {
      dispatch({ type: "REMOVE_FROM_LIKE", payload: currentVideo[0].id });
    }
  };
  const watchListHandler = () => {
    isWatchListed === true ? setIsWatchListed(false) : setIsWatchListed(true);

    if (!isWatchListed) {
      dispatch({ type: "PLAYLIST", payload: currentVideo[0].id });
    } else {
      dispatch({ type: "REMOVE_FROM_PLAYLIST", payload: currentVideo[0].id });
    }
  };
  return (
    <div className="videoplay-content">
      <div className="videolink">
        <ReactPlayer
          url={currentVideo[0].VideoSource}
          width={"90%"}
          height={"70vh"}
          controls={true}
        />
      </div>
      <div className="video-description">
        <div className="video-info">
          <div>{currentVideo[0].VideoTitle} </div>
          <div>{currentVideo[0].VideoViews}</div>
        </div>

        <div className="video-buttons">
          <button>
            <i class="fa-solid fa-clock"></i>
          </button>
          <button
            style={{
              color: addToLike.includes(currentVideo[0].id) ? "red" : "Black",
            }}
            onClick={() => likeHandler()}
          >
            <i class="fa-solid fa-thumbs-up"></i>
          </button>
          <button
            style={{
              color: addToPlaylist.includes(currentVideo[0].id)
                ? "red"
                : "black",
            }}
            onClick={() => watchListHandler()}
          >
            <i class="fa-solid fa-list-check"></i>
          </button>
        </div>
      </div>
      <div className="border"></div>
      <h2 className="related">Related</h2>
    </div>
  );
}
