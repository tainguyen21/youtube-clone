import React from "react";
import HomeMainPage from "features/Home/pages/Main";
import NotFound from "components/NotFound";
import WatchVideopage from "features/Videos/pages/Watch/Watch";

export const routes = [
  {
    path: "/",
    exact: true,
    component: () => <HomeMainPage />,
  },
  {
    path: "/watch/:id",
    exact: false,
    component: () => <WatchVideopage />,
  },
  {
    path: "",
    exact: false,
    component: () => <NotFound />,
  },
];
