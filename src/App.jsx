import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./layout/navbar";

import HomePage from "./pages/home/HomePage";
import FactCheckPage from "./pages/factCheck/FactCheckPage";
import PodcastPage from "./pages/podcast/PodcastPage";
import RecruitmentDirectoryPage from "./pages/rd/RecruitmentDirectoryPage";
import Footer from "./layout/Footer";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/video-gallery" element={<HomePage />} />
          <Route path="/factcheck" element={<FactCheckPage />} />
          <Route path="/podcasts" element={<PodcastPage />} />
          <Route path="/recruitment" element={<RecruitmentDirectoryPage />} />
          <Route path="/" element={<Navigate to="/video-gallery" replace />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
