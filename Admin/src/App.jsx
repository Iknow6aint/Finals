import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Resetpassword from "./pages/Resetpassword";
import ForgetPassword from "./pages/ForgetPassword";
import MainLayout from "./components/MainLayout";
import Enquiries from "./pages/Enquiries";

function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/forgot-password" element={<ForgetPassword />} />
                <Route path="/reset-password" element={<Resetpassword />} />
                <Route path="/admin" element={<MainLayout />}>
                    <Route index element={<Dashboard />} />
                    <Route path="enquires" element={<Enquiries />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
