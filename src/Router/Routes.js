import { Link, Route } from "react-router-dom";
import { VideoPlay } from "../pages/Videoplay/videoplay";
import { Home } from "../pages/Home/home";

export function Routes() {
  return (
    <div>
      <Routes>
        <Route path="/" exact element={<Home />} />
      </Routes>
    </div>
  );
}
