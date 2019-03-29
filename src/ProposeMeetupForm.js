import React from "react";
import { Button, ToggleButtonGroup, Form } from "react-bootstrap";

const ProposeMeetupForm = props => (
  <Form onSubmit={props.handleSubmit}>
    <h3>What do you want to learn about?</h3>
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
    <ToggleButtonGroup className="categories" name="categories">
      {["Product", "Design", "Data Science", "Engineering", "Misc."].map(
        category => (
          <RadioButton category={category} />
        )
      )}
    </ToggleButtonGroup>
    <Button type="submit">Submit</Button>
  </Form>
);

const RadioButton = ({ category }) => (
  <Form.Check type={"radio"} label={category} />
);

export default ProposeMeetupForm;
