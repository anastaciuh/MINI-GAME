import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import QuizPage from './pages/QuizPage'; 
import ResultPage from './pages/ResultPage';
import NirmanaPage from './pages/NirmanaPage';
import TeknisPengunggahan from './pages/TeknisPengunggahan';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/AboutPage" element={<AboutPage />} />
        <Route path="/QuizPage" element={<QuizPage />} />
        <Route path="/ResultPage" element={<ResultPage />} />
        <Route path="/NirmanaPage" element={<NirmanaPage />} />
        <Route path="/TeknisPengunggahan" element={<TeknisPengunggahan />} />
      </Routes>
    </Router>
  );
}

export default App;