import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import InputField from "./components/InputField";
import LandingPage from "./pages/LandingPage";
import SignupPage from "./pages/SignUpPage";
import TodayPage from "./pages/TodayPage";
import TimelinePage from "./pages/TimelinePage";
import InnerSupportPage from "./pages/InnerSupportPage";
import AccountPage from "./pages/Account";
import EditGratitudePage from "./pages/EditGratitudePage";
import EditDiaryPage from "./pages/EditDiaryPage";
import NavBar from "./components/NavBar";
import Avatar from "./components/Avatar";

function App() {
  return (
    <>
      <NavBar />
      <Avatar name="Eva" scale="0.25" />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LandingPage />} />
        <Route path="/today" element={<TodayPage />} />
        <Route path="/edit-gratitude" element={<EditGratitudePage />} />
        <Route path="/edit-diary" element={<EditDiaryPage />} />
        <Route path="/timeline" element={<TimelinePage />} />
        <Route path="/inner-support" element={<InnerSupportPage />} />
        <Route path="/account" element={<AccountPage />} />
      </Routes>
    </>
  );
}

export default App;
