import React from "react";
import { BrowserRouter, NavLink, Link, Route, Switch } from "react-router-dom";

import AddExpensePage from "../components/CreateExpense";
import ExpenseDashboardPage from "../components/Dashboard";
import EditExpensePage from "../components/EditExpense";
import HelpPage from "../components/HelpPage";
import NoPage from "../components/NoPage";

const Header = () => (
  <header>
    <h1>Expensify</h1>
    <div className="nav-bar">
      <NavLink to="/" activeClassName="is-active" exact={true}>
        Dashboard
      </NavLink>
      <NavLink to="/create" activeClassName="is-active">
        Create expense
      </NavLink>
      <NavLink to="/help" activeClassName="is-active">
        Help
      </NavLink>
    </div>
  </header>
);

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={ExpenseDashboardPage} exact={true}></Route>
        <Route path="/create" component={AddExpensePage}></Route>
        <Route path="/edit/:id" component={EditExpensePage}></Route>
        <Route path="/help" component={HelpPage}></Route>
        <Route component={NoPage}></Route>
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
