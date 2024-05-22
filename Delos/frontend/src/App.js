import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import AdminPage from './pages/AdminPage';
import SportPage from './pages/SportPage';
import Sidebar from './components/Sidebar';
function App() {
  return (
    <Router>
      <div className="App">
        <Sidebar />
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/sport/:sport" element={<SportPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
