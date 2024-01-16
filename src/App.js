import "./App.css";

import { Navbar } from "./components/Navbar";
import { LeftBar } from "./components/Leftbar";
import { Router } from "./Router/Router";

function App() {
  return (
    <div className="App">
      <div className="nav-component">
        <Navbar />
      </div>

      <div>
        <div>
          <LeftBar />
        </div>
        <div className="app-content">
          <Router />
        </div>
      </div>
    </div>
  );
}

export default App;
