export function VideoDisplay({ videoData }) {
  return (
    <div>
      <div>
        {videoData.map((video) => (
          <div key={video.id}>
            <div>{video.VideoLink}</div>
            <div>
              {video.VideoTitle}
              {video.VideoLikes}
              {video.VideoViews}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
