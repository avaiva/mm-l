import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router } from "react-router-dom";
import { TodayProviderWrapper } from "./context/today.context.jsx";
import { AuthProviderWrapper } from "./context/auth.context";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>

  <AuthProviderWrapper>
    <TodayProviderWrapper>
      <Router>
        <App />
      </Router>
    </TodayProviderWrapper>
  </AuthProviderWrapper>

  // </React.StrictMode>
);
