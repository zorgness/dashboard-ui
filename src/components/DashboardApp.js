import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Chat from "./Chat/Chat";
import Overview from "./Overview/Overview";
import Profile from "./Profile/Profile";
import Schedule from "./Schedule/Schedule";
import Settings from "./Settings/Settings";

const DashboardApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/overview" element={<Overview />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </BrowserRouter>
  );
};

export default DashboardApp;
