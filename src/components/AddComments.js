import React, { Component } from "react";
import { connect } from "react-redux";
import { postComment } from "../Actions";
class AddComment extends Component {

state = {
  body: ""
}

getInputValue = e =>{
  this.setState({
    body: e.target.value
  });
}

addComment = e =>{
  e.preventDefault();
  let collection = {
    id: new Date()
        .getTime()
        .toString()
        .substr(-3),
    postId: this.props.postId,
    body: this.state.body
  };

  this.props.postComment(collection);
  e.currentTarget.reset();

}

  render() {
    return (
      <form className="add-comment" onSubmit = {this.addComment}>
        <div className="form-row">
          <textarea className="comment" onChange={this.getInputValue} placeholder="Add comments" />
        </div>
        <div className="form-row">
          <button type="submit" className="btn btn-primary">
            Comment
          </button>
        </div>
      </form>
    );
  }
}

export default connect(
  null,
  { postComment }
)(AddComment);
