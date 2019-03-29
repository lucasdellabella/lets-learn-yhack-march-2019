import React, { useState } from "react";

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
  const [expanded, setExpanded] = useState(false);
  return (
    <div className="post">
      <div className="post-header inline">
        <div
          className="post-title"
          onClick={() => {
            setExpanded(!expanded);
          }}
        >
          {expanded ? (
            <i className="fas fa-caret-down" />
          ) : (
            <i className="fas fa-caret-right" />
          )}
          {title}
        </div>
        <div>{interested.length}</div>
        <div className="organizer">{organizer}</div>
      </div>
      {expanded ? <div className="post-description">{description}</div> : null}
    </div>
  );
};

export default Post;
