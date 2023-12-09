import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Layout from "./layout/Layout";
import Landing from "./pages/Landing";
import WatchVideo from "./pages/WatchVideo";
import LikedVideos from "./pages/LikedVideos";
import WatchLater from "./pages/WatchLater";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Landing /> },
        { path: "watch?v=:vidId", element: <WatchVideo /> },
        { path: "likedVids", element: <LikedVideos /> },
        { path: "watchLater", element: <WatchLater /> },
      ],
    },
  ]);
  return <RouterProvider router={routes} />;
}

export default App;
