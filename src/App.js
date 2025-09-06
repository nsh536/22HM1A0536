import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import ShortenerPage from "./pages/Shortenerpage";
import StatsPage from "./pages/StatsPage";
import RedirectPage from "./pages/Redirectpage";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="navbar">
        <h2>My URL Shortener</h2>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/stats">Stats</Link>
        </nav>
      </div>
      <div className="container">
        <Routes>
          <Route path="/" element={<ShortenerPage />} />
          <Route path="/stats" element={<StatsPage />} />
          <Route path="/:code" element={<RedirectPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
