// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login';
import CheckList from './components/CheckList';
import Admin from './components/Admin';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/quarto" element={<CheckList/>} />
        <Route path ="/admin" element={<Admin/>} />
      </Routes>
    </Router>
  );
};

export default App;
