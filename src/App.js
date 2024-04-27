import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import LoginForm from "./components/LoginForm";
import AdminDashboard from "./pages/AdminDashboard";

const App = () => {
  return (
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/login" exact element={<LoginForm />} />
      <Route path="/admin-panel" exact element={<AdminDashboard />} />
    </Routes>
  );
};

export default App;
