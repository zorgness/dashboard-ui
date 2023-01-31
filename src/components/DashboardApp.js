import React, { lazy, Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./ErrorFallback";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Loader from "./Loader";
const Chat = lazy(() => import("./Chat/Chat"));
const Overview = lazy(() => import("./Overview/Overview"));
const Profile = lazy(() => import("./Profile/Profile"));
const Settings = lazy(() => import("./Settings/Settings"));
const Schedule = lazy(() => import("./Schedule/Schedule"));

const DashboardApp = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <Routes>
            <Route path="/" element={<Profile />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/overview" element={<Overview />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </ErrorBoundary>
      </Suspense>
    </BrowserRouter>
  );
};

export default DashboardApp;
