import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Background from './component/Background';
import Projects from './component/Projects';
import About from './component/About';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Background />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
