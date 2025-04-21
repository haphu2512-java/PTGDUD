import React from "react";
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import DashboardPage from "./pages/DashboardPage";
import ProjectsPage from "./pages/ProjectsPage";
import TeamsPage from "./pages/TeamsPage";
import AnalyticsPage from "./pages/AnalyticsPage.js";
import MessagesPage from "./pages/MessagesPage.jsx";
import IntegrationPage from "./pages/IntegrationPage.jsx";


// src/App.js
function App() {
  return (
      <BrowserRouter>
          <div className="container-fluid bg-gray-100 min-h-screen">
              <div className="row">
                
                  <Sidebar  />
                  
                  <Routes>
                      <Route path="/" element={<DashboardPage />} />
                      <Route path="/projects" element={<ProjectsPage />} />
                      <Route path="/teams" element={<TeamsPage />} />
                      <Route path="/analytics" element={<AnalyticsPage />} />
                      <Route path="/messages" element={<MessagesPage />} />
                      <Route path="/integration" element={<IntegrationPage />} />
                  </Routes>
              </div>
          </div>
      </BrowserRouter>
  );
}

export default App;