import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import BusinessListings from './pages/BusinessListings';
import Events from './pages/Events';
import ComplaintPortal from './pages/ComplaintPortal';
import Announcements from './pages/Announcements';
import LadiesCorner from './pages/LadiesCorner';
import HelpThreads from './pages/HelpThreads';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/businesses" element={<BusinessListings />} />
            <Route path="/events" element={<Events />} />
            <Route path="/complaints" element={<ComplaintPortal />} />
            <Route path="/announcements" element={<Announcements />} />
            <Route path="/ladies-corner" element={<LadiesCorner />} />
            <Route path="/help-threads" element={<HelpThreads />} />
          </Routes>
        </main>
        <Toaster position="top-right" />
      </div>
    </Router>
  );
}

export default App;