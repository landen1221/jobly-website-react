import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Companies from "./Companies";
import Home from "./Home";
import Jobs from "./Jobs";
import Login from "./Login";
import Profile from "./Profile";
import Signup from "./Signup";
import SingleCompany from "./SingleCompany";

function Routes() {
  return (
    <Switch>
      <Route exact path="/companies"><Companies /></Route>
      <Route exact path="/companies/:companyHandle"><SingleCompany /></Route>
      <Route exact path="/jobs"><Jobs /></Route>
      <Route exact path="/login"><Login /></Route>
      <Route exact path="/profile"><Profile /></Route>
      <Route exact path="/signup"><Signup /></Route>
      <Route exact path="/profile"><Profile /></Route>
      <Route exact path="/"><Home /></Route>
      <Redirect to="/" />
    </Switch>
  );
}

export default Routes;
