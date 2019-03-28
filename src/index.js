import React, { useState } from "react";
import ReactDOM from "react-dom";
import posts from "./mocks";
import { Formik } from "formik";

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

const ProposeMeetup = ({ className }) => {
  const [opened, setOpened] = useState(false);
  return !opened ? (
    <button className={className} onClick={() => setOpened(true)}>
      Propose an event!
    </button>
  ) : (
    <Formik
      initialValues={{ title: "my title" }}
      onSubmit={() => {
        console.log("Submitted!");
        setOpened(false);
      }}
      render={props => (
        <form className={className} onSubmit={props.handleSubmit}>
          <input
            type="text"
            onChange={props.handleChange}
            onBlur={props.handleBlur}
            value={props.values.title}
            name="title"
          />
          {props.errors.title && <div id="feedback">{props.errors.title}</div>}
          <button type="submit">Submit</button>
        </form>
      )}
    />
  );
};

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
