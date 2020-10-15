import React, { Component } from "react";

import { Route, NavLink, Switch, Redirect } from "react-router-dom";

import "./Blog.css";
import Posts from "./Posts/Posts";
import asyncComponent from "../../hoc/AsyncComponent/AsyncComponent";

const asyncNewComponent = asyncComponent(() => {
  return import("../Blog/NewPost/NewPost");
});

class Blog extends Component {
  state = {
    auth: false
  };

  render() {
    return (
      <div className="Blog">
        <header>
          <nav>
            <ul>
              <li>
                <NavLink
                  to="/posts/"
                  exact
                  activeClassName="active"
                  activeStyle={{ color: "red", textDecoration: "underline" }}
                >
                  Posts
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={{
                    pathname: "/new-post",
                    hash: "#submit",
                    search: "?quick-submit=true"
                  }} // alt way of using other properties
                >
                  New Post
                </NavLink>
              </li>
            </ul>
          </nav>
        </header>
        <Switch>
          {this.state.auth ? (
            <Route path="/new-post" exact component={asyncNewComponent} />
          ) : null}
          <Route path="/posts/" component={Posts} />
          <Route render={() => <h1>Not Found</h1>} />{" "}
          {/*  48 brings the page back to post and this gives a 404 error  p.s this only works when newpost isnt found because its unknown*/}
          <Redirect from="/" to="/posts" />
          {/* order matters make sure / is last */}
        </Switch>
      </div>
    );
  }
}

export default Blog;
