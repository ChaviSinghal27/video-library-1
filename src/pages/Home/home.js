import { LeftBar } from "../../components/Leftbar";
import { Navbar } from "../../components/Navbar";
import { VideoDisplay } from "../../components/VideoDisplay";
import { data } from "../../utilities/data";

export function Home() {
  return (
    <div>
      <Navbar />
      <div>
        <LeftBar />
        <VideoDisplay videoData={data.videoData} />
      </div>
    </div>
  );
}
