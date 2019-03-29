import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import mockedPosts from "./mocks";
import ProposeMeetup from "./ProposeMeetup";
import Posts from "./Posts";
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

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
