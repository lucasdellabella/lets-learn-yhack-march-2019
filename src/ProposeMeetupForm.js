import React, { useState } from "react";
import { Button, Row, Form } from "react-bootstrap";

const ProposeMeetupForm = props => (
  <Form onSubmit={props.handleSubmit}>
    <h3>What do you want to learn about?</h3>
    <Form.Control
      type="text"
      onChange={props.handleChange}
      onBlur={props.handleBlur}
      value={props.values.title}
      name="title"
      placeholder="Title"
    />
    {props.errors.title && <div id="feedback">{props.errors.title}</div>}
    <Form.Control
      type="text"
      onChange={props.handleChange}
      onBlur={props.handleBlur}
      value={props.values.description}
      name="description"
      placeholder="Description"
      as="textarea"
    />
    {props.errors.description && (
      <div id="feedback">{props.errors.description}</div>
    )}
    <RadioButtonGroup
      groupName={"categories"}
      categories={["Product", "Design", "Data Science", "Engineering", "Misc."]}
    />
    <Button type="submit">Submit</Button>
  </Form>
);

const RadioButtonGroup = ({ groupName, categories }) => (
  <Form.Group className="categories" name={groupName}>
    {categories.map(category => (
      <RadioButton category={category} group={groupName} />
    ))}
  </Form.Group>
);

const RadioButton = ({ group, category }) => (
  <Form.Check type={"radio"} label={category} name={group} />
);

export default ProposeMeetupForm;
