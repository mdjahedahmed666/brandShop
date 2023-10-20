import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import PageNotFound from "../pages/PageNotFound/PageNotFound";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import AddProduct from "../pages/AddProduct/AddProduct";
import ProductCategory from "../pages/ProductCategory/ProductCategory";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      errorElement: <PageNotFound/>,
      children: [
       {
        path: "/",
        element: <Home/>,
       },
       {
        path: "/addproduct",
        element: <AddProduct/>,
       },
       {
        path: "/products/:brandName",
        element: <ProductCategory/>,
       },
       {
        path: "/login",
        element: <Login/>,
       },
       {
        path: "/register",
        element: <Register/>,
       },
      ]
    },
  ]);

  export default router;