import './App.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from "../components/header/Header.jsx";
import Line from "../components/line/Line.jsx";
import Page from "../components/page/Page.jsx";
import Menu from "../components/page/Menu.jsx";
import React from "react";
import {CartProvider} from "../components/page/productcard/CartContext.jsx";


function App() {
    return (
        <>
            <div>
                <CartProvider>
                    <Header/>
                    <Line/>
                    <Menu/>
                    <Page/>
                </CartProvider>
            </div>
        </>
    )
}

export default App
