import "./App.css";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import SignupPage from "./pages/SignUpPage";
import TodayPage from "./pages/TodayPage";
import TimelinePage from "./pages/TimelinePage";
import InnerSupportPage from "./pages/InnerSupportPage";
import AccountPage from "./pages/Account";
import EditGratitudePage from "./pages/EditGratitudePage";
import EditDiaryPage from "./pages/EditDiaryPage";
import PageMain from "./components/PageMain";
import PageSub from "./components/PageSub";

function App() {
  return (
    <>
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
