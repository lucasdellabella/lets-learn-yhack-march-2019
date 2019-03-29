import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import mockedPosts from "./mocks";
import ProposeMeetup from "./ProposeMeetup";
import { getPosts } from "./api";

import "./styles.css";

function App() {
  const [posts, setPosts] = useState([]);
  //THOUGHT: Should I be making prefilling this server-side somehow?
  useEffect(() => {
    getPosts().then(result => setPosts(result));
  }, []);
  return (
    <div className="App">
      <h1>Let's Learn</h1>
      <ProposeMeetup className="proposal" />
      <Posts posts={posts} />
    </div>
  );
}

const Posts = ({ posts }) => {
  return (
    <div className="posts-container">
      {posts.map(post => (
        <Post post={post} />
      ))}
    </div>
  );
};

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
ReactDOM.render(<App />, rootElement);
