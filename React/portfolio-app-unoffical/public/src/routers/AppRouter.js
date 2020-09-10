import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Dashboard from "../components/Home";
import ContactPage from "../components/ContactPage";
import PortfolioPage from "../components/PortfolioPage";
import NoPageFound from "../components/NoPage";
import EditPortfolio from "../components/EditPortfolio";
import Header from "../components/Header";

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={Dashboard} exact={true}></Route>
        <Route path="/portfolio" component={PortfolioPage} exact={true}></Route>
        <Route path="/portfolio/:id" component={EditPortfolio}></Route>
        <Route path="/contact" component={ContactPage}></Route>
        <Route component={NoPageFound}></Route>
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
