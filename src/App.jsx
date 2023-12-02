import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import ProjectDetail from './components/ProjectDetail';
import Welcome from "./components/Welcome";

function App() {
  return (
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<><Welcome /><AboutMe /><Projects /></>} />
            <Route path="/project/:id" element={<ProjectDetail />} />
          </Routes>
        </div>
      </Router>
  );
}

export default App;