import React, { Component } from "react";
import axios from "../../../axios";

import "./Posts.css";

import Post from "../../../components/Post/Post";
import { Route } from "react-router-dom";
import FullPost from "../FullPost/FullPost";

class Posts extends Component {
  state = {
    posts: []
  };

  componentDidMount() {
    console.log(this.props);
    axios
      .get("/posts")
      .then(response => {
        // for resticting how many responses most likey would be a backend query but for the now, this works
        const posts = response.data.slice(0, 6);
        const updatedPosts = posts.map(post => {
          return {
            ...post,
            author: "Max"
          };
        });
        this.setState({ posts: updatedPosts });
      })
      .catch(error => {
        console.log(error);
        // this.setState({ error: true });
      });
  }

  postSelectedHandler = id => {
    this.props.history.push({ pathname: "/posts/" + id });
    // this.props.history.push("/posts/" + id ); // both work
  };
  render() {
    let posts = <p>Something went wrong!</p>;

    if (!this.state.error) {
      posts = this.state.posts.map(post => {
        return (
          //   <Link to={"/" + post.id} key={post.id}> // this works but lets try with history in postSelectHandler
          <Post
            key={post.id}
            title={post.title}
            author={post.author}
            postSelectedHandler={() => this.postSelectedHandler(post.id)}
          />
          //   </Link>
        );
      });
    }

    return (
      <div>
        <section className="Posts">{posts}</section>
        <Route
          path={this.props.match.url + "/:id"}
          exact
          component={FullPost}
        />
      </div>
    );
  }
}

export default Posts;
