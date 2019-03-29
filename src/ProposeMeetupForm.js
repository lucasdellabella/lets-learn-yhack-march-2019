import React from "react";
import { Button, Form } from "react-bootstrap";

const ProposeMeetupForm = props => (
  <form onSubmit={props.handleSubmit}>
    <input
      type="text"
      onChange={props.handleChange}
      onBlur={props.handleBlur}
      value={props.values.title}
      name="title"
      placeholder="Title"
    />
    {props.errors.title && <div id="feedback">{props.errors.title}</div>}
    <input
      type="text"
      onChange={props.handleChange}
      onBlur={props.handleBlur}
      value={props.values.description}
      name="description"
      placeholder="Description"
    />
    {props.errors.description && (
      <div id="feedback">{props.errors.description}</div>
    )}
    <div className="categories">
      {["Product", "Design", "Data Science", "Engineering"].map(category => (
        <RadioButton text={category} />
      ))}
    </div>
    <Button type="submit">Submit</Button>
  </form>
);

const RadioButton = ({ text }) => <Form.Check type={"radio"} label={text} />;

export default ProposeMeetupForm;
