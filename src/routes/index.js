import React from "react";
import HomeMainPage from "features/Home/pages/Main";
import NotFound from "components/NotFound";

export const routes = [
  {
    path: "/",
    exact: true,
    component: () => <HomeMainPage />,
  },
  {
    path: "",
    exact: false,
    component: () => <NotFound />,
  },
];
