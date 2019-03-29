import React from "react";
import Post from "./Post";

const Posts = ({ posts }) => {
  return (
    <div className="posts-container">
      {posts.map(post => (
        <Post post={post} />
      ))}
    </div>
  );
};

export default Posts;
