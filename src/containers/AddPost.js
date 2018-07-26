import React, { Component } from "react";
import { connect } from "react-redux";
import { requestPostApi } from "../Actions";

class AddPost extends Component {
  state = {
    body: ""
  };

  latitudeElmn = "";
  longitudeElmn = "";

  getLocation = e => {
    e.preventDefault();
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          this.latitudeElmn = position.coords.latitude;
          this.longitudeElmn = position.coords.longitude;
        },
        () => {
          this.latitudeElmn = "";
          this.longitudeElmn = "";
        }
      );
    }
  };

  getInputValue = e => {
    this.setState({
      body: e.target.value
    });
  };

  getDetails = e => {
    e.preventDefault();
    let newPostData = {
      desc: this.state.body,
      location: {
        latitude: this.latitudeElmn,
        longitude: this.longitudeElmn
      },
      time: new Date().toLocaleString(),
      id: new Date()
        .getTime()
        .toString()
        .substr(-3)
    };

    this.latitudeElmn = "";
    this.longitudeElmn = "";
    e.currentTarget.reset();
    this.props.requestPostApi(newPostData);
  };

  render() {
    return (
      <form className="posts" onSubmit={this.getDetails}>
        <div className="form-row">
          <textarea
            required
            name="comment"
            onChange={this.getInputValue}
            placeholder="What's in your mind"
          />
        </div>
        <div className="form-row justify-content-between">
          <button type="submit" className="btn btn-primary">
            Post
          </button>
          <a onClick={this.getLocation} className="float-right" href="/">
            Add location
          </a>
        </div>
      </form>
    );
  }
}
export default connect(
  null,
  { requestPostApi }
)(AddPost);
