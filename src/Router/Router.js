import { Routes, Route } from "react-router-dom";

import { Home } from "../pages/Home/home";
import { VideoPlay } from "../pages/Videoplay/videoplay";
import { History } from "../pages/History/History";
import { Playlist } from "../pages/playlist/playlist";
import { Like } from "../pages/like/like";

export function Router() {
  return (
    <div>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/videoplay/:currentVideoId" element={<VideoPlay />} />
        <Route path="/history" element={<History />} />
        <Route path="/playlist" element={<Playlist />} />
        <Route path="/like" element={<Like />} />
      </Routes>
    </div>
  );
}
