import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Resetpassword from "./pages/Resetpassword";
import ForgetPassword from "./pages/ForgetPassword";
import MainLayout from "./components/MainLayout";
import Enquiries from "./pages/Enquiries";
import BlogList from "./pages/BlogList";
import BlogCatList from "./pages/BlogCatList";
import Orders from "./pages/Orders";
import ListService from "./pages/ListService";
import ListCategory from "./pages/ListCategory";
import AddBlog from "./pages/AddBlog";
import AddBlogCat from "./pages/AddBlogCat";
import AddProduct from "./pages/AddProduct";
import SignUp from "./pages/SignUp";

function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/forgot-password" element={<ForgetPassword />} />
                <Route path="/reset-password" element={<Resetpassword />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/admin" element={<MainLayout />}>
                    <Route index element={<Dashboard />} />
                    <Route path="enquires" element={<Enquiries />} />
                    <Route path="blog-list" element={<BlogList />} />
                    <Route path="add-blog" element={<AddBlog />} />
                    <Route path="add-blog-cate" element={<AddBlogCat />} />
                    <Route path="blog-cat-list" element={<BlogCatList />} />
                    <Route path="customers" element={<Orders />} />
                    <Route path="list-service" element={<ListService />} />
                    <Route path="list-category" element={<ListCategory />} />
                    <Route path="add-product" element={<AddProduct />} />

                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
