import { useHistoryContext } from "../../context/historyContext";
import { VideoData } from "../../utilities/data";

export function History() {
  const { state } = useHistoryContext();
  const { addToHistory } = state;

  const HistoryVideos = VideoData.filter((video) =>
    addToHistory.includes(video.id)
  );
  console.log(addToHistory);
  return (
    <div>
      <div>
        {HistoryVideos.map((video) => (
          <div>{video.VideoLink}</div>
        ))}
      </div>
    </div>
  );
}
