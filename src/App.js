import "firebase/index";
import CssBaseline from "@mui/material/CssBaseline";
import Header from "components/Header";
import { fetchPopularVideos } from "features/Videos/popularVideoSlice";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { routes } from "routes";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPopularVideos());
  }, [dispatch]);

  return (
    <>
      <CssBaseline />
      <BrowserRouter>
        <Header />
        <Switch>
          {routes.map((route, index) => (
            <Route
              path={route.path}
              exact={route.exact}
              component={route.component}
              key={index}
            />
          ))}
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
