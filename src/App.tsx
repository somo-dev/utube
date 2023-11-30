import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Layout from "./layout/Layout";
import Landing from "./pages/Landing";
import WatchVideo from "./pages/WatchVideo";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Landing /> },
        { path: "watch?videoId=:vidId", element: <WatchVideo /> },
      ],
    },
  ]);
  return <RouterProvider router={routes} />;
}

export default App;
