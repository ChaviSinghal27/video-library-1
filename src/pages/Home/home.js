import { VideoDisplay } from "../../components/VideoDisplay";
import { VideoData } from "../../utilities/data";

export function Home() {
  return (
    <div>
      <div className="main">
        <div>
          <VideoDisplay videoData={VideoData} />
        </div>
      </div>
    </div>
  );
}
