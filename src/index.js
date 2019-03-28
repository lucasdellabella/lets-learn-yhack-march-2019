import React, { useState } from "react";
import ReactDOM from "react-dom";
import posts from "./mocks";
import ProposeMeetup from "./ProposeMeetup";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Let's Learn</h1>
      <ProposeMeetup className="proposal" />
      <Posts posts={posts} />
    </div>
  );
}

const Posts = ({ posts }) => (
  <div className="posts-container">
    {posts.map(post => (
      <Post post={post} />
    ))}
  </div>
);

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

const rootElement = document.getElementById("root");
ReactDOM.render(<App posts={posts} />, rootElement);
