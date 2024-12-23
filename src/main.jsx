import React from 'react'
import ReactDOM from 'react-dom/client'
import App from "./App"

import "./i18n"

import './index.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './Pages/Home/Home';
import PrivacyPolicy from './Pages/PrivacyPolicy/PrivacyPolicy';
import AboutUs from './Pages/AboutUs/AboutUs';
import ShippingPolicy from './Pages/ShippingPolicy/ShippingPolicy';
import ReturnPolicy from './Pages/ReturnPolicy/ReturnPolicy';
import PaymentMethods from './Pages/PaymentMethods/PaymentMethods';
import AllTabsCover from './Pages/AllTabsCover/AllTabsCover';
import Cart from './Pages/Cart/Cart';
import ContactUs from './Pages/ContactUs/ContactUs';
import SingleProductPage from './Pages/SingleProductPage/SingleProductPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "",
        element: <Home></Home>,
      },
      {
        path:"all-wholesale-tablet-covers/:productName",
        element: <AllTabsCover></AllTabsCover>
      },
      {
        path:"wholesale-tablet-cover/:product/:id",
        element: <SingleProductPage></SingleProductPage>
      },
      {
        path:"about-us",
        element: <AboutUs></AboutUs>
      },
      {
        path:"contact-us",
        element: <ContactUs></ContactUs>
      },
      {
        path: "privacy-policy",
        element: <PrivacyPolicy></PrivacyPolicy>
      },
      {
        path:"shipping-policy",
        element: <ShippingPolicy></ShippingPolicy>
      },
      {
        path:"return-policy",
        element:<ReturnPolicy></ReturnPolicy>
      },
      {
        path:"payment-methods",
        element:<PaymentMethods></PaymentMethods>
      },
      {
        path:"cart",
        element:<Cart></Cart>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
