import "./App.css";

import { Navbar } from "./components/Navbar";
import { LeftBar } from "./components/Leftbar";
import { Router } from "./Router/Router";
import { useTheme } from "../src/context/themeContext";
function App() {
  const { theme } = useTheme();
  return (
    <div className={theme}>
      <div className="nav-component">
        <Navbar />
      </div>
      <div>
        <LeftBar />
      </div>

      <div className="app-content">
        <Router />
      </div>
    </div>
  );
}

export default App;
