import "./App.css";

import { Navbar } from "./components/Navbar";
import { LeftBar } from "./components/Leftbar";
import { Router } from "./Router/Router";

function App() {
  return (
    <div className="App">
      <Navbar />
      <LeftBar />
      <Router />
    </div>
  );
}

export default App;
