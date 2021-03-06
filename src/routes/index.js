import React from "react";
import HomeMainPage from "features/Home/pages/Main";
import NotFound from "components/NotFound";
import WatchVideopage from "features/Videos/pages/Watch/Watch";
import SearchPage from "features/Search/pages/Main";
import ChannelMainPage from "features/Channel/pages/Main";

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
    path: "/search/:keyword",
    exact: false,
    component: () => <SearchPage />,
  },
  {
    path: "/channel/:id",
    exact: false,
    component: () => <ChannelMainPage />,
  },
  {
    path: "",
    exact: false,
    component: () => <NotFound />,
  },
];
