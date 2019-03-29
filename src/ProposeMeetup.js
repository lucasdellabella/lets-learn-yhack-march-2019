import React, { useState } from "react";
import { Formik } from "formik";
import Button from "react-bootstrap/Button";
import ProposeMeetupForm from "./ProposeMeetupForm";

const ProposeMeetup = ({ className }) => {
  const [opened, setOpened] = useState(true);
  return (
    <div className={className}>
      {!opened ? (
        <Button type="button" onClick={() => setOpened(true)}>
          Propose an event!
        </Button>
      ) : (
        <Formik
          initialValues={{ title: "" }}
          onSubmit={() => {
            console.log("Submitted!");
            setOpened(false);
          }}
          render={ProposeMeetupForm}
        />
      )}
    </div>
  );
};

export default ProposeMeetup;
