import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Playbooks from './pages/Playbooks';
import Workflows from './pages/Workflows';
import HealthStats from './pages/HealthStats';
import AuditLogs from './pages/AuditLogs';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/playbooks" element={<Playbooks />} />
        <Route path="/workflows" element={<Workflows />} />
        <Route path="/health" element={<HealthStats />} />
        <Route path="/audit" element={<AuditLogs />} />
      </Routes>
    </Router>
  );
}

export default App;
