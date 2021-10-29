import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "components/Header";

function App() {
  return (
    <>
      <CssBaseline />
      <BrowserRouter>
        <Header />
        <Switch></Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
