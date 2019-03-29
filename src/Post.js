import React from "react";

const Post = ({
  post: {
    meetupId,
    title,
    created,
    organizer,
    interested,
    description,
    location
  }
}) => {
  return (
    <div className="post inline">
      <div>{title}</div>
      <div>{interested.length}</div>
      <div className="organizer">{organizer}</div>
    </div>
  );
};

export default Post;
