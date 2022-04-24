import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Client, Home, Professional } from "./pages";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="register">
          <Route path="professional" element={<Professional />} />
          <Route path="client" element={<Client />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
