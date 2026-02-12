import { Routes, Route } from "react-router-dom";

import type { JSX } from "react";

import { MainPage, BiographyPage, HobbyPage, PhotosPage } from "@pages/index";
import { App } from "./App";

export const routes: JSX.Element = (
  <Routes>
    <Route path="/" element={<App />} />
    <Route path="/main" element={<MainPage />} />
    <Route path="/biography" element={<BiographyPage />} />
    <Route path="/hobby" element={<HobbyPage />} />
    <Route path="/photos" element={<PhotosPage />} />
  </Routes>
);
