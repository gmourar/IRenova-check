// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login';
import Register from './components/Register';
import QuartoCheck from './components/QuartoCheck';
import Admin from './components/Admin';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/quarto" element={<QuartoCheck/>} />
        <Route path ="/admin" element={<Admin/>} />
      </Routes>
    </Router>
  );
};

export default App;
