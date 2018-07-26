import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { requestApiData, requestUserData, requestComments } from "../Actions";
import RightSidebar from "../components/RightSidebar";
import LeftSidebar from "../components/LeftSidebar";
import Header from "../components/Header";
import AddPost from "./AddPost";
import "../style/post.css";
import PostListing from "../components/PostsListing";
import Footer from "../components/Footer";

class App extends Component {
  getNewPost = post => {
    const oldPost = this.state.posts;
    const newPosts = [post, ...oldPost];
    this.setState({
      posts: newPosts
    });
  };

  componentDidMount() {
    this.props.requestApiData();
    this.props.requestUserData();
    this.props.requestComments();
  }

  render() {
    return (
      <Fragment>
        <Header userDetails={this.props.profile} />
        <section className="container">
          <div className="row">
            <LeftSidebar />
            <div className="col col-6">
              <AddPost getNewPost={this.getNewPost} />
              <PostListing
                profile={this.props.profile}
                postsList={this.props.posts}
              />
            </div>
            <RightSidebar />
          </div>
        </section>
        <Footer />
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    profile: state.profile,
    posts: state.posts,
    comments: state.comments
  };
};

export default connect(
  mapStateToProps,
  { requestApiData, requestUserData, requestComments }
)(App);
