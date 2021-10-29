import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "components/Header";
import { routes } from "routes";

function App() {
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
