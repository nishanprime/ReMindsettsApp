import "./App.css";
import { Routes, Route } from "react-router-dom";
import {
  About,
  Client,
  Home,
  Professional,
  Professionals,
  Testimonials,
} from "./pages";
import Signin from "./pages/Signin";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="signin" element={<Signin />} />
        <Route path="register">
          <Route path="professional" element={<Professional />} />
          <Route path="client" element={<Client />} />
        </Route>
        <Route path="about" element={<About />} />
        <Route path="professionals" element={<Professionals />} />
        <Route path="professionals" element={<Testimonials />} />
      </Routes>
    </div>
  );
}

export default App;
