import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import VideoPage from './pages/VideoPage';
import NotAvailablePage from './pages/NotAvailablePage';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/video/:weekNumber" element={<VideoPage />} />
      <Route path="/not-available" element={<NotAvailablePage />} />
    </Routes>
  </Router>
);

export default App;
