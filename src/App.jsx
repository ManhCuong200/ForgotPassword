import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "@/pages/LoginPage";
import ResetPasswordPage from "@/pages/ResetPasswordPage";
import ForgotPasswordPage from "@/pages/ForgotPasswordPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route
          path="/reset-password/:token"
          element={<ResetPasswordPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
