import { VideoDisplay } from "../../components/VideoDisplay";
import { data } from "../../utilities/data";

export function Home() {
  return (
    <div>
      <div className="main">
        <div className="videos">
          <VideoDisplay videoData={data.videoData} />
        </div>
      </div>
    </div>
  );
}
