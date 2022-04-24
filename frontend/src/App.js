import "./App.css";
import { Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
