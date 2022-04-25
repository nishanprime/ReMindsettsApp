import './App.css';
import { Routes, Route } from 'react-router-dom';
import {
  About,
  Client,
  Contact,
  Home,
  NotFound,
  Professional,
  Professionals,
  Testimonials,
  TermsAndConditions,
  Signin,
} from './pages';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="signin" element={<Signin />} />
        <Route path="register">
          <Route path="professional/:id" element={<Professional />} />
          <Route path="client" element={<Client />} />
        </Route>
        <Route path="about" element={<About />} />
        <Route path="professionals" element={<Professionals />} />
        <Route path="testimonials" element={<Testimonials />} />
        {/* 404 page route */}
        <Route path="*" element={<NotFound />} />
        <Route path="contact" element={<Contact />} />
        <Route path="terms-and-conditions" element={<TermsAndConditions />} />
      </Routes>
    </div>
  );
}

export default App;
