import React, { Component } from "react";
import { connect } from "react-redux";
class Comments extends Component {
  renderComments = () => {
    return this.props.comments.map(({ body, postId}, index) => {
      if (this.props.postId === postId) {
        return <li key={index}>{body}</li>;
      }
    });
  };

  render() {
    return (
      <div className="comments">
        <ul>{this.renderComments()}</ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    comments: state.comments
  };
};

export default connect(mapStateToProps)(Comments);
