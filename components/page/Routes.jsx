// src/routes.jsx
import { Navigate } from "react-router-dom";
import Login from "./Login/Login.jsx";
import Register from "./register/Register.jsx";
import Accessories from "./accessories/Accessories.jsx";
import Bags from "./bags/Bags.jsx";
import Shoes from "./shoes/Shoes.jsx";
import Home from "./home/Home.jsx";
import Clothing from "./clothing/Clothing.jsx";

export const HOME_PAGE = "/";
export const CLOTHING_PAGE = "/clothing"
export const ACCESSORIES_PAGE = "/accessories";
export const BAGS_PAGE = "/bags";
export const SHOES_PAGE = "/shoes";
export const LOGIN_PAGE = "/login";
export const REGISTER_PAGE = "/register";

export const publicRoutes = [
    { path: LOGIN_PAGE, element: <Login />, name: "Login" },
    { path: REGISTER_PAGE, element: <Register />, name: "Register" },
    { path: "*", element: <Navigate to={LOGIN_PAGE} /> },
];

export const privateRoutes = [
    { path: HOME_PAGE, element: <Home/>, name: "Home"},
    { path: CLOTHING_PAGE, element: <Clothing/>, name: "Clothing"},
    { path: ACCESSORIES_PAGE, element: <Accessories />, name: "Accessories" },
    { path: BAGS_PAGE, element: <Bags />, name: "Bags" },
    { path: SHOES_PAGE, element: <Shoes />, name: "Shoes" },
    { path: "*", element: <Navigate to={HOME_PAGE} /> },
];
