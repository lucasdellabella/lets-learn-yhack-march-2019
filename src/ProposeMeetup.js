import React, { useState } from "react";
import { Formik } from "formik";

import "./ProposeMeetup.css";

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

export default ProposeMeetup;
