import React from "react";
import UserDetails from "./UserDetails";
import Map from "./GoogleMap";
import Comments from "./Comments";
import AddComment from "./AddComments";

const PostListing = props => {
  const renderPost = () => {
    return props.postsList.map(({ desc, location, time, id }, index) => {
      return (
        <div key={index} className="post-row">
          <UserDetails time={time} userDetails={props.profile} />
          <div className="col-100">{desc}</div>
          <Map location={location} />
          <AddComment postId = {id} />
          <Comments postId = {id} />
        </div>
      );
    });
  };

  return renderPost();
};

export default PostListing;
