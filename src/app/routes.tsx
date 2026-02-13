import { Routes, Route, Navigate } from "react-router-dom";

import type { JSX } from "react";

import {
  MainPage,
  BiographyPage,
  HobbyPage,
  PhotosPage,
  TraineePage,
} from "@pages/index";
import { App } from "./App";

export const routes: JSX.Element = (
  <Routes>
    <Route path="/" element={<Navigate to='/web.lab1/' />} />
    <Route path="/web.lab1/" element={<App />} />
    <Route path="/web.lab1/main" element={<MainPage />} />
    <Route path="/web.lab1/biography" element={<BiographyPage />} />
    <Route path="/web.lab1/hobby" element={<HobbyPage />} />
    <Route path="/web.lab1/photos" element={<PhotosPage />} />
    <Route path="/web.lab1/trainee" element={<TraineePage />} />
  </Routes>
);
