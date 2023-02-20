import React from "react";
import ReactDOM from "react-dom/client";
import Contact from "./Contact";
import "./index.css";
import About from "./About";
import Root from "./Root";
import SingleClock from "./SingleClock";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home";


const router = createBrowserRouter([
  {
    element: <Root />,
    path: "/",
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "clock/:cityKey",
        element: <SingleClock />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
